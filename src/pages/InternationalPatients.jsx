import React from "react";
import ComingSoon from "../assets/InternationalPage/comingsoon.jpg";
import "../components/InternationalPatients.css";

const InternationalPatients = () => {
  return (
    <div className="IP-container">
      <div className="IP-inner-container">
        <img src={ComingSoon} alt="" />
      </div>
    </div>
  );
};

export default InternationalPatients;
