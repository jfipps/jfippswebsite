import React from "react";
import { motion } from "framer-motion";
import { RxOpenInNewWindow } from "react-icons/rx";
import "../css/projects.css";

export default function Projects(props) {
  return (
    <section className="ProjectsSection" id="projects">
      <div className="ProjectsTitle">
        <span>Projects</span>
      </div>
      <div className="ProjectsContent">
        <div className="ProjectCard">
          <div className="ExpandIcon">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.85 }}
              onClick={() => null}
            >
              <RxOpenInNewWindow size={28}></RxOpenInNewWindow>
            </motion.button>
          </div>
          <h2 className="ProjectCardHeader">Spoofy</h2>
          <p>
            Spoofy is a web application that allows a user to track their
            listening habits on their Spotify account. It also acts as a web
            player the user can use while looking at their recent listening
            trends. The application utilizes a React front end with an
            Express/NodeJS back end. The Spotify API is used to pull the user
            data.
          </p>
        </div>
        <div className="ProjectCard">
          <div className="ExpandIcon">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.85 }}
              onClick={() => null}
            >
              <RxOpenInNewWindow size={28}></RxOpenInNewWindow>
            </motion.button>
          </div>
          <h2 className="ProjectCardHeader">Quizmo</h2>
          <p>
            Spoofy is a web application in which a user can take multiple choice
            quizzes based on a wide range of topics and difficulties. The user's
            scores are then recorded and can be compared to other users on the
            high scores section of the app. The application utilizes a React
            front end with an Express/NodeJS backend. MongoDB is used to store
            the user logins and scores. The Trivia API is used to pull the quiz
            questions.
          </p>
        </div>
      </div>
    </section>
  );
}
