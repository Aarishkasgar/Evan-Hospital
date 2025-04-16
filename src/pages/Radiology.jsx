import React from "react";
import SpecialitiesBanner from "../components/SpecialitiesBanner";
import LungImg from "../assets/BannerImg/lungImg.png";
import BookAppointment from "../components/BookAppointment";

const Radiology = () => {
  return (
    <div>
      <SpecialitiesBanner
        title="Diagnosis, Treatment, and Management of"
        text="Radiology"
        img={LungImg}
      />
      <BookAppointment />
      <div className="pulmo-container">
        <div className="pulmo-inner-container">
          <h3>Overview</h3>
          <p className="top-para">
            Radiology Department at Evan Healthcare is equipped with a
            comprehensive radiology system, providing 24x7 radiology services
            and performing almost millions of examinations every year Pillars of
            quality for delivering superior radiology services: State of the art
            equipments:
          </p>

          <ul className="services-list">
            <li>MRI units across network- 5 and 3 Tesla</li>
            <li>CT machines- 16, 64, 128 and 256 slice</li>
            <li>High end ultrasound Doppler machines</li>
            <li>Digital X-ray machines</li>
            <li>Interventional Radiology cath labs</li>
            <li>Dexa and Mammography*</li>
            <p className="top-para">
              Comprehensive reporting system The entire network covered with
              integrated RIS-PACS system providing advantages of:
            </p>

            <li>Teleradiology cover for night time and leave reporting</li>
            <li>Sharing of workload and exchange cases for 2nd opinion</li>
            <li>Standardization of reports</li>
            <li>Increased efficiency and lower TAT</li>
            <li>Access to past and current patient records</li>

            <p className="top-para">
              Strong SOPs and real time dash boarding ensuring robust quality
              assistance program Medical grade monitors in place for reporting
              Reputed and experienced radiologists base Over 100 specialist
              performing different type of Radiology Investigations from general
              Radiology and to sub- speciality imaging
            </p>
            <li>Speciality reporting (by body area)</li>
            <li>Non-invasive therapeutic procedures and diagnosis</li>
            <li>
              Emergency radiology service for all modalities including advanced
              CT and MRI *
            </li>

            <p className="top-para">
              DNB program in three hospitals: accredited by National Board of
              Examinations for providing post graduate education to Radiology
              residents. Admit 5 primary and 5 secondary students per year 160+
              technicians across network Robust quality and security measures
            </p>
            <li>International and national accreditations</li>
            <ul className="inner-ul">
              <li>
                JCI accreditation for Evan hospital ensuring quality of service
              </li>
              <li>
                NABH accreditations for all Hospitals covering all aspects of
                radiology department like:
              </li>
            </ul>
            <ol>
              <li>Less than 1 % reporting error</li>
              <li>Less than 0.1% of re-does</li>
              <li>100% highlighting and informing emergency cases</li>
              <li>Less than 1% of film wastage</li>
              <li>Tracking of Clinical & Radiological Correlation</li>
            </ol>
            <li>HIPPA compliance ensured across the department</li>
            <p className="top-para">
              <strong>QA and QC- Internal audits</strong>
            </p>
            <li>
              Regular second reads performed by non-referred radiologists for
              ensuring quality through surveillance program
            </li>
            <li>Peer Review meetings for teaching & discussion</li>
            <li>
              A formal QA/QC software under development with GE’s partnership
              which will further boost the quality ratings (to be implemented
              this year)
            </li>
            <p className="top-para">
              <strong>Our offerings (teleradiology and others)</strong>
            </p>
            <li>
              Teleradiology- Complete teleradiology support for X-ray, CT and
              MRI
            </li>
            <ul className="inner-ul">
              <li>Speciality based services</li>
              <li>Comprehensive packages</li>
              <li>Night hawk and weekend services</li>
              <li>Emergency reporting</li>
              <li>LOCUM services</li>
            </ul>
            <li>Manpower support</li>
            <ul className="inner-ul">
              <li>Secondment of Radiologists</li>
              <li>Secondment of technicians</li>
            </ul>
            <li>Operations and management of entire radiology department</li>
            <li>Training and upskilling</li>
            <ul className="inner-ul">
              <li>Technologists training</li>
              <li>Radiologists up skilling</li>
            </ul>
            <li>Others</li>
            <ul className="inner-ul">
              <li>
                Turnkey solutions- Equipment setup, staff recruitment etc.
              </li>
              <li>Clinical audit and consultation</li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Radiology;
