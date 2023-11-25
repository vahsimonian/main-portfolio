import React from "react";
import "./works.css";
import burgerShop from "../assets/portfolio/burger.png";
import bitcoinShop from "../assets/portfolio/bitcoin.png";
import houseShop from "../assets/portfolio/house.png";
import phoneShop from "../assets/portfolio/phone.png";
import temperatureShop from "../assets/portfolio/temperature.png";
import vanShop from "../assets/portfolio/van.png";
import togetherIcon from "../assets/portfolio/together.png";

function Works() {
  return (
    <section id="works">
      <h2 className="works-title">My Portfolio</h2>
      <span className="works-desc">
        I meticulously focus on every minute detail, ensuring that each aspect I
        create is given thorough consideration and precise attention, leaving no
        stone unturned in my pursuit of excellence.
      </span>
      <div className="works-images">
        <img src={burgerShop} alt="burger-shop" className="works-img" />
        <img src={bitcoinShop} alt="" className="works-img" />
        <img src={houseShop} alt="" className="works-img" />
        <img src={phoneShop} alt="" className="works-img" />
        <img src={temperatureShop} alt="" className="works-img" />
        <img src={vanShop} alt="" className="works-img" />
      </div>
    </section>
  );
}

export default Works;
