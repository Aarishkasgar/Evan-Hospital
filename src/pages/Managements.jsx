import React from "react";
import DoctorsCard from "../components/DoctorsCard";
import "../styles/Home.css";
import DrImg01 from "../assets/DoctorsImg/DrImg01.jpeg";
import "../components/TitleBanner.css";
import banner from "../assets/AboutPage/doctorbanner.jpg";

const Managements = () => {
  return (
    <div>
      {/* page banner start */}
      <div className="titlebanner-container">
        <img src={banner} className="titlebanner-img" />
        <div className="titlebanner-content">
          <h1 className="titlebanner-title">Evan Hospital Managements</h1>
        </div>
      </div>
      {/* page banner end */}
      <section className="HD-container">
        <div className="HD-inner-container">
          <h1>Our Managements</h1>
          <p>
            At Evan Hospital, our management team is dedicated to delivering
            excellence in healthcare through efficient administration,
            cutting-edge technology, and a patient-centric approach. We ensure
            seamless coordination between our skilled medical professionals,
            modern facilities, and supportive staff to provide comprehensive and
            compassionate care. Our commitment to quality and innovation drives
            us to constantly enhance patient experiences and achieve the highest
            standards in healthcare services.
          </p>
          <div className="our-doctors-container">
            <DoctorsCard
              img={DrImg01}
              name="Mr. Vijay Jain"
              destination="(CEO)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Mr. Vijay Jain (Dalda)"
              destination="(Director)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Mr. Virendra"
              destination="(COO)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Chanchal Gautam"
              destination="(HR)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Mr. Gourav Singh"
              destination="(B.D.M.)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Dr. Pankaj"
              destination="(Medical Director)"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Managements;
