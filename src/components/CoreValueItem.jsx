import React from "react";
import "../components/CoreValueItem.css";

const CoreValueItem = (props) => {
  return (
    <>
      <div className="corevalue-item">
        <i className="icon">{props.valueicon}</i>
        <h3>{props.valuetitle}</h3>
        <p>{props.valuecontent}</p>
      </div>
    </>
  );
};

export default CoreValueItem;
