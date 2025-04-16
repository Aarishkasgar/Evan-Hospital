import React from "react";
import SpecialitiesBanner from "../components/SpecialitiesBanner";
import EmgImg from "../assets/BannerImg/emgImg.png";
import BookAppointment from "../components/BookAppointment";

const EmergencyCare = () => {
  return (
    <div>
      <SpecialitiesBanner
        title="Diagnosis, Treatment, and Management of"
        text="Immediate Medical Attention"
        img={EmgImg}
      />
      <BookAppointment />
      <div className="pulmo-container">
        <div className="pulmo-inner-container">
          <h3>Overview</h3>
          <p className="top-para">
            The Emergency department at Evan Healthcare cares for over 2,50,000+
            adult and paediatric patients every year across our emergency
            departments. In an effort to deliver world class care, our emergency
            department follows international protocols in acute care management,
            particularly for heart attack(MI), stroke, abdominal emergencies and
            polytrauma. Network wide data is collected and reviewed monthly to
            ensure continuous improvement in quality of care. Our motto, “ Every
            patient to the right clinician at the right clinical setting” is our
            driving force and our source of inspiration towards high quality
            patient care and treatment.
          </p>

          <ul className="services-list">
            <p className="top-para">
              Our patients can expect Safe, Effective, Patient Centered, Timely,
              Efficient and Equitable Care at all times from our emergency
              department. Our main focus areas include:-
            </p>

            <li>Trained, qualified and skilled staff</li>
            <li>
              World class infrastructure like waiting area, vulnerable area,
              triage, equipment maintenance etc
            </li>
            <li>
              ER processes and protocols(Head injury, MI, Stroke, Sepsis, Major
              Trauma), Triage instruments
            </li>

            <li>Coordinated emergency care throughout the patient pathway</li>
            <li>
              Monitoring and Knowledge of outcomes such as mortality and
              morbidity review, complaint monitoring to highlight system and/or
              individual failure.
            </li>
            <li>
              Commitment: Adequate resources(finance, equipment, infrastructure)
              and active visible management engagement with ER…leading to
              empowered motivated staff.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmergencyCare;
