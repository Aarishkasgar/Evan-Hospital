import React from "react";
import "../components/TitleBanner.css";
// import banner from "../assets/AboutPage/contactbanner.jpg";
import ContactBanner from "../assets/ContactImg/contactbanner.webp";
// import BookAppointment from "../components/BookAppointment";
import "../styles/Contact.css";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact = () => {
  return (
    <div>
      {/* page banner start */}
      <div className="titlebanner-container">
        <img src={ContactBanner} className="titlebanner-img" />
        <div className="titlebanner-content">
          <h1 className="titlebanner-title">Contact Us</h1>
        </div>
      </div>
      {/* page banner end */}
      <div className="contact-container">
        <div className="contact-inner-container">
          <div className="contact-box">
            <MailIcon style={{ fontSize: 40 }} />
            <hr className="underline" />
            <h2 className="contact-title">Mail us 24/7</h2>
            <p className="contact-text">evanhealthcare@gmail.com</p>
          </div>
          <div className="contact-box">
            <CallIcon style={{ fontSize: 40 }} />
            <hr className="underline" />
            <h2 className="contact-title">Call us 24/7</h2>
            <p className="contact-text">Phone: 7088002601</p>
            <p className="contact-text">
              Mobile: 7088002601 | 8218366108 | <br /> 7078693040
            </p>
          </div>
          <div className="contact-box">
            <LocationOnIcon style={{ fontSize: 40 }} />
            <hr className="underline" />
            <h2 className="contact-title">Our Address</h2>
            <p className="contact-text">
              4 Km. Bhopa Road, Muzaffarnagar (U.P.)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
