import React from 'react'
import './map.css'
import Map from './map'

class MapComp extends Component {
    render(){
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
                    <Map />
                </div>
            </div>
        )
    }
}

export default MapComp