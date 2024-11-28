import React from "react";
import "../components/AmbulanceCard.css";

const AmbulanceCard = (props) => {
  return (
    <div>
      <div className="ambulance-card">
        <i className="icon">{props.valueicon}</i>
        <h3>{props.valuetitle}</h3>
        <p>{props.valuecontent}</p>
      </div>
    </div>
  );
};

export default AmbulanceCard;
