const Recipes = require('../models/Recipe')
const axios = require('axios');


module.exports = {

  gatherRecipes: async function(req, res) {
    console.log('about to scrape for recipes')
    return axios
    .get("https://api.edamam.com/search?q=cookies&app_id=31e044be&app_key=d6ebdc1885479c059c6cf874379dd687&from=0&to=3&calories=591-722&health=alcohol-free")
    .then(function(res) {

      let recipeData = res.data.hits

      return recipeData
      })

    }
  }  


 
    
