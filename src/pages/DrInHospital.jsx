import React from "react";
import DoctorsCard from "../components/DoctorsCard";
import "../styles/Home.css";
import "../components/TitleBanner.css";
import banner from "../assets/AboutPage/doctorbanner.jpg";
import DrImg1 from "../assets/DoctorsImg/DrImg1.png";
import DrImg2 from "../assets/DoctorsImg/DrImg2.jpg";
import DrImg3 from "../assets/DoctorsImg/DrImg3.jpg";
import DrImg4 from "../assets/DoctorsImg/DrImg4.jpg";
import DrImg5 from "../assets/DoctorsImg/DrImg5.png";
// import DrImg6 from "../assets/DoctorsImg/DrImg6.jpg";
import DrImg7 from "../assets/DoctorsImg/DrImg7.jpeg";
import DrImg8 from "../assets/DoctorsImg/DrImg8.jpeg";
import DrImg9 from "../assets/DoctorsImg/DrImg9.jpg";
import DrImg10 from "../assets/DoctorsImg/DrImg10.jpg";
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
              img={DrImg7}
              name="Dr Nidhi"
              degree="MBBS, MS"
              destination="(Gynecologist)"
            />
            <DoctorsCard
              img={DrImg8}
              name="Dr Faisal Shadab"
              degree="MBBS, DNB"
              destination="(Family Medicine)"
            />
            <DoctorsCard
              img={DrImg9}
              name="Dr Akshi Singhal"
              degree="MBBS, MS"
              destination="(ENT & HNS)"
            />
            <DoctorsCard
              img={Demo}
              name="Dr Raman Jindal"
              degree="MBBS, MS"
              destination="(Orthopedic)"
            />
            <DoctorsCard
              img={Demo}
              name="Dr Anu Aggarwal"
              degree="MBBS, DNB"
              destination="(Orthopedic)"
            />
            <DoctorsCard
              img={Demo}
              name="Dr Zubair Khan"
              degree="MBBS, D-Ortho, DNB"
              destination="(Orthopedic)"
            />
            <DoctorsCard
              img={DrImg10}
              name="Dr Archit Singhal"
              degree="BPT, MPT"
              destination="(Physiotheraphy)"
            />
            <DoctorsCard
              img={Demo}
              name="Dr Pankaj Bohra"
              degree="MBBS, MD, DM"
              destination="(Cardiology)"
            />
            <DoctorsCard
              img={Demo}
              name="Dr Sagar Narang"
              degree="MBBS, MD"
              destination="(Pediatrician)"
            />
            <DoctorsCard
              img={Demo}
              name="Dr Vijay Kumar"
              degree="BDS, MDS"
              destination="(ORAL & MaxiloFacial)"
            />
            <DoctorsCard
              img={Demo}
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
              img={Demo}
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
