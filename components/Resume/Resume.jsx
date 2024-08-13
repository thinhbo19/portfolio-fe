import React from "react";
import "../../Styles/Resume.css";
import Data from "./Data";
import Card from "./Card";

const Resume = () => {
  return (
    <section className="resume container section" id="Resume">
      <h2 className="section_title">Resume</h2>

      <div className="resume__container grid">
        <div className="timeline grid">
          {Data.map((val, id) => {
            if (val.category === "education") {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              );
            }
            return null;
          })}
        </div>

        {/* <div className="timeline grid">
          {Data.map((val, ind) => {
            if (val.category === "experience") {
              return (
                <Card
                  key={ind}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              );
            }
            return null;
          })}
        </div> */}
      </div>
    </section>
  );
};

export default Resume;
