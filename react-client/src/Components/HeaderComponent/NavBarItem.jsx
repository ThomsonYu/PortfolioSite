import React, { Component } from 'react';

function NavBarItem(props){
    return (
        <li className="nav-item btn">
            <a className="nav-link" href={props.link}>{props.name}</a>
        </li>
    )
}

export default NavBarItem;