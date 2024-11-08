import React from "react";
import DoctorsCard from "../components/DoctorsCard";
import "../styles/Home.css";
import DrImg01 from "../assets/DoctorsImg/DrImg01.jpeg";
import "../components/TitleBanner.css";
import banner from "../assets/AboutPage/doctorbanner.jpg";

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
              img={DrImg01}
              name="Dr Rishikesh"
              destination="(MBBS, MD)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Dr Rishikesh"
              destination="(MBBS, MD)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Dr Rishikesh"
              destination="(MBBS, MD)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Dr Rishikesh"
              destination="(MBBS, MD)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Dr Rishikesh"
              destination="(MBBS, MD)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Dr Rishikesh"
              destination="(MBBS, MD)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Dr Rishikesh"
              destination="(MBBS, MD)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Dr Rishikesh"
              destination="(MBBS, MD)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Dr Rishikesh"
              destination="(MBBS, MD)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Dr Rishikesh"
              destination="(MBBS, MD)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Dr Rishikesh"
              destination="(MBBS, MD)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Dr Rishikesh"
              destination="(MBBS, MD)"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DrInHospital;
