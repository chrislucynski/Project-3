import React, { Component} from 'react'
import productAPI from '../../utils/products'
import Products from '../Products/Products'
import images from '../../images.json'
import './ProductContainer.css'


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
        // console.log('loading products')
        productAPI.getProducts()
        .then(res => {
            // console.log(res.data)
            this.setState({ products: res.data})
        })
        .catch(err => console.log(err))
    }

    render() {
        return(
            <div id="menu-wrapper" className = "text-white p-5">
                <img src={images[4].path} alt={images[4].name} />

                <h1 id="menu" className="text-center p-5">
                    Menu  
                </h1>
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
