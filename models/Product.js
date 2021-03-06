var mongoose = require("mongoose");


var Schema = mongoose.Schema;

var ProductSchema = new Schema({
   name: {
    type: String,
    required: true
  },
   edible: {
    type: Boolean,
    required: true
 },
   description: {
    type: String,
    required: true
  },
   price: {
    type: Number,
    required: true
  }

});

var Product = mongoose.model("Product", ProductSchema, "Products");

module.exports = Product;