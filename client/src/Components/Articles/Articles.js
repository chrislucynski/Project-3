import React from 'react'


const Articles = props => {

    return(
        <div className="article-container rounded bg-dark m-4 p-4">
            <a href = {props.link}>
                <img className="rounded article-images" src = {props.image} alt = 'news articles'/>
            </a>
            {/* <h4 > */}
                <p className="p-3">{props.headline}</p>
            {/* </h4> */}
        </div>
    )

}


export default Articles;  