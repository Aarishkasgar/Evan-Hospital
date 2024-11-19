import React from "react";
import "../components/TitleBanner.css";
import banner from "../assets/AboutPage/contactbanner.jpg";
// import BookAppointment from "../components/BookAppointment";

const Contact = () => {
  return (
    <div>
      {/* page banner start */}
      <div className="titlebanner-container">
        <img src={banner} className="titlebanner-img" />
        <div className="titlebanner-content">
          <h1 className="titlebanner-title">Contact Us</h1>
        </div>
      </div>
      {/* page banner end */}
    </div>
  );
};

export default Contact;
