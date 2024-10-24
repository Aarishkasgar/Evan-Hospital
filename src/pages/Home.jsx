import React from "react";
import "../styles/Home.css";
// import banner from "../assets/banner-n.jpg";
// import HeroCard from "../components/HeroCard";
import SpecialitiesBox from "../components/SpecialitiesBox";
// import healthimg from "../assets/cardia.svg";
import doctorConsultImg from "../assets/doctor-consult-illustration.svg";
import Cardia from "../assets/cardia.svg";
import Orthoimg from "../assets/Orthopaedics.svg";
import Neurosciences from "../assets/Neurosciences.svg";
import Pulmonology from "../assets/pulmonology.svg";
import { useNavigate } from "react-router-dom";
import ProjectFacts from "../components/ProjectFacts";
import evanBuilding from "../assets/evan-building.jpg";
import CounterAwardIcon from "../assets/Counter-Award-icon.png";
import CounterHeartIcon from "../assets/counter-Heart-icon.png";
import CounterHeldPatientsIcon from "../assets/counter-held-patients-icon.png";
import CounterDoctorIcon from "../assets/countr-doctor-icon.png";
import DoctorsCard from "../components/DoctorsCard";
import DrImg01 from "../assets/DoctorsImg/DrImg01.jpeg";
import BookAppointment from "../components/BookAppointment";

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

  function moveDoctorHandler() {
    navigate("/dr-in-hospital");
  }
  return (
    <>
      <div className="hero-container">
        <div className="hero-inner-container">
          <div className="hero-content-box">
            <h2>Evan Multi Speciality Hospital, Muzaffarnagar</h2>
            <p>Open 24/7</p>
            <p>
              <a href="#" className="getLink">
                Get Directions
              </a>{" "}
              | Call us +91 0000000000
            </p>
            <button className="hero-btn">Find a Doctor</button>
          </div>
          <div className="hero-right-box">
            <img
              src={evanBuilding}
              alt="evan-building"
              className="hero-banner"
            />
          </div>
        </div>
      </div>

      {/* home second page start */}

      <div>
        <BookAppointment />
      </div>

      <div className="home-specialities-container">
        <div className="home-specialities-left">
          <div className="home-specialities-title">
            <h1>Specialities & Procedures</h1>
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

              {/* <SpecialitiesBox img={Cardia} h1="Surgery" /> */}
            </div>
            <div className="SpecialitiesBox2">
              <SpecialitiesBox img={Cardia} h1="Anaesthesia" />
              <SpecialitiesBox img={Cardia} h1="Gynecology" />
              <SpecialitiesBox img={Cardia} h1="ENT" />
              <SpecialitiesBox img={Cardia} h1="Dialysis" />

              {/* <SpecialitiesBox img={Cardia} h1="Nephrology" /> */}
            </div>
          </div>
          <div className="HS-viewBtn">
            <button
              onClick={clickAllHandler1}
              className="Home-Specialities-viewButton"
            >
              View All &gt;
            </button>
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
            <ProjectFacts
              img={CounterHeartIcon}
              h2="20000 +"
              p="Successful Surgeries"
            />
          </div>
          <div>
            <ProjectFacts
              img={CounterDoctorIcon}
              h2="50 +"
              p="Medical Experts"
            />
          </div>
          <div>
            <ProjectFacts
              img={CounterHeldPatientsIcon}
              h2="100000 +"
              p="Families Healed"
            />
          </div>
          <div>
            <ProjectFacts
              img={CounterAwardIcon}
              h2="10 +"
              p="Awards & Accreditations"
            />
          </div>
        </div>
      </section>
      {/* Project Facts or Counter page end */}

      {/* Hopital welcome section start */}
      <section id="hospital-welcome-container">
        <div className="hospital-welcome-container">
          <h1>
            Welcome To
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

      {/* Our doctors section start */}

      <section className="HD-container">
        <div className="HD-inner-container">
          <h1>Our Doctors</h1>
          <p>Meet Our Experts Doctors</p>
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
          </div>
          <button
            className="hospital-welcome-button"
            onClick={moveDoctorHandler}
          >
            View All Doctors
          </button>
        </div>
      </section>

      {/* Tpa section start */}

      <section className="TPA-container">
        <div className="TPA-inner-container">
          <div>
            <h3>INSURANCE</h3>
            <h1>TPA & Insurance</h1>
          </div>
          <div>
            <marquee behavior="slide" direction="right">
              evan hospital
            </marquee>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
