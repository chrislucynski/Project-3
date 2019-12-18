import React from 'react'
import './aboutowners.css'
import styling from '../Navbar/Navbar.css'

const AboutOwner = () => {

    return(
        <div  id="ao-container" className="">
            {/* id='wrapper-about-owner' */}
            <div className=" p-5 text-light lead">
                <h1 id="logo" className="text-center pb-3 text-white" style = {styling}>
                BAEK-D
                </h1>
                <hr></hr>
                <h3 className="text-center pb-4">
                A family affair.
                </h3>
               
                <div id="ao-content" className="row">
                    <div className="col pr-5">
                        <h2 className="text-center">
                            Owners
                        </h2>
                        <hr></hr>
                        <h4>
                            Chris Lucynski, Co-Owner 
                        </h4>
                        <p>
                            Chris works at UNI as a Registered Nurse. 
                        </p>
                        <br></br>
                        <h4>
                            Rachel Lucynski, Co-Owner
                        </h4>
                        <p>
                            Rachel works at UNI as the business operations manager for the 
                            state-wide suicide hotline, warm-line, SafeUT app, and the Mobile Crisis Outreach Team (MCOT).
                        </p>
                    </div>
                    <div className="col pl-5">
                        <h2 className="text-center">
                            The Crew
                        </h2>
                        <hr></hr>
                        <h4>
                            The Lucynski's 
                        </h4>
                        <p className="text-right">Mom, Dad, and Brother</p>
                        <h4>
                            The Seachris'
                        </h4>
                        <p className="text-right">Mom, Dad, and Brother</p>
                        <h4>
                            Grandma Linda 
                        </h4>
                        <p className="text-right">the Recipe mastermind</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
} 

export default AboutOwner