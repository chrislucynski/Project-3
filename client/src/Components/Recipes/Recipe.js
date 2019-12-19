import React  from "react";
import './Recipe.css'

function Recipes (props, index) {
       
    return(

        <div className="card d-inline-flex justify-content-center m-5 text-light bg-dark" style = {{width: 250}}> 
            <img
                src = {props.src}
                id = {props.id}
                alt = {props.alt}
                name = {props.name}
                className = "card-img-top"
                style = {{width:150, height: 150, margin: 'auto', paddingTop: 15}}
                /> 
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">From: {props.source}</p>
                <a href = {props.href} className="btn btn-dark btn-outline-success text-light">View Recipe</a>
            </div>
        </div>

    )
};

export default Recipes;