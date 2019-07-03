import React from 'react';

function AboutPhoto(props){
    const indicators = []
    const slides = []

    for (let i=1; i < props.length; i++){
        indicators.push(
            <li data-target="#photoCarousel" data-slide-to={i}></li>
        )
        slides.push(
            <div class="carousel-item">
                <img class="d-block w-100" src={require(`../../img/photos/photo${i}.jpg`)}></img>
            </div>
        )
    }

    return(
        <div id="photoCarousel" className="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#photoCarousel" data-slide-to="0" class="active"></li>
                {indicators}
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src={require("../../img/photos/photo0.jpg")}></img>
                </div>
                {slides}
                <a class="carousel-control-prev" href="#photoCarousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#photoCarousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default AboutPhoto;