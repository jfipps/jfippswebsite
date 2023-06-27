import React from "react";
import NavBar from "./NavBar";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

export default function MainContent(props) {
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
