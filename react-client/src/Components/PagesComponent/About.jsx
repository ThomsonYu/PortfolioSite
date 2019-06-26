import React from 'react';

function About(){
    return(
        <div id="aboutSection" className="container section">
            <div data-aos="fade-down">
                <h1 className="text-center">About me</h1>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <img className="aboutImg" src={require("../../img/tower.jpg")}></img>
                    </div>
                    <div className="col-sm text-center text-col">
                        <h4>
                            I just recently graduated from the University of Toronto where I studied Computer
                            Computer Science.
                        </h4>
                        <br/>
                        <h4>I love to travel and try new things. I really enjoy food and video games too!</h4>
                        <br/>
                        <h4>
                            I'm always really excited about new technologies. Right now, VR is the thing that
                            interests me the most!
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About