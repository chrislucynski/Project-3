import axios from "axios";

export default {
  // Gets all books
  getProducts: function(req, res) {
    console.log('getting products')
    return axios
      .get("/api/products")
      // .then(dbModel => {
        // console.log('getProducts logging res: ' + dbModel)
        // res.json(dbModel);
      // })
  },
  // Saves a Product to the database
  saveProduct: function(productData) {
    return axios.post("/api/products", productData);
  }
};