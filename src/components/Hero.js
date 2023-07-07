import React from "react";
import Particle from "./Particle";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import "../css/hero.css";

export default function Hero(props) {
  return (
    <section className="HeroSection" id="home">
      <Particle />
      <div className="HeroContent">
        <div className="HeroDesc">
          <h1>Hello I am a web developer</h1>
          <p>This is a big test</p>
        </div>
        <div className="Bounce">
          <a href="#about">
            <BsFillArrowDownCircleFill size={48}></BsFillArrowDownCircleFill>
          </a>
        </div>
      </div>
    </section>
  );
}
