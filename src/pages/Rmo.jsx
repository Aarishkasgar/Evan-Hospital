import React from "react";
import DoctorsCard from "../components/DoctorsCard";
import "../styles/Home.css";
import DrImg01 from "../assets/DoctorsImg/DrImg01.jpeg";
import "../components/TitleBanner.css";
import banner from "../assets/AboutPage/doctorbanner.jpg";

const Rmo = () => {
  return (
    <div>
      {/* page banner start */}
      <div className="titlebanner-container">
        <img src={banner} className="titlebanner-img" />
        <div className="titlebanner-content">
          <h1 className="titlebanner-title">Evan Hospital</h1>
          <span className="rmo-title">Resident Medical Officer</span>
        </div>
      </div>
      {/* page banner end */}
      <section className="HD-container">
        <div className="HD-inner-container">
          <h1>Our Resident Medical Officer (RMO)</h1>
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
              img={DrImg01}
              name="Dr. Hussain"
              destination="(Resident Medical Officer)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Dr. Farman"
              destination="(Resident Medical Officer)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Dr. Faisal"
              destination="(Resident Medical Officer)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Dr. Shamoon"
              destination="(Resident Medical Officer)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Dr. Yusuf"
              destination="(Resident Medical Officer)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Dr. Dilshad"
              destination="(Resident Medical Officer)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Dr. Nisar"
              destination="(Resident Medical Officer)"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rmo;
