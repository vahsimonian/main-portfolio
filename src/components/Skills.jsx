import React from "react";
import "./skills.css";
import uiuxDesign from "../assets/ui-ux-design.png";
import appDesign from "../assets/app-design.png";
import websiteDesign from "../assets/website-design.png";

function Skills() {
  return (
    <section id="skills">
      <span className="skill-title">What I do</span>
      <br />
      <span className="skill-desc">
        As a dedicated and passionate junior web developer, you excel in
        crafting innovative web solutions. Your skills in web design and
        development, combined with a creative mindset, make you a valuable asset
        to any team. Eager to apply your talents, you are actively seeking
        opportunities to join the tech industry and contribute to exciting
        projects.
      </span>
      <div className="skill-bar-container">
        <div className="skill-bar">
          <img
            src={websiteDesign}
            alt="website-design"
            className="skill-bar-img"
            width={60}
          />
          <div className="skill-bar-text">
            <h2>Web-Developer</h2>
            <p className="skill-p">
              Developing dynamic, responsive web applications using React JS for
              optimal performance.
            </p>
          </div>
        </div>
        <div className="skill-bar">
          <img
            src={uiuxDesign}
            alt="ui-ux-design"
            className="skill-bar-img"
            width={60}
          />
          <div className="skill-bar-text">
            <h2>UI / UX design</h2>
            <p className="skill-p">
              Creating intuitive, engaging interfaces enhances user experience
              and satisfaction in design.
            </p>
          </div>
        </div>
        <div className="skill-bar">
          <img
            src={appDesign}
            alt="app-design"
            className="skill-bar-img"
            width={60}
          />
          <div className="skill-bar-text">
            <h2>App-Developer(beginner)</h2>
            <p className="skill-p">
              As an app developer, I craft innovative React JS-based mobile
              applications. Just a beginner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
