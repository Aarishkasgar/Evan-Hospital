import React from "react";
import ComingSoon from "../assets/InternationalPage/comingsoon.jpg";
import "../components/InternationalPatients.css";
import "../components/TitleBanner.css";
import banner from "../assets/AboutPage/banner.jpg";

const InternationalPatients = () => {
  return (
    <>
      <div className="IP-container">
        <div className="IP-inner-container">
          <img src={ComingSoon} alt="" />
        </div>
      </div>
    </>
  );
};

export default InternationalPatients;
