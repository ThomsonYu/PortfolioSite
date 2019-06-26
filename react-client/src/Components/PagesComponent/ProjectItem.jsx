import React from 'react';

function ProjectItem(props){
    return(
        <div data-aos="fade-right">
            <div className="row">
                <div className="col-sm embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src={props.link} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="col-sm text-center text-col">
                    <h2>{props.title}</h2>
                    <br/>
                    <h4>{props.description}</h4>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem