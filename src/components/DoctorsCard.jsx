import React from "react";
import "../components/Doctors.css";

const DoctorsCard = (props) => {
  return (
    <>
      <div className="Doctor-Card">
        <div className="DC-top">
          <img src={props.img} />
        </div>
        <div className="DC-bottom">
          <h2>{props.name}</h2>
          <p>{props.destination}</p>
        </div>
      </div>
    </>
  );
};

export default DoctorsCard;
