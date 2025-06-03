import React from "react";
import SpecialitiesBanner from "../components/SpecialitiesBanner";
import LungImg from "../assets/BannerImg/lungImg.png";
import BookAppointment from "../components/BookAppointment";

const Dermatology = () => {
  return (
    <div>
      <SpecialitiesBanner
        title="Diagnosis, Treatment, and Management of"
        text="Dermatology"
        img={LungImg}
      />
      <BookAppointment />
      <div className="pulmo-container">
        <div className="pulmo-inner-container">
          <h3>Overview</h3>
          <p className="top-para">
            Evan Healthcare's Dermatology department is dedicated to providing
            exceptional care for all sorts of skin, hair, and nail concerns. Our
            team of experienced dermatologists and care staff is committed to
            providing exceptional care tailored to your individual needs. We
            combine advanced medical expertise with compassionate care to
            provide personalised treatment plans, attuned to the needs and
            condition of the patients. Our comprehensive dermatology services
            cover a wide range of skin, hair, and nail conditions, from common
            everyday concerns to complex autoimmune diseases. Our dermatologists
            utilise the latest advancements in dermatology to ensure accurate
            diagnosis and effective treatment options.
          </p>

          <h4 className="first-heading">
            Dermatology Subspecialties at Evan Hospitals
          </h4>

          <ul className="list-style services-list">
            <li>
              <strong>Medical Dermatology:</strong> Diagnosis and treatment of
              common skin conditions such as acne, eczema, psoriasis,
              dermatitis, rosacea, and fungal infections.
            </li>
            <li>
              <strong>Surgical Dermatology:</strong> Surgical procedures to
              address skin conditions, including skin cancer removal, mole
              removal, cyst removal, and cosmetic procedures like scar revision
              and skin grafting.
            </li>
            <li>
              <strong>Cosmetic Dermatology:</strong> Non-invasive or minimally
              invasive procedures aimed at improving the appearance of the skin,
              including Botox injections, dermal fillers, laser therapy for skin
              rejuvenation, chemical peels, and microdermabrasion.
            </li>
            <li>
              <strong>Dermatopathology:</strong> Analysis of skin tissue samples
              to diagnose skin diseases at a microscopic level.
              Dermatopathologists work closely with dermatologists to provide
              accurate diagnoses and guide treatment decisions.
            </li>
            <li>
              <strong>Paediatric Dermatology:</strong> Specialised care for skin
              conditions affecting infants, children, and adolescents, including
              eczema, diaper rash, birthmarks, and genetic skin disorders.
            </li>
            <li>
              <strong>Allergy Testing and Immunotherapy:</strong> Evaluation and
              management of allergic skin conditions, including contact
              dermatitis, atopic dermatitis, and urticaria (hives).
              Dermatologists may perform patch testing to identify allergens and
              offer immunotherapy options.
            </li>
            <li>
              <strong>Mohs Surgery:</strong> Mohs Surgery is a surgical
              technique used to remove skin cancer, particularly basal cell
              carcinoma and squamous cell carcinoma, with a high cure rate and
              minimal damage to healthy tissue.
            </li>
          </ul>

          <h4 className="first-heading">
            Why Choose Evan Hospitals for Dermatology Treatments
          </h4>

          <p className="top-para">
            At Evan Hospitals, Muzaffarnagar, we understand that your skin
            health is essential to your overall well-being and confidence. With
            our dedicated Dermatology department, we offer specialised care and
            advanced treatments to address all your skin concerns. Here's why
            you should trust Evan Hospitals for your dermatology needs:
          </p>

          <h4 className="first-heading">Experienced Dermatologists</h4>

          <p className="top-para">
            Our Dermatology department is staffed with board-certified
            dermatologists who are experts in diagnosing and treating a wide
            range of skin conditions. With years of experience and specialised
            training, our dermatologists are committed to providing you with
            personalised care and effective treatment solutions.
          </p>

          <h4 className="first-heading">Comprehensive Services</h4>

          <p className="top-para">
            Evan Hospitals' Dermatology department offers a comprehensive range
            of services to address various skin, hair, and nail conditions.
            Whether you're dealing with acne, eczema, psoriasis, or skin cancer,
            we have the expertise and resources to provide you with the highest
            quality care.
          </p>

          <h4 className="first-heading">Advanced Treatment Options</h4>

          <p className="top-para">
            We stay at the forefront of dermatological advancements, offering
            the latest and most advanced treatment options to our patients. From
            cutting-edge laser therapies and cosmetic procedures to surgical
            interventions and targeted medications, we tailor treatment plans to
            meet your specific needs and goals.
          </p>

          <h4 className="first-heading">State-of-the-Art Facilities</h4>

          <p className="top-para">
            Our Dermatology department is equipped with state-of-the-art
            facilities and technology to ensure that you receive the highest
            standard of care. We invest in modern equipment and innovative
            techniques to deliver safe, effective, and comfortable treatments
            for our patients.
          </p>

          <h4 className="first-heading">Patient-Centred Approach</h4>

          <p className="top-para">
            At Evan Hospitals, Muzaffarnagar, we prioritise your needs and
            preferences, taking a patient-centred approach to care. Our
            dermatologists take the time to listen to your concerns, answer your
            questions, and involve you in the decision-making process regarding
            your treatment plan. Your comfort, satisfaction, and well-being are
            our top priorities.
          </p>

          <h4 className="first-heading">Commitment to Safety</h4>

          <p className="top-para">
            We adhere to stringent safety and quality standards to ensure that
            you receive the best possible care in a safe and supportive
            environment. Our Dermatology department follows strict protocols for
            infection control, patient safety, and clinical excellence, giving
            you peace of mind throughout your treatment journey.
          </p>

          <h4 className="first-heading">Schedule Your Consultation Today</h4>

          <p className="top-para">
            Don't let skin concerns hold you back. Schedule a consultation with
            Evan Hospitals' Dermatology department today and take the first step
            towards healthier, happier skin.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dermatology;
