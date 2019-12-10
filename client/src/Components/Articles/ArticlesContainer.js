import React, { Component } from 'react'
// import "./Article.css"
// import recipe from '../../utils/articles'
// import Articles from './Articles'
// import Axios from 'axios';

// class ArticleContainer extends Component {
    // state = {
    //     result: []
    // }

    // router.get("/scrape", function(req, res) {
    //     console.log('got in after then')
    //       axios
    //         .get("https://www.nurse.com/blog/category/nursing-news/")
    //         .then(function(response) {
    //           var $ = cheerio.load(response.data);
      
    //           let articleData = $(".fusion-post-content-wrapper");
    //           articleData.each(function(i, element) {
    //             var result = {};
    //             result.headline = $(this)
    //               .children(".fusion-post-content")
    //               .children("h2")
    //               .text();
    //             result.summary = $(this)
    //               .children(".fusion-post-content")
    //               .children(".fusion-post-content-container")
    //               .children("p")
    //               .text();
    //             result.URL = $(this)
    //               .children(".fusion-post-content")
    //               .children("h2")
    //               .children("a")
    //               .attr("href");
      
                  
    //             db.Articles.create(result)
    //               .then(dbArticle => console.log(dbArticle))
    //               .catch(err => console.log(err));
    //           // res.json({result})
    //           });
    //           // res.redirect("/");
    //         })
    //         .catch(err => res.json(err));
    //     });


    // componentDidMount() {
    //     this.cookieSearch()
    // }

    // cookieSearch = () => {
    //     recipe.search()
    //     .then(res => {
    //         this.setState({ result: res.data.hits})
    //         console.log(this.state.result)
    //         console.log(this.state.result[0])
    //         console.log(this.state.result[0].recipe.image)
    //         console.log(this.state.result[0].recipe.source)
    //         console.log(this.state.result[0].recipe.url)
    //         console.log(this.state.result[0].recipe.label)

    //     })
    //     .catch(err => console.log(err))

    // }

    // render(){
    //     return(
    //         <div className="container">
    //         {this.state.result.map((recipe, index) => (
            
    //             <Articles
    //              src = {recipe.image}
    //              id = {recipe.label}
    //              alt = {recipe.label}
    //              name = {recipe.label}
    //              key = {index}
    //              onClick = {this.clickImage}
    //              href = {recipe.url}
    //             />
    //              ))
    //         }

    //         </div>
    //     )
    // }

// }

// export default ArticleContainer
