import React from "react";

const SpecialitiesCard = (props) => {
  return (
    <div>
      <img src={props.img} alt="" />
      <h1>{props.specialities}</h1>
    </div>
  );
};

export default SpecialitiesCard;
