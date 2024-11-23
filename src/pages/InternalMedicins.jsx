import React from "react";
import SpecialitiesBanner from "../components/SpecialitiesBanner";
import LungImg from "../assets/BannerImg/lungImg.png";
import BookAppointment from "../components/BookAppointment";

const InternalMedicins = () => {
  return (
    <div>
      <SpecialitiesBanner
        title="Diagnosis, Treatment, and Management of"
        text="A wide range of Illnesses"
        img={LungImg}
      />
      <BookAppointment />
      <div className="pulmo-container">
        <div className="pulmo-inner-container">
          <h3>Overview</h3>
          <p className="top-para">
            Internal Medicine deals with the prevention, diagnosis, and
            treatment of infective & non infective illnesses in adult patients.
            Internists (physicians) are skilled in managing patients who are
            suffering from undifferentiated or multi-system diseases.
          </p>
          <p className="top-para">
            Department of Internal Medicine is backbone of any hospital which
            takes care of admitted patients as well as patients coming in the ou
            patient department with a broader vision & expertise. Department of
            Internal Medicine provides comprehensive care with the help of its
            sub-specialities including emergency & critical care departments to
            patients with multiple organ systems involvement.
          </p>
          <p className="top-para">
            Thanks to our dedicated team of Internal Medicine consultants, our
            patients get the best treatment irrespective of disease complexity
            or rarity. Best practices are deployed in managing various
            communicable or infectious and noncommunicable diseases. These are
            mainly viral febrile illnesses like dengue, chikungunya, chicken
            pox, influenza etc., malaria, typhoid, tuberculosis, pneumonia,
            hepatitis, meningitis, liver abscess, urinary tract infections.
            Department also deals with noncommunicable chronic diseases like
            Diabetes, HTN, COPD, Bronchial Asthma, migraine, stroke, myocardial
            infarction, chronic kidney disease, arthritis etc.
          </p>
          <p className="top-para">
            Internal medicine is a vast medical speciality that involves
            diagnosis, treatment and prevention of diseases. It has various
            subspecialties that are as follows:
          </p>

          <ul className="services-list">
            <li>
              Cardiology deals with the diseases and disorders related to the
              heart. Some common conditions include heart attacks, congestive
              heart failure, and valvular heart disease among others.
            </li>
            <li>
              Endocrinology deals with issues related to the endocrine system,
              i.e., the system of glands that produces hormones like thyroid
              hormone, growth hormone and insulin. Some common conditions
              include diabetes and thyroid disease.
            </li>
            <li>
              Pulmonology deals with the medical conditions related to the
              respiratory tract. Some pulmonological diseases are asthma,
              tuberculosis, lung cancer and more.
            </li>
            <li>
              Gastroenterology deals with the defects and diseases of the liver,
              pancreas, gallbladder and biliary tree. Some conditions that are
              treated are cirrhosis, hepatitis, pancreatitis and liver failure.
            </li>
            <li>
              Nephrology deals with the diseases of kidneys. Nephrological
              conditions include kidney failure, kidney stones, hypertension,
              nephritis and chronic kidney diseases.
            </li>
            <li>
              Infectious Diseases refer to the diseases that are caused by
              organisms such as bacteria, fungi and viruses. Some infectious
              diseases are influenza, chicken pox, measles, dengue fever,
              tuberculosis, typhoid symptoms, malaria etc.
            </li>
            <li>
              Rheumatology refer to diseases of joints & connective tissue that
              include rheumatoid arthritis, SLE, Spondyloarthropathies etc.
            </li>
            <li>
              Haematology deals with various conditions like anaemia, leukemia,
              lymphoma etc.
            </li>
          </ul>

          <p className="last-para">
            Here at Max Healthcare, we have excellent team of doctors who
            provide superior care & management. Our services are not just
            limited to the diagnosis and treatment of various diseases but also
            extend to create awareness about a healthy life style & prevention
            of non communicable diseases.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InternalMedicins;
