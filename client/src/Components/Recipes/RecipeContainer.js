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
        recipesAPI.getStoredRecipes()
        .then(res => {
            this.setState({ result: res.data.hits})
           
        })
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div className="">
                <Recipes />
            {/* {this.state.result.map((recipe, index) => (
                <Recipes
                 src = {this.image}
                 id = {recipe.label}
                 alt = {recipe.label}
                 name = {recipe.label}
                 key = {index}
                 href = {recipe.link}
                />
                 ))
            } */}

            </div>
        )
    }

}

export default RecipeContainer