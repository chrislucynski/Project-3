const Articles = require('../models/Article')
const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
    scrapeArticles: async function(req, res) {
      console.log('about to scrape for articles')
      return axios
      .get("https://www.bakingbusiness.com/topics/1227-news")
      .then(function(res) {
            
        return res.data
        // var $ = cheerio.load(res.data);
        
        // let articleData = $("article");
        // console.log(articleData)

        // articleData.each(function(i, element) {
          
        //   let result = {}

        //   result.headline = $(this)
        //   .children("div")
        //   .children("h1")
        //   .children("a")
        //   .text();
        //   result.link = $(this)
        //   .children("figure")
        //   .children("a")
        //   .attr("href");
        //   result.image = $(this)
        //   .children("figure")
        //   .children("a")
        //   .children("img")
        //   .attr("src");

        //   console.log(result)  
        //   console.log('storing results in the database')  

      })
    }

    
    
  };