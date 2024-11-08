import React from "react";
import "../components/TitleBanner.css";
import banner from "../assets/AboutPage/banner.jpg";

const About = () => {
  return (
    <div>
      {/* page banner start */}
      <div className="titlebanner-container">
        <img src={banner} className="titlebanner-img" />
        <div className="titlebanner-content">
          <h1 className="titlebanner-title">About Evan Hospital</h1>
          <span className="bottom"></span>
        </div>
      </div>
      {/* page banner end */}
    </div>
  );
};

export default About;
