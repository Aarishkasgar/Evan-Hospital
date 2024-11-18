import React from "react";
import "../components/AboutUsContent.css";

const AboutUsContent = (props) => {
  return (
    <>
      <div className="AUC-container">
        <div className="AUC-inner-container">
          <h2>{props.title}</h2>
          <p>{props.Content}</p>
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;
