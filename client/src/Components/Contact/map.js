import React from 'react'
import './map.css'
const mapURI = require('../../keys').googleMapsURI

const MapComp = () => {
    return(
        <div id="contact-info bg-dark ">
            <div id="map-container" className=" p-5 text-center text-white">
                <div>
                    <h2>
                        Honey and Butter origins
                    </h2>
                    <i id="map-icon" class="fas fa-map-marker-alt fa-5x pt-3 pb-5"></i>

                    {/* <h5 className="pb-3">
                    Sheboygan Falls, WI
                    </h5> */}

                </div>
                <iframe className="rounded" title="Sheb" width="600" height="450" frameBorder="0" style={{border:0}}
                    src={mapURI}
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    )
}

export default MapComp

 