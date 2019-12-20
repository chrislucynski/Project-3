const express = require('express')
const router = express.Router()
const recipeController = require('../../controllers/recipes')

router
    .get("/", async function(req, res){
        const response = await recipeController.gatherRecipes();
        res.json(response);
        
    });

module.exports = router