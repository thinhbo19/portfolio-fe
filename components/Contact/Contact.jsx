"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../../Styles/Contact.css";
import Shapes from "../Shapes";

const Contact = () => {
  const form = useRef();
  const Swal = require("sweetalert2");
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_2yg39fl",
        "template_o2x8v36",
        form.current,
        {
          publicKey: "BsCxooe5MI9fUpade",
        }
      );
      Swal.fire({
        icon: "success",
        title: "Bạn đã gửi thành công",
        text: "Cảm ơn bạn đã xem trang web của tôi",
      });
    } catch (error) {
      console.log("FAILED...", error.text);
      Swal.fire({
        icon: "error",
        title: "Gửi không thành công",
        text: "Hãy kiểm tra lại mạng",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact container section relative" id="Contact">
      <Shapes />

      <h2 className="section_title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">
            Don't like forms? Send me an email. 👋
          </p>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          action=""
          className="contact__form"
        >
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Insert your name"
                name="from_name"
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                placeholder="Insert your email"
                name="user_email"
              />
            </div>
          </div>
          <div className="contact__form-div">
            <input
              type="text"
              className="contact__form-input"
              placeholder="Insert your subject"
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              className="contact__form-input"
              placeholder="Write  your message"
              id=""
              cols="30"
              rows="10"
              name="message"
            ></textarea>
          </div>

          <button type="submit" value="Send" className="btn">
            {loading ? "Sending....." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
