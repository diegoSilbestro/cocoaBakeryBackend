const express = require('express');
const router = express.Router();
const cartController = require('../controller/cartController');
const {checkIdCart} = require('../middlewares/checkIdCart');
const {check} = require('express-validator');

/* GET carts items listing. */
router.get('/verItems', cartController.seeItems);

/* POST carts items listing. */
router.post('/crearItem', [
    check('name').not().isEmpty().withMessage('Debe ingresar un nombre'),
    check('price').not().isEmpty().withMessage('Debe ingresar un precio').isNumeric().withMessage('El precio debe ser numérico'),
    check('category').not().isEmpty().withMessage('Debe ingresar una categoria'),
    check('description').not().isEmpty().withMessage('Debe ingresar una descripción'),
    check('img').not().isEmpty().withMessage('Debe ingresar una imagen'),
    check('cantidad').not().isEmpty().withMessage('Debe ingresar una cantidad').isNumeric().withMessage('La cantidad debe ser numérica')
] ,cartController.newItem);

/* PUT carts items listing. */
router.put('/editarItem/:id', checkIdCart, [
    check('name').not().isEmpty().withMessage('Debe ingresar un nombre'),
    check('price').not().isEmpty().withMessage('Debe ingresar un precio').isNumeric().withMessage('El precio debe ser numérico'),
    check('category').not().isEmpty().withMessage('Debe ingresar una categoria'),
    check('description').not().isEmpty().withMessage('Debe ingresar una descripción'),
    check('img').not().isEmpty().withMessage('Debe ingresar una imagen'),
    check('cantidad').not().isEmpty().withMessage('Debe ingresar una cantidad').isNumeric().withMessage('La cantidad debe ser numérica')
] , cartController.editItem);

/* DELETE carts items listing. */
router.delete('/eliminarItem/:id', checkIdCart , cartController.delItem);
router.delete('/eliminarTodos', cartController.delAll);

module.exports = router;