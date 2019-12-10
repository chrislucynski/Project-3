import axios from "axios";

export default {
  // Gets all books
  getProducts: function() {
    console.log('getting products')
    return axios.get("/api/products").then(console.log('on the other side'));
  },
  // Saves a Product to the database
  saveProduct: function(productData) {
    return axios.post("/api/products", productData);
  }
};