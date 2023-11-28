import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import contactMe from "../assets/chat-3-line.png";
import vIcon from "../assets/v-empty-icon.png";
// import hamburgerMenu from "../assets/menu-line.png";
import hamburgerIcon from "../assets/hamburger-icon.png";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="v-container">
        <img src={vIcon} alt="letter-v" className="v-icon" id="v-icon" />
      </div>
      <div className="desktop-menu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-50}
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
          offset={-50}
          duration={500}
          className="desktom-menu-list-item"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktom-menu-list-item"
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="customers"
          spy={true}
          smooth={true}
          duration={500}
          className="desktom-menu-list-item"
        >
          Customers
        </Link>
      </div>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
      >
        <button className="desktop-menu-btn">
          <img src={contactMe} alt="text" />
          <span className="contact-me">Contact Me</span>
        </button>
      </Link>
      {/* second link rpw */}
      {/* <img
        src={hamburgerMenu}
        alt="burger-menu"
        className="mob-menu"
        id="mob-menu"
        onClick={() => setShowMenu(!showMenu)}
      /> */}
      <img
        src={hamburgerIcon}
        alt="burger-icon"
        className="hamburger-icon"
        id="hamburger-icon"
        width={80}
        onClick={() => setShowMenu(!showMenu)}
      />
      <div
        className="nav-menu"
        id="nav-menu"
        style={{ display: showMenu ? "flex" : "none" }}
      >
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="list-item"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="list-item"
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="list-item"
          onClick={() => setShowMenu(false)}
        >
          Portfolio
        </Link>{" "}
        <Link
          activeClass="active"
          to="customers"
          spy={true}
          smooth={true}
          duration={500}
          className="list-item"
          onClick={() => setShowMenu(false)}
        >
          Customers
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="list-item"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
