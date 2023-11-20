import React from "react";
import "./navbar.css";
import letterV from "../assets/letter-v.png";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={letterV} alt="logo" className="logo" />
      <div className="desktop-menu">
        <Link classID="desktom-menu-list-item">Home</Link>
        <Link classID="desktom-menu-list-item">About</Link>
        <Link classID="desktom-menu-list-item">Customers</Link>
        <Link classID="desktom-menu-list-item">Portfolio</Link>
      </div>
      <button className="desktop-menu-btn">
        <img src="" alt="" className="desktop-menu-img" />
        Contact Me
      </button>
    </nav>
  );
}

export default Navbar;
