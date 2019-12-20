const Recipes = require('../models/Recipe')
const axios = require('axios');
const edamam = require('../config/keys').edamamAPI

module.exports = {

  gatherRecipes: async function(req, res) {
    console.log('about to scrape for recipes')
    return axios
    .get(edamam)
    .then(function(res) {

      let recipeData = res.data.hits

      return recipeData
      })

    }
  }  


 
    
