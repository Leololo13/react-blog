import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Logo from '../imgs/logo.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" width="80px" />
        </div>
        <div className="links">
          <Link className="link">
            <h6>ART</h6>
          </Link>
          <Link className="link">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="link">
            <h6>CINEMA</h6>
          </Link>
          <Link className="link">
            <h6>DESIGN</h6>
          </Link>
          <Link className="link">
            <h6>FOOD</h6>
          </Link>
          <span>Leo</span>
          <span>Logout</span>
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
      <FontAwesomeIcon icon={faTrash} />
      <FontAwesomeIcon icon={faPenToSquare} />
    </div>
  );
};

export default Navbar;