import React from "react";
import DoctorsCard from "../components/DoctorsCard";
import "../styles/Home.css";
import DrImg01 from "../assets/DoctorsImg/DrImg01.jpeg";
import Mgt1 from "../assets/DepartmentsImg/mgt1.jpg";
// import Mgt2 from "../assets/DepartmentsImg/mgt2.jpg";
import Mgt3 from "../assets/DepartmentsImg/mgt3.jpg";
import Mgt4 from "../assets/DepartmentsImg/mgt4.jpg";
import Mgt5 from "../assets/DepartmentsImg/mgt5.jpg";
import Mgt6 from "../assets/DepartmentsImg/mgt6.jpg";
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
              img={Mgt1}
              name="Mr. Vijay Jain"
              destination="(C.E.O)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Manju Jain"
              destination="(Director)"
            />
            <DoctorsCard
              img={Mgt3}
              name="Mr. Vijay Jain (Dalda)"
              destination="(Director)"
            />
            <DoctorsCard img={Mgt4} name="Mr. Virendra" destination="(C.O.O)" />
            <DoctorsCard
              img={Mgt5}
              name="Chanchal Gautam"
              destination="(Administrator)"
            />

            <DoctorsCard
              img={Mgt6}
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
