import React from "react";
import SpecialitiesBanner from "../components/SpecialitiesBanner";
import LungImg from "../assets/BannerImg/lungImg.png";
import BookAppointment from "../components/BookAppointment";

const Pharmacy = () => {
  return (
    <div>
      <SpecialitiesBanner
        title="Diagnosis, Treatment, and Management of"
        text="Medication Therapy for Patients"
        img={LungImg}
      />
      <BookAppointment />
    </div>
  );
};

export default Pharmacy;
