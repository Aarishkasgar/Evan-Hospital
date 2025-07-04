import React from "react";
import SpecialitiesBanner from "../components/SpecialitiesBanner";
import GastroImg from "../assets/BannerImg/gastroImg.png";
import BookAppointment from "../components/BookAppointment";

const Gastro = () => {
  return (
    <div>
      <SpecialitiesBanner
        title="Diagnosis, Treatment, and Management of"
        text="Medical Oncology"
        img={GastroImg}
      />
      <BookAppointment />
      <div className="pulmo-container">
        <div className="pulmo-inner-container">
          <h3>Overview</h3>
          <p className="top-para">
            Gastroenterology deals in treating diseases related to
            gastrointestinal tract and disorders associated with it. The branch
            also includes the understanding of gastrointestinal organs, like the
            functioning of the liver, digestion and absorption, removal of waste
            and several others. Any gastrointestinal disorder can cause problems
            in stomach, esophagus, pancreas, gallbladder, liver, small and large
            intestines. A gastroenterologist has a broad scientific knowledge to
            provide gastroenterology treatment and optimal health care for
            patients.
          </p>

          <h4 className="first-heading">Who is a Gastroenterologist?</h4>

          <p className="top-para">
            A gastroenterologist is a physician who specializes in
            gastroenterology (DM gastroenterology) and offers all kinds of
            medical treatments related to the speciality. They undergo training
            in the management of diseases of the liver and gastrointestinal
            tract. The gastroenterologist takes a broad understanding of the
            symptoms at presentation like difficulty in swallowing,
            constipation, heartburn, loose motions, vomiting and renal bleeding
            to diagnose and treat conditions effectively. We at Evan Healthcare
            are committed to offer best in class healthcare services for our
            patients to treat life-threatening acute medical problems.
          </p>
          <p className="top-para">
            Gastroenterologists do extensive research involving gastrointestinal
            endoscopic treatment and procedures as well as the interpretation of
            results and are experts in the field. Furthermore, it is their
            aptitude to provide broad, precise, and thorough care for patients
            with gastrointestinal conditions, which differentiates them from
            other physicians that provide similar services. Conditions and
            treatments taken care by gastroenterologists include peptic ulcer,
            irritable bowel syndrome, inflammatory bowel disease, esophageal
            cancer and colon cancer. They also perform endoscopic therapeutic
            interventions.
          </p>
          <p className="top-para">
            Endoscopy is part of the endoscopic treatment which is used by the
            doctors for a better diagnosis of the condition the patient is
            suffering from. An endoscope is a flexible tube with a small camera
            attached to it which is used to perform the test. An endoscope is
            generally used to inspect body parts like urinary tract, respiratory
            tract, ear, gastrointestinal tract, and the reproductive system. A
            gastroenterologist may perform endoscopy procedure to identify the
            root cause of abdominal pain, gastrointestinal bleeding, ulcers or
            difficulty in swallowing, polyps or growth in colon and cancer of
            the digestive system. After a successful diagnosis, the doctor
            charts out the right medical therapy to cure the condition.
          </p>
          <p className="top-para">
            Endoscopic treatment has various advantages including minimum blood
            loss, less pain, no tissue or muscle trauma, and low risk of
            infection. In the last few decades, the advantages of endoscopic
            treatment and procedures in the field of gastroenterology have
            augmented significantly. The technologies used for gastroenterology
            treatment have also enhanced in the same way, thereby reducing the
            risk of complications. As such, these problems are and can easily be
            treated or prevented by the methods suggested by a
            gastroenterologist. In deciding whether to use endoscopic procedures
            during a gastroenterology consultation, gastroenterologist typically
            weighs whether the possible benefits of the procedures outweigh
            their risks.
          </p>

          <h4 className="first-heading">
            How Does Gastroenterology Treatment Work?
          </h4>

          <p className="top-para">
            A gastroenterology treatment usually starts in a
            gastroenterologist’s clinic or a hospital. It typically begins with
            a clinic staff recording the patient’s blood pressure level, heart
            rate, and weight. They also take a record of patient’s medications,
            allergies and medical history. During the consultation, the doctor
            may perform lab tests, X-Rays, motility tests and endoscopic
            procedures and interventions. The whole visit typically takes around
            30 minutes to an hour, or longer if the gastroenterologist performs
            endoscopic procedures simultaneously.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gastro;
