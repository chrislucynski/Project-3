var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ProductSchema = new Schema({
   product_name: {
    type: String,
    required: true
  },
   product_description: {
    type: String,
    required: true
  },
   edible: {
    type: Boolean,
    required: true
  },
  price: {
      type: Number,
      required: true
  }

});

var Product = mongoose.model("Product", ProductSchema, "Products");

module.exports = Product;