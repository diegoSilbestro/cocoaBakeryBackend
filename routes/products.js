const express = require('express');
const router = express.Router();
const productController = require('../controller/productController')

/* GET products listing. */
router.get('/', productController.myUser);
router.get('/verProductos', productController.seeProducts)
router.get('/verUnProducto/:id', productController.seeOneProduct)

/* POST products listing. */
router.post('/crearProducto', productController.newProduct)

/* PUT products listing. */
router.put('/editarProducto/:id', productController.editProduct)

/* DELETE products listing. */
router.delete('/eliminarProducto/:id', productController.delProduct)


module.exports = router;
