import React from "react";
import Particle from "./Particle";
import "../css/hero.css";

export default function Hero(props) {
  return (
    <section className="HeroSection">
      <Particle />
      <div>
        <h1>Hello I am a web developer</h1>
        <p>This is a big test</p>
      </div>
    </section>
  );
}
