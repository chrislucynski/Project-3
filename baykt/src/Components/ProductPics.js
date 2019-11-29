import React from 'react'


const ProductPics = () => {

    return(
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../../public/images/cookie_Heath.jpeg" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..." />
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
            </a>
        </div>
    )
} 

export default ProductPics

// Usage
    // Via data attributes
    // Use data attributes to easily control the position of the carousel. data-slide accepts the keywords prev or next, which alters the slide position relative to its current position. Alternatively, use data-slide-to to pass a raw slide index to the carousel data-slide-to="2", which shifts the slide position to a particular index beginning with 0.

    // The data-ride="carousel" attribute is used to mark a carousel as animating starting at page load. If you don’t use data-ride="carousel" to initialize your carousel, you have to initialize it yourself. It cannot be used in combination with (redundant and unnecessary) explicit JavaScript initialization of the same carousel.

// Via JavaScript
// Call carousel manually with:

// Copy
// $('.carousel').carousel()
// Options
// Options can be passed via data attributes or JavaScript. For data attributes, append the option name to data-, as in data-interval="".