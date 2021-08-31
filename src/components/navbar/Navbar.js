import React from 'react';
import logo from '../../images/logo.png';
import {Link} from 'react-router-dom';

const Navbar = () => {

    return (
        <div className="nav-bar">
          <div className="logo-header">
            <img src={logo} alt="logo" className="logo"/>
            <span className="logo-heading"><a href="#">gameland</a></span>
          </div>
          <div className="nav">
            <ul>
              <li as={Link} to="/" className="nav-item"><span className="a">Home</span></li>
              <li as={Link} to="/about" className="nav-item"><span className="a">About</span></li>
              <li as={Link} to="/features" className="nav-item"><span className="a">Features</span></li>
              <li as={Link} to="/gallery" className="nav-item"><span className="a">Gallery</span></li>
              <li as={Link} to="/pricing" className="nav-item"><span className="a">Pricing</span></li>
              <li as={Link} to="/faq" className="nav-item"><span className="a">FAQ</span></li>
              <li as={Link} to="/blog" className="nav-item"><span className="a">Blog</span></li>
              <li as={Link} to="/contacts" className="nav-item"><span className="a">Contacts</span></li>
            </ul>
          </div>
          <a href="#" className="btn btn-primary" id="sign-btn">SIGN UP</a>
  
        </div>
    )
}

export default Navbar;