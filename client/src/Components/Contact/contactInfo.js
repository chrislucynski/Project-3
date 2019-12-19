import React from 'react'
import './contactInfo.css'
// const mapKey = require('../../../../config/keys').APIKey

const ContactInfo = () => {
    return(
        <div id="contact-info" className="bg-dark">
            <div className="bg-dark p-4">
                <h1 className="text-center">
                    Local Contact Info:
                </h1>
                <hr></hr>
                <div className="row px-3 py-3">
                    <h3 className=" text-left">
                        Phone Number: 
                    </h3>
                    <h5 className="ml-auto align-self-center">
                        (555) 867-5309
                    </h5>
                </div>
                <div className="row px-3 py-3">
                    <h3>
                        Address: 
                    </h3>
                    <h5 className="ml-auto align-self-center">
                        555 Oh Yeah Lane SLC, UT 84117
                    </h5>
                       
                </div>
                <div className="row px-3 py-3">
                    <h3>
                        Email Address: 
                    </h3>
                    <h5 className="ml-auto align-self-center">
                    baekd@email.com
                    </h5>
                </div>
            </div>
        </div>
    )

}

export default ContactInfo