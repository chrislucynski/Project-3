import React from 'react'

const Products = props => {
    
    return(
        <div className="container shadow rounded m-5 p-4">
            
            
            <p className="lead">{props.name}</p>
            
            <p className="lead float-right">{props.description}</p>
            
            <p className="float-right">${props.price}</p>
        </div>
    )
}

export default Products


