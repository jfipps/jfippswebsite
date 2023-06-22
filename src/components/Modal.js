import React from "react";
import Backdrop from "./Backdrop";
import { motion } from "framer-motion";
import "../css/modal.css";
import Spoofy1 from "../resources/Spoofy1.png";
import Spoofy2 from "../resources/Spoofy2.png";
import Spoofy3 from "../resources/Spoofy3.png";

export default function Modal({ handleClose, openedModal }) {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  const SpoofyDesc =
    "Spoofy is a web application that allows a user to track their listening habits on their Spotify account. It also acts as a web player the user can use while looking at their recent listening trends. The application utilizes a React front end with an Express/NodeJS back end. The Spotify API is used to pull the user data.";

  const QuizmoDesc =
    "Spoofy is a web application in which a user can take multiple choice quizzes based on a wide range of topics and difficulties. The user's scores are then recorded and can be compared to other users on the high scores section of the app. The application utilizes a React front end with an Express/NodeJS backend. MongoDB is used to store the user logins and scores. The Trivia API is used to pull the quiz questions.";

  const scroll = window.scrollY;

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h2>{openedModal}</h2>
        <p>{openedModal === "Spoofy" ? SpoofyDesc : QuizmoDesc}</p>
        {openedModal === "Spoofy" && (
          <div>
            <img src={Spoofy1} alt="" />
          </div>
        )}
        {openedModal === "Quizmo" && (
          <div>
            <img src={Spoofy3} alt="" />
          </div>
        )}
        <button onClick={handleClose}>Close</button>
      </motion.div>
    </Backdrop>
  );
}
