import React from 'react';

function About(){
    return(
        <div id="aboutSection" className="container">
            <div data-aos="fade-down">
                <h1 className="text-center">About me</h1>
                <div className="row">
                    <div className="col-sm">
                        <img className="aboutImg" src={require("../../img/tower.jpg")}></img>
                    </div>
                    <div className="col-sm text-center">
                        <br/>
                        <h4>I love to travel and try new things. I really enjoy food and video games too!</h4>
                        <br/>
                        <h4>I studied Computer Science at UofT</h4>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default About