import React from 'react'
import AboutBaekd from '../About/AboutBaekd'
import images from '../../images.json'
import AboutOwner from '../About/AboutOwner'
import './Home.css'

const Home = () => {

    return(
        <div className="wrapper-home-content">
            <div className="">
                <img id="header-image" src={images[0].path} alt="baked goods" />
            </div>
        <AboutBaekd />
        <AboutOwner />
        </div>
    )

}

export default Home