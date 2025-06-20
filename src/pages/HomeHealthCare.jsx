import React from "react";
import SpecialitiesBanner from "../components/SpecialitiesBanner";
import LungImg from "../assets/BannerImg/lungImg.png";

const HomeHealthCare = () => {
  return (
    <div>
      <SpecialitiesBanner
        title="Diagnosis, Treatment, and Management of"
        text="Medical Oncology"
        img={LungImg}
      />
    </div>
  );
};

export default HomeHealthCare;
