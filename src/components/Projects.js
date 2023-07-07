import React, { useState, useContext, useEffect } from "react";
import { PortfolioContext } from "../context";
import { useInView } from "react-intersection-observer";
import Modal from "./Modal";
import { motion } from "framer-motion";
import { RxOpenInNewWindow } from "react-icons/rx";
import "../css/projects.css";

export default function Projects(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState("");

  const { setActiveTab } = useContext(PortfolioContext);
  const { ref: projectRef, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setActiveTab("Projects");
    }
    console.log("Projects", inView);
  }, [inView]);

  const handleButtonClick = (cardName) => {
    if (!modalOpen) {
      setCurrentModal(cardName);
    } else {
      setCurrentModal("");
    }
    setModalOpen(!modalOpen);
  };

  const close = () => {
    setModalOpen(false);
  };
  const open = () => {
    setModalOpen(true);
  };

  return (
    <section className="ProjectsSection" id="projects">
      <div className="ProjectsTitle">
        <span>Projects</span>
      </div>
      <div className="ProjectsContent">
        <div className="ProjectCard" ref={projectRef}>
          <div className="ExpandIcon">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.85 }}
              onClick={() => handleButtonClick("Spoofy")}
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
            <a href="#projects">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.85 }}
                onClick={() => handleButtonClick("Quizmo")}
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
      {modalOpen && (
        <Modal
          modalOpen={modalOpen}
          handleClose={close}
          openedModal={currentModal}
        ></Modal>
      )}
    </section>
  );
}
