import React from 'react'

const AboutOwner = () => {

    return(
        <div id='wrapper-about-owner'>
            <div className="container shadow p-5 mt-5 lead">
                <h1 className="text-center pb-4">
                    About the Owners
                </h1>
                <hr></hr>
                <h3 className="pb-4 pt-3 text-center">
                    Baek-d is a family affair.
                </h3>
                <div className="row">
                    <div className="col">
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
                    <div className="col">
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