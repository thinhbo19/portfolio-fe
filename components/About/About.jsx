"use client";
import React from "react";
import AboutImg from "../../assets/avatar-2.jpg";
import AboutBox from "./AboutBox";
import CVimg from "../../assets/CV2024-HoNgocHungThinh-47.01.CNTT.C.png";
import "../../Styles/About.css";
import Image from "next/image";

const About = () => {
  const downloadCV = () => {
    const imageUrl = CVimg;
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "CV.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="about container section" id="About">
      <h2 className="section_title">About Me</h2>

      <div className="about__container grid">
        <Image src={AboutImg} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am Ho Ngoc Hung Thinh, a 3rd grade male student from Ho Chi Minh
              City University of Education. I have a solid background in website
              building and customization.
            </p>
            <button onClick={downloadCV} className="btn">
              Download CV
            </button>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">HTML</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">CSS</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">JAVASCRIPT</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage javascript"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
