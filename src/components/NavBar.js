import React from "react";
import useSticky from "../hooks/useSticky";
import classNames from "classnames";
import "../css/navbar.css";

export default function NavBar(props) {
  const { sticky, stickyRef } = useSticky();
  return (
    <>
      <nav ref={stickyRef} className={classNames("nav", { sticky })}>
        <ul className="NavLinks">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      {sticky && (
        <div style={{ height: `${stickyRef.current?.clientHeight}px` }}></div>
      )}
    </>
  );
}
