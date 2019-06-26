import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBarItem from './NavBarItem';

$(document).on('click','.nav-link', function(event) {
  event.preventDefault();
  console.log(event.target)
  var target = "#" + this.getAttribute('data-target');
  $('html, body').animate({
      scrollTop: $(target).offset().top-100
  }, 2000);
});

class NavBar extends Component{
  render(){
    return(
      <header>
        <nav className='navbar fixed-top navbar-expand-md bg-dark navbar-dark'>
          {/*Navbar toggle*/}
          <button 
            class="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#collapsibleNavbar" 
            aria-controls="collapsibleNavbar" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <a className='navbar-brand' href='/'>
            <div className='circle navIcon'>T</div>
            Thomson Yu
          </a>
          {/*Navbar buttons*/}
          <div className='collapse navbar-collapse' id='collapsibleNavbar'>
            <ul className='navbar-nav ml-auto' id='navList'>
              <NavBarItem name="Home" link="#" dataTarget="homeSection"/>
              <NavBarItem name="About" link="#" dataTarget="aboutSection"/>
              <NavBarItem name="Projects" link="#" dataTarget="projectSection"/>
              <NavBarItem name="Resume/CV" link="#" dataTarget="resume"/>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default NavBar;