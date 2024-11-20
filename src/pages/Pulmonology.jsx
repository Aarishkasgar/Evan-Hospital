import React from "react";
import SpecialitiesBanner from "../components/SpecialitiesBanner";
import LungImg from "../assets/BannerImg/lungImg.png";
import BookAppointment from "../components/BookAppointment";
import "../styles/Pulmonology.css";

const Pulmonology = () => {
  return (
    <div>
      <SpecialitiesBanner
        title="Diagnosis, Treatment, and Management of"
        text="The Respiratory System"
        img={LungImg}
      />
      <BookAppointment />
      <div className="pulmo-container">
        <div className="pulmo-inner-container">
          <h3>Overview</h3>
          <p className="top-para">
            Pulmonology is superspeciality that deals with preventing,
            diagnosing and treating lung conditions and respiratory tract. Our
            specialists are trained in managing conditions like asthma,
            pneumonia, tuberculosis, and other severe chest infections.
          </p>
          <p className="top-para">
            At Evan Healthcare, we offer multidisciplinary treatment including
            bronchoscopy for patients who have lung cancer, COPD, sleep
            problems, and Cystic Fibrosis. We offer the best care to our
            patients with our fully equipped pulmonary function laboratory.
          </p>
          <p className="top-para">
            We comprise a team of experts who also provide ancillary services,
            including respiratory care and nutrition in a comprehensive set up.
          </p>

          <h4 className="first-heading">Pulmonary Diseases</h4>

          <p className="top-para">
            There is a wide range of pulmonary diseases that affect the people
            all around the world. Some of the common ones include:
          </p>
          <ul className="list-style">
            <li>Asthma</li>
            <p>
              It is a lung disorder due to which the airways get inflamed,
              narrow and swollen resulting in breathing issues. Some of the
              common symptoms include wheezing, coughing, shortness of breath
              and tightness in the chest.
            </p>
          </ul>

          <ul className="list-style">
            <li>Chronic Obstructive Pulmonary Disease</li>
            <p>
              Also known as COPD, Chronic Obstructive Pulmonary Disease refers
              to a group of lung diseases that lead to blockage in the airflow
              causing breathing issues. The common conditions in COPD are
              chronic bronchitis and emphysema. Common signs and symptoms are
              wheezing, chronic cough, bluish fingernails, unexplained weight
              loss and shortness of breath.
            </p>
          </ul>

          <ul className="list-style">
            <li>Tuberculosis</li>
            <p>
              Tuberculosis is a contagious disease and can spread when the
              patient sneezes or coughs. Common symptoms are pain in the chest,
              fatigue, fever, chronic cough, shortness of breath, night sweats
              among others.
            </p>
          </ul>

          <ul className="list-style">
            <li>Cystic Fibrosis</li>
            <p>
              It is a genetically inherited disorder that affects the cells
              which produce mucus, digestive juice and sweat. Its symptoms vary
              from person to person, but common ones include repeated lung
              infections, persistent cough with thick mucus, and wheezing.
            </p>
          </ul>

          <ul className="list-style">
            <li>Lung Cancer</li>
            <p>
              This is the most serious lung disease during which there is an
              overproduction of abnormal cells in the lung that leads to the
              formation of a malignant tumour. The common symptoms are cough,
              chest pain, weight loss and wheezing.
            </p>
            <p>
              Most of the pulmonary diseases have similar symptoms. This is the
              reason that the person who experiences any of them must visit the
              best pulmonology hospital for an accurate diagnosis. After the
              diagnosis, the doctors can suggest the treatment options which
              suit the condition.
            </p>
          </ul>

          <h4 className="second-heading">Treatments</h4>

          <p className="top-para">
            Be it the treatment for asthma, cancer or lung diseases, we at Evan
            Healthcare, offer the best care to our patients. Some of the common
            treatment options that are adopted to help the patient lead a
            healthy life are as follows:
          </p>
          <ul className="list-style">
            <li>Lifestyle Changes</li>
            <p>
              For conditions like asthma and COPD, doctors suggest various
              lifestyle changes which can effectively manage the symptoms and
              reduce the harmful effect. Some of the changes are quitting
              smoking, eating a healthy diet, avoiding excessive heat and cold,
              learning breathing exercises among others.
            </p>
          </ul>

          <ul className="list-style">
            <li>Medications</li>
            <p>
              Several medications are also prescribed to manage the disease and
              stop its progression. For instance, doctors prescribe quick-relief
              drugs for asthma attacks.
            </p>
          </ul>

          <ul className="list-style">
            <li>Pulmonary Rehabilitation</li>
            <p>
              It is a program through which doctors help the patient in managing
              the symptoms and improve their quality of life through various
              exercises and awareness sessions at lungs hospital.
            </p>
          </ul>

          <ul className="list-style">
            <li>Surgery</li>
            <p>
              This treatment option is used in severe pulmonary conditions like
              lung cancer. Some people suffering from serious COPD or cystic
              fibrosis have to go through lung transplant to treat the
              condition.
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pulmonology;
