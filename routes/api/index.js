const router = require('express').Router();
const productRoutes = require('./products')
const articleRoutes = require('./articles')
const recipeRoutes = require('./recipes')

router.use('/products', productRoutes)
router.use('/articles', articleRoutes)
router.use('/recipes', recipeRoutes)


module.exports = router;