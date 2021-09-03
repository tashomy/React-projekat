import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="nav-bar">
      <div className="logo-header">
        <img src={logo} alt="logo" className="logo" />
        <span className="logo-heading">
          <Link to="/">gameland</Link>
        </span>
      </div>
      <div className="nav">
        <ul>
          <li className="nav-item">
            <Link to="/">
              <span className="a">Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about">
              <span className="a">About</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/features">
              <span className="a">Features</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery">
              <span className="a">Gallery</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/pricing">
              <span className="a">Pricing</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/faq">
              <span className="a">FAQ</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog">
              <span className="a">Blog</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contacts">
              <span className="a">Contacts</span>
            </Link>
          </li>
        </ul>
      </div>
      <Button
        variant="primary"
        onClick={handleShow}
        className="btn btn-primary"
      >
        Sign up
      </Button>

      <Modal show={show} onHide={handleClose} className="modal">
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">Log in or sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-content">
          <form>
            <div className="form-controling">
              <label for="name">Username or email</label>
              <input
                type="text"
                placeholder="Username or email"
                id="name"
                className="dark-font"
              />
            </div>
            <div className="form-controling">
              <label for="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                className="dark-font"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button
            variant="secondary"
            onClick={handleClose}
            className="btn btn-primary"
          >
            Log In
          </Button>
          <Button
            variant="primary"
            onClick={handleClose}
            className="btn btn-primary"
          >
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Navbar;
