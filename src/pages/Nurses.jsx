import React from "react";
import DoctorsCard from "../components/DoctorsCard";
import "../styles/Home.css";
// import DrImg01 from "../assets/DoctorsImg/DrImg01.jpeg";
import NoImg from "../assets/DoctorsImg/NoImg.jpeg";
import "../components/TitleBanner.css";
import banner from "../assets/AboutPage/doctorbanner.jpg";
//nurse images
import Nurse1 from "../assets/NurseImg/nurse1.jpg";
import Nurse2 from "../assets/NurseImg/nurse2.jpg";
// import Nurse3 from "../assets/NurseImg/nurse3.jpg";
// import Nurse4 from "../assets/NurseImg/nurse4.jpg";
import Nurse5 from "../assets/NurseImg/nurse5.jpg";
import Nurse6 from "../assets/NurseImg/nurse6.jpg";
import Nurse7 from "../assets/NurseImg/nurse7.jpg";
import Nurse8 from "../assets/NurseImg/nurse8.jpg";
import Nurse9 from "../assets/NurseImg/nurse9.jpg";
import Nurse10 from "../assets/NurseImg/nurse10.jpg";
import Nurse11 from "../assets/NurseImg/nurse11.jpg";
import Nurse12 from "../assets/NurseImg/nurse12.jpg";
import Nurse13 from "../assets/NurseImg/nurse13.jpg";
import Nurse14 from "../assets/NurseImg/nurse14.jpg";
import Nurse15 from "../assets/NurseImg/nurse15.jpg";
import Nurse16 from "../assets/NurseImg/nurse16.jpg";
import Nurse17 from "../assets/NurseImg/nurse17.jpg";

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
            At Evan Hospital, our nursing team is the heart of patient care,
            providing compassionate, attentive, and expert support at every
            stage of the healing journey. With a deep sense of dedication and
            professionalism, our nurses ensure each patient receives
            personalized care, emotional comfort, and medical attention around
            the clock. Trained in the latest healthcare practices and committed
            to excellence, they work hand-in-hand with doctors and staff to
            deliver a safe, nurturing, and healing environment for all.
          </p>
          <div className="our-doctors-container">
            <DoctorsCard img={Nurse1} name="Sana" destination="(Head)" />
            <DoctorsCard img={Nurse2} name="Deepanshi" destination="(Head)" />
            {/* <DoctorsCard img={Nurse3} name="Himanshu" destination="(Nurse)" /> */}
            <DoctorsCard img={NoImg} name="N/A" destination="(Nurse)" />
            <DoctorsCard
              img={Nurse5}
              name="Sristi"
              destination="(Counsellor)"
            />
            <DoctorsCard img={Nurse6} name="Rida" destination="(Nurse)" />
            <DoctorsCard img={Nurse7} name="Deepak" destination="(Nurse)" />
            <DoctorsCard img={Nurse8} name="Rashid" destination="(Nurse)" />
            <DoctorsCard img={Nurse9} name="Ekta" destination="(Nurse)" />
            <DoctorsCard
              img={Nurse10}
              name="Illahijaan"
              destination="(Nurse)"
            />
            <DoctorsCard img={Nurse11} name="Irfan" destination="(Nurse)" />
            <DoctorsCard img={Nurse12} name="Mohit" destination="(Nurse)" />
            <DoctorsCard img={Nurse13} name="Praveen" destination="(Nurse)" />
            <DoctorsCard img={Nurse14} name="Preeti" destination="(Nurse)" />
            <DoctorsCard img={Nurse15} name="Reeta" destination="(Nurse)" />
            <DoctorsCard img={Nurse16} name="Sahib" destination="(Nurse)" />
            <DoctorsCard img={Nurse17} name="Deepmala" destination="(Nurse)" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nurses;
