const express = require('express')
const router = express.Router()
const productController = require('../../controllers/products')


router.get('/', productController.findAll)

router.post('/:id', productController.update)

module.exports = router;
