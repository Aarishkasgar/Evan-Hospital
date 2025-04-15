import React from "react";
import SpecialitiesBanner from "../components/SpecialitiesBanner";
import PharmacyImg from "../assets/BannerImg/pharmacyImg.png";
import BookAppointment from "../components/BookAppointment";

const Pharmacy = () => {
  return (
    <div>
      <SpecialitiesBanner
        title="Diagnosis, Treatment, and Management of"
        text="Medication Therapy for Patients"
        img={PharmacyImg}
      />
      <BookAppointment />
      <div className="pulmo-container">
        <div className="pulmo-inner-container">
          <h3>Overview</h3>
          <p className="top-para">
            The perpetual divergence of Pharmaceutical industry portrays a dire
            requirement of clinically and technologically tutored professionals
            from the pharmacy domain who possess the prowess to tackle global
            challenges. In the Information Era, a pharmacist is no longer
            designated to be a mere dispenser of drugs, instead, this crucial
            title has assumed a much more important role in the niche of
            medicine management as an overall Health Care Programmer.
          </p>
          <p className="top-para">
            The Department of Pharmacy at Evan Hospitals maintains and sustains
            its merit of providing high quality pharmaceutical care and
            medication procurement on a 24×7 basis. The department’s dedicated
            personnel preserve & practice one of the safest & most efficient
            supply chain management networks for apportioning medications to our
            patients & customers.
          </p>
          <p className="top-para">
            We, at Evan, are morally obligated to endurably improve the
            medication usage process in the times of uncertainty while
            guaranteeing patient safety and positive health related outcomes at
            our end. Our pharmacy is staffed by thoroughly trained & registered
            pharmacists and certified pharmacy technicians who are employed with
            the hospital’s core medical team to collaboratively monitor each
            patient’s response to his or her medications.
          </p>
          <ul className="services-list">
            <p className="top-para">
              <strong>Our core values of service:</strong>
            </p>

            <li>
              24×7 availability of prescribed medicines / drugs and their
              closest possible alternatives / substitutes.
            </li>
            <li>Hassle free billing and returns.</li>
            <li>
              Comprehensive cataloguing of medicines / drugs to enhance
              efficiency of distribution.
            </li>

            <li>
              Proper & timely disposal of expired and non – reusable
              pharmaceutical products.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pharmacy;
