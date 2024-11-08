import React from "react";
import ComingSoon from "../assets/InternationalPage/comingsoon.jpg";
import "../components/InternationalPatients.css";
import "../components/TitleBanner.css";
import banner from "../assets/AboutPage/banner.jpg";

const InternationalPatients = () => {
  return (
    <>
    {/* page banner start */}
    <div className="titlebanner-container">
        <img src={banner} className="titlebanner-img" />
        <div className="titlebanner-content">
          <h1 className="titlebanner-title">About Evan Hospital</h1>
        </div>
      </div>
      {/* page banner end */}
      <div className="IP-container">
        <div className="IP-inner-container">
          <img src={ComingSoon} alt="" />
        </div>
      </div>
    </>
  );
};

export default InternationalPatients;
