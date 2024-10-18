import React from "react";
import "../components/HeroCard.css"

const HeroCard = (props) => {
  return (
    <div>
      <div className="hero-card">
        <img src={props.img} />
        <h2>{props.h1}</h2>
      </div>
    </div>
  );
};

export default HeroCard;
