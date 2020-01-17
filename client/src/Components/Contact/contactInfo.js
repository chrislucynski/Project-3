import React from 'react'
import './contactInfo.css'
// const mapKey = require('../../../../config/keys').APIKey

const ContactInfo = () => {
    return(
        <div id="contact-info" className="bg-white">
            <div className="p-4">
                <h1 className="text-center">
                    Local Contact Info:
                </h1>
                <hr></hr>
                <div className="row px-5 py-3">
                    <i class="fas fa-phone fa-5x"></i>
                    <h5 className="ml-auto align-self-center">
                        (555) 867-5309
                    </h5>
                </div>
                <div className="row px-5 py-3">
                    <i className="far fa-address-book fa-5x"></i>
                    <h5 className="ml-auto align-self-center">
                        555 Oh Yeah Lane SLC, UT 84117
                    </h5>
                </div>
                <div className="row px-5 py-3">
                    <i class="far fa-envelope fa-5x"></i>
                    <h5 className="ml-auto align-self-center">
                    baekd@email.com
                    </h5>
                </div>
            </div>
        </div>
    )

}

export default ContactInfo