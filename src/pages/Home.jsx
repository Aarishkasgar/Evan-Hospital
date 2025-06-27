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
import Gynecology from "../assets/Obstetrics And Gynaecology.svg";
import ent from "../assets/ent.svg";
import InternalMedicine from "../assets/speciality.svg";
import Surgary from "../assets/surgary.svg";
import { useNavigate } from "react-router-dom";
import ProjectFacts from "../components/ProjectFacts";
import evanBuilding from "../assets/evan-building.jpg";
import CounterAwardIcon from "../assets/Counter-Award-icon.png";
import CounterHeartIcon from "../assets/counter-Heart-icon.png";
import CounterHeldPatientsIcon from "../assets/counter-held-patients-icon.png";
import CounterDoctorIcon from "../assets/countr-doctor-icon.png";
import DoctorsCard from "../components/DoctorsCard";
// docot images
import DrImg1 from "../assets/DoctorsImg/DrImg01.png";
import DrImg2 from "../assets/DoctorsImg/DrImg02.jpg";
import DrImg3 from "../assets/DoctorsImg/DrImg03.jpeg";
import DrImg4 from "../assets/DoctorsImg/DrImg04.jpg";
import DrImg5 from "../assets/DoctorsImg/DrImg05.png";
import DrImg6 from "../assets/DoctorsImg/DrImg06.jpeg";
// import DrImg1 from "../assets/DoctorsImg/DrImg1.png";
// import DrImg3 from "../assets/DoctorsImg/DrImg3.jpg";
// import DrImg7 from "../assets/DoctorsImg/DrImg7.jpeg";
// import DrImg8 from "../assets/DoctorsImg/DrImg8.jpeg";
// import DrImg9 from "../assets/DoctorsImg/DrImg9.jpg";
// import DrImg4 from "../assets/DoctorsImg/DrImg4.jpg";
import BookAppointment from "../components/BookAppointment";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import NearMeIcon from "@mui/icons-material/NearMe";
// import Accreditation from "../assets/Accreditation.webp";
import Testimonials from "../components/Testimonials";
import images1 from "../assets/TPA/images-1.jpg";
import images2 from "../assets/TPA/images-2.jpg";
import images3 from "../assets/TPA/images-3.jpg";
import images4 from "../assets/TPA/images-4.jpg";
import images5 from "../assets/TPA/images-5.jpg";
import images6 from "../assets/TPA/images-6.jpg";
import images7 from "../assets/TPA/images-7.jpg";
import images8 from "../assets/TPA/images-8.jpg";
import images9 from "../assets/TPA/images-9.jpg";
import images10 from "../assets/TPA/images-10.jpg";
import images11 from "../assets/TPA/images-11.jpg";
import images12 from "../assets/TPA/images-12.jpg";
import images13 from "../assets/TPA/images-13.jpg";
import images14 from "../assets/TPA/images-14.jpg";
import images15 from "../assets/TPA/images-15.jpg";
import images16 from "../assets/TPA/images-16.jpg";
import images17 from "../assets/TPA/images-17.jpg";
import images18 from "../assets/TPA/images-18.jpg";
import images19 from "../assets/TPA/images-19.jpg";
import WhyChooseUs from "../assets/whychooseus.webp";
import NoImg from "../assets/DoctorsImg/NoImg.jpeg";
// management images
import Mgt1 from "../assets/DepartmentsImg/MgtImg01.jpg";
import Mgt2 from "../assets/DepartmentsImg/MgtImg02.jpg";
import Mgt3 from "../assets/DepartmentsImg/MgtImg03.jpg";
import Mgt4 from "../assets/DepartmentsImg/MgtImg04.jpg";

