import React from "react";
import DoctorsCard from "../components/DoctorsCard";
import "../styles/Home.css";
import "../components/TitleBanner.css";
import banner from "../assets/AboutPage/doctorbanner.jpg";
import DrImg1 from "../assets/DoctorsImg/DrImg01.jpg";
import DrImg2 from "../assets/DoctorsImg/DrImg02.jpg";
import DrImg3 from "../assets/DoctorsImg/DrImg03.jpeg";
import DrImg4 from "../assets/DoctorsImg/DrImg04.jpg";
import DrImg5 from "../assets/DoctorsImg/DrImg05.jpg";
import DrImg6 from "../assets/DoctorsImg/DrImg06.jpeg";
import DrImg7 from "../assets/DoctorsImg/DrImg07.jpg";
import DrImg8 from "../assets/DoctorsImg/DrImg08.jpg";
import DrImg9 from "../assets/DoctorsImg/DrImg09.png";
import DrImg10 from "../assets/DoctorsImg/DrImg10.png";
import DrImg11 from "../assets/DoctorsImg/DrImg11.png";
import DrImg12 from "../assets/DoctorsImg/DrImg12.jpg";
import DrImg13 from "../assets/DoctorsImg/DrImg13.png";
import DrImg14 from "../assets/DoctorsImg/DrImg14.png";
import DrImg15 from "../assets/DoctorsImg/DrImg15.png";
import DrImg16 from "../assets/DoctorsImg/DrImg16.png";
import DrImg17 from "../assets/DoctorsImg/DrImg17.png";

import Demo from "../assets/DoctorsImg/DrImg01.jpeg";
// import DrImg11 from "../assets/DoctorsImg/DrImg11.jpg";

const DrInHospital = () => {
  return (
    <div>
      {/* page banner start */}
      <div className="titlebanner-container">
        <img src={banner} className="titlebanner-img" />
        <div className="titlebanner-content">
          <h1 className="titlebanner-title drtitle">Our Doctors In Hospital</h1>
        </div>
      </div>
      {/* page banner end */}
      <section className="HD-container">
        <div className="HD-inner-container">
          <h1>Our Dedicated Team of Doctors</h1>
          <p>
            At Evan Hospital, we take pride in our team of highly skilled and
            compassionate doctors, committed to providing exceptional care to
            every patient. With expertise across a wide range of medical
            specialties, our doctors are here to ensure you receive the best
            treatment, personalized to your health needs.
          </p>
          <div className="our-doctors-container">
            <DoctorsCard
              img={DrImg1}
              name="Dr Pankaj Jain"
              degree="MBBS, DM, FCCP"
              destination="(General Physician)"
            />
            <DoctorsCard
              img={DrImg2}
              name="Dr Shobit Tomar"
              degree="MBBS, MD, DM"
              destination="(Cardiologist)"
            />
            <DoctorsCard
              img={DrImg3}
              name="Dr R.B. Singh"
              degree="MBBS, D-CARD"
              destination="(Sr. Cardiologist)"
            />
            <DoctorsCard
              img={DrImg4}
              name="Dr Vipin Deo Tiwari"
              degree="MBBS, MD"
              destination="(Pulmonologist)"
            />
            <DoctorsCard
              img={DrImg5}
              name="Dr Rakesh Khurana"
              degree="MBBS, MS"
              destination="(General Surgery & Lap Surgery)"
            />
            <DoctorsCard
              img={DrImg6}
              name="Dr Nidhi"
              degree="MBBS, MS"
              destination="(Gynecologist)"
            />
            <DoctorsCard
              img={DrImg7}
              name="Dr Faisal Shadab"
              degree="MBBS, DNB"
              destination="(Family Medicine)"
            />
            <DoctorsCard
              img={DrImg8}
              name="Dr Akshi Singhal"
              degree="MBBS, MS"
              destination="(ENT & HNS)"
            />
            <DoctorsCard
              img={DrImg9}
              name="Dr Raman Jindal"
              degree="MBBS, MS"
              destination="(Orthopedic)"
            />
            <DoctorsCard
              img={DrImg10}
              name="Dr Anu Aggarwal"
              degree="MBBS, DNB"
              destination="(Orthopedic)"
            />
            <DoctorsCard
              img={DrImg11}
              name="Dr Zubair Khan"
              degree="MBBS, D-Ortho, DNB"
              destination="(Orthopedic)"
            />
            <DoctorsCard
              img={DrImg12}
              name="Dr Archit Singhal"
              degree="BPT, MPT"
              destination="(Physiotheraphy)"
            />
            <DoctorsCard
              img={DrImg13}
              name="Dr Pankaj Bohra"
              degree="MBBS, MD, DM"
              destination="(Cardiology)"
            />
            <DoctorsCard
              img={DrImg14}
              name="Dr Sagar Narang"
              degree="MBBS, MD"
              destination="(Pediatrician)"
            />
            <DoctorsCard
              img={DrImg15}
              name="Dr Vijay Kumar"
              degree="BDS, MDS"
              destination="(ORAL & MaxiloFacial)"
            />
            <DoctorsCard
              img={DrImg16}
              name="Dr Manish Mahajan"
              degree="MBBS, MD, DM"
              destination="(Nephrology)"
            />
            <DoctorsCard
              img={Demo}
              name="Dr Virendra Kumar Tapparwal"
              degree="MBBS, MD (Pathologist)"
              destination="(Pathologist)"
            />
            <DoctorsCard
              img={Demo}
              name="Dr G. Sharma"
              degree="MBBS, MD (Clinical Oncology)"
              destination="(Medical Oncology)"
            />
            <DoctorsCard
              img={DrImg17}
              name="Dr Sanjeev Kumar Dubey"
              degree="MBBS"
              destination="(Physician)"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DrInHospital;
