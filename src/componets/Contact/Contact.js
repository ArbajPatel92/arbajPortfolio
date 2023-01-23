import React, {  useRef, useState } from "react";

import "./Contact.css";
import emailjs from "@emailjs/browser";
// import { themeContext } from "../../Context";
const Contact = () => {
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode/;
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(process.env.REACT_APP_SERVICE_KEY);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_KEY,
        process.env.REACT_APP_TEMPLATE_KEY ,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY 
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          e.target[0].value=" ";
          e.target[1].value=" ";
          e.target[2].value=" ";
        },
        (error) => {
          console.log(error.text);
          e.target[0].value=" ";
          e.target[1].value=" ";
          e.target[2].value=" ";
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span >Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" required className="user"  placeholder="Name"/>
          <input type="email" name="user_email" required className="user" placeholder="Email"/>
          <textarea name="message" className="user"  placeholder="Message"/>
          <input type="submit" value="Send" className="ct-btn btn "/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
