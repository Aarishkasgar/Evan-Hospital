import React from "react";
import SpecialitiesBanner from "../components/SpecialitiesBanner";
import LungImg from "../assets/BannerImg/lungImg.png";
import BookAppointment from "../components/BookAppointment";

const Urology = () => {
  return (
    <div>
      <SpecialitiesBanner
        title="Diagnosis, Treatment, and Management of"
        text="Urology"
        img={LungImg}
      />
      <BookAppointment />
      <div className="pulmo-container">
        <div className="pulmo-inner-container">
          <h3>Overview</h3>
          <p className="top-para">
            We at Evan Healthcare, offer comprehensive treatment for various
            urological conditions. Our state-of-the-art facilities specialise in
            providing services in the areas of urology, uro-oncology,
            reconstructive urology, robotic surgery, kidney transplantation &
            laparoscopic andrology services among others.
          </p>
          <p className="top-para">
            Some of our exceptional services include Laparoscopic Urological
            Surgery, ABO Incompatible Kidney Transplant, Renal Transplantation,
            Uro-Oncology, Reconstructive Surgery of Urinary Tract, and laser
            urological procedures. In addition to this, we have also installed
            intuitive surgical Da Vinci XI Robotic System to perform highly
            complex urological procedures like radical cystectomy, radical
            prostatectomy, partial nephrectomy, etc. All of the urological
            surgeries are performed laparoscopically to ensure great precision
            for improved patient outcomes.
          </p>
          <p className="top-para">
            Some of our exceptional services include Laparoscopic Urological
            Surgery, ABO Incompatible Kidney Transplant, Renal Transplantation,
            Uro-Oncology, Reconstructive Surgery of Urinary Tract, and laser
            urological procedures. In addition to this, we have also installed
            intuitive surgical Da Vinci XI Robotic System to perform highly
            complex urological procedures like radical cystectomy, radical
            prostatectomy, partial nephrectomy, etc. All of the urological
            surgeries are performed laparoscopically to ensure great precision
            for improved patient outcomes.
          </p>

          <h4 className="first-heading">Urological Conditions</h4>

          <ul className="list-style">
            <li>Urinary-Tract Infections (UTIs)</li>
            <p>
              Occurring due to pathogenic bacteria or viruses, UTIs lead to a
              frequent urge to urinate accompanied by a burning sensation while
              urinating. Some other symptoms include cloudy urine, pelvic pain
              in women and fatigue. Urinary Tract Infection is more common in
              women as compared to men.
            </p>
          </ul>

          <ul className="list-style">
            <li>Kidney Stones</li>
            <p>
              These are crystalized form of substances like calcium and oxalates
              & uric acid crystals that accumulate over the time and form small
              stones in kidney. A person suffering from kidney stones may
              experience severe pain in lower abdomen, pain while urinating,
              frequent urination and nausea.
            </p>
          </ul>

          <ul className="list-style">
            <li>Benign Prostatic Hyperplasia (BPH)</li>
            <p>
              Also known as prostate enlargement, this urological condition
              occurs in men. The prostate gland gets bigger that leads to
              various complications including urinary tract infections and
              bladder stones. Its signs and symptoms range from trouble in
              urination, loss of bladder control to weak stream and nocturia.
            </p>
          </ul>

          <ul className="list-style">
            <li>Bladder Cancer</li>
            <p>
              It refers to cancer that begins from the tissues of the bladder.
              The cells grow uncontrollably and form tumors inside the organ.
              Most common symptom of bladder cancer is blood in urine. Others
              include pain during urination, urgent need to urinate and
              increased frequency of urination.
            </p>
          </ul>

          <ul className="list-style">
            <li>Kidney Cancer</li>
            <p>
              Occurring in men, prostate cancer affects prostate gland which is
              a small walnut-sized gland that produces seminal fluid. Symptoms
              of prostate cancer may include difficulty in urination, blood in
              semen, erectile dysfunction, pain in bones, and discomfort in the
              pelvic region.
            </p>
            <p>
              If a person is experiencing symptoms related to above-mentioned
              urological conditions, the best step is to visit the best urology
              hospital in India and get the diagnosis done. We at Evan
              Healthcare, have state-of-the-art facilities to provide accurate
              results that lead to better treatment of urology diseases.
            </p>
          </ul>

          <h4 className="second-heading">Urological Treatments</h4>

          <ul className="list-style">
            <li>Lifestyle Changes</li>
            <p>
              For conditions like asthma and COPD, doctors suggest various
              lifestyle changes which can effectively manage the symptoms and
              reduce the harmful effect. Some of the changes are quitting
              smoking, eating a healthy diet, avoiding excessive heat and cold,
              learning breathing exercises among others.
            </p>
            <li>Medications</li>
            <p>
              Doctors prescribe medications to cure urological diseases. The
              medications may range from antibiotics to chemotherapy drugs
              depending on the type of urological condition.
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Urology;
