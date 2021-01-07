import React from 'react';
import logo from './../../images/footerLogo.png';
import './footer.css';

const Footer = () => {

  return (
    <React.Fragment>
      <div className="footer-container">
        <img src={logo} className="image" alt="logo" />
      </div>
    </React.Fragment>
  );
};

export default Footer;