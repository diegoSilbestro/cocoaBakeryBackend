const { Product } = require('../models/products');

const checkIdProducts = async (req, res, next) => {
    try {
        const item = await Product.findById(req.params.id)
        if (item != null) {
            next();
        } else {
            res.status(500).json({ msg: 'El id es invalido' })
        }
    } catch (err) {
        res.status(500).json({ msg: err })
    }
}

module.exports = { checkIdProducts };