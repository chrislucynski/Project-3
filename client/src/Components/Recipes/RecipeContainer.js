import React, { Component } from 'react'
import "./Recipes.css"
import recipe from '../../utils/recipes'
import Recipes from './Recipe'
// import Axios from 'axios';

class RecipeContainer extends Component {
    state = {
        result: []
    }

    componentDidMount() {
        this.cookieSearch()
    }

    cookieSearch = () => {
        recipe.search()
        .then(res => {
            this.setState({ result: res.data.hits})
            console.log(this.state.result)
            console.log(this.state.result[0])
            console.log(this.state.result[0].recipe.image)
            console.log(this.state.result[0].recipe.source)
            console.log(this.state.result[0].recipe.url)
            console.log(this.state.result[0].recipe.label)
        })
        .catch(err => console.log(err))

    }

    render(){
        return(
            <div className="container">
            {this.state.result.map((recipe, index) => (
                <Recipes
                 src = {this.image}
                 id = {recipe.label}
                 alt = {recipe.label}
                 name = {recipe.label}
                 key = {index}
                 onClick = {this.clickImage}
                 href = {recipe.link}
                />
                 ))
            }

            </div>
        )
    }

}

export default RecipeContainer






// const Recipes = () => {

//     cookieSearch
//     Axios.get('https://api.edamam.com/search?q=cookies&app_id=31e044be&app_key=d6ebdc1885479c059c6cf874379dd687&from=0&to=3&calories=591-722&health=alcohol-free')

//     return(
//         <div>
//             <h1 className="m-5 p-5 text-center">
//                 Recipes coming soon! Setting up the API and get/post routes.
//             </h1>
//         </div>
//     )
// }

// export default Recipes
