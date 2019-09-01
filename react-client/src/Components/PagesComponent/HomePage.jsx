import React, { Component } from 'react';
import HomePageIcon from './HomePageIcon';
import About from './About';
import Project from './Projects';
import Resume from './Resume';

$(document).on('click','.techBtn', function(event) {
  event.preventDefault();
  var target = "#" + this.getAttribute('data-target');
  $('html, body').animate({
      scrollTop: $(target).offset().top-100
  }, 2000);
});

class HomePage extends Component{
  render(){
    return (
      <div id="homeSection">
        <div className="container text-center">
          <img
            src={require("../../img/profilePic.jpg)")}
            className="profileIcon"
          >
          </img>
          <h1>A Brief Introduction</h1>
          <h5>My name is Thomson Yu. I am a software developer and tester from Toronto.</h5>
          <h5>Please take a look around my website to view my portfolio.</h5>
          <h5>This website is fully responsive and was built with the following tools:</h5>

          <HomePageIcon name="react" img={require("../../img/react.png")}/>
          <HomePageIcon name="react" img={require("../../img/nodejs.png")}/>
          <HomePageIcon name="react" img={require("../../img/css.png")}/>
          <HomePageIcon name="react" img={require("../../img/bootstrap.png")}/>
          <HomePageIcon name="react" img={require("../../img/heroku.png")}/>

          <h3>Scroll down to learn more about me!</h3>
          <a className="techBtn" href="#" data-target="aboutSection">
            <img className="techIcon" src={require("../../img/chevron.png")}></img>
          </a>
        </div>

        <About />
        <Project />
        <Resume />

      </div>
    )
  }
}

export default HomePage;