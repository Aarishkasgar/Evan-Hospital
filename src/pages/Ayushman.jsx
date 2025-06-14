import React from "react";

const Ayushman = () => {
  return (
    <div>
      <div className="tpa-container">
        <div className="tpa-header">
          <h2>Ayushman Bharat (PM-JAY) Services at Evan Hospital</h2>
        </div>
      </div>
      <div className="tpaInfo-container">
        <div className="tpaInfo-inner-container">
          <p>
            Evan Hospital is an empaneled hospital under the Ayushman Bharat –
            Pradhan Mantri Jan Arogya Yojana (PM-JAY). We are proud to offer
            cashless treatment for eligible patients, ensuring quality
            healthcare without financial burden.
          </p>

          <h2>Services Covered:</h2>
          <hr className="Headingunderline" />
          <ul className="tpa-list">
            <li>
              Cardiac Care (Cath Lab procedures, Angiography, Angioplasty,
              Pacemaker Implantation, Stent Placement, and advanced cardiac
              diagnostics)
            </li>
            <li>General & Laparoscopic Surgery</li>
            <li>Orthopedic & Joint Replacement</li>
            <li>Gynecology & Obstetrics</li>
            <li>Dialysis & Kidney-related care</li>
            <li>Urology</li>
            <li>ICU & Emergency Services</li>
            <li>Organ and Tissue Transplant</li>
            <li>Medical Treatments for chronic & acute illnesses</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Ayushman;
