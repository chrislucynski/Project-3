import React from 'react'
import { useAuth0 } from "../react-auth0-spa";

const Navbar = () => {

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/menu">Menu</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href=" " id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                More
                            </a>
                            <div className="dropdown-menu " aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="/gallery">Gallery</a>
                                <a className="dropdown-item" href="/recipes">Recipes</a>
                                <a className="dropdown-item" href="/contact">Contact</a>
                            </div>
                        </li>
                    </ul>
                    {!isAuthenticated && (
                        <button className="btn btn-dark btn-outline-success text-light mr-5" onClick={() => loginWithRedirect({})}>Log in</button>
                    )}
                    {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
                    <a className="navbar-brand ml-auto" href="/">BAEK-D</a>
                </div>
            </nav> 
        </div>
    )
}


export default Navbar