import React from "react";
import SpecialitiesBanner from "../components/SpecialitiesBanner";
import SurgeryImg from "../assets/BannerImg/surgeryImg.webp";
import BookAppointment from "../components/BookAppointment";

const Surgery = () => {
  return (
    <div>
      <SpecialitiesBanner
        title="Diagnosis, Treatment, and Management of"
        text="Surgical Interventions"
        img={SurgeryImg}
      />
      <BookAppointment />
      <div className="pulmo-container">
        <div className="pulmo-inner-container">
          <h3>Overview</h3>
          <p className="top-para">
            General surgery is a medical speciality that helps with the
            diagnosis and treatment of a wide range of surgical conditions
            affecting various organs and systems of the body.
          </p>
          <p className="top-para">
            As a leading healthcare provider, we offer a wide range of general
            surgery services, from routine procedures to complex surgeries, to
            help you get back to living your best life.
          </p>
          <p className="top-para">
            Our general surgery department is staffed by board-certified
            surgeons who have years of experience treating patients with a
            variety of conditions. We use the latest techniques to perform
            surgeries with precision and accuracy, ensuring the best possible
            outcomes for our patients.
          </p>
          <h2 className="first-heading">
            We specialise in a range of surgical procedures, including:
          </h2>
          <ul className="services-list">
            <li>
              <strong>Abdominal surgery -</strong> Our surgeons are skilled in
              performing a variety of abdominal surgeries, such as appendectomy,
              cholecystectomy, and hernia repair.
            </li>
            <li>
              <strong>Breast surgery -</strong> We offer a comprehensive range
              of breast surgery services, including breast biopsy, lumpectomy,
              and mastectomy.
            </li>
            <li>
              <strong>Colorectal surgery -</strong> Our team of colorectal
              surgeons is experienced in treating conditions such as colon
              cancer, diverticulitis, and inflammatory bowel disease.
            </li>
            <li>
              <strong>Endocrine surgery - </strong> We perform surgeries to
              treat conditions related to the thyroid, parathyroid, and adrenal
              glands.
            </li>
            <li>
              <strong>Vascular surgery - </strong> Our vascular surgeons
              specialise in treating conditions affecting the blood vessels,
              such as aneurysms and peripheral artery disease.
            </li>
          </ul>

          <h2 className="second-heading">
            We have some of the latest technologies that are used in general
            surgery:
          </h2>
          <ul className="surgeries-list services-list">
            <li>
              <strong>Robotics: </strong>Robotic surgery systems are becoming
              increasingly popular in general surgery. These systems allow
              surgeons to perform minimally invasive surgeries with greater
              precision and accuracy, resulting in less blood loss, reduced
              scarring, and faster recovery times.
            </li>
            <li>
              <strong>Laparoscopic surgery: </strong>Laparoscopic surgery
              involves using small incisions and a camera to perform surgeries.
              This minimally invasive technique reduces the risk of infection,
              decreases pain and discomfort, and shortens recovery time compared
              to traditional open surgeries.
            </li>
            <li>
              <strong>3D printing: </strong>It is being used to create
              customised surgical implants and tools that fit the specific needs
              of individual patients.
            </li>
            <li>
              <strong>Enhanced Recovery After Surgery (ERAS): </strong>ERAS is a
              program that involves using a comprehensive approach to surgical
              care that includes preoperative preparation, intraoperative
              techniques, and postoperative care. This approach is designed to
              reduce pain, minimise the risk of complications, and decrease the
              recovery time.
            </li>
            <li>
              <strong>Image-guided surgery: </strong>Image-guided surgery
              involves using advanced imaging techniques, such as MRI and CT
              scans, to create detailed maps of the surgical area. This
              technology allows surgeons to perform surgeries with greater
              accuracy and precision, reducing the risk of complications.
            </li>
          </ul>

          <p className="last-para">
            We understand that undergoing surgery can be a stressful experience,
            which is why we provide personalised care and support to all of our
            patients. Our specialists work closely with each patient to develop
            a customised treatment plan tailored to their unique needs, ensuring
            that they receive the best possible care from start to finish.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Surgery;
