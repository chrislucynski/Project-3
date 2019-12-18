import React from 'react'
import './map.css'
// const mapKey = require('../../../../config/keys').APIKey

const MapComp = () => {
    return(
        <div id="contact-info bg-dark ">
            <div id="map-container" className=" py-5 text-center text-white">
                <h2>
                    Honey and Butter origins:
                </h2>
                <hr></hr>
                <h5 className="pb-3">
                Sheboygan Falls, WI
                </h5>
                <iframe className="rounded" title="Sheb" width="600" height="450" frameBorder="0" style={{border:0}}
                    src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ48wq3iWgBIgRKW-dYasuXe0&key=AIzaSyAWWg7wvN5lIfhvU7leHmpDNORk5aTM7aY"
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    )
}

export default MapComp


 