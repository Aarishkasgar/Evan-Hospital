import React from "react";
import "../components/BookAppointment.css";

const BookAppointment = () => {
  return (
    <div className="BA-container">
      <div className="BA-inner-container">
        <h2>To Book an Appointment</h2>
        <p>
          <a href="tel:9068995077">Call us +91 90689-95077</a>
        </p>
      </div>
    </div>
  );
};

export default BookAppointment;
