import React, { useContext, useEffect, useState } from "react";
import { PortfolioContext } from "../context";
import { FaBars } from "react-icons/fa";
import useSticky from "../hooks/useSticky";
import classNames from "classnames";
import Resume from "../resources/Jared_Fipps_Resume_2023.pdf";
import "../css/navbar.css";

export default function NavBar(props) {
  const { activeTab, navState } = useContext(PortfolioContext);

  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    console.log(navOpen);
  }, [navOpen]);

  return (
    <>
      <nav className={navState ? "nav sticky" : "nav"}>
        <ul className="NavLinks">
          <li>
            <a
              href="#home"
              className={activeTab === "Hero" ? "Active" : "Inactive"}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeTab === "About" ? "Active" : "Inactive"}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={activeTab === "Skills" ? "Active" : "Inactive"}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeTab === "Projects" ? "Active" : "Inactive"}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeTab === "Contact" ? "Active" : "Inactive"}
            >
              Contact
            </a>
          </li>
        </ul>
        <ul className="ResumeLink">
          <li>
            <a href={Resume} className="Inactive" download>
              Resume
            </a>
          </li>
          <li className="MenuButton">
            <button>
              <FaBars color="white" size={24}></FaBars>
            </button>
          </li>
        </ul>
      </nav>
      <nav className={navOpen ? "open mobilenav sticky" : "mobilenav sticky"}>
        <ul className="MenuButtonContainer">
          <li className="MenuButton">
            <button onClick={() => setNavOpen(!navOpen)}>
              <FaBars color="white" size={24}></FaBars>
            </button>
          </li>
        </ul>
        <div className={navOpen ? "MobileLinksContainer" : "Closed"}>
          <ul className="MobileLinks">
            <li onClick={() => setNavOpen(false)}>
              <a href="#home">Home</a>
            </li>
            <li onClick={() => setNavOpen(false)}>
              <a href="#about">About</a>
            </li>
            <li onClick={() => setNavOpen(false)}>
              <a href="#skills">Skills</a>
            </li>
            <li onClick={() => setNavOpen(false)}>
              <a href="#projects">Projects</a>
            </li>
            <li onClick={() => setNavOpen(false)}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
