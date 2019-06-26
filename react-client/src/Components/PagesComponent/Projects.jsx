import React from 'react';
import ProjectItem from './ProjectItem';

function Project(){
    return(
        <div id="projectSection" className="container section">
            <div data-aos="fade-down" data-aos-duration="1500">
                <h1 className="text-center">Projects</h1>
                <br/>
                <ProjectItem
                    link="https://www.youtube.com/embed/wmJZvNRKulg"
                    title="Kokos"
                    description="A fast paced asymmetrical VR party game in which players compete
                    for the VR throne by collecting feathers while also avoiding hazards."
                />
                <br/>
                <ProjectItem
                    link="https://www.youtube.com/embed/jtCeA99i0js"
                    title="Computer Vision Project: Drumming Transcription"
                    description="A computer vision project where drumming videos are transcribed using
                    computer vision techniques and sound clips"
                />
            </div>
        </div>
    )
}

export default Project