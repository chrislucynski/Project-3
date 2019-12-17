import React, { Component } from 'react'
import "./Recipes.css"
import recipesAPI from '../../utils/recipes'
import Recipes from './Recipe'

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
            console.log(res)
            this.setState({ result: res.data})
           
        })
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div className="">
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

            </div>
        )
    }

}

export default RecipeContainer