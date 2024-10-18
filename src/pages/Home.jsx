import React from "react";
import "../styles/Home.css";
// import banner from "../assets/banner-n.jpg";
import HeroCard from "../components/HeroCard";
import SpecialitiesBox from "../components/SpecialitiesBox";
import healthimg from "../assets/cardia.svg";
import doctorConsultImg from "../assets/doctor-consult-illustration.svg";
import CancerCareLogo from "../assets/cancer care oncology.svg";

const Home = () => {
  return (
    <>
      <div className="hero-container">
        {/* <img src={banner} alt="evan-building" className="hero-banner" /> */}
        <div className="hero-inner-container">
          <div className="inner-box">
            <h1 className="hero-title">Schedule Your Appointment Online</h1>
            <div className="appointment-box">
              <input type="text" />
              <input type="text" />
              <button>Book an Appointment</button>
            </div>
            <div className="hero-cards">
              <HeroCard img={healthimg} h1="Health Checkup" />
              <HeroCard img={healthimg} h1="Health Checkup" />
              <HeroCard img={healthimg} h1="Health Checkup" />
              <HeroCard img={healthimg} h1="Health Checkup" />
              <HeroCard img={healthimg} h1="Health Checkup" />
            </div>
          </div>
        </div>
      </div>

      {/* home second page */}

      <div className="home-specialities-container">
        <div className="home-specialities-left">
          <h1>Specialities</h1>
          <div className="SpecialitiesBoxes">
            <div className="SpecialitiesBox1">
              <SpecialitiesBox
                img={CancerCareLogo}
                h1="Cancer Care / Oncology"
              />
              <SpecialitiesBox
                img={CancerCareLogo}
                h1="Cancer Care / Oncology"
              />
              <SpecialitiesBox
                img={CancerCareLogo}
                h1="Cancer Care / Oncology"
              />
              <SpecialitiesBox
                img={CancerCareLogo}
                h1="Cancer Care / Oncology"
              />
              <SpecialitiesBox
                img={CancerCareLogo}
                h1="Cancer Care / Oncology"
              />
            </div>
            <div className="SpecialitiesBox2">
              <SpecialitiesBox
                img={CancerCareLogo}
                h1="Cancer Care / Oncology"
              />
              <SpecialitiesBox
                img={CancerCareLogo}
                h1="Cancer Care / Oncology"
              />
              <SpecialitiesBox
                img={CancerCareLogo}
                h1="Cancer Care / Oncology"
              />
              <SpecialitiesBox
                img={CancerCareLogo}
                h1="Cancer Care / Oncology"
              />
              <SpecialitiesBox
                img={CancerCareLogo}
                h1="Cancer Care / Oncology"
              />
            </div>
          </div>
        </div>
        <div className="home-specialities-right">
          <img src={doctorConsultImg} height={500} />
        </div>
      </div>
    </>
  );
};

export default Home;
