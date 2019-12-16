import axios from "axios";

export default {
  // Gets all products from the database
  getProducts: function(req, res) {
    // console.log('getting products')
    return axios
      .get("/api/products")
  },
  // Saves a Product to the database
  saveProduct: function(productData) {
    return axios
      .post("/api/products", productData);
  }
};