import React from "react";
import "./works.css";
import burgerShop from "../assets/portfolio/burger.png";
import bitcoinShop from "../assets/portfolio/bitcoin.png";
import houseShop from "../assets/portfolio/house.png";
import phoneShop from "../assets/portfolio/phone.png";
import temperatureShop from "../assets/portfolio/temperature.png";
import vanShop from "../assets/portfolio/van.png";
// import togetherIcon from "../assets/portfolio/together.png";

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
        <a
          href="https://master--neon-kringle-618c71.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={burgerShop} alt="burger-shop" className="work-img" />
        </a>
        <a
          href="https://master--precious-sprite-7845c0.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={bitcoinShop} alt="bitcoin-shop" className="work-img" />
        </a>
        <a
          href="https://classy-clafoutis-7f38fe.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={houseShop} alt="house-shop" className="work-img" />
        </a>
        <a
          href="https://e-commerse-in-moscow.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={phoneShop} alt="phone-shop" className="work-img" />
        </a>
        <a
          href="https://master--rococo-strudel-89abf2.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={temperatureShop}
            alt="temperature-shop"
            className="work-img"
          />
        </a>
        <a
          href="https://jovial-zabaione-40249a.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={vanShop} alt="van-shop" className="work-img" />
        </a>
      </div>
      <button className="works-btn">See More</button>
    </section>
  );
}

export default Works;
