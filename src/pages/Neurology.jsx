import React from "react";
import SpecialitiesBanner from "../components/SpecialitiesBanner";
import LungImg from "../assets/BannerImg/lungImg.png";
import BookAppointment from "../components/BookAppointment";

const Neurology = () => {
  return (
    <div>
      <SpecialitiesBanner
        title="Diagnosis, Treatment, and Management of"
        text="The Brain, Spinal Cord, and Nerves"
        img={LungImg}
      />
      <BookAppointment />
    </div>
  );
};

export default Neurology;
