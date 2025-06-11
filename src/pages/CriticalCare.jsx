import React from "react";
import SpecialitiesBanner from "../components/SpecialitiesBanner";
import CriticalImg from "../assets/BannerImg/criticalImg.png";
import BookAppointment from "../components/BookAppointment";

const CriticalCare = () => {
  return (
    <div>
      <SpecialitiesBanner
        title="Diagnosis, Treatment, and Management of"
        text="Critical Care"
        img={CriticalImg}
      />
      <BookAppointment />
      <div className="pulmo-container">
        <div className="pulmo-inner-container">
          <h3>Overview</h3>
          <p className="top-para">
            The Critical Care Unit at Evan Healthcare is a specialized and
            advanced facility dedicated to delivering exceptional medical care
            and continuous monitoring for critically ill or injured patients.
            Our ICU, also known as the Intensive Care Unit, goes beyond the
            capabilities of a standard hospital room, providing close monitoring
            and specialized medical treatments.
          </p>
          <p className="top-para">
            When you or your loved one requires critical care, having access to
            advanced medical technology, experienced physicians, and skilled
            nursing staff becomes paramount. At Evan Healthcare's Department of
            Critical Care Medicine, we are committed to delivering the highest
            level of comprehensive care, encompassing all three elements.
          </p>
          <p className="top-para">
            Our department consists of a tightly-knit, multidisciplinary team of
            experts who work collaboratively. We are a centre of academic
            excellence, supported by state-of-the-art infrastructure and the
            latest technology. Our prestigious fellowship program in Critical
            Care and our active involvement in research, and numerous
            publications in national and international journals highlight our
            dedication to advancing medical knowledge. We strive to achieve
            improved patient outcomes through our patient-centric approach,
            disease-specific care plans grounded in evidence-based practices,
            antibiotic stewardship, and integration of the latest research
            advancements.
          </p>

          <ul className="list-style">
            <p className="top-para">
              We are fully equipped to handle a broad spectrum of medical
              conditions, including
            </p>
            <li>Acute kidney injury</li>
            <li>Acute liver failure</li>
            <li>Acute respiratory failure, ARDS</li>
            <li>Acute coronary syndrome</li>
            <li>Cardiogenic shock</li>
            <li>Covid-19 care</li>
            <li>Cerebral oedema</li>
            <li>Congenital metabolic disorders</li>
            <li>Drug overdose</li>
            <li>Gastrointestinal emergencies</li>
            <li>Heart failure</li>
            <li>Influenza</li>
            <li>Metabolic disorders</li>
            <li>Multiple organ failure</li>
            <li>Obstetric emergencies</li>
            <li>Pneumonia</li>
            <li>Pulmonary embolism</li>
            <li>Sepsis</li>
            <li>Septic shock</li>
            <li>Stroke</li>
          </ul>

          <p className="top-para">
            Furthermore, our Critical Care Services extend support to patients
            requiring post-surgical care or those in the process of recovering
            from a serious illness.
          </p>
          <p className="top-para">
            Count on Evan Healthcare's Critical Care Unit to provide exceptional
            care, leveraging advanced medical technology, experienced
            professionals, and a patient-centred approach when you need it most.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CriticalCare;
