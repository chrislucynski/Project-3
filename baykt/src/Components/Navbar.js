import React from 'react'

const Navbar = () => {


    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                    <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/about">About</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/menu">Menu</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href=" " id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown link
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="/gallery">Gallery</a>
                        <a class="dropdown-item" href="/recipe">Recipes</a>
                        <a class="dropdown-item" href="/contact">Contact</a>
                    </div>
                    </li>
                </ul>
                <button type="button" class="btn btn-dark btn-outline-success" href='/login'>Sign in as Admin</button>
                <a class="navbar-brand ml-auto" href="/">BAEK-D</a>
                </div>
            </nav> 
        </div>
    )
}


export default Navbar