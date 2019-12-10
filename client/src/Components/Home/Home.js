import React from 'react'
import AboutBaekd from '../About/AboutBaekd'
// import ArticlesContainer from '../Articles/ArticlesContainer'
import images from '../../images.json'
import './Home.css'

const Home = () => {

    return(
        <div className="wrapper-home-content">
            <div className="">
                <img id="header-image" src={images[0].path} alt="baked goods" />
            </div>
        <AboutBaekd />
        {/* <ArticlesContainer /> */}
        </div>
    )

}

export default Home