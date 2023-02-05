const { Cart } = require('../models/cart');

const cartController = {

    newItem: async (req, res) => {
        try {
            const item = new Cart(req.body);
            await item.save();
            res.status(200).json(item);
        } catch (err) {
            res.status(501).json({
                msg: 'No se pudo guardar el producto en la DB',
                err,
            })
        }
    },
    seeItems: async (req, res) => {
        const items = await Cart.find()
        res.json({ items })
    },
    editItem: async (req, res) => {
        try {
            await Cart.findByIdAndUpdate(req.params.id, req.body)
            res.status(200).json({ msg: 'Se actualizo el item' })
        } catch (error) {
            res.status(501).jsos({ err })
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