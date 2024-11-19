import React from "react";
import "../components/SpecialitiesBanner.css";

const SpecialitiesBanner = (props) => {
  return (
    <>
      <div className="SB-container">
        <div className="SB-inner-container">
          <div className="SB-left-side">
            <p className="SB-title">{props.title}</p>
            <h1 className="SB-text">{props.text}</h1>
          </div>
          <div className="SB-right-side">
            <img src={props.img} alt="Lung Banner Image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialitiesBanner;
