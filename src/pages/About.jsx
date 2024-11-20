import React from "react";
import "../components/TitleBanner.css";
import "../styles/About.css";
import banner from "../assets/AboutPage/banner.jpg";
import CoreValueImg from "../assets/AboutPage/corevalue.jpeg";
import AboutUsContent from "../components/AboutUsContent";
import CoreValueItem from "../components/CoreValueItem";
import EditIcon from "@mui/icons-material/Edit";
import AboutUsServices from "../components/AboutUsServices";

const About = () => {
  return (
    <>
      {/* page banner start */}
      <div className="titlebanner-container">
        <img src={banner} className="titlebanner-img" />
        <div className="titlebanner-content">
          <h1 className="titlebanner-title">About Us</h1>
        </div>
      </div>
      {/* page banner end */}
      {/* about us start */}
      <div className="about-container">
        <div className="about-inner-container">
          <div className="about-left"></div>
          <div className="about-right">
            <p>
              We are dedicated to provide exceptional healthcare services with
              compassion to our patient: Good Hospital, Good Doctors, Good
              Treatment, Good Medicine and Low Charges....
            </p>
          </div>
        </div>
      </div>
      <AboutUsContent
        title="Our Mission"
        Content="Our mission is to provide advance quality healthcare, preventing illness, and improving the quality of life for our patients and their families."
      />
      <br />
      <AboutUsContent
        title="Our Vision"
        Content="Our vision is to be the leading healthcare provider for our community, committed for excellence, innovation, and patient-centered care."
      />
      <div className="corevalues-container">
        <div className="corevalues-title">Our Core Values</div>
        <div className="corevalues-content">
          <div className="corevalues-left">
            <img src={CoreValueImg} alt="" />
          </div>
          <div className="corevalues-right">
            <div className="valueinner-right">
              <CoreValueItem
                valueicon={
                  <EditIcon style={{ fontSize: 35, color: "#f9a61a" }} />
                }
                valuetitle="Compassion"
                valuecontent="We treat every individual with kindness, empathy, and respect,
          understanding the unique needs and concerns of each patient."
              />
              <CoreValueItem
                valueicon={
                  <EditIcon style={{ fontSize: 35, color: "#f9a61a" }} />
                }
                valuetitle="Excellence"
                valuecontent="We strive for excellence in all that we do, continuously seeking opportunities for improvement and innovation to enhance patient outcomes."
              />
            </div>
            <div className="valueinner-right">
              <CoreValueItem
                valueicon={
                  <EditIcon style={{ fontSize: 35, color: "#f9a61a" }} />
                }
                valuetitle="Integrity"
                valuecontent="We uphold the highest ethical standards, maintaining transparency, honesty, and accountability in our interactions with patients, families, and colleagues."
              />
              <CoreValueItem
                valueicon={
                  <EditIcon style={{ fontSize: 35, color: "#f9a61a" }} />
                }
                valuetitle="Collaboration"
                valuecontent="We foster a culture of teamwork and collaboration, working together across disciplines to provide comprehensive, coordinated care."
              />
            </div>
          </div>
        </div>
      </div>
      {/* medical services section strat */}
      <div className="medicalservices-container">
        <div className="medicalservices-inner-container">
          <div className="medicalservices-left">
            <h3>Medical Services</h3>
            <h1>We Offer a Whole Range of Medical Services</h1>
            <p>
              We specialize in providing medications for complex, chronic
              conditions, offering specialized support and resources to patients
              with unique medication needs.
            </p>
          </div>
          <div className="medicalservices-right">
            <AboutUsServices />
          </div>
        </div>
      </div>
      {/* medical services section end */}
    </>
  );
};

export default About;
