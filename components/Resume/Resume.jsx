import React from "react";
import "../../Styles/Resume.css";
import SchoolIcon from "@mui/icons-material/School";

const Resume = () => {
  return (
    <section className="resume container section" id="Resume">
      <h2 className="section_title">Resume</h2>

      <div className="resume__container grid">
        <div className="timeline grid">
          <div className="timeline__item">
            <SchoolIcon
              className="icon-graduation"
              sx={{ width: 30, height: 30 }}
            />
            <span className="timeline__date">2021 - present</span>
            <h3 className="timeline__title">
              Ho Chi Minh City University of Education
            </h3>
            <p className="timeline__text">
              K47 student majoring in information technology - majoring in
              software technology
            </p>
          </div>
          <div className="timeline__item">
            <SchoolIcon
              className="icon-graduation"
              sx={{ width: 30, height: 30 }}
            />
            <span className="timeline__date">2021 - present</span>
            <h3 className="timeline__title">
              Ho Chi Minh City University of Education
            </h3>
            <p className="timeline__text">
              K47 student majoring in information technology - majoring in
              software technology
            </p>
          </div>
          <div className="timeline__item">
            <SchoolIcon
              className="icon-graduation"
              sx={{ width: 30, height: 30 }}
            />
            <span className="timeline__date">2021 - present</span>
            <h3 className="timeline__title">
              Ho Chi Minh City University of Education
            </h3>
            <p className="timeline__text">
              K47 student majoring in information technology - majoring in
              software technology
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
