const Recipes = require('../models/Recipe')
const axios = require('axios');


module.exports = {

  gatherRecipes: async function(req, res) {
    console.log('about to scrape for recipes')
    return axios
    .get("https://api.edamam.com/search?q=cookies&app_id=31e044be&app_key=d6ebdc1885479c059c6cf874379dd687&from=0&to=3&calories=591-722&health=alcohol-free")
    .then(function(res) {
      // console.log('these are your recipes: ' + res)
      // console.log(res.data.hits)

      let recipeData = res.data.hits

      return recipeData
      // console.log(recipeData)
      // let recipeArray = []

      // recipeData.map((i, element) => {
        

        // let result = {}

        // result.headline = $(this)
        // .children("div")
        // .children("h1")
        // .children("a")
        // .text();
        // result.link = $(this)
        // .children("figure")
        // .children("a")
        // .attr("href");
        // result.image = $(this)
        // .children("figure")
        // .children("a")
        // .children("img")
        // .attr("src");
      })

      // console.log("URI: " + res.data.hits[0].recipe.uri)
      // console.log("image: " + res.data.hits[0].recipe.image)
      // console.log("label: " + res.data.hits[0].recipe.label)
      // console.log("source: " + res.data.hits[0].recipe.source)
      // console.log("url: " + res.data.hits[0].recipe.url)
    }
  }  

  

    // findStoredRecipes: function(req, res) {
    //   console.log('finding all recipes')
    //   Recipes
    //     .find()
    //     .then(dbModel => {
    //         console.log('found these recipes: ' +dbModel)
    //         res.json(dbModel)})
    //     .catch(err => res.status(422).json(err));
    // }
    
