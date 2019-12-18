import React from 'react'


const Products = props => {
    
    return(
        <div id="product" className="m-3 p-4">
            
            <p id="product-name"><strong>{props.name}</strong></p>
            
            <p id="product-description" className="text-right">{props.description}</p>
            
            <p id="price" className="">${props.price}</p>
        </div>
    )
}

export default Products


