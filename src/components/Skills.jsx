import React from "react";
import "./skills.css";
import uiuxDesign from "../assets/ui-ux-design.png";
import appDesign from "../assets/app-design.png";
import websiteDesign from "../assets/website-design.png";

function Skills() {
  return (
    <section id="skills">
      <span className="skill-title">What I do</span>
      <span className="skill-desc">
        I am skilled and passionate web-developer / designer
      </span>
      <div className="skill-bar-container">
        <div className="skill-bar">
          <img
            src={uiuxDesign}
            alt="ui-ux-design"
            className="skill-bar-img"
            width={60}
          />
          <img
            src={websiteDesign}
            alt="website-design"
            className="skill-bar-img"
            width={60}
          />
          <img
            src={appDesign}
            alt="app-design"
            className="skill-bar-img"
            width={60}
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
