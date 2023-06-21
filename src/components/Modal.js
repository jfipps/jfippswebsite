import React from "react";
import Backdrop from "./Backdrop";
import { motion } from "framer-motion";
import "../css/modal.css";

export default function Modal({ handleClose, text }) {
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
        <p>{scroll}</p>
        <button onClick={handleClose}>Close</button>
      </motion.div>
    </Backdrop>
  );
}
