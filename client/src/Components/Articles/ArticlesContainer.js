import React, { Component } from 'react'
// import "./Article.css"
// import articles from '../../utils/articles'
import Articles from './Articles'

class ArticleContainer extends Component {
    // state = {
    //     result: []
    // }


    // componentDidMount() {
    //     this.cookieSearch()
    // }

    render(){
        return(
            <div className="container">
                <Articles />
            {/* {this.state.result.map((recipe, index) => (
            
                <Articles
                 src = {recipe.image}
                 id = {recipe.label}
                 alt = {recipe.label}
                 name = {recipe.label}
                 key = {index}
                 onClick = {this.clickImage}
                 href = {recipe.url}
                />
                 ))
            } */}

            </div>
        )
    }

}

export default ArticleContainer
