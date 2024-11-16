import React from "react";
import DoctorsCard from "../components/DoctorsCard";
import "../styles/Home.css";
import DrImg01 from "../assets/DoctorsImg/DrImg01.jpeg";
import "../components/TitleBanner.css";
import banner from "../assets/AboutPage/doctorbanner.jpg";

const Nurses = () => {
  return (
    <div>
      {/* page banner start */}
      <div className="titlebanner-container">
        <img src={banner} className="titlebanner-img" />
        <div className="titlebanner-content">
          <h1 className="titlebanner-title">Evan Hospital Nurses</h1>
        </div>
      </div>
      {/* page banner end */}
      <section className="HD-container">
        <div className="HD-inner-container">
          <h1>Our Nurses</h1>
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
            <DoctorsCard img={DrImg01} name="Sana" destination="(Head)" />
            <DoctorsCard img={DrImg01} name="Deepausi" destination="(Nurse)" />
            <DoctorsCard img={DrImg01} name="Himanshi" destination="(Nurse)" />
            <DoctorsCard img={DrImg01} name="Sidra" destination="(Nurse)" />
            <DoctorsCard
              img={DrImg01}
              name="Sristi"
              destination="(Counsellor)"
            />
            <DoctorsCard img={DrImg01} name="Annu" destination="(Nurse)" />
            <DoctorsCard img={DrImg01} name="Ekta" destination="(Nurse)" />
            <DoctorsCard img={DrImg01} name="Preeti" destination="(Nurse)" />
            <DoctorsCard img={DrImg01} name="Zainab" destination="(Nurse)" />
            <DoctorsCard img={DrImg01} name="Deepmala" destination="(Nurse)" />
            <DoctorsCard img={DrImg01} name="Deepak" destination="(Nurse)" />
            <DoctorsCard img={DrImg01} name="Himanshu" destination="(Nurse)" />
            <DoctorsCard img={DrImg01} name="Praveen" destination="(Nurse)" />
            <DoctorsCard img={DrImg01} name="Sahile" destination="(Nurse)" />
            <DoctorsCard img={DrImg01} name="Irfan" destination="(Nurse)" />
            <DoctorsCard img={DrImg01} name="Pankaj" destination="(Nurse)" />
            <DoctorsCard
              img={DrImg01}
              name="Ilahi Jaan"
              destination="(Nurse)"
            />
            <DoctorsCard img={DrImg01} name="Mohit" destination="(Nurse)" />
            <DoctorsCard img={DrImg01} name="Rashid" destination="(Nurse)" />
            <DoctorsCard img={DrImg01} name="Reeta" destination="(Nurse)" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nurses;
