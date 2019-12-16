const Recipes = require('../models/Recipe')
const axios = require('axios');


module.exports = {

  gatherRecipes:function(req, res) {
    console.log('about to scrape for recipes')
    axios
    .get("https://api.edamam.com/search?q=cookies&app_id=31e044be&app_key=d6ebdc1885479c059c6cf874379dd687&from=0&to=3&calories=591-722&health=alcohol-free")
  },  


  storeRecipes: function(req, res) {
    gatherRecipes()
    .then(function(res) {
      console.log('these are your recipes: ' + res)
      console.log(res.data.hits)
      console.log(res.data.hits[0])
          
      // console.log(this.state.result[0].recipe.image)
      // console.log(this.state.result[0].recipe.source)
      // console.log(this.state.result[0].recipe.link)
      // console.log(this.state.result[0].recipe.label)

      // recipeData.each(function(i, element) {
      //   let result = {}
      //   console.log(result)  

      //   console.log('storing results in the database')  

        // store recipes in the database
      //   Recipes.create(result)
      //     .then(dbRecipe => console.log(dbRecipe))
      //     .catch(err => console.log(err));
      });
  },

    deleteStoredRecipes:function(req, res) {
      console.log('deleting old stored recipes')
      Recipes
    //   Does this need to take in parameters for it to delete recipes from the database?
        .deleteMany({})
        .then(dbModel => {
            console.log(dbModel)
            res.json(dbModel)})
        .catch(err => res.status(422).json(err));
    },

    findStoredRecipes: function(req, res) {
      console.log('finding all recipes')
      Recipes
        .find()
        .then(dbModel => {
            console.log('found these recipes: ' +dbModel)
            res.json(dbModel)})
        .catch(err => res.status(422).json(err));
    }
    
  };