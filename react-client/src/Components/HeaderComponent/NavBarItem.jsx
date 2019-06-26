import React from 'react';

function NavBarItem(props){
    return(
        <li className="nav-item btn">
            <a className="nav-link" href={props.link} data-target={props.dataTarget}>{props.name}</a>
        </li>
    )
}

export default NavBarItem;