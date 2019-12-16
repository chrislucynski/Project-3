import React, { Component } from 'react'
import "./Article.css"
import articlesAPI from '../../utils/articles'
import Articles from './Articles'

class ArticleContainer extends Component {
    state = {
        articles: []
    }


    componentDidMount() {
        this.loadArticles()
    }

    loadArticles = () => {
        articlesAPI.getArticles()
        .then(res => {
            this.setState({articles: res.data})
        })
    }

    render(){
        return(
            <div className="container text-center mt-5 lead">
                <h1>
                    Wanting to stay up-to-date with baking news? 
                </h1>
                <h3>
                Check out the articles below from bakingbusiness.com!
                </h3>
                <Articles />
                    {/* {this.state.result.map((article, index) => (
            
                <Articles
                 src = {article.image}
                 id = {index}
                 key = {index}
                 headline = {article.headline}
                 href = {article.link}
                />
                 ))
                    } */}

            </div>
        )
    }

}

export default ArticleContainer
