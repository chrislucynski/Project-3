const orm = require('../config/ormArticles');
    
// used in conjuntion with orm to update information stored in db

const articles = {
    get: function(callback) {
        orm.getAllArticles('articles', articles => callback(articles));
    },

    add: function(headline, URL, callback) {
        orm.addArticles('articles', headline, URL, article => callback(article));
    },

    delete: function(id, callback) {
        orm.deleteArticles('articles', id, article => callback(article));
    }
};

module.exports = articles;
