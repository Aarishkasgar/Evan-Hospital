import React from "react";
import DoctorsCard from "../components/DoctorsCard";
import "../styles/Home.css";
import "../components/TitleBanner.css";
import banner from "../assets/AboutPage/doctorbanner.jpg";
import Demo from "../assets/DoctorsImg/DrImg01.jpeg";

const Technician = () => {
  return (
    <div>
      <div>
        {/* page banner start */}
        <div className="titlebanner-container">
          <img src={banner} className="titlebanner-img" />
          <div className="titlebanner-content">
            <h1 className="titlebanner-title drtitle">Our Technician</h1>
          </div>
        </div>
        {/* page banner end */}
        <section className="HD-container">
          <div className="HD-inner-container">
            <h1>Our Dedicated Team of Technician</h1>
            <p>
              At Evan Hospital, we take pride in our team of highly skilled and
              compassionate doctors, committed to providing exceptional care to
              every patient. With expertise across a wide range of medical
              specialties, our doctors are here to ensure you receive the best
              treatment, personalized to your health needs.
            </p>
            <div className="our-doctors-container">
              <DoctorsCard
                img={Demo}
                name="Chintoo Saini"
                degree="Lab Technician"
                // destination="(General Surgery & Lap Surgery)"
              />
              <DoctorsCard
                img={Demo}
                name="Tushar Kashyap"
                degree="Lab Technician"
                // destination="(General Surgery & Lap Surgery)"
              />
              <DoctorsCard
                img={Demo}
                name="Mansi Chandiwal"
                degree="Lab Technician"
                // destination="(General Surgery & Lap Surgery)"
              />
              <DoctorsCard
                img={Demo}
                name="Mohd Sarhan"
                degree="Lab Technician"
                // destination="(General Surgery & Lap Surgery)"
              />
              <DoctorsCard
                img={Demo}
                name="Jitender Kumar"
                degree="Sample Collection"
                // destination="(General Surgery & Lap Surgery)"
              />
              <DoctorsCard
                img={Demo}
                name="Harshit Tyagi"
                degree="Radiologist Technician"
                // destination="(Anesthesia)"
              />
              <DoctorsCard
                img={Demo}
                name="Kartik"
                degree="Radiologist Technician"
                // destination="(Anesthesia)"
              />
              <DoctorsCard
                img={Demo}
                name="Arun Pal"
                degree="OT Technician"
                // destination="(ENT & HNS)"
              />
              <DoctorsCard
                img={Demo}
                name="Sagar Kumar"
                degree="OT Technician"
                // destination="(Physiotheraphy)"
              />
              <DoctorsCard
                img={Demo}
                name="Mohit Kumar"
                degree="Dialysis"
                // destination="(Physiotheraphy)"
              />
              <DoctorsCard
                img={Demo}
                name="Altamash"
                degree="Cardiology Laboratory"
                // destination="(Physiotheraphy)"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Technician;
