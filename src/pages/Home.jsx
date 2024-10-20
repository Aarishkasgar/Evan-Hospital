import React from "react";
import "../styles/Home.css";
// import banner from "../assets/banner-n.jpg";
import HeroCard from "../components/HeroCard";
import SpecialitiesBox from "../components/SpecialitiesBox";
import healthimg from "../assets/cardia.svg";
import doctorConsultImg from "../assets/doctor-consult-illustration.svg";
import Cardia from "../assets/cardia.svg";
import Orthoimg from "../assets/Orthopaedics.svg";
import Neurosciences from "../assets/Neurosciences.svg";
import Pulmonology from "../assets/pulmonology.svg";
import { useNavigate } from "react-router-dom";
import ProjectFacts from "../components/ProjectFacts";
import evanBuilding from "../assets/evan-building.png";

const Home = () => {
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/cardiology");
  }

  function clickAllHandler1() {
    navigate("/specialities");
  }

  function moveAboutHandler() {
    navigate("/about");
  }
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

      {/* home second page start */}

      <div className="home-specialities-container">
        <div className="home-specialities-left">
          <div className="home-specialities-title">
            <h1>Specialities</h1>
            <h1>Procedures</h1>
          </div>
          <div className="SpecialitiesBoxes">
            <div className="SpecialitiesBox1">
              <div onClick={clickHandler}>
                <SpecialitiesBox img={Cardia} h1="Cardiac Science" />
              </div>
              <SpecialitiesBox
                img={Orthoimg}
                h1="Orthopedics & Joint Replacement"
              />
              <SpecialitiesBox img={Neurosciences} h1="Neurosciences" />
              <SpecialitiesBox img={Pulmonology} h1="Pulmonology" />
              <button
                onClick={clickAllHandler1}
                className="Home-Specialities-viewButton"
              >
                View All &gt;
              </button>
              {/* <SpecialitiesBox img={Cardia} h1="Surgery" /> */}
            </div>
            <div className="SpecialitiesBox2">
              <SpecialitiesBox img={Cardia} h1="Anaesthesia" />
              <SpecialitiesBox img={Cardia} h1="Gynecology" />
              <SpecialitiesBox img={Cardia} h1="ENT" />
              <SpecialitiesBox img={Cardia} h1="Dialysis" />
              <button
                onClick={clickAllHandler1}
                className="Home-Specialities-viewButton"
              >
                View All &gt;
              </button>
              {/* <SpecialitiesBox img={Cardia} h1="Nephrology" /> */}
            </div>
          </div>
        </div>
        <div className="home-specialities-right">
          <img src={doctorConsultImg} className="hsr-img" />
        </div>
      </div>

      {/* Project Facts or Counter page start */}

      <section id="project-facts-container">
        <div className="project-facts-container">
          <div>
            <ProjectFacts img={Cardia} h2="20000 +" p="Successful Surgeries" />
          </div>
          <div>
            <ProjectFacts img={Cardia} h2="50 +" p="Medical Experts" />
          </div>
          <div>
            <ProjectFacts img={Cardia} h2="100000 +" p="Families Healed" />
          </div>
          <div>
            <ProjectFacts img={Cardia} h2="10 +" p="Awards & Accreditations" />
          </div>
        </div>
      </section>
      {/* Project Facts or Counter page end */}

      {/* Hopital welcome section start */}
      <section id="hospital-welcome-container">
        <div className="hospital-welcome-container">
          <h1>
            Welcome To{" "}
            <span className="evan-name-color">
              Evan Multi Speciality Hospital
            </span>
          </h1>
          <p>
            We are a multi-specialty hospital that provides a wide range of
            medical services to our patients. Our team of experienced doctors
            and medical staff are dedicated to providing the best possible care
            to our patients.
          </p>
          <img src={evanBuilding} />
          <button
            className="hospital-welcome-button"
            onClick={moveAboutHandler}
          >
            Learn More
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
