import React from "react";
import DoctorsCard from "../components/DoctorsCard";
import "../styles/Home.css";
import "../components/TitleBanner.css";
import banner from "../assets/AboutPage/doctorbanner.jpg";
import NoImg from "../assets/DoctorsImg/NoImg.jpeg";
import Tech01 from "../assets/DepartmentsImg/tech01.jpeg";
import Tech02 from "../assets/DepartmentsImg/tech02.jpg";
import Tech03 from "../assets/DepartmentsImg/tech03.jpeg";
import Tech05 from "../assets/DepartmentsImg/tech05.jpg";
import Tech06 from "../assets/DepartmentsImg/tech06.png";
import Tech07 from "../assets/DepartmentsImg/tech07.png";
import Tech08 from "../assets/DepartmentsImg/tech08.png";
import Tech09 from "../assets/DepartmentsImg/tech09.jpg";
// import Tech10 from "../assets/DepartmentsImg/tech10.png";

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
              At Evan Hospital, our team of skilled technicians forms the
              backbone of our advanced medical services. Trained in the latest
              technologies and diagnostic equipment, they work diligently behind
              the scenes to ensure accurate testing, smooth operations, and
              timely support for our doctors and nurses. Their expertise and
              commitment to excellence play a crucial role in delivering safe,
              efficient, and high-quality patient care every day.
            </p>
            <div className="our-doctors-container">
              <DoctorsCard
                img={Tech01}
                name="Chintoo Saini"
                degree="Lab Technician"
              />
              <DoctorsCard
                img={Tech02}
                name="Tushar Kashyap"
                degree="Lab Technician"
              />

              <DoctorsCard
                img={Tech03}
                name="Mohd Sarhan"
                degree="Lab Technician"
              />
              <DoctorsCard
                img={NoImg}
                name="Jitender Kumar"
                degree="Sample Collection"
              />
              <DoctorsCard
                img={Tech05}
                name="Harshit Tyagi"
                degree="Radiologist Technician"
              />
              <DoctorsCard
                img={Tech06}
                name="Kartik"
                degree="Radiologist Technician"
              />
              <DoctorsCard
                img={Tech07}
                name="Arun Pal"
                degree="OT Technician"
              />
              <DoctorsCard
                img={Tech08}
                name="Sagar Kumar"
                degree="OT Technician"
              />
              <DoctorsCard img={Tech09} name="Mohit Kumar" degree="Dialysis" />
              {/* <DoctorsCard
                img={Tech10}
                name="Altamash"
                degree="Cardiology Laboratory"
              /> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Technician;
