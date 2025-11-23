const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');

router.get('/', controller.listProducts);
router.get('/:id', controller.getProductById);

module.exports = router;
