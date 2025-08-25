import React from "react";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <WorkIcon className="about__icon icon-work" />

        <div>
          <h3 className="about__title">1+</h3>
          <span className="about__subtitle">Years Experience</span>
        </div>
      </div>

      <div className="about__box">
        <CodeIcon className="about__icon icon-code" />

        <div>
          <h3 className="about__title">15+</h3>
          <span className="about__subtitle">Projects Completed</span>
        </div>
      </div>

      <div className="about__box">
        <SchoolIcon className="about__icon icon-school" />

        <div>
          <h3 className="about__title">2025</h3>
          <span className="about__subtitle">Graduation Year</span>
        </div>
      </div>

      <div className="about__box">
        <LocalFireDepartmentIcon className="about__icon icon-fire" />

        <div>
          <h3 className="about__title">6+</h3>
          <span className="about__subtitle">Technologies</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
