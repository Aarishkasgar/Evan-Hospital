import React from "react";
import "../styles/Home.css";
import evanbuildingimage from "../assets/evan-building.png";

const Home = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-inner-container">
          <div className="hero-left">left box</div>
          <div className="hero-right">
            <img src={evanbuildingimage} alt="evan-building" height={550} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
