import React from "react";
import SpecialitiesBanner from "../components/SpecialitiesBanner";
import LungImg from "../assets/BannerImg/lungImg.png";
import BookAppointment from "../components/BookAppointment";

const Dental = () => {
  return (
    <div>
      <SpecialitiesBanner
        title="Diagnosis, Treatment, and Management of"
        text="Dental Care"
        img={LungImg}
      />
      <BookAppointment />
      <div className="pulmo-container">
        <div className="pulmo-inner-container">
          <h3>Overview</h3>
          <p className="top-para">
            A good dental care means regularly brushing and flossing your teeth,
            going for frequent dental check-ups, and consuming a healthy diet.
            Practicing these habits will prevent your gums from getting damaged,
            control bad breath, and increase the life of your teeth.
          </p>
          <p className="top-para">
            The common ailments that require dental care are bad breath, caries
            or cavities, gingivitis or gum diseases, abscesses, loosening of
            tooth, leukoplakia or white patches and cancer of the mouth. At Evan
            Healthcare, we offer dental care with Implantology, Invisible
            Braces, Laser Dentistry (painless soft tissue treatment), Paediatric
            Dentistry, and a painless root canal treatment to patients.
          </p>

          <h4 className="first-heading">What is Plaque?</h4>

          <p className="top-para">
            The main factor which causes tooth decay and gum disease is plaque.
            Plaque is a sticky combination of bacteria and food which starts to
            build up on teeth within 20 minutes after a person eats. If teeth
            are not cleaned well each day, plaque then causes tooth decay. If a
            person fails to remove plaque, it turns into a hard deposit known as
            tartar that becomes trapped at the base of the tooth. Plaque and
            tartar, inflame and irritate the gums. Bacteria and the toxins they
            produce can cause the gums to become infected, swollen, and tender.
          </p>
          <p className="top-para">
            The formation of plaque and tartar leads to several other problems
            such as:
          </p>
          <ul className="list-style">
            <li>
              Cavities - which are holes that destroy the structure of the teeth
            </li>
            <li>
              Gingivitis - causes inflammation and bleeding gums and is usually
              a result of a bacterial infection
            </li>
            <li>Bad breath - which is also known as halitosis</li>
            <li>
              Periodontitis - the destruction of the bone and ligaments that
              support the teeth, often leading to tooth loss
            </li>
            <li>Abscesses, pain, and inability to use teeth</li>
            <li>
              Health issues outside the mouth, ranging from preterm labour to
              heart disease By taking good care of gums and teeth, the formation
              of plaque can be prevented, thereby keeping diseases of teeth
              away.
            </li>
          </ul>

          <h4 className="second-heading">
            Why Is Basic Dental Care Important?
          </h4>

          <ul className="list-style">
            <li>Prevents tooth decay</li>
            <li>Makes smile attractive</li>
            <li>
              Avoids gum disease, which can cause damage to the gum tissue and
              the bones that support teeth, and in the long term can lead to the
              loss of teeth
            </li>
            <li>
              Shortens time with the dentist and dental hygienist and makes the
              trip more pleasant
            </li>
            <li>
              By avoiding tooth decay and gum disease, one can reduce the
              requirement for fillings and other costly procedures
            </li>
            <li>
              Brushing and flossing regularly helps getting rid of the bacteria
              that lead to bad breath
            </li>
            <li>
              Keeps teeth white by avoiding staining from food, drinks, and
              tobacco
            </li>
            <li>Makes the teeth last a lifetime</li>
            <li>Improves overall health</li>
          </ul>
          <h4 className="first-heading">Dental Treatment Options</h4>

          <p className="top-para">
            At Evan Healthcare, we offer dental treatment with Implantology,
            invisible braces, laser dentistry (painless soft tissue treatment),
            paediatric dentistry, and a painless root canal to patients. Our
            dental clinic in India has the best doctors and state-of-the-art
            technologies like Dental RVG, Digital Orthopantomogram and Dental
            Implants, we cater to patients’ preventive and primary healthcare
            requirements. Our dental hospital offers the best dental treatment
            in India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dental;
