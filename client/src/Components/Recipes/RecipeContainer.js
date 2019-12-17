import React, { Component } from 'react'
import "./Recipes.css"
import recipesAPI from '../../utils/recipes'
import Recipes from './Recipe'
import Articles from '../Articles/ArticlesContainer'

class RecipeContainer extends Component {
    state = {
        result: []
    }

    componentDidMount() {
        this.cookieSearch()
    }

    cookieSearch = () => {
        recipesAPI.displayRecipes()
        .then(res => {
            this.setState({ result: res.data})
           
        })
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div className="">
                <img src="" alt="recipe box"/>

                <h1 className="p-5">
                    Here are some recipes you can try - just sub in some of our delicious butter!
                </h1>
            {this.state.result.length && this.state.result.map((item, index) => (
                <Recipes
                 src = {item.recipe.image}
                 id = {item.recipe.label}
                 alt = {item.recipe.label}
                 name = {item.recipe.label}
                 key = {index}
                 href = {item.recipe.url}
                 source = {item.recipe.source}
                />
                 ))
            }
            <div className="m-5 container rounded">
            <Articles />
            </div>

            </div>
        )
    }

}

export default RecipeContainer