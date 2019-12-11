const Products = require('../models/Products')

module.exports = {
    findAll: function(req, res) {
      console.log('finding all')
      console.log(Products)
      Products
        .find()
        .then(dbModel => {
            console.log(dbModel)
            res.json(dbModel)})
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
      Products
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
    
  };