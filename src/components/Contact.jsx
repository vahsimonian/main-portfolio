import React from "react";
import "./contact.css";
import facebookLogo from "../assets/Facebook-Logo.png";
import adobeLogo from "../assets/Adobe-logo.png";
import microsoftLogo from "../assets/microsoft-logo.png";
import walmartLogo from "../assets/walmart-logo.png";

function Contact() {
  return (
    <section id="contact-page">
      <div id="customers">
        <h1 className="customer-title">My Customers</h1>
        <p className="customer-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          sapiente facilis eveniet, itaque rerum maxime deleniti! Similique nemo
          ratione minus!
        </p>
        <div className="customer-img-container">
          <img src={facebookLogo} alt="facebook" className="customer-img" />
          <img src={adobeLogo} alt="adobe" className="customer-img" />
          <img
            src={microsoftLogo}
            alt="microsoft"
            className="customer-img microsoft"
          />
          <img src={walmartLogo} alt="walmart" className="customer-img" />
        </div>
      </div>
      <div className="contact">
        <input type="text" />
        <input type="email" />
        <input type="text" />
      </div>
    </section>
  );
}

export default Contact;
