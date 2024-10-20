import React from "react";
import "../components/ProjectFacts.css";

const ProjectFacts = (props) => {
  return (
    <>
      <div className="project-facts-box">
        <img src={props.img} />
        <h2>{props.h2}</h2>
        <p>{props.p}</p>
      </div>
    </>
  );
};

export default ProjectFacts;
