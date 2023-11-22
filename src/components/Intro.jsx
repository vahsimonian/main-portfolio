import React from "react";
import "./intro.css";
import me from "../../src/assets/me.png";
import { Link } from "react-scroll";
import suitcaseLine from "../../src/assets/suitcase-line.png";

function Intro() {
  return (
    <section id="intro">
      <div className="intro-content">
        <span className="hello"> Hello, </span>
        <span className="intro-text">
          {" "}
          I'm <span className="intro-name"> Vah </span>
          <br /> Web-developer{" "}
        </span>
        <p className="intro-para">
          I am a React JS web developer with 2.5 years' experience.
        </p>
        <Link>
          <button className="btn">
            <img src={suitcaseLine} alt="suitcase" className="btn-img" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={me} alt="me" className="me" />
    </section>
  );
}

export default Intro;
