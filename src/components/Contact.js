import React, { useState } from "react";
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
  const HandleSend = () => {
    console.log(name, email, body);
  };
  return (
    <section className="ContactSection" id="contact">
      <div className="ContactTitle">
        <span>Contact</span>
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
            />
          </div>
          <div className="FormInput">
            <label>Body</label>
            <textarea
              type="text"
              id="body"
              value={body}
              onChange={(event) => {
                setBody(event.target.value);
              }}
            />
          </div>
          <input type="submit" id="submit" value="Send" form="contactform" />
        </form>
      </div>
      <div className="ContactIcons">
        <div className="Icons">
          <AiFillLinkedin size={48}></AiFillLinkedin>
          <AiFillTwitterSquare size={48}></AiFillTwitterSquare>
          <AiFillGithub size={48}></AiFillGithub>
        </div>
      </div>
    </section>
  );
}
