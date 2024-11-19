import React from "react";
import SpecialitiesBanner from "../components/SpecialitiesBanner";
import LungImg from "../assets/BannerImg/lungImg.png";
import BookAppointment from "../components/BookAppointment";

const EmergencyCare = () => {
  return (
    <div>
      <SpecialitiesBanner
        title="Diagnosis, Treatment, and Management of"
        text="Immediate Medical Attention"
        img={LungImg}
      />
      <BookAppointment />
    </div>
  );
};

export default EmergencyCare;
