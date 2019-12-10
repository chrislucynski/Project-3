const router = require('express').router()
const productController = require('../../controllers/products')


router
    .route('/products')
    .get(productController.findAll)

router
    .route('/products/:id')
    .get(productController.update)


    module.exports = router;
