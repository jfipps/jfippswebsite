import React, { useContext } from "react";
import { PortfolioContext } from "../context";
import useSticky from "../hooks/useSticky";
import classNames from "classnames";
import Resume from "../resources/Jared_Fipps_Resume_2023.pdf";
import "../css/navbar.css";

export default function NavBar(props) {
  const { activeTab } = useContext(PortfolioContext);
  const { sticky, stickyRef } = useSticky();
  return (
    <>
      <nav ref={stickyRef} className={classNames("nav", { sticky })}>
        <ul className="NavLinks">
          <li>
            <a href="#home" className="Inactive">
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
        </ul>
      </nav>
      {sticky && (
        <div style={{ height: `${stickyRef.current?.clientHeight}px` }}></div>
      )}
    </>
  );
}
