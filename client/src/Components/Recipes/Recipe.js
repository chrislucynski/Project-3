import React  from "react";

function Recipes (props, index) {
       
    return(

        <div className="card d-inline-flex justify-content-center" style = {{width: 250}}> 
            <img
                src = {props.image}
                id = {props.label}
                alt = {props.label}
                name = {props.label}
                className = "card-img-top "
                key = {props.index}
                style = {{width:150, height: 150, marginTop: 10, }}
                onClick= {props.onClick}
                /> 
            <div className="card-body">
                <h5 className="card-title">{props.label}</h5>
                <p className="card-text">From: {props.source}</p>
                <a href={props.url} className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

    )
};

export default Recipes;