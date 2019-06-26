import React, { Component } from 'react';
import HomePageIcon from './HomePageIcon';

class HomePage extends Component{
  render(){
    return (
      <div className="container text-center">
        <img
          src="https://media.licdn.com/dms/image/C5603AQHhq5eTOMb2pA/profile-displayphoto-shrink_200_200/0?e=1567036800&v=beta&t=e4xnso320NksmW46IQMEuTOxY9WPlEsIrCp175ff-KQ"
          className="profileIcon"
        >
        </img>
        <h1>A Brief Introduction</h1>
        <p>My name is Thomson Yu. I am a software developer and tester from Toronto.</p>
        <p>Please take a look around my website to view my portfolio.</p>
        <p>This website is fully responsive and was built with the following tools:</p>

        <HomePageIcon name="react" img={require("../../img/react.png")}/>
        <HomePageIcon name="react" img={require("../../img/nodejs.png")}/>
        <HomePageIcon name="react" img={require("../../img/css.png")}/>
        <HomePageIcon name="react" img={require("../../img/bootstrap.png")}/>
        <HomePageIcon name="react" img={require("../../img/heroku.png")}/>
      </div>
    )
  }
}

export default HomePage;