import React from "react";
import "./navbar.css";
import letterV from "../assets/letter-v.png";
import { Link } from "react-scroll";
import contactMe from "../assets/chat-3-line.png";

function Navbar() {
  return (
    <nav className="navbar">
      {/* <img src={letterV} alt="logo" className="logo" /> */}
      <div className="v-container">
        <span className="letter-v">V.</span>{" "}
      </div>
      <div className="desktop-menu">
        <Link className="desktom-menu-list-item">Home</Link>
        <Link className="desktom-menu-list-item">About</Link>
        <Link className="desktom-menu-list-item">Customers</Link>
        <Link className="desktom-menu-list-item">Portfolio</Link>
      </div>
      <div className="contact-me-btn">
        <button className="desktop-menu-btn">
          <img src={contactMe} alt="text" />
          <span>Contact Me</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
