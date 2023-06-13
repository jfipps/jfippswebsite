import React from "react";
import "../css/about.css";

export default function About(props) {
  return (
    <section className="AboutSection" id="about">
      <div className="AboutTitle">
        <span>About</span>
      </div>
      <div className="AboutCards">
        <div className="Card">
          <span>ICON</span>
          <h1 className="CardTitle">Hobbies</h1>
          <p>
            In my free time I am a big sports fan, mostly of teams near my home
            of Orange County like the Anaheim Ducks and Angels. Also a big fan
            of the Los Angeles Chargers. I also like to work out and play games
            with friends.
          </p>
        </div>
        <div className="Card">
          <span>ICON</span>
          <h1 className="CardTitle">Bettering Myself</h1>
          <p>
            When it comes to work, I like finding new processes and
            techonologies that can both expand my skillset and improve my work
            flow. Whether these improvements come from taking courses or
            learning from friends and colleagues, I do my best to treat my mind
            like a sponge for new information.
          </p>
        </div>
        <div className="Card">
          <span>ICON</span>
          <h1 className="CardTitle">My Style of Work</h1>
          <p>
            I tend to dive head first into any problems that come up during my
            work day and in personal projects. I like to be involved in as much
            of the process as I can and submerge myself in the current task at
            hand until I have a full understanding.
          </p>
        </div>
      </div>
    </section>
  );
}
