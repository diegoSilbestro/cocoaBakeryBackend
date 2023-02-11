const { Cart } = require('../models/cart');
const { validationResult } = require('express-validator');

const cartController = {

    newItem: async (req, res) => {
        try {
            const err = validationResult(req);
            if (err.isEmpty()) {
                const item = new Cart(req.body);
                await item.save();
                res.status(200).json({msg: "el producto fue guardado exitosamente ", item});
            } else {
                res.status(501).json({msg: "Error: ",err})
            }
        } catch (error) {
            res.status(501).json({
                msg: 'No se pudo guardar el producto en la DB',
                error
            })
        }
    },
    seeItems: async (req, res) => {
        const items = await Cart.find()
        res.json({ items })
    },
    editItem: async (req, res) => {
        try {
            const err = validationResult(req);
            if (err.isEmpty()) {
                await Cart.findByIdAndUpdate(req.params.id, req.body)
                res.status(200).json({ msg: 'Se actualizo el item' })
            } else {
                res.status(501).json({ err })
            }
        } catch (err) {
            res.status(501).json({ err })
        }

    },
    delItem: async (req, res) => {
        const item = await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json({ msg: 'el item ha sido eliminado', item })
    },
    delAll: async (req, res) => {
        await Cart.deleteMany();
        res.status(200).json({ msg: 'Se han eliminado todos los items del carrito' })
    }
}

module.exports = cartController;