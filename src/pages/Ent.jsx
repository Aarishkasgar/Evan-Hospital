import React from "react";
import SpecialitiesBanner from "../components/SpecialitiesBanner";
import LungImg from "../assets/BannerImg/lungImg.png";
import BookAppointment from "../components/BookAppointment";
// import Ent from "../assets/BannerImg/entImg.png";
import "../styles/Ent.css";

const Ent = () => {
  return (
    <div>
      <SpecialitiesBanner
        title="Diagnosis, Treatment, and Management of"
        text="The Ear, Nose, & Throat (ENT)"
        img={LungImg}
      />
      <BookAppointment />
      <div className="pulmo-container">
        <div className="pulmo-inner-container">
          <h3>Overview</h3>
          <p className="top-para">
            At Evan Healthcare, we understand the importance of comprehensive
            ear, nose, and throat care in maintaining overall health and
            well-being. Our team of highly skilled ENT specialists is dedicated
            to providing care to patients of all ages. Whether you're
            experiencing hearing loss, sinus problems, or throat disorders, our
            experts are here to help you find relief and improve your quality of
            life.
          </p>
          <h2 className="first-heading">Our Services</h2>
          <ul className="services-list">
            <li>
              <strong>Otology and Neurotology:</strong> Our otology and
              neurotology specialists focus on the diagnosis and treatment of
              ear-related conditions. From hearing loss and tinnitus to ear
              infections and balance disorders, our team is equipped with
              state-of-the-art technology to accurately diagnose and provide the
              most effective treatment options. Whether you need a hearing aid
              fitting or complex ear surgery, we offer comprehensive care
              tailored to your needs.
            </li>
            <li>
              <strong>Rhinology and Sinus Surgery:</strong> Our rhinology and
              sinus surgery team specialises in the diagnosis and management of
              nasal and sinus disorders. If you're suffering from chronic
              sinusitis, nasal polyps, or nasal obstructions, our experts will
              conduct thorough evaluations and develop personalised treatment
              plans. We offer minimally invasive procedures, such as endoscopic
              sinus surgery, to provide long-term relief and restore normal
              nasal function.
            </li>
            <li>
              <strong>Head and Neck Surgery:</strong> Our head and neck surgeons
              are highly experienced in managing a wide range of conditions
              affecting the head and neck region. From thyroid and parathyroid
              disorders to salivary gland diseases and throat cancers, we
              provide comprehensive evaluations, advanced diagnostic techniques,
              and innovative surgical interventions.
            </li>
            <li>
              <strong>Pediatric ENT:</strong> We understand that children have
              unique ENT needs. Our pediatric ENT specialists are trained to
              diagnose and treat a wide array of ear, nose, and throat disorders
              in children. From ear infections and tonsillitis to congenital
              abnormalities and speech disorders, our team provides
              compassionate care in a child-friendly environment.
            </li>
            <li>
              <strong>Voice and Swallowing Disorders:</strong> If you're
              experiencing voice changes, swallowing difficulties, or throat
              discomfort, our voice and swallowing disorder specialists are here
              to help. Using advanced diagnostic tools, such as swallowing
              studies, we accurately diagnose and treat various conditions,
              including vocal cord nodules, acid reflux-related laryngitis and
              swallowing disorders.
            </li>
          </ul>

          <h2 className="second-heading">
            Surgeries performed by ENT surgeons
          </h2>
          <ul className="surgeries-list services-list">
            <li>Tympanoplasty - Repair of the eardrum</li>
            <li>Adenoidectomy - Removal of the adenoids</li>
            <li>Septoplasty - Correction of the deviated nasal septum</li>
            <li>
              Rhinoplasty - Nasal surgery for cosmetic or functional purposes
            </li>
            <li>Sinus surgery - Surgery to improve sinus function</li>
            <li>Otoplasty - Ear reshaping surgery</li>
            <li>Stapedectomy - Surgery to improve hearing in the middle ear</li>
            <li>Tonsillectomy - Removal of tonsils</li>
            <li>Laryngectomy - Removal of the larynx</li>
            <li>Tracheostomy - Creation of an opening in the trachea</li>
            <li>Neck dissection - Removal of lymph nodes in the neck</li>
            <li>Parathyroidectomy - Removal of parathyroid glands</li>
            <li>Thyroidectomy - Removal of the thyroid gland</li>
            <li>
              Salivary gland surgery - Surgery to remove or repair salivary
              glands.
            </li>
          </ul>

          <h2 className="second-heading">Why Choose Evan Healthcare?</h2>
          <ul className="why-choose-evan-list services-list">
            <li>
              <strong>Experienced and Skilled Specialists: </strong>
              Our ENT specialists are highly trained, experienced, and committed
              to delivering the highest quality of care. They employ
              evidence-based practices to ensure optimal outcomes.
            </li>
            <li>
              <strong>Advanced Diagnostic and Treatment Facilities: </strong>
              Evan Healthcare is equipped with state-of-the-art technology and
              facilities to provide accurate diagnoses and effective treatment
              options. From audiology labs and sleep study centres to dedicated
              operation theatres and rehabilitation facilities, we have
              everything needed for comprehensive ENT care.
            </li>
            <li>
              <strong>Multidisciplinary Approach: </strong>
              We believe in a collaborative approach to healthcare. Our ENT
              specialists work closely with other medical disciplines, including
              neurology, pulmonology, and oncology, to provide integrated and
              holistic care for complex cases.
            </li>
            <li>
              <strong>Patient-Centric Care: </strong>
              At Evan Healthcare, we prioritise the needs and well-being of our
              patients. From the moment you step into our facility until your
              recovery, our dedicated staff ensures that you receive
              personalised attention, compassionate care, and support throughout
              your journey.
            </li>
          </ul>

          <p className="last-para">
            If you're seeking exceptional ENT care, we invite you to schedule an
            appointment with our renowned specialists at Evan Healthcare. Our
            team will work closely with you to understand your concerns, provide
            accurate diagnoses, and develop tailored treatment plans to help you
            achieve optimal ear, nose, and throat health.
          </p>

          <p className="last-para">
            Take the first step towards better health today. Contact Evan
            Healthcare to book your appointment and experience the finest ENT
            care like never before!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ent;
