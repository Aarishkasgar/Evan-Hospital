import React from "react";
import DoctorsCard from "../components/DoctorsCard";
import "../styles/Home.css";
import DrImg01 from "../assets/DoctorsImg/DrImg01.jpeg";
import "../components/TitleBanner.css";
import banner from "../assets/AboutPage/doctorbanner.jpg";

const DrVisiting = () => {
  return (
    <div>
      {/* page banner start */}
      <div className="titlebanner-container">
        <img src={banner} className="titlebanner-img" />
        <div className="titlebanner-content">
          <h1 className="titlebanner-title">Our Visiting Doctors</h1>
        </div>
      </div>
      {/* page banner end */}
      <section className="HD-container">
        <div className="HD-inner-container">
          <h1>Visiting Doctors</h1>
          <p>
            Our hospital collaborates with highly qualified and experienced
            visiting doctors from various specialties. These professionals bring
            their expertise to provide advanced care and consultations, ensuring
            our patients receive top-notch medical services. They are available
            on specific days for appointments, offering specialized treatments
            and personalized attention.
          </p>
          <div className="our-doctors-container">
            <DoctorsCard
              img={DrImg01}
              name="Dr Rishikesh"
              destination="(MBBS, MD)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Dr Rishikesh"
              destination="(MBBS, MD)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Dr Rishikesh"
              destination="(MBBS, MD)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Dr Rishikesh"
              destination="(MBBS, MD)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Dr Rishikesh"
              destination="(MBBS, MD)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Dr Rishikesh"
              destination="(MBBS, MD)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Dr Rishikesh"
              destination="(MBBS, MD)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Dr Rishikesh"
              destination="(MBBS, MD)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Dr Rishikesh"
              destination="(MBBS, MD)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Dr Rishikesh"
              destination="(MBBS, MD)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Dr Rishikesh"
              destination="(MBBS, MD)"
            />
            <DoctorsCard
              img={DrImg01}
              name="Dr Rishikesh"
              destination="(MBBS, MD)"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DrVisiting;
