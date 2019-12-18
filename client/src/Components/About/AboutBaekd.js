import React from 'react'
import images from "../../images.json"
import './aboutbaekd.css'

const AboutBaekd = () => {


    return(
        <div id="about-baekd" className="p-5 bg-dark lead text-light">
            <h1 className="text-center pb-5">
                Humble Beginnings
            </h1>
            <div className="row">
                <div className="col-8">
                    <img className="rounded shadow w-100" src={images[1].path} alt="Grama"/>
                </div>
                <div id="ab-summary" className="col">
                    <p>
                        The journey started in Walla Walla, Washington, where 
                        Grama Linda shared her love for baking with her granddaughter, Rachel. 
                    </p>
                    <p>
                        Together, they would bake sugar cookies for Valentine's Day, 
                        cookie bars for Christmas, and pies for every occasion.
                    </p>
                    <p>
                        It was something everyone in the family looked forward to each year, and now we are 
                        passing that joyous feeling on to you.
                    </p>
                </div>
            </div>
        </div>
    )
} 

export default AboutBaekd