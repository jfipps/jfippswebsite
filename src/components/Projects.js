import React, { useState, useContext, useEffect } from "react";
import { PortfolioContext } from "../context";
import { useInView } from "react-intersection-observer";
import Modal from "./Modal";
import { motion } from "framer-motion";
import { RxOpenInNewWindow } from "react-icons/rx";
import { BsSpotify } from "react-icons/bs";
import { MdQuiz } from "react-icons/md";
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
        <div id="projectnavtrigger" ref={projectRef}></div>
      </div>
      <div className="ProjectsContent">
        <div className="ProjectCard">
          <div className="ExpandIcon">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.85 }}
              onClick={() => handleButtonClick("Spoofy")}
            >
              <RxOpenInNewWindow size={28}></RxOpenInNewWindow>
            </motion.button>
          </div>
          <div className="ProjectCardContents">
            <a href="https://jfippsspoofy.herokuapp.com/" target="_blank">
              <h2 className="ProjectCardHeader">Spoofy</h2>
            </a>
            <h4>Track your Spotify listening habits!</h4>
          </div>
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
          <div className="ProjectCardContents">
            <a href="https://quizmo.herokuapp.com/" target="_blank">
              <h2 className="ProjectCardHeader">Quizmo</h2>
            </a>
            <h4>Take quizzes and compete with the world!</h4>
          </div>
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
