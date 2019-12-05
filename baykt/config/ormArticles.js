const connection = require('../config/connection');

//methods to query mysql
const ormArticles = {
  // get all articles
  getAllArticles: function(callback) {
    let queryString = 'SELECT * FROM articles';

    connection.query(queryString, (err, result) => {
      if (err) throw err;

      callback(result);
    });
  },
  

  // add new movie to unwatched, and store data from api
  addArticles: function(headline, link, callback) {
    let queryString = 'INSERT INTO articles SET ?';

    connection.query(
      queryString,
      { 
        headline: headline, 
        link: link
      },
      (err, result) => {
        if (err) throw err;
         
        callback(result);
      }
    );
  },
  

  // delete movie from db
  deleteArticles: function(callback) {
    let queryString = 'DELETE * FROM articles';

    connection.query(queryString, (err, result) => {
      if (err) throw err;

      callback(result);
    });
  }
};

//export to use with models
export default ormArticles;