// counsellor image
import Mgt7 from "../assets/DepartmentsImg/MgtImg07.jpg";
// import Nalini from "../assets/DepartmentsImg/nalini.jpg";
// rmo
import Rmo1 from "../assets/DepartmentsImg/rmo1.jpg";
import Rmo2 from "../assets/DepartmentsImg/rmo2.jpg";
import Rmo3 from "../assets/DepartmentsImg/rmo3.jpg";
// import Rmo4 from "../assets/DepartmentsImg/rmo4.jpg";
import Rmo5 from "../assets/DepartmentsImg/rmo5.jpg";
// import Rmo6 from "../assets/DepartmentsImg/rmo6.jpg";
// import Rmo7 from "../assets/DepartmentsImg/rmo7.jpg";
// nurse images
import Nurse1 from "../assets/NurseImg/nurse1.jpg";
import Nurse2 from "../assets/NurseImg/nurse2.jpg";
// import Nurse3 from "../assets/NurseImg/nurse3.jpg";
// import Nurse4 from "../assets/NurseImg/nurse4.jpg";
import Nurse5 from "../assets/NurseImg/nurse5.jpg";
import Nurse6 from "../assets/NurseImg/nurse6.jpg";

const Home = () => {
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/cardiology");
  }

  function orthoHandler() {
    navigate("/orthopedics");
  }
  function neuroHandler() {
    navigate("/neurology");
  }
  function pulmoHandler() {
    navigate("/pulmonology");
  }
  function surgeryHandler() {
    navigate("/surgery");
  }
  function gyneHandler() {
    navigate("/gynecology");
  }
  function entHandler() {
    navigate("/ENT");
  }
  function internalHandler() {
    navigate("/internal-medicins");
  }

  function moveAboutHandler() {
    navigate("/about");
  }

  function moveDoctorHandler() {
    navigate("/dr-in-hospital");
  }
  function moveManagementHandler() {
    navigate("/managements");
  }
  function moveCounsellorHandler() {
    navigate("/counsellor");
  }
  function moveRmoHandler() {
    navigate("/rmo");
  }
  function moveNursesHandler() {
    navigate("/nurses");
  }

  function movetpaHandler() {
    navigate("/insurance-tpa");
  }

  return (
    <>
      <div className="hero-container">
        <div className="hero-inner-container">
          <div className="hero-content-box">
            <h3>Welcome To</h3>
            <h1>
              Evan Multi Speciality Hospital, <br />
              Muzaffarnagar
            </h1>

            <p className="hero-icon">
              <AccessTimeFilledIcon
                style={{ fontSize: 35 }}
                className="timeicon-size"
              />
              Open 24/7
            </p>
            <p className="hero-icon-2">
              <a
                href="https://maps.app.goo.gl/VEYqE8XpBKEDTF5b6"
                className="getLink"
              >
                <NearMeIcon style={{ fontSize: 35 }} />
                Get Directions
              </a>
              | Call us +91 70603-11156
            </p>
            <button className="hero-btn" onClick={moveDoctorHandler}>
              Find a Doctor
            </button>
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

      {/* home about section start */}

      <div>
        <BookAppointment />
      </div>

      <div className="H-about-container">
        <div className="H-about-inner-container">
          <div className="H-about-left">
            <h2>What We Do</h2>
            <h1>Evan Multi Speciality Hospital</h1>
            <p>
              At Evan Multi Speciality Hospital, Muzaffarnagar, we are committed
              to delivering exceptional healthcare with a patient-focused
              approach. As a premier multispecialty hospital in the region, we
              provide advanced medical services across 40+ specialties,
              including Cardiology, Neurology, Oncology, Orthopedics,
              Gastroenterology, and more. Our hospital combines modern
              facilities, the latest medical technology, and a skilled team of
              doctors to ensure precise diagnoses and effective treatments for
              all health concerns. We emphasize preventive care, early
              detection, and individualized treatment plans, always prioritizing
              patient well-being. From routine check-ups to complex surgeries,
              our facility is equipped to meet a broad spectrum of medical
              needs, maintaining the highest standards of safety and patient
              satisfaction. With 24/7 emergency services, sophisticated surgical
              procedures, and a comprehensive approach to health and wellness,
              we strive to be the preferred healthcare destination for
              Muzaffarnagar and nearby regions.
            </p>
          </div>
          <div className="H-about-right">
            {/* <img src={Accreditation} /> */}
          </div>
        </div>
      </div>

      {/* home second page start */}
      <div className="home-specialities-container">
        <div className="home-specialities-left">
          <div className="home-specialities-title">
            <h1>Specialities & Procedures</h1>
            <h2>Specialities</h2>
          </div>
          <div className="SpecialitiesBoxes">
            <div className="SpecialitiesBox1">
              <div onClick={clickHandler}>
                <SpecialitiesBox img={Cardia} h1="Cardiac Science" />
              </div>
              <div onClick={orthoHandler}>
                <SpecialitiesBox img={Orthoimg} h1="Orthopedics" />
              </div>
              <div onClick={neuroHandler}>
                <SpecialitiesBox img={Neurosciences} h1="Neurosciences" />
              </div>
              <div onClick={pulmoHandler}>
                <SpecialitiesBox img={Pulmonology} h1="Pulmonology" />
              </div>

              {/* <SpecialitiesBox img={Cardia} h1="Surgery" /> */}
            </div>
            <div className="SpecialitiesBox2">
              <div onClick={surgeryHandler}>
                <SpecialitiesBox img={Surgary} h1="Surgery" />
              </div>
              <div onClick={gyneHandler}>
                <SpecialitiesBox img={Gynecology} h1="Gynecology" />
              </div>
              <div onClick={entHandler}>
                <SpecialitiesBox img={ent} h1="ENT" />
              </div>
              <div onClick={internalHandler}>
                <SpecialitiesBox
                  img={InternalMedicine}
                  h1="Internal Medicine"
                />
              </div>

              {/* <SpecialitiesBox img={Cardia} h1="Nephrology" /> */}
            </div>
          </div>
          {/* <div className="HS-viewBtn">
            <button
              onClick={clickAllHandler1}
              className="Home-Specialities-viewButton"
            >
              View All &gt;
            </button>
          </div> */}
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
              h2="2000 +"
              p="Successful Surgeries"
            />
          </div>
          <div>
            <ProjectFacts
              img={CounterDoctorIcon}
              h2="30 +"
              p="Medical Experts"
            />
          </div>
          <div>
            <ProjectFacts
              img={CounterHeldPatientsIcon}
              h2="20000 +"
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

      {/* Why choose us section start */}
      <section id="why-choose-us">
        <div className="why-choose-us">
          <div className="why-choose-us-left">
            <img src={WhyChooseUs} />
          </div>
          <div className="why-choose-us-right">
            <h2>Why Choose Us</h2>
            <h1>We are Alwayes open for Your Health Services</h1>
            <p>
              We are a team of dedicated medical professionals who are committed
              to providing the highest level of care to our patients. We
              understand that every patient is unique and requires a
              personalized approach to their healthcare needs.
            </p>
          </div>
        </div>
      </section>
      {/* Why choose us section end */}

      {/* Hopital welcome section start */}
      <section id="hospital-welcome-container">
        <div className="hospital-welcome-container">
          <h1>
            Welcome To
            <span className="evan-name-color">
              &nbsp;Evan Multi Speciality Hospital
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

      {/* Our Management Section start */}
      <section className="HD-container">
        <div className="HD-inner-container">
          <h1>Managements</h1>
          <p>Meet Our Evan Managements</p>
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
          </div>
          <button
            className="hospital-welcome-button"
            onClick={moveManagementHandler}
          >
            View All
          </button>
        </div>
      </section>
      {/* Our Management section end */}

      {/* Our doctors section start */}

      <section className="HD-container">
        <div className="HD-inner-container">
          <h1>Doctors</h1>
          <p>Meet Our Experts Doctors</p>
          <div className="our-doctors-container">
            <DoctorsCard
              img={DrImg1}
              name="Dr Pankaj Jain"
              degree="MBBS, DM, FCCP"
              destination="(General Physician)"
            />
            <DoctorsCard
              img={DrImg2}
              name="Dr Shobit Tomar"
              degree="MBBS, MD, DM"
              destination="(Cardiologist)"
            />
            <DoctorsCard
              img={DrImg3}
              name="Dr R.B. Singh"
              degree="MBBS, D-CARD"
              destination="(Sr. Cardiologist)"
            />
            <DoctorsCard
              img={DrImg4}
              name="Dr Vipin Deo Tiwari"
              degree="MBBS, MD"
              destination="(Pulmonologist)"
            />
            <DoctorsCard
              img={DrImg5}
              name="Dr Rakesh Khurana"
              degree="MBBS, MS"
              destination="(General Surgery & Lap Surgery)"
            />
            <DoctorsCard
              img={DrImg6}
              name="Dr Nidhi"
              degree="MBBS, MS"
              destination="(Gynecologist)"
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

      {/* Our Counsellor section start */}
      <section className="HD-container">
        <div className="HD-inner-container">
          <h1>Counsellor</h1>
          <p>Meet Our Evan Counsellor</p>
          <div className="our-doctors-container">
            <DoctorsCard
              img={Mgt7}
              name="Varun Prakash"
              destination="(Counsellor)"
            />
          </div>
          <button
            className="hospital-welcome-button"
            onClick={moveCounsellorHandler}
          >
            View All
          </button>
        </div>
      </section>
      {/* Our counsellor section end */}

      {/* Our RMO section start */}
      <section className="HD-container">
        <div className="HD-inner-container">
          <h1>Resident Medical Officer</h1>
          <p>Meet Our Evan RMO</p>
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
          <button className="hospital-welcome-button" onClick={moveRmoHandler}>
            View All
          </button>
        </div>
      </section>
      {/* Our RMO section end */}

      {/* Our Nurse Section start */}
      <section className="HD-container">
        <div className="HD-inner-container">
          <h1>Nurses</h1>
          <p>Meet Our Evan Nurses</p>
          <div className="our-doctors-container">
            <DoctorsCard img={Nurse1} name="Sana" destination="(Head)" />
            <DoctorsCard
              img={Nurse2}
              name="Deepanshi"
              destination="(Junior Head)"
            />
            {/* <DoctorsCard img={Nurse3} name="Himanshu" destination="(Nurse)" /> */}
            {/* <DoctorsCard img={Nurse4} name="Sidra" destination="(Nurse)" /> */}
            <DoctorsCard img={Nurse5} name="Sristi" destination="(Nurse)" />
            <DoctorsCard img={Nurse6} name="Rida" destination="(Nurse)" />
          </div>
          <button
            className="hospital-welcome-button"
            onClick={moveNursesHandler}
          >
            View All
          </button>
        </div>
      </section>
      {/* Our Nurse section end */}

      {/* Tpa section start */}

      <section className="TPA-container">
        <div className="TPA-inner-container">
          <div className="TPA-title">
            <h3>INSURANCE</h3>
            <h1>TPA & Insurance</h1>
          </div>
          <div className="TPA-logo">
            <marquee behavior="scroll" direction="right" scrollamount="15">
              <img src={images1} />
              <img src={images2} />
              <img src={images3} />
              <img src={images4} />
              <img src={images5} />
              <img src={images6} />
              <img src={images7} />
              <img src={images8} />
              <img src={images9} />
              <img src={images10} />
              <img src={images11} />
              <img src={images12} />
              <img src={images13} />
              <img src={images14} />
              <img src={images15} />
              <img src={images16} />
              <img src={images17} />
              <img src={images18} />
              <img src={images19} />
            </marquee>
          </div>
          <button className="hospital-welcome-button" onClick={movetpaHandler}>
            View More
          </button>
        </div>
      </section>

      <div>
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
