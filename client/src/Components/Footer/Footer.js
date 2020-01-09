import React from 'react'
import './Footer.css'


const Footer = () => {


    return (
        <div id="footer-wrapper" className="bg-dark ">
            <footer className="app-footer footer mt-auto py-3">
                <ul id="list">
                    <li id="brand-name" className="ml-auto mr-5 " href="/">
                            BAEK-D
                        <i class="far fa-copyright fa-sm pl-5"></i>
                    </li>
                </ul>
            </footer>
        </div>

    )
}


export default Footer