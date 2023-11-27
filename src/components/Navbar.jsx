import React from "react";
import "./navbar.css";
// import letterV from "../assets/letter-v.png";
import { Link } from "react-scroll";
import contactMe from "../assets/chat-3-line.png";
import vIcon from "../assets/v-empty-icon.png";

function Navbar() {
  return (
    <nav className="navbar">
      {/* <img src={letterV} alt="logo" className="logo" /> */}
      <div className="v-container">
        {/* <span className="letter-v">V.</span>{" "} */}
        <img src={vIcon} alt="letter-v" className="v-icon" />
        {/* <span className="letter-v">Simon</span>{" "} */}
      </div>
      <div className="desktop-menu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktom-menu-list-item"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktom-menu-list-item"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="customers"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktom-menu-list-item"
        >
          Customers
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktom-menu-list-item"
        >
          Portfolio
        </Link>
      </div>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        <button className="desktop-menu-btn">
          <img src={contactMe} alt="text" />
          <span className="contact-me">Contact Me</span>
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;
