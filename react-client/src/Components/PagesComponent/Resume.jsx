import React from 'react';

function Resume(){
    return(
        <div id="resumeSection" className="container section">
            <div data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="top-center">
                <h1 className="text-center">Let's Connect!</h1>
                <br/>
                <div className="row">
                    <div className="col-sm text-center text-col">
                        <h4>
                            I'm always eager to engage in new and exciting projects and if you'd like to build
                            something together, get in touch by sending me an email or a message on LinkedIn!
                        </h4>
                        <br/>
                        <h4>Click the button below to view my résumé!</h4>
                        <form id="resumeBtn">
                            <a href="/resume" class="btn btn-lg btn-primary" target="_blank">Résumé</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume