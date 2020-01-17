import React from 'react'
import { useAuth0 } from "../../react-auth0-spa";
import styling from './Navbar.css'


const Navbar = () => {

    // on hover, change from words to icons
    // $('.hoverable').onMouseOver()


    // var thingToDoOnHover = () => { console.log('I am hovering!'); };

    // var hoverInterval = null;
    // var onMouseOver = () => {
    //   hoverInterval = setInterval(thingToDoOnHover, 100);
    // };
    
    // var onMouseOut = () => { clearInterval(hoverInterval); };



    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-white p-4">
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarNavDropdown" 
                    aria-controls="navbarNavDropdown" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <h1 id="brand-name" className="navbar-brand ml-auto mr-5" style = {styling} href="/">BAEK-D</h1>

                {!isAuthenticated && (
                //  <button id="login-btn" class="waves-effect waves-light btn-large ml-auto mr-3" onClick={() => loginWithRedirect({})}>Log In</button>
                    <button 
                        id="login-btn" 
                        className="btn btn-dark btn-lg text-light ml-auto mr-5" 
                        onClick={() => loginWithRedirect({})}>Log in
                    </button>
                )}
                {isAuthenticated && 
                    <button 
                        id="logout-btn" 
                        className="btn btn-dark btn-lg text-light ml-auto mr-5" 
                        onClick={() => logout()}>Log out
                    </button>}
                
                <div className="collapse navbar-collapse " id="navbarNavDropdown">
                    <ul className="navbar-nav links  ml-auto">
                        <li className="nav-item">
                            <a id="home-link" className="nav-link btn-lg links" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a id="menu-link" className="nav-link btn-lg links" href="/menu">Menu</a>
                        </li>
                        <li className="nav-item">
                            <a id="gallery-link" className="nav-link btn-lg links" href="/gallery">Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a id="recipes-link" className="nav-link btn-lg links" href="/recipes">Recipes</a>
                        </li>
                        <li className="nav-item">
                            <a id="contact-link" className="nav-link btn-lg links" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav> 
        </div>
    )
}


export default Navbar