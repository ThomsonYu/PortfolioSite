import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBarItem from './NavBarItem';

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
              <NavBarItem name="Home" link="/"/>
              <NavBarItem name="About" link="/"/>
              <NavBarItem name="Projects" link="/"/>
              <NavBarItem name="Resume/CV" link="/"/>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default NavBar;