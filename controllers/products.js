const db = require('../models/products')

module.exports = {
    findAll: function(req, res) {
      console.log('finding all')
      db.Products
        .find({})
        .then(dbModel => {
            console.log(dbModel)
            res.json(dbModel)})
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
      db.Products
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
    
  };