import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <header>
        <nav className='navbar navbar-expand-md bg-dark navbar-dark'>
          {/*Navbar toggle*/}
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-controls="collapsibleNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a className='navbar-brand' href='#'>
            <div className='circle icon'>T</div>
            Thomson Yu
          </a>
          {/*Navbar buttons*/}
          <div className='collapse navbar-collapse' id='collapsibleNavbar'>
            <ul className='navbar-nav ml-auto' id='navList'>
            <li className="nav-item btn">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item btn">
              <a className="nav-link" href="/">About</a>
            </li>
            <li className="nav-item btn">
              <a className="nav-link" href="/">Projects</a>
            </li>
            <li className="nav-item btn">
              <a className="nav-link" href="/">Resume/CV</a>
            </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default NavBar;