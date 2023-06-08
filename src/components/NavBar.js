import React from "react";
import "../css/navbar.css";

export default function NavBar(props) {
  return (
    <section className="NavBar Sticky">
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
    </section>
  );
}
