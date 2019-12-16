import React from 'react'


const Articles = props => {

    return(
        <div className="container shadow rounded m-5 p-4">
            <a href = {props.link}>
                <img src = {props.image} alt = 'news articles'/>
            </a>
            <h4>
                <strong>Headline: {props.headline}</strong> 
            </h4>
        </div>
    )

}


export default Articles;  