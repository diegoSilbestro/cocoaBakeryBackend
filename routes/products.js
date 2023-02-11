const express = require('express');
const router = express.Router();
const productController = require('../controller/productController')
const {check} = require('express-validator')
const {checkIdProducts} = require('../middlewares/checkIdProducts')


/* GET products listing. */
router.get('/', productController.myUser);
router.get('/verProductos', productController.seeProducts)
router.get('/verUnProducto/:id', checkIdProducts, productController.seeOneProduct)

/* POST products listing. */
router.post('/crearProducto', [
    check('name').not().isEmpty().withMessage('Debe ingresar un nombre'),
    check('price').not().isEmpty().withMessage('Debe ingresar un precio').isNumeric().withMessage('El precio debe ser numérico'),
    check('category').not().isEmpty().withMessage('Debe ingresar una categoria'),
    check('description').not().isEmpty().withMessage('Debe ingresar una descripción'),
    check('img').not().isEmpty().withMessage('Debe ingresar una imagen')
], productController.newProduct)

/* PUT products listing. */
router.put('/editarProducto/:id', checkIdProducts, [
    check('name').not().isEmpty().withMessage('Debe ingresar un nombre'),
    check('price').not().isEmpty().withMessage('Debe ingresar un precio').isNumeric().withMessage('El precio debe ser numérico'),
    check('category').not().isEmpty().withMessage('Debe ingresar una categoria'),
    check('description').not().isEmpty().withMessage('Debe ingresar una descripción'),
    check('img').not().isEmpty().withMessage('Debe ingresar una imagen')
],productController.editProduct)

/* DELETE products listing. */
router.delete('/eliminarProducto/:id', checkIdProducts , productController.delProduct)


module.exports = router;
