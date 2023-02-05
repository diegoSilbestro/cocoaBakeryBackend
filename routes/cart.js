const express = require('express');
const router = express.Router();
const cartController = require('../controller/cartController')

/* GET carts items listing. */
router.get('/verItems', cartController.seeItems);

/* POST carts items listing. */
router.post('/crearItem', cartController.newItem);

/* PUT carts items listing. */
router.put('/editarItem/:id', cartController.editItem);

/* DELETE carts items listing. */
router.delete('/eliminarItem/:id', cartController.delItem);
router.delete('/eliminarTodos', cartController.delAll);

module.exports = router;