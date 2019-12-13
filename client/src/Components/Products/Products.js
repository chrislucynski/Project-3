import React from 'react'

const Products = props => {
    
    return(
        <div className="container shadow rounded m-5 p-4">
            
            <h4>
                <strong>Name:</strong> {props.name}
            </h4>
            <h4>
                Description: {props.description}
            </h4>
            <h4>
                Price: ${props.price}.00
            </h4>
        </div>
    )
}

export default Products


