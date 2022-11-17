import React from 'react';
import Logo from '../imgs/logo.jpg';

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" width="80px" />
      <span>
        Made with love and <b>React.js</b>.
      </span>
    </footer>
  );
};

export default Footer;
