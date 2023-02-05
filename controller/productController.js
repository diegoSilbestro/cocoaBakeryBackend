const { Product } = require('../models/products')

const productController = {
    myIndex(req, res) {
        res.render('index', { title: 'Express' });
    },
    myUser(req, res) {
        res.json({
            name: "Diego"
        })
    },
    newProduct: async (req, res) => {
        try {
            const product = new Product(req.body);
            await product.save();
            res.status(200).json(product);
        } catch (err) {
            res.status(501).json({
                msg: 'No se pudo guardar el producto en la DB',
                err,
            })
        }
    },
    seeProducts: async (req, res) => {
        const products = await Product.find();
        res.json({ products })
    },
    seeOneProduct: async (req, res) => {
        const product = await Product.findById(req.params.id);
        res.status(200).json({ product });
    },
    editProduct: async (req, res) => {
        try {
            await Product.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({ msg: 'Se actualizo el producto' })
        } catch (err) {
            res.status(501).json({ err })
        }
    },
    delProduct: async (req, res) => {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({msg:"El siguiente producto fue eliminado", product})
    }

}

module.exports = productController;