import React from "react";
import "./contact.css";
import facebookLogo from "../assets/Facebook-Logo.png";
import adobeLogo from "../assets/Adobe-logo.png";
import microsoftLogo from "../assets/microsoft-logo.png";
import walmartLogo from "../assets/walmart-logo.png";
import facebookIcon from "../assets/facebook-line.png";
import youtubeIcon from "../assets/youtube-line.png";
import twitterIcon from "../assets/twitter-x-line.png";
import instagramIcon from "../assets/instagram-line.png";

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
      <div id="contact">
        <h1 className="contact-title">Contact</h1>
        <span className="contact-desc">
          Fill out the form bellow to discuss my work opportunities
        </span>
        <form className="contact-forms">
          <input type="text" className="name" placeholder="Your Name" />
          <input type="email" className="email" placeholder="Your Email" />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="msg"
          ></textarea>
          <button className="submit-btn" type="submit" value={"Send"}>
            Submit
          </button>
          <div className="link-container">
            <img src={facebookIcon} alt="" className="link" />
            <img src={youtubeIcon} alt="" className="link" />
            <img src={twitterIcon} alt="" className="link" />
            <img src={instagramIcon} alt="" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
