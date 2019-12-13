import react from 'react'
// import axios from 'axios';
// import cheerio from 'cheerio';

export default {
  search: function(req, res) {
    
        
    console.log('about to scrape ')
    // axios
    //     .get("https://www.bakingbusiness.com/topics/1227-news")
    //     .then(function(response) {
    //         console.log(response.data[0])
    //         var $ = cheerio.load(response.data);
    //         let articleData = $("article");
    //         console.log(articleData)
            // articleData.each(function(i, element) {
            //     var result = {};
            //     result.headline = $(this)
            //         .children(".fusion-post-content")
            //         .children("h2")
            //         .text();
            //     result.summary = $(this)
            //         .children(".fusion-post-content")
            //         .children(".fusion-post-content-container")
            //         .children("p")
            //         .text();
            //     result.URL = $(this)
            //         .children(".fusion-post-content")
            //         .children("h2")
            //         .children("a")
            //         .attr("href");

                    
            
                // res.json({result})
            // });
            // res.redirect("/");
        }
        // .catch(err => res.json(err));
};

