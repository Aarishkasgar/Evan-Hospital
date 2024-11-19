import React from "react";
import SpecialitiesBanner from "../components/SpecialitiesBanner";
import LungImg from "../assets/BannerImg/lungImg.png";
import BookAppointment from "../components/BookAppointment";

const Orthopedics = () => {
  return (
    <div>
      <SpecialitiesBanner
        title="Diagnosis, Treatment, and Management of"
        text="Musculoskeletal Disorders and Injuries"
        img={LungImg}
      />
      <BookAppointment />
    </div>
  );
};

export default Orthopedics;
