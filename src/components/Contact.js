import React, { useState, useEffect, useContext } from "react";
import { useInView } from "react-intersection-observer";
import { PortfolioContext } from "../context";
import { motion } from "framer-motion";
import {
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillGithub,
} from "react-icons/ai";
import "../css/contact.css";

export default function Contact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  const [isEmailFocus, setIsEmailFocus] = useState(false);
  const [isNameFocus, setIsNameFocus] = useState(false);
  const [isBodyFocus, setIsBodyFocus] = useState(false);

  const { setActiveTab } = useContext(PortfolioContext);
  const { ref: contactRef, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setActiveTab("Contact");
    }
    console.log("Contact", inView);
  }, [inView]);

  const HandleSend = () => {
    console.log(name, email, body);
  };
  return (
    <section className="ContactSection" id="contact">
      <div className="ContactTitle">
        <span>Contact</span>
      </div>
      <div className="ContactContent" ref={contactRef}>
        <form onSubmit={HandleSend} className="ContactForm" id="contactform">
          <div className="FormInput">
            <label>Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              onFocus={() => setIsNameFocus(true)}
              onBlur={() => setIsNameFocus(false)}
              className={isNameFocus ? "Focused" : "NotFocused"}
            />
          </div>
          <div className="FormInput">
            <label>Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              onFocus={() => setIsEmailFocus(true)}
              onBlur={() => setIsEmailFocus(false)}
              className={isEmailFocus ? "Focused" : "NotFocused"}
            />
          </div>
          <div className="BodyInputContainer">
            <label>Body</label>
            <textarea
              type="text"
              id="body"
              value={body}
              onChange={(event) => {
                setBody(event.target.value);
              }}
              onFocus={() => setIsBodyFocus(true)}
              onBlur={() => setIsBodyFocus(false)}
              className={
                isBodyFocus ? "BodyInput Focused" : "BodyInput NotFocused"
              }
            />
          </div>
          <motion.input
            whileTap={{ scale: 0.95 }}
            type="submit"
            id="submit"
            value="Send"
            form="contactform"
            className="SubmitButton"
          />
        </form>
      </div>
      <div className="ContactIcons">
        <div className="IconContainer">
          <motion.a
            href="https://www.linkedin.com/in/jared-fipps/"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.1 }}
          >
            <AiFillLinkedin className="ContactIcon" size={48}></AiFillLinkedin>
          </motion.a>
          <motion.a
            href="https://twitter.com/JaredMFipps"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.1 }}
          >
            <AiFillTwitterSquare
              size={48}
              className="ContactIcon"
            ></AiFillTwitterSquare>
          </motion.a>
          <motion.a
            href="https://github.com/jfipps"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.1 }}
          >
            <AiFillGithub size={48} className="ContactIcon"></AiFillGithub>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
