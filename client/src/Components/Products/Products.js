import React from 'react'
import './Products.css'


const Products = props => {
    
    return(
        <div id="product" className="container m-3 p-4 rounded">
            <p id="product-name"><strong>{props.name}</strong></p>
            <p id="product-description" className="text-right">{props.description}</p>
            <p id="price" className="">${props.price}</p>
        </div>
    )
}

export default Products


