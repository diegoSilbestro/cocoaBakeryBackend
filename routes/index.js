const express = require('express');
const router = express.Router();
const controllers = require('../controller/productController')

/* GET home page. */
router.get('/', controllers.myIndex);

module.exports = router;
