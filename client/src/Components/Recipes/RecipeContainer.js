import React, { Component } from 'react'
import recipesAPI from '../../utils/recipes'
import Recipes from './Recipe'
import ArticlesContainer from '../Articles/ArticlesContainer'
import image from './recipe.jpg'

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
            <div id="recipe-wrapper">
                <img src= {image} alt="recipe box"/>
                <div id="recipe-wrapper" className=" bg-dark">
                    <h2 className="p-5 text-center">
                        Here are some recipes you can try - just sub in some of our delicious butter!
                    </h2>
                    <div >
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

                </div>
                <div>
                    <ArticlesContainer />
                </div>
            </div>
        )
    }

}

export default RecipeContainer