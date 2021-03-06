import React  from "react";
import './Recipe.css'

function Recipes (props, index) {
       
    return(

        <div className="card d-inline-flex justify-content-center m-5 text-light recipe-card shadow" style = {{width: 250}}> 
            <img
                src = {props.src}
                id = {props.id}
                alt = {props.alt}
                name = {props.name}
                className = "card-img-top recipe-image rounded shadow"
                style = {{width:150, height: 150, margin: 'auto', paddingTop: 15}}
                /> 
            <div className="card-body">
                <h5 id="recipe-title" className="card-title">{props.name}</h5>
                <p className="card-text"><strong id="from">From:</strong> {props.source}</p>
                <a id="view-recipe" href = {props.href} className="btn">View Recipe</a>
            </div>
        </div>

    )
};

export default Recipes;