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
            <div>
                    <img id="recipe-image" src= {image} alt="recipe box"/>
                <div id="recipe-wrapper" className="bg-white text-center">
                    <h2 className="pt-5 pb-1 text-center">
                        Recipes
                    </h2>
                    <i class="fas fa-cookie fa-5x text-center pb-2"></i>
                    <p className="pt-2">
                        Try the featured recipes from Edamam below
                    </p>
                    <div className="justify-content-around">
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