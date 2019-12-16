import React from 'react'

const Products = props => {
    
    return(
        <div className="container shadow rounded m-5 p-4">
            
            <h4>
                <strong>Name:</strong> 
            </h4>
            <p className="lead">{props.name}</p>
            <h4>
                <strong>Description:</strong> 
            </h4>
            <p className="lead">{props.description}</p>
            <h4>
                <strong>Price:</strong> 
            </h4>
            <p>${props.price}</p>
        </div>
    )
}

export default Products


