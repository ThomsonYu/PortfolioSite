import React, { Component } from 'react';

class NavBarItem extends Component{
    render(){
        return(
            <li className="nav-item btn">
                <a className="nav-link" href={this.props.link}>{this.props.name}</a>
            </li>
        )
    }
}

export default NavBarItem;