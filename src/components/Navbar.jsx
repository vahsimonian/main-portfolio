import React from "react";
import "./navbar.css";
import letterV from "../assets/letter-v.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={letterV} width={70} alt="logo" className="logo" />
      <div className="desktop-menu">Menu</div>
      <button className="desktop-menu-btn">
        <img src="" alt="" className="desktop-menu-img" />
        Contact Me
      </button>
    </nav>
  );
}

export default Navbar;
