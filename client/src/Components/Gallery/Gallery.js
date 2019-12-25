import React from 'react'
import productImages from '../../images.json'
import './gallery.css'

const Gallery = () => {

    return(

        <div id="gallery-container" className="text-white p-5">
            <h1 className="text-center pb-5">
                Sneak peak into the Baek-d products:
            </h1>

            <div id="carouselExampleControls" class="carousel slide  w-75 m-auto" data-ride="carousel">
                <div class="carousel-inner rounded shadow-lg">
                    <div class="carousel-item active">
                        <img src={productImages[0].path} class="d-block w-100" alt={productImages[0].name} />
                    </div>
                    <div class="carousel-item">
                        <img src={productImages[1].path} class="d-block w-100" alt={productImages[1].name} />
                    </div>
                    <div class="carousel-item">
                        <img src={productImages[2].path} class="d-block w-100" alt={productImages[2].name} />
                    </div>
                    <div class="carousel-item">
                        <img src={productImages[3].path} class="d-block w-100" alt={productImages[3].name} />
                    </div>
                    <div class="carousel-item">
                        <img src={productImages[4].path} class="d-block w-100" alt={productImages[4].name} />
                    </div>
                    <div class="carousel-item">
                        <img src={productImages[5].path} class="d-block w-100" alt={productImages[5].name} />
                    </div>
                    <div class="carousel-item">
                        <img src={productImages[6].path} class="d-block w-100" alt={productImages[6].name} />
                    </div>
                    <div class="carousel-item">
                        <img src={productImages[7].path} class="d-block w-100" alt={productImages[7].name} />
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
        </div>
        
    )
} 

export default Gallery