import React from 'react';

function ProjectItem(props){
    return(
        <div className="row">
            <div
                className="col-sm embed-responsive embed-responsive-16by9"
                data-aos="fade-right" 
                data-aos-duration="1500"
                data-aos-anchor-placement="top-center"
            >
                <iframe class="embed-responsive-item" src={props.link} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div
                className="col-sm text-center text-col"
                data-aos="fade-left"
                data-aos-duration="1500"
                data-aos-anchor-placement="top-center"
            >
                <h2>{props.title}</h2>
                <br/>
                <h4>{props.description}</h4>
            </div>
        </div>
    )
}

export default ProjectItem