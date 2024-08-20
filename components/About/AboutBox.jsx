import React from "react";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <LocalFireDepartmentIcon className="about__icon icon-fire" />

        <div>
          <h3 className="about__title">10</h3>
          <span className="about__subtitle">Project Completed</span>
        </div>
      </div>

      <div className="about__box">
        <LocalFireDepartmentIcon className="about__icon icon-fire" />

        <div>
          <h3 className="about__title">10</h3>
          <span className="about__subtitle">Project Completed</span>
        </div>
      </div>

      <div className="about__box">
        <LocalFireDepartmentIcon className="about__icon icon-fire" />

        <div>
          <h3 className="about__title">10</h3>
          <span className="about__subtitle">Project Completed</span>
        </div>
      </div>

      <div className="about__box">
        <LocalFireDepartmentIcon className="about__icon icon-fire" />

        <div>
          <h3 className="about__title">102</h3>
          <span className="about__subtitle">Project Completed</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
