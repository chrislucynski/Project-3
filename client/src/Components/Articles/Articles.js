import React from 'react'


const Articles = props => {

    return(
        <div className="article-container bg-dark m-3 p-4">
            <a href = {props.link}>
                <img src = {props.image} alt = 'news articles'/>
            </a>
            {/* <h4 > */}
                <p className="p-3">{props.headline}</p>
            {/* </h4> */}
        </div>
    )

}


export default Articles;  