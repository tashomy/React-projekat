import React from 'react';
import logo from '../../images/logo.png';
import {Link} from 'react-router-dom';

const Navbar = () => {



    return (
        <div className="nav-bar top">
          <div className="logo-header">
            <img src={logo} alt="logo" className="logo"/>
            <span className="logo-heading"><a href="#">gameland</a></span>
          </div>
          <div className="nav">
            <ul>
              <li className="nav-item" as={Link} to="/"><span className="a">Home</span></li>
              <li className="nav-item" as={Link} to="/about"><span className="a">About</span></li>
              <li className="nav-item" as={Link} to="/features"><span className="a">Features</span></li>
              <li className="nav-item" as={Link} to="/gallery"><span className="a">Gallery</span></li>
              <li className="nav-item" as={Link} to="/pricing"><span className="a">Pricing</span></li>
              <li className="nav-item" as={Link} to="/faq"><span className="a">FAQ</span></li>
              <li className="nav-item" as={Link} to="/blog"><span className="a">Blog</span></li>
              <li className="nav-item" as={Link} to="/contacts"><span className="a">Contacts</span></li>
            </ul>
          </div>
          <a href="#" className="btn btn-primary" id="sign-btn">SIGN UP</a>
  
        </div>
    )
}

export default Navbar;