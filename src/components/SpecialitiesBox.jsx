import React from "react";
import "../components/SpecialitiesBox.css";

const SpecialitiesBox = (props) => {
  return (
    <div>
      <div className="Specialities-box">
        <img src={props.img} />
        <h2>{props.h1}</h2>
      </div>
    </div>
  );
};

export default SpecialitiesBox;
