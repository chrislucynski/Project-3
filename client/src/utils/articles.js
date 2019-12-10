import axios from "axios";
import cheerio from "cheerio";
// const db = require('../../models/index')

export default {
  search: function() {
    return axios
            .get("https://www.nurse.com/blog/category/nursing-news/")
            .then(function(response) {
              var $ = cheerio.load(response.data);
      
              let articleData = $(".fusion-post-content-wrapper");
              articleData.each(function(i, element) {
                var result = {};
                result.headline = $(this)
                  .children(".fusion-post-content")
                  .children("h2")
                  .text();
                result.URL = $(this)
                  .children(".fusion-post-content")
                  .children("h2")
                  .children("a")
                  .attr("href");
      
                  
                // db.Articles.create(result)
                //   .then(dbArticle => console.log(dbArticle))
                //   .catch(err => console.log(err));
              // res.json({result})
              });
              // res.redirect("/");
            })
            .catch(err => {if(err) throw err});
  }
};