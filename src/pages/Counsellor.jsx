import React from "react";
import DoctorsCard from "../components/DoctorsCard";
import "../styles/Home.css";
// import Mgt7 from "../assets/DepartmentsImg/MgtImg07.jpg";
import NoImg from "../assets/DoctorsImg/NoImg.jpeg";
import "../components/TitleBanner.css";
import banner from "../assets/AboutPage/doctorbanner.jpg";

const Counsellor = () => {
  return (
    <div>
      {/* page banner start */}
      <div className="titlebanner-container">
        <img src={banner} className="titlebanner-img" />
        <div className="titlebanner-content">
          <h1 className="titlebanner-title">Evan Hospital Counsellor</h1>
        </div>
      </div>
      {/* page banner end */}
      <section className="HD-container">
        <div className="HD-inner-container">
          <h1>Our Counsellor</h1>
          <p>
            At Evan Hospital, our patient counselors play a vital role in
            supporting the emotional and mental well-being of our patients and
            their families. With empathy, understanding, and professionalism,
            they guide individuals through their healthcare journeys—offering
            clarity, comfort, and encouragement during challenging times.
            Whether it’s answering questions, providing emotional support, or
            helping navigate treatment decisions, our counselors are here to
            ensure every patient feels heard, supported, and empowered.
          </p>
          <div className="our-doctors-container">
            <DoctorsCard
              img={NoImg}
              name="N/A"
              destination="(Counsellor)"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Counsellor;
