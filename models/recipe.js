var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var RecipeSchema = new Schema({
   image: {
    type: String,
    required: true
  },
   label: {
    type: String,
    required: true
  },
   source: {
    type: String,
    required: true
  },
   link: {
    type: String,
    required: true
  }

});

var Recipe = mongoose.model("Recipe", RecipeSchema, "Recipes");

module.exports = Recipe;


// Dummy Data:
// <--------------->
// {
//   "label":"label",
//   "image":"image",
//   "source":"source",
//   "link":"link"
//   }