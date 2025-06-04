import React from "react";
import SpecialitiesBanner from "../components/SpecialitiesBanner";
import BookAppointment from "../components/BookAppointment";
// import LungImg from "../assets/BannerImg/lungImg.png";
import OncoImg from "../assets/BannerImg/cancerImg.png";

const Oncology = () => {
  return (
    <div>
      <SpecialitiesBanner
        title="Diagnosis, Treatment, and Management of"
        text="Medical Oncology"
        img={OncoImg}
      />
      <BookAppointment />
      <div className="pulmo-container">
        <div className="pulmo-inner-container">
          <h3>Overview</h3>
          <p className="top-para">
            Oncology is a branch of medicine which specializes in the diagnosis
            and treatment of cancers. Medical oncology (MO) refers to the
            treatment of cancer through the use of chemotherapy, hormone
            therapy, targeted therapy, biological therapy, and other systemic
            treatments.
          </p>
          <p className="top-para">
            A Medical Oncologist is a specialist health care provider for cancer
            patients, and he works with other oncologists such as his surgical
            oncology and radiation oncology colleagues to treat cancer patients.
            They are also responsible for managing the symptoms, reducing the
            side effects of treatment and providing the supportive care
            required.
          </p>

          <h4 className="first-heading">Types</h4>

          <p className="top-para">
            Medical Oncologists specialize in the following types of treatment.
          </p>
          <ul className="list-style">
            <li>Chemotherapy:</li>
            <p>
              Chemotherapy, commonly used to treat cancer, is a drug treatment
              that uses chemicals to kill the cancerous cells in a patient's
              body. The cancerous cells grow and multiply at a faster rate and
              powerful chemicals are used to stop these cells from spreading to
              other parts of the body. Chemotherapy is mostly used as the
              primary treatment to treat cancer or, in combination, to kill the
              remaining cancer cells after other treatments such. It is also
              used to prepare the patient for other treatments or to ease the
              patient's signs and symptoms. <br />
              There are numerous types of chemotherapy drugs, few are used
              alone, and some are used in combinations. The drugs are in the
              form of alkylating agents, nitrosoureas, topoisomerase inhibitors,
              antimetabolites, antitumor antibiotics, mitotic inhibitors,
              corticosteroids, and many others.
              <br /> Chemotherapy can cause side effects such as nausea,
              vomiting, fatigue, hair loss, loss of appetite, mouth sores, pain,
              constipation, diarrhoea, and bleeding. The medical oncologist who
              performs the chemotherapy monitors for these side effects and
              manages them. Depending on the need, the patient may undergo scans
              and other tests to monitor the progress of the treatment.
            </p>
          </ul>

          <ul className="list-style">
            <li>Hormone Therapy:</li>
            <p>
              Hormone therapy is also known as hormone treatment, hormonal
              therapy, and endocrine therapy. This is a cancer treatment to slow
              cancer growth and stop its spread to other body parts. It is
              mostly used with other treatments to treat cancer and relieve its
              signs and symptoms. <br /> During this treatment, a dose is given
              to stop the patient's body from making certain hormones or to
              prevent them from working. The dose can be in the form of a pill,
              capsule, or a shot in the arm or leg. <br /> The medications used
              for this therapy include fulvestrant, toremifene, tamoxifen,
              letrozole, and exemestane. Hormone therapy is mostly used to treat
              breast and prostate cancer, and it may cause side effects such as
              tiredness, nausea, hot flashes, and pain in joints and muscles.
            </p>
          </ul>

          <ul className="list-style">
            <li>Targeted Therapy:</li>
            <p>
              Drugs used in targeted therapy specifically target cancer cells'
              genes or proteins that promote the cancer cells' rapid growth and
              division. It targets the faulty products or specific pathway
              arising out of genetic changes or mutations that turn healthy
              cells into cancer cells. Oncologists use this therapy as a primary
              treatment or initial treatment to treat cancer cells without
              damaging healthy cells. It is often used in combination with
              chemotherapy, radiation therapy, or surgery. These drugs are
              advantageous for higher response rates and lesser side effects due
              to their target specific mechanism of action. <br /> They may
              however cause a few side effects such as diarrhea, liver problems,
              changes in the skin, hair, nails, dry skin, and rash that may itch
              and burn. Targeted therapy is used to treat lung, colon, breast,
              prostate, chronic myeloid, leukaemia, colorectal, lymphoma, and a
              few other cancers.
            </p>
          </ul>

          <ul className="list-style">
            <li>Immunotherapy:</li>
            <p>
              It is a cancer treatment that uses the immune system to fight
              cancer. The immune system, made up of organs, tissues, and the
              lymph system, is the body's default mechanism that fights against
              infections and other diseases. The immune system detects and
              destroys any abnormal cells and prevents the spread and growth of
              cancer. However, sometimes cancer cells become less visible or
              turn off the immune system and go undetected. Immunotherapy
              reactivates the immune system and assist in fighting cancer.
              <br /> The different types of immunotherapies are T-cell transfer
              therapy, immune checkpoint inhibitors, monoclonal antibodies,
              immune system modulators, and treatment vaccines. Immunotherapy
              drugs are widely used to treat cancer these days. They are also
              often used in combination with surgery, radiation therapy, and
              chemotherapy.
            </p>
          </ul>

          <h4 className="second-heading">Symptoms</h4>

          <p className="top-para">
            The symptoms vary depending on the type of cancer. However, the most
            common symptoms of cancer include:
          </p>
          <ul className="list-style">
            <li>Weight gain or weight loss</li>
            <li>Headaches</li>
            <li>Nausea and vomiting</li>
            <li>Heartburn (pain after eating)</li>
            <li>Difficulty in swallowing</li>
            <li>No or less appetite</li>
            <li>Trouble or pain while urinating</li>
            <li>Blood in the urine</li>
            <li>Lump or swelling</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Oncology;
