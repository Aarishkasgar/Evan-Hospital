import React from "react";
import DoctorsCard from "../components/DoctorsCard";
import "../styles/Home.css";
import NoImg from "../assets/DoctorsImg/NoImg.jpeg";
import Mgt1 from "../assets/DepartmentsImg/MgtImg01.jpg";
import Mgt2 from "../assets/DepartmentsImg/MgtImg02.jpg";
import Mgt3 from "../assets/DepartmentsImg/MgtImg03.jpg";
import Mgt4 from "../assets/DepartmentsImg/MgtImg04.jpg";
import Mgt5 from "../assets/DepartmentsImg/MgtImg05.jpg";
import Mgt6 from "../assets/DepartmentsImg/MgtImg06.jpeg";
import Mgt7 from "../assets/DepartmentsImg/MgtImg07.jpg";
import Mgt8 from "../assets/DepartmentsImg/MgtImg08.jpg";
import Mgt9 from "../assets/DepartmentsImg/MgtImg09.jpg";
import Mgt10 from "../assets/DepartmentsImg/MgtImg10.jpg";
import Mgt11 from "../assets/DepartmentsImg/MgtImg11.jpg";
import Mgt12 from "../assets/DepartmentsImg/MgtImg12.jpg";
import Mgt13 from "../assets/DepartmentsImg/MgtImg13.jpg";
import Mgt14 from "../assets/DepartmentsImg/MgtImg14.png";
import Mgt15 from "../assets/DepartmentsImg/MgtImg15.jpg";
import Mgt16 from "../assets/DepartmentsImg/MgtImg16.jpg";
import Mgt17 from "../assets/DepartmentsImg/MgtImg17.jpg";
import Mgt18 from "../assets/DepartmentsImg/MgtImg18.jpg";
import Mgt19 from "../assets/DepartmentsImg/MgtImg19.jpeg";
import Mgt20 from "../assets/DepartmentsImg/MgtImg20.jpg";

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
              img={Mgt3}
              name="Dr. Pankaj"
              destination="(Medical Director)"
            />
            <DoctorsCard
              img={Mgt4}
              name="Mr. Virendra Dhiman"
              destination="(C.O.O)"
            />
            <DoctorsCard
              img={Mgt5}
              name="Chanchal Gautam"
              destination="(Administrator)"
            />

            <DoctorsCard img={Mgt6} name="Pradeep Gupta" destination="(HR)" />
            <DoctorsCard
              img={Mgt7}
              name="Varun Prakash"
              destination="(Operation Manager)"
            />
            <DoctorsCard
              img={Mgt8}
              name="Arvind Dhiman"
              destination="(Operation Manager)"
            />
            <DoctorsCard
              img={Mgt9}
              name="Dr Archit Singhal"
              destination="(Head of Home HealthCare)"
            />
            <DoctorsCard img={Mgt10} name="Sana" destination="(Nursing Head)" />
            <DoctorsCard
              img={Mgt11}
              name="Priya Kakran"
              destination="(Reception Manager)"
            />
            <DoctorsCard img={Mgt12} name="Rizwan" destination="(TPA Head)" />
            <DoctorsCard
              img={Mgt13}
              name="Neha Tirkey"
              destination="(Central Supply)"
            />
            <DoctorsCard
              img={Mgt14}
              name="Aarish Kasgar"
              destination="(Head of IT)"
            />
            <DoctorsCard
              img={Mgt15}
              name="Pankaj"
              destination="(Head of Account)"
            />
            <DoctorsCard img={Mgt16} name="Vikas" destination="(Maintance)" />
            <DoctorsCard
              img={Mgt17}
              name="Rahul"
              destination="(Head of fire)"
            />
            <DoctorsCard img={Mgt18} name="Mehkar" destination="(Ambulance)" />
            <DoctorsCard
              img={Mgt19}
              name="Vinay Dhall"
              destination="(Medical Store)"
            />
            <DoctorsCard img={Mgt20} name="Rekha" destination="(Canteen)" />
            <DoctorsCard img={NoImg} name="N/A" destination="(Housekeeping)" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Managements;
