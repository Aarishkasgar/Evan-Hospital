import React from "react";
import "../components/BookAppointment.css";

const BookAppointment = () => {
  return (
    <div className="BA-container">
      <div className="BA-inner-container">
        <h2>To Book an Appointment</h2>
        <p>
          <a href="tel:7088002601">Call us +91 70880-02601</a>
        </p>
      </div>
    </div>
  );
};

export default BookAppointment;
