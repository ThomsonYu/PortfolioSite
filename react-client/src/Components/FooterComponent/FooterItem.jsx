import React from 'react';

function FooterItem(props){
    return(
        <div className="col">
            <a href={props.link}>
                <img className="footerIcon" src={props.img}>
                </img>
            </a>
        </div>
    )
}

export default FooterItem