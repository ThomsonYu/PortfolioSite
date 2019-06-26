import React, { Component }from 'react';
import FooterItem from './FooterItem';

class Footer extends Component{
  render(){
    return(
      <footer className="footer container-fluid">
        <div className="row footerRow">
          <FooterItem 
            name="github" 
            link="https://github.com/ThomsonYu" 
            img={require("../../img/github.png")}
          />
          <FooterItem 
            name="linkedIn" 
            link="https://www.linkedin.com/in/thomsonyu/" 
            img={require("../../img/linkedin.png")}
          />
          <FooterItem 
            name="linkedIn" 
            link="https://www.youtube.com/channel/UCFwKGPcertzVHcdpjCBbk5w" 
            img={require("../../img/youtube.png")}
          />
          <FooterItem 
            name="mail" 
            link="mailto:thomson.yu@mail.utoronto.ca" 
            img={require("../../img/email.png")}
          />
        </div>
      </footer>
    )
  }
}

export default Footer;