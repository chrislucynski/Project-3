const express = require('express')
const router = express.Router()
const recipeController = require('../../controllers/recipes')

router
    .delete("/delete", recipeController.deleteStoredRecipes)
    .post("/store", recipeController.storeRecipes)
    .get("/", recipeController.findStoredRecipes);

module.exports = router