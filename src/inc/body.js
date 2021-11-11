import React from 'react'
import lasi from './img/lasi.png';


export default function Slider() {
    return (
        <div>
         
         <div class="container-fluid">
            <div id="carouselExample" class="carousel slide" data-ride="carousel" data-interval="9000">
                <div class="carousel-inner row w-100 mx-auto" role="listbox">
                    <div class="carousel-item col-md-4 active">
                        <img class="" src="" alt="slide 1" />
                    </div>
                    <div class="carousel-item col-md-4">
                        <img class="img-fluid mx-auto d-block" src="./img/lasi.png" alt="slide 2" />
                    </div>
                    <div class="carousel-item col-md-4">
                        <img class="img-fluid mx-auto d-block" src="./img/lasi.png" alt="slide 3" />
                    </div>
                    <div class="carousel-item col-md-4">
                        <img class="img-fluid mx-auto d-block" src="./img/lasi.png" alt="slide 4" />
                    </div>
                    <div class="carousel-item col-md-4">
                        <img class="img-fluid mx-auto d-block" src="./img/lasi.png" alt="slide 5" />
                    </div>
                    <div class="carousel-item col-md-4">
                        <img class="img-fluid mx-auto d-block" src="./img/lasi.png" alt="slide 6" />
                    </div>
                    <div class="carousel-item col-md-4">
                        <img class="img-fluid mx-auto d-block" src="./img/lasi.png" alt="slide 7" />
                    </div>
                    <div class="carousel-item col-md-4">
                        <img class="img-fluid mx-auto d-block" src="./img/lasi.png" alt="slide 7" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                    <i class="fa fa-chevron-left fa-lg text-muted"></i>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next text-faded" href="#carouselExample" role="button" data-slide="next">
                    <i class="fa fa-chevron-right fa-lg text-muted"></i>
                    <span class="sr-only">Next</span>
                </a>
            </div>
</div>
        </div>
    )
}