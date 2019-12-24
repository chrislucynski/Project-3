import React from 'react'
import { useAuth0 } from "../../react-auth0-spa";
import styling from './Navbar.css'


const Navbar = () => {

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-5">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link btn-lg" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link btn-lg" href="/menu">Menu</a>
                        </li>
                        <li className="nav-item">
                                <a className="nav-link btn-lg" href="/gallery">Gallery</a>
                        </li>
                        <li className="nav-item">
                                <a className="nav-link btn-lg" href="/recipes">Recipes</a>
                        </li>
                        <li className="nav-item">
                                <a className="nav-link btn-lg" href="/contact">Contact</a>
                        </li>
                    </ul>
                    <h1 id="brand-name" className="navbar-brand ml-auto mr-5" style = {styling} href="/">BAEK-D</h1>
                    {!isAuthenticated && (
                    //  <button id="login-btn" class="waves-effect waves-light btn-large ml-auto mr-3" onClick={() => loginWithRedirect({})}>Log In</button>
                     <button id="login-btn" className="btn btn-dark btn-outline-success btn-lg text-light  ml-auto mr-5" onClick={() => loginWithRedirect({})}>Log in</button>
                    )}
                    {isAuthenticated && <button className="btn btn-dark btn-outline-success btn-lg text-light  ml-auto mr-5" onClick={() => logout()}>Log out</button>}
                </div>
            </nav> 
        </div>
    )
}


export default Navbar