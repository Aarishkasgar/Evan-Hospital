import React from "react";
import "../components/NavTop.css";

const NavTop = () => {
  return (
    <div>
      <section className="navtop-container">
        <div className="navtop-inner-container">
          <h5 className="nav-top-hidden">
            Address: 4 Km. Bhopa Road, Muzaffarnagar (U.P)
          </h5>
          <h5>24/7 Open</h5>
          <h5 className="nav-top-hidden">info@evanhealthcare.org</h5>
          <h5>Phone: +91 9068995077, +91 7088002601, +91 7078693040</h5>
        </div>
      </section>
    </div>
  );
};

export default NavTop;
