import React, { useState, useEffect, useContext, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { PortfolioContext } from "../context";
import { motion } from "framer-motion";
import {
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillGithub,
} from "react-icons/ai";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
    emailjs
      .send(
        "service_xqqwo8l",
        "template_jl9po6y",
        { name: name, email: email, body: body },
        "w9ajv_70hzBCSzULH"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    toast("Message sent!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  return (
    <section className="ContactSection" id="contact">
      <div className="ContactTitle">
        <span>Contact</span>
        <div id="contactnavtrigger" ref={contactRef}></div>
      </div>
      <div className="ContactContent">
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
              required
            />
          </div>
          <div className="FormInput">
            <label>Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              onFocus={() => setIsEmailFocus(true)}
              onBlur={() => setIsEmailFocus(false)}
              className={isEmailFocus ? "Focused" : "NotFocused"}
              required
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
              required
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
        <div className="ContactIconContainer">
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
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </section>
  );
}
