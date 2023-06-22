import React, { useState } from "react";
import Backdrop from "./Backdrop";
import CarouselItem from "./CarouselItem";
import { motion } from "framer-motion";
import "../css/modal.css";
import Spoofy1 from "../resources/Spoofy1.png";
import Spoofy2 from "../resources/Spoofy2.png";
import Spoofy3 from "../resources/Spoofy3.png";
import Quizmo1 from "../resources/Quizmo1.png";
import Quizmo2 from "../resources/Quizmo2.png";
import Quizmo3 from "../resources/Quizmo3.png";

export default function Modal({ handleClose, openedModal }) {
  const [activeIndex, setActiveIndex] = useState(0);

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

  const SpoofyImages = [Spoofy1, Spoofy2, Spoofy3];

  const QuizmoImages = [Quizmo1, Quizmo2, Quizmo3];

  const SpoofyDesc =
    "Spoofy is a web application that allows a user to track their listening habits on their Spotify account. It also acts as a web player the user can use while looking at their recent listening trends. The application utilizes a React front end with an Express/NodeJS back end. The Spotify API is used to pull the user data.";

  const QuizmoDesc =
    "Spoofy is a web application in which a user can take multiple choice quizzes based on a wide range of topics and difficulties. The user's scores are then recorded and can be compared to other users on the high scores section of the app. The application utilizes a React front end with an Express/NodeJS backend. MongoDB is used to store the user logins and scores. The Trivia API is used to pull the quiz questions.";

  const HandleNav = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= SpoofyImages.length) {
      newIndex = SpoofyImages.length - 1;
    }
    console.log(newIndex);
    setActiveIndex(newIndex);
  };

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
        <div className="Carousel">
          <div
            className="Inner"
            style={{ transform: `translate(-${activeIndex * 100}%)` }}
          >
            {openedModal === "Spoofy" && (
              <div>
                {SpoofyImages.map((image) => {
                  return (
                    <CarouselItem image={image} width={"100%"}></CarouselItem>
                  );
                })}
              </div>
            )}
            {openedModal === "Quizmo" && (
              <div>
                {QuizmoImages.map((image) => {
                  return (
                    <CarouselItem image={image} width={"100%"}></CarouselItem>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="NavigationButtons">
          <button onClick={() => HandleNav(activeIndex - 1)}>Left</button>
          <button onClick={() => HandleNav(activeIndex + 1)}>Right</button>
        </div>
        <button onClick={handleClose}>Close</button>
      </motion.div>
    </Backdrop>
  );
}
