const Articles = require('../models/Article')

module.exports = {
    storeArticles: function(req, res) {
      console.log('finding articles')
      Articles
        .create(req.body)
        .then(dbArticle => console.log(dbArticle))
        .catch(err => console.log(err));
    },

    findStoredArticles: function(req, res) {
      console.log('finding all articles')
      Articles
        .find()
        .then(dbModel => {
            console.log(dbModel)
            res.json(dbModel)})
        .catch(err => res.status(422).json(err));
    }
    
    
  };