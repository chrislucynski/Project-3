import React from 'react'
// import cheerio from 'cheerio'
// import axios from 'axios'



const Articles = () => {

  // const scrapeNews = () => {
        
  //   axios
  //     .get("https://www.bakingbusiness.com/")
  //     .then(function(response) {
  //       var $ = cheerio.load(response.data);

  //       let articleData = $(".latest-news__article");
  //       console.log(articleData)


  //       articleData.each(function(i, element) {
  //         var result = {};
  //         result.headline = $(this)
  //           .children(".latest-news__details-has-image")
  //           .children(".latest-news__headline")
  //           .children("a")
  //           .text();
  //         result.link = $(this)
  //           .children(".latest-news__details-has-image")
  //           .children(".latest-news__headline")
  //           .children("a")
  //           .attr("href");

  //           return(
  //               <div>
  //                   <h1 href={result.link}>
  //                       {result.headline}
  //                   </h1>
  //               </div>
  //           )

        //   db.Article.create(result)
        //     .then(dbArticle => console.log(dbArticle))
        //     .catch(err => console.log(err));
        // });
        // res.redirect("/");
      // })
    // }

    return(
        <div>
            <h2>
              No articles yet.  More to come in the future!
            </h2>
        </div>
    )

}


export default Articles;  