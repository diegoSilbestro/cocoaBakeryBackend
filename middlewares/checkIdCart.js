const { Cart } = require('../models/cart');

const checkIdCart = async (req, res, next) => {
    try {
        const item = await Cart.findById(req.params.id)
        if (item != null) {
            next();
        } else {
            res.status(500).json({ msg: 'El id es invalido' })
        }
    } catch (err) {
        res.status(500).json({ msg: err })
    }
}

module.exports = { checkIdCart };