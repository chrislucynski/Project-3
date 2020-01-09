import React from 'react'
import './aboutowners.css'
import styling from '../Navbar/Navbar.css'

const AboutOwner = () => {

    return(
        <div  id="ao-container" className="">
            {/* id='wrapper-about-owner' */}
            <div className=" p-5 text-light lead">
                <div className="text-center">
                    <h1 id="logo" className="pb-3 " style = {styling}>
                    BAEK-D
                    </h1>
                    <i class="fas fa-cookie fa-5x pb-3"></i>
                    <hr></hr>
                    <h3 className="pb-4">
                    A family affair
                    </h3>
                </div>
                <div id="ao-content" className="row">
                    <div className="col pr-5">
                        <div className="text-center">
                            <i class="fas fa-user-secret fa-5x"></i>
                        </div>
                        
                        <hr></hr>
                        <h4>
                            <strong>Chris Lucynski, Co-Owner </strong>
                        </h4>
                        <p>
                            Registered Nurse at the Huntsman Mental Health Institute, formally known as UNI. 
                        </p>
                        <br></br>
                        <h4>
                            <strong>Rachel Lucynski, Co-Owner </strong>
                        </h4>
                        <p>
                            Business operations manager for the Huntsman Mental Health Institute. Oversees the 
                            SafeUT app, Mobile Crisis Outreach Team (MCOT), Utah's state-wide suicide warmline and hotline.
                        </p>
                    </div>
                    <div className="col pl-5">
                        {/* <h2 className="">
                            The Crew
                        </h2> */}
                        <div className="text-center">
                        <i className="fas fa-users fa-5x"></i>

                        </div>
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