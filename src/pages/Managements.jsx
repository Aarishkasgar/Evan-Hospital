import React from "react";
import DoctorsCard from "../components/DoctorsCard";
import "../styles/Home.css";
import DrImg01 from "../assets/DoctorsImg/DrImg01.jpeg";
import Mgt1 from "../assets/DepartmentsImg/mgt1.jpg";
import Mgt2 from "../assets/DepartmentsImg/mgt2.jpg";
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
              img={Mgt2}
              name="Manju Jain"
              destination="(Director)"
            />
            <DoctorsCard
              img={Mgt6}
              name="Dr. Pankaj"
              destination="(Medical Director)"
            />
            <DoctorsCard img={Mgt4} name="Mr. Virendra" destination="(C.O.O)" />
            <DoctorsCard
              img={Mgt5}
              name="Chanchal Gautam"
              destination="(Administrator)"
            />

            <DoctorsCard
              img={DrImg01}
              name="Pradeep Gupta"
              destination="(HR)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Varun"
              destination="(Operation Manager)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Arvind Dhiman"
              destination="(Operation Manager)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Dr Archit Singhal"
              destination="(Head of Home HealthCare)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Sana"
              destination="(Nursing Head)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Priya Kakran"
              destination="(Reception Manager)"
            />
            <DoctorsCard img={DrImg01} name="Rizwan" destination="(TPA Head)" />
            <DoctorsCard
              img={DrImg01}
              name="Neha Tirkey"
              destination="(Central Supply)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Aarish"
              destination="(Head of IT)"
            />
            <DoctorsCard img={DrImg01} name="Vikas" destination="(Maintance)" />
            <DoctorsCard
              img={DrImg01}
              name="Rahul"
              destination="(Head of fire)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Mehkar"
              destination="(Ambulance)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Vinay"
              destination="(Medical Store)"
            />
            <DoctorsCard img={DrImg01} name="Rekha" destination="(Canteen)" />
            <DoctorsCard
              img={DrImg01}
              name="N/A"
              destination="(Housekeeping)"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Managements;
