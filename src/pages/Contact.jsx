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
      <div className="aboutUs-banner">
        <div className="aboutUs-inner-banner">
          <h1>Contact</h1>
        </div>
      </div>
      {/* <div className="titlebanner-container">
        <img src={ContactBanner} className="titlebanner-img" />
        <div className="titlebanner-content">
          <h1 className="titlebanner-title">Contact Us</h1>
        </div>
      </div> */}
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
            <p className="contact-text">Phone: +91 9068995077</p>
            <p className="contact-text">
              Mobile: +91 7088002601 | <br /> +91 7078693040
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
      <iframe
        className="location-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3473.5147469369313!2d77.737201475322!3d29.472176975216797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c04cbac9c72df%3A0xead1bbe9ac904910!2sEvan%20Hospital!5e0!3m2!1sen!2sin!4v1732786108916!5m2!1sen!2sin"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Contact;
