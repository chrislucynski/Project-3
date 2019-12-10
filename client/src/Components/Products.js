import React, { Component} from 'react'
import productAPI from '../utils/products'

class Products extends Component {

    state = {
        products: []
    }

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = () => {
        console.log('loading products')
        productAPI.getProducts()
        .then(res => {
            console.log(res.data)
            this.setState({ products: res.data})})
        .catch(err => console.log(err))
    }

    render() {
        return(
            <div>
                <h1>
                    Products here:  {this.state.products[0]}
                </h1>
               
            </div>
        )
    }
}

export default Products




// const Products = () => {


//     return(
//         <div className="m-5 p-5 text-center">
//             <h1>
//                 The menu is on its way!  Waiting to connect to  the database. 
//             </h1>
//             <p>
//                 Until then, we suggest you go to the gallery, and checkout some of our products there.
//             </p>
//         </div>
//     )
// }

// export default Products