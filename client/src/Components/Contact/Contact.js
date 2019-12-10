import React from 'react'
import contact from './contact.png'
import './Contact.css'

const Contact = () => {
    return(
        <div>
            <div className="shadow m-auto w-100">
                <img id="contact" src={contact} alt="contact"/>
            </div>
            <div className="container m-5 p-4 shadow rounded text-center">
                <h1>
                    Local Contact Info:
                </h1>
                <hr></hr>
                <h3>
                    Phone Number:
                </h3>
                <h3>
                    Address:
                </h3>
                <h3>
                    Email Address:
                </h3>
            </div>
            <div className="container m-5 p-4 shadow rounded text-center">
                <h2>
                    Honey and Butter origins:
                </h2>
                <hr></hr>
                <p>
                Sheboygan Falls, WI
                </p>
                <iframe className="rounded" title="Sheb" width="600" height="450" frameBorder="0" style={{border:0}}
                    src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ48wq3iWgBIgRKW-dYasuXe0&key=AIzaSyAWWg7wvN5lIfhvU7leHmpDNORk5aTM7aY" 
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    )

}

export default Contact