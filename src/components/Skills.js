import React from "react";
import ReactIcon from "../resources/reacticon.png";
import HtmlIcon from "../resources/htmlicon.png";
import MongoIcon from "../resources/mongoicon.png";
import CssIcon from "../resources/cssicon.png";
import JsIcon from "../resources/jsicon.png";
import GitIcon from "../resources/giticon.png";
import NodeIcon from "../resources/nodeicon.png";
import NpmIcon from "../resources/npmicon.png";
import "../css/skills.css";

export default function Skills(props) {
  return (
    <section className="SkillsSection" id="skills">
      <div className="SkillsTitle">
        <span>Skills</span>
      </div>
      <div className="SkillRow">
        <div className="SkillCard">
          <img src={HtmlIcon} alt="html" />
          <h2>HTML</h2>
        </div>
        <div className="SkillCard">
          <img src={CssIcon} alt="css" />
          <h2>CSS</h2>
        </div>
        <div className="SkillCard">
          <img src={JsIcon} alt="JS" />
          <h2>Javascript</h2>
        </div>
        <div className="SkillCard">
          <img src={ReactIcon} alt="react" />
          <h2>React</h2>
        </div>
      </div>
      <div className="SkillRow">
        <div className="SkillCard">
          <img src={NodeIcon} alt="node" />
          <h2>NodeJS</h2>
        </div>
        <div className="SkillCard">
          <img src={NpmIcon} alt="npm" />
          <h2>NPM</h2>
        </div>
        <div className="SkillCard">
          <img src={GitIcon} alt="git" />
          <h2>Git</h2>
        </div>
        <div className="SkillCard">
          <img src={MongoIcon} alt="mongo" />
          <h2>Mongo</h2>
        </div>
      </div>
    </section>
  );
}
