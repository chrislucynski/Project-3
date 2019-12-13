import React, { Component} from 'react'
import productAPI from '../../utils/products'
import Products from '../Products/Products'

class ProductContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            products: []
        }
    }

    componentDidMount(){
        this.loadProducts();
        // console.log(this.state.products)
    }

    loadProducts = () => {
        console.log('loading products')
        productAPI.getProducts()
        .then(res => {
            console.log(res.data)
            this.setState({ products: res.data})
        })
        .catch(err => console.log(err))
    }

    render() {
        // console.log(products)
        console.log(this.products)
        console.log(this.state.products[1])
        return(
            <div>
                <div className = "container shadow rounded m-5 p-4">
                    <h1>
                        You've come to the right place...  
                    </h1>
                    <h3>
                        Below, you will find all of our edible products
                    </h3>
                </div>
                {this.state.products.map(product => (
                    <Products 
                    name = {product.name}
                    description = {product.description}
                    price = {product.price}
                    />
                    ))
                }
            </div>
        )
    }
}

export default ProductContainer
