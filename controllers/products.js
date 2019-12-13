const Products = require('../models/Product')

module.exports = {
    findAll: function(req, res) {
      console.log('finding all products')
      Products
        .find()
        .then(dbModel => {
            res.json(dbModel)})
        .catch(err => res.status(422).json(err));
    },

    update: function(req, res) {
      console.log(`finding product with id: ${req.params.id}`)
      Products
        .updateOne({ _id: req.params.id }, req.body)
        .then(dbModel => {
          res.json(dbModel)})
        .catch(err => res.status(422).json(err));
    }
    
  };