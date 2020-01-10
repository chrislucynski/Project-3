import React from 'react'
import './Products.css'


const Products = props => {
    
    return(
        <div id="product" className=" m-3 p-4 bg-dark shadow rounded">
            <img className="pb-4 rounded" src={props.path} alt={props.name}/>
            <p id="product-name"><strong>{props.name}</strong></p>
            <p id="product-description" className="text-left">{props.description}</p>
            <p id="price" className="">${props.price}</p>
        </div>
    )
}

export default Products


