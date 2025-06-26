import React from "react";
import DoctorsCard from "../components/DoctorsCard";
// import Demo from "../assets/DoctorsImg/DrImg01.jpeg";
import NoImg from "../assets/DoctorsImg/NoImg.jpeg";
import banner from "../assets/AboutPage/doctorbanner.jpg";

const SupportiveStaff = () => {
  return (
    <div>
      <div>
        {/* page banner start */}
        <div className="titlebanner-container">
          <img src={banner} className="titlebanner-img" />
          <div className="titlebanner-content">
            <h1 className="titlebanner-title drtitle">Our Supportive Staff</h1>
          </div>
        </div>
        {/* page banner end */}
        <section className="HD-container">
          <div className="HD-inner-container">
            <h1>Our Dedicated Supportive Team</h1>
            <p>
              At Evan Hospital, our dedicated and supportive staff play a vital
              role in ensuring a seamless and comforting experience for every
              patient. From administrative professionals to nursing teams and
              technical experts, each member is committed to maintaining a warm,
              welcoming environment and assisting with every aspect of your
              care. Their compassion, efficiency, and attention to detail help
              create the foundation for our patient-centered approach.
            </p>
            <div className="our-doctors-container">
              <DoctorsCard img={NoImg} name="N/A" degree="N/A" />
              <DoctorsCard img={NoImg} name="N/A" degree="N/A" />
              <DoctorsCard img={NoImg} name="N/A" degree="N/A" />
              <DoctorsCard img={NoImg} name="N/A" degree="N/A" />
              <DoctorsCard img={NoImg} name="N/A" degree="N/A" />
              <DoctorsCard img={NoImg} name="N/A" degree="N/A" />
              <DoctorsCard img={NoImg} name="N/A" degree="N/A" />
              <DoctorsCard img={NoImg} name="N/A" degree="N/A" />
              <DoctorsCard img={NoImg} name="N/A" degree="N/A" />
              <DoctorsCard img={NoImg} name="N/A" degree="N/A" />
              <DoctorsCard img={NoImg} name="N/A" degree="N/A" />
              <DoctorsCard img={NoImg} name="N/A" degree="N/A" />
              <DoctorsCard img={NoImg} name="N/A" degree="N/A" />
              <DoctorsCard img={NoImg} name="N/A" degree="N/A" />
              <DoctorsCard img={NoImg} name="N/A" degree="N/A" />
              <DoctorsCard img={NoImg} name="N/A" degree="N/A" />
              <DoctorsCard img={NoImg} name="N/A" degree="N/A" />
              <DoctorsCard img={NoImg} name="N/A" degree="N/A" />
              <DoctorsCard img={NoImg} name="N/A" degree="N/A" />
              <DoctorsCard img={NoImg} name="N/A" degree="N/A" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SupportiveStaff;
