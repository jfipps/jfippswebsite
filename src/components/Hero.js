import React, { useEffect, useContext } from "react";
import Particle from "./Particle";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { useInView } from "react-intersection-observer";
import { PortfolioContext } from "../context";
import "../css/hero.css";

export default function Hero(props) {
  const { setActiveTab, setNavState } = useContext(PortfolioContext);
  const { ref: heroRef, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setActiveTab("Hero");
      setNavState(false);
    }
  }, [inView]);

  return (
    <section className="HeroSection" id="home">
      <Particle />
      <div className="HeroContent">
        <div className="HeroDesc">
          <h1>Hello! I'm Jared Fipps</h1>
          <p> a software developer</p>
        </div>
        <div className="Bounce">
          <a href="#about">
            <BsFillArrowDownCircleFill size={48}></BsFillArrowDownCircleFill>
          </a>
        </div>
      </div>
      <div id="heronavtrigger" ref={heroRef}></div>
    </section>
  );
}
