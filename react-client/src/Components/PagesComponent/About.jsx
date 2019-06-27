import React from 'react';
import AboutPhoto from './AboutPhoto';

function About(){
    const photos = require.context("../../img/photos", false, /.*\.jpg$/).keys();

    return(
        <div id="aboutSection" className="container section">
            <div data-aos="fade-down" data-aos-duration="1500" data-aos-anchor-placement="top-center">
                <h1 className="text-center">About me</h1>
                <br/>
            </div>
            <div className="row">
                <div 
                    className="col-sm" 
                    data-aos="fade-right" 
                    data-aos-duration="1500"
                    data-aos-anchor-placement="top-center"
                >
                   <AboutPhoto length={photos.length}/>
                </div>
                <div
                    className="col-sm text-center text-col" 
                    data-aos="fade-left" 
                    data-aos-duration="1500"
                    data-aos-anchor-placement="top-center"
                >
                    <h4>
                        I just recently graduated from the University of Toronto where I studied Computer
                        Computer Science.
                    </h4>
                    <br/>
                    <h4>
                        I love to travel, take cool photos, and play video games.
                        My favorite place in the world is Japan!
                    </h4>
                    <br/>
                    <h4>
                        I'm always really excited about new technologies. Right now, VR is the thing that
                        interests me the most!
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default About