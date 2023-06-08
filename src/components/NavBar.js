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
            <span>Home</span>
          </li>
          <li>
            <span>About</span>
          </li>
          <li>
            <span>Skills</span>
          </li>
          <li>
            <span>Projects</span>
          </li>
          <li>
            <span>Contacts</span>
          </li>
        </ul>
      </nav>
      {sticky && (
        <div style={{ height: `${stickyRef.current?.clientHeight}px` }}></div>
      )}
    </>
  );
}
