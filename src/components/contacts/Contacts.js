import React from "react";
import img1 from "../../images/cont1.jpg";
import img2 from "../../images/cont2.jpg";
import { GrFacebook, GrInstagram, GrTwitter, GrMail } from "react-icons/gr";
import { FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <div>
      <div className="contacts">
        <div className="cont-img">
          <img src={img1} alt="phone" />
        </div>
        <form action="" id="my-form">
          <div className="form-controling">
            <label htmlFor="name-forma">Name and surname</label>
            <input
              type="text"
              placeholder="Name and surname"
              id="name-forma"
              className="dark-font"
            />
          </div>
          <div className="form-controling">
            <label htmlFor="email-forma">Email</label>
            <input
              type="email"
              placeholder="Email"
              id="email-forma"
              className="dark-font"
            />
          </div>
          <div className="form-controling">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
              className="dark-font"
            ></textarea>
          </div>
          <button type="submit" className="btn bckg-light" id="submit">
            Submit
          </button>
        </form>
        <div className="cont-img">
          <img src={img2} alt="email" />
        </div>
      </div>
      <div className="icons-contact">
        <span>
          <Link to={{ pathname: "https://facebook.com" }} target="_blank">
            <GrFacebook size={30} style={{ fill: "white" }} />
          </Link>
        </span>
        <span>
          <Link to={{ pathname: "https://instagram.com" }} target="_blank">
            <GrInstagram size={30} style={{ fill: "white" }} />
          </Link>
        </span>
        <span>
          <Link to={{ pathname: "https://twitter.com" }} target="_blank">
            <GrTwitter size={30} style={{ fill: "white" }} />
          </Link>
        </span>
        <span>
          <Link to={{ pathname: "https://gmail.com" }} target="_blank">
            <GrMail size={30} style={{ fill: "white" }} />
          </Link>
        </span>
        <span>
          <Link to={{ pathname: "https://discord.com" }} target="_blank">
            <FaDiscord size={30} style={{ fill: "white" }} />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Contacts;
