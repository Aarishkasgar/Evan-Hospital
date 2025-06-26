import React from "react";
import DoctorsCard from "../components/DoctorsCard";
import "../styles/Home.css";
// import DrImg01 from "../assets/DoctorsImg/DrImg01.jpeg";
import NoImg from "../assets/DoctorsImg/NoImg.jpeg";
import "../components/TitleBanner.css";
import banner from "../assets/AboutPage/doctorbanner.jpg";
import Rmo1 from "../assets/DepartmentsImg/rmo1.jpg";
import Rmo2 from "../assets/DepartmentsImg/rmo2.jpg";
import Rmo3 from "../assets/DepartmentsImg/rmo3.jpg";
// import Rmo4 from "../assets/DepartmentsImg/rmo4.jpg";
import Rmo5 from "../assets/DepartmentsImg/rmo5.jpg";

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
            At Evan Hospital, our Resident Medical Officer (RMO) plays a crucial
            role in ensuring continuous and high-quality patient care. As a key
            link between patients, nurses, and specialists, the RMO provides
            round-the-clock medical supervision, promptly addressing patient
            needs and emergencies. With a deep commitment to clinical
            excellence, patient safety, and compassionate care, our RMO ensures
            that every patient receives timely attention and medical support
            throughout their stay.
          </p>
          <div className="our-doctors-container">
            <DoctorsCard
              img={Rmo1}
              name="Dr. Faisal"
              destination="(Resident Medical Officer)"
            />
            <DoctorsCard
              img={Rmo2}
              name="Dr. Farman"
              destination="(Resident Medical Officer)"
            />
            <DoctorsCard
              img={Rmo3}
              name="Dr. Shamoon"
              destination="(Resident Medical Officer)"
            />
            <DoctorsCard
              img={NoImg}
              name="N/A"
              destination="(Resident Medical Officer)"
            />
            <DoctorsCard
              img={Rmo5}
              name="Dr. Dilshad"
              destination="(Resident Medical Officer)"
            />
            <DoctorsCard
              img={NoImg}
              name="Dr. Robin"
              destination="(Resident Medical Officer)"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rmo;
