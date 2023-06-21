import React, { useState } from "react";
import Modal from "./Modal";
import { motion } from "framer-motion";
import { RxOpenInNewWindow } from "react-icons/rx";
import "../css/projects.css";

export default function Projects(props) {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => {
    setModalOpen(false);
  };
  const open = () => {
    setModalOpen(true);
  };

  const modalAnimation = {
    open: {
      width: "60%",
      height: "100%",
      left: "10%",
      bottom: "10%",
      z: "1000",
    },
    close: {
      width: "25%",
      height: "60%",
    },
  };

  return (
    <section className="ProjectsSection" id="projects">
      <div className="ProjectsTitle">
        <span>Projects</span>
      </div>
      <div className="ProjectsContent">
        {/* <motion.div
          className="ProjectCard"
          animate={modalOpen ? "open" : "close"}
          variants={modalAnimation}
        >
          <div className="ExpandIcon">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.85 }}
              onClick={() => setModalOpen(!modalOpen)}
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
        </motion.div> */}
        <div className="ProjectCard">
          <div className="ExpandIcon">
            <a href="#projects">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.85 }}
                onClick={() => (modalOpen ? close() : open())}
              >
                <RxOpenInNewWindow size={28}></RxOpenInNewWindow>
              </motion.button>
            </a>
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
      {modalOpen && <Modal modalOpen={modalOpen} handleClose={close}></Modal>}
    </section>
  );
}
