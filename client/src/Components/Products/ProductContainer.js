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
            <div>
                <img src={images[4].path} alt={images[4].name} />
                <div id="menu-wrapper" className = "text-white text-center p-5">
                    <h1 id="menu" className="p-5">
                        Menu  
                    </h1>
                    <i class="fas fa-book-open pb-5 fa-5x"></i>
                    <div className="d-inline-flex justify-inbetween flex-wrap">
                        {images.map(image => (
                            <Products 
                            path = {image.path}
                            name = {image.name}
                            description = {image.description}
                            price = {image.price}
                            />
                            ))
                        }
                    </div>
                    {/* <div className="d-inline-flex flex-wrap">
                        {this.state.products.map(product => (
                            <Products 
                            name = {product.name}
                            description = {product.description}
                            price = {product.price}
                            />
                            ))
                        }
                    </div> */}
                </div>
            </div>
        )
    }
}

export default ProductContainer
