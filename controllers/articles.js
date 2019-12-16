const Articles = require('../models/Article')
const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
    storeArticles: function(req, res) {
      console.log('about to scrape for articles')
      axios
      .get("https://www.bakingbusiness.com/topics/1227-news")
      .then(function(res) {
            
        var $ = cheerio.load(res.data);
        let articleData = $("article");

        articleData.each(function(i, element) {
          
          let result = {}

          result.headline = $(this)
          .children("div")
          .children("h1")
          .children("a")
          .text();
          result.link = $(this)
          .children("figure")
          .children("a")
          .attr("href");
          result.image = $(this)
          .children("figure")
          .children("a")
          .children("img")
          .attr("src");

          console.log(result)  
          console.log('storing results in the database')  


          // store articles in the database
          Articles.create(result)
            .then(dbArticle => console.log(dbArticle))
            .catch(err => console.log(err));
        });
      })
    },

    deleteStoredArticles:function(req, res) {
      console.log('deleting old stored articles')
      Articles
        .deleteMany({ edibile: true })
        .then(dbModel => {
            console.log(dbModel)
            res.json(dbModel)})
// Then redirect to a different route?? like res.redirect("/store")?

        .catch(err => res.status(422).json(err));
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