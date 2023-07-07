import React, { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import NavBar from "./NavBar";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

export default function MainContent(props) {
  const { ref: skillsRef, inView } = useInView();
  console.log("isInView", inView);
  return (
    <>
      <NavBar></NavBar>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </>
  );
}
