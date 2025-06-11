import React from "react";
import { useNavigate } from "react-router-dom";
import SpecialitiesBox from "../components/SpecialitiesBox";
import "../styles/Home.css";
import "../components/Specialities.css";
import Cardia from "../assets/cardia.svg";
import Orthoimg from "../assets/Orthopaedics.svg";
import Neurosciences from "../assets/Neurosciences.svg";
import Pulmonology from "../assets/pulmonology.svg";
import Gynecology from "../assets/Obstetrics And Gynaecology.svg";
import ent from "../assets/ent.svg";
import InternalMedicine from "../assets/speciality.svg";
import Surgary from "../assets/surgary.svg";

const ViewSpecialities = () => {
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
  function oncologyHandler() {
    navigate("/oncology");
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
  function dentalHandler() {
    navigate("/dental");
  }
  function homehealthcareHandler() {
    navigate("/homehealthcare");
  }
  function physiotherapyHandler() {
    navigate("/physiotherapy");
  }
  function urologyHandler() {
    navigate("/urology");
  }
  function dermatologyHandler() {
    navigate("/dermatology");
  }
  function paediatricHandler() {
    navigate("/paediatric");
  }
  function icuHandler() {
    navigate("/criticalcare");
  }

  function dialysisHandler() {
    navigate("/dialysis");
  }
  function nephroHandler() {
    navigate("/nephro");
  }
  function gastroHandler() {
    navigate("/gastro");
  }

  function emergencycareHandler() {
    navigate("/emergency-care");
  }
  function pharmacyHandler() {
    navigate("/pharmacy");
  }

  return (
    <>
      <div className="tpa-container">
        <div className="tpa-header">
          <h2>All Specialities</h2>
        </div>
      </div>
      <div className="home-specialities-container view-specialities-container">
        <div className="home-specialities-left">
          {/* <div className="home-specialities-title">
            <h1>Specialities & Procedures</h1>
            <h2>Specialities</h2>
          </div> */}
          <div className="SpecialitiesBoxes">
            {/* box 1 */}
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
              <div onClick={oncologyHandler}>
                <SpecialitiesBox img={InternalMedicine} h1="Oncology" />
              </div>
              <div onClick={dentalHandler}>
                <SpecialitiesBox img={InternalMedicine} h1="Dental" />
              </div>
              <div onClick={nephroHandler}>
                <SpecialitiesBox img={InternalMedicine} h1="Nephro" />
              </div>
            </div>

            {/* Box 2 */}
            <div className="SpecialitiesBox1">
              <div onClick={dialysisHandler}>
                <SpecialitiesBox img={InternalMedicine} h1="Dialysis" />
              </div>
              <div onClick={gastroHandler}>
                <SpecialitiesBox img={InternalMedicine} h1="Gastro" />
              </div>
              <div onClick={homehealthcareHandler}>
                <SpecialitiesBox img={InternalMedicine} h1="Home HealthCare" />
              </div>
              <div onClick={physiotherapyHandler}>
                <SpecialitiesBox img={InternalMedicine} h1="Physiotherapy" />
              </div>
              <div onClick={urologyHandler}>
                <SpecialitiesBox img={InternalMedicine} h1="Urology" />
              </div>
              <div onClick={dermatologyHandler}>
                <SpecialitiesBox img={InternalMedicine} h1="Dermatology" />
              </div>
              <div onClick={paediatricHandler}>
                <SpecialitiesBox img={InternalMedicine} h1="Paediatric" />
              </div>
            </div>

            {/* Box 3 */}
            <div className="SpecialitiesBox2">
              <div onClick={icuHandler}>
                <SpecialitiesBox img={InternalMedicine} h1="Critical Care" />
              </div>
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
              <div onClick={emergencycareHandler}>
                <SpecialitiesBox img={InternalMedicine} h1="Emergency Care" />
              </div>
              <div onClick={pharmacyHandler}>
                <SpecialitiesBox img={InternalMedicine} h1="Pharmacy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewSpecialities;
