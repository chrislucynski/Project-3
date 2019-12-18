import React from 'react'
import contact from './contact.png'
import ContactInfo from './contactInfo'
import Map from './map'
import './ContactContainer.css'

const ContactContainer = () => {
    return(
        <div id="contact">
            <div className="shadow m-auto w-100">
                <img id="contact-image" src={contact} alt="contact"/>
            </div>
            <ContactInfo />
            <Map />
        </div>
    )

}

export default ContactContainer