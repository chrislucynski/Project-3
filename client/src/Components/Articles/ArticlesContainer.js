import React, { Component } from 'react'
import "./Article.css"
import articlesAPI from '../../utils/articles'
import Articles from './Articles'
import cheerio from 'cheerio'

class ArticleContainer extends Component {
    state = {
        articles: []
    }

    componentDidMount() {
        this.loadArticles()
    }

    loadArticles = () => {
        console.log('about to display articles')
        articlesAPI.getArticles()
        .then(res => {

            let articleData = []
            
            var $ = cheerio.load(res.data);
        
            let articleTagData = $("article");
            // console.log(articleTagData)
            // console.log('article response: ' + res)
            articleTagData.each(function(i, element) {
          
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
      
                console.log('gathering article info results in the database')  
                console.log(result)  

                articleData.push(result)
                
            })
            console.log('article data: ' + articleData[0].headline)
            this.setState({articles: articleData})
            console.log(this.state.articles)
        })
    }

    render(){
        return(
            <div id="article-wrapper" className=" text-center text-white pt-5">
                <h2>
                    Wanting to stay up-to-date with baking news? 
                </h2>
                <h6>
                Check out the articles below from bakingbusiness.com!
                </h6>
                <div className=" overflow-auto">
                    <div className="d-inline-flex">
                        {this.state.articles.map((article, index) => (
                    
                            <Articles
                                image = {article.image}
                                id = {index}
                                key = {index}
                                headline = {article.headline}
                                link = {article.link}
                            />
                        ))
                        }
                    </div>
                

                </div>

            </div>
        )
    }

}

export default ArticleContainer
