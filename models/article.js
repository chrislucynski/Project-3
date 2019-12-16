var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  headline: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema, "Articles");

// Export the Article model
module.exports = Article;


// Dummy Data:
// {
//   "headline": "headline",
//   "hook": "hook",
//   "link": "link",
//   "image": "image"
//   }