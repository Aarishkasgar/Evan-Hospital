import React from "react";
import SpecialitiesBanner from "../components/SpecialitiesBanner";
import NephroImg from "../assets/BannerImg/nephroImg.png";
import BookAppointment from "../components/BookAppointment";

const Nephro = () => {
  return (
    <div>
      <SpecialitiesBanner
        title="Diagnosis, Treatment, and Management of"
        text="Nephrology"
        img={NephroImg}
      />
      <BookAppointment />
      <div className="pulmo-container">
        <div className="pulmo-inner-container">
          <h3>Overview</h3>
          <p className="top-para">
            Nephrology is the study of the normal functioning of kidneys as well
            as treatment or diseases related to it. Kidneys are essential for
            filtering out waste products and excess water from the body. They
            are also vital for retaining the fluid intake, electrolytes that may
            be altered by numerous conditions or medicines.
          </p>
          <p className="top-para">
            Nephrology deals with the diagnosis as well as treatment of kidney
            diseases, including hypertension and electrolyte disturbances. It
            also provides care to individuals who require renal replacement
            therapy, including dialysis and renal transplant.
          </p>
          <p className="top-para">
            Some diseases affecting the kidney are systemic disorders, which
            means, they are not limited to the organ itself and may require
            special treatment. Examples include acquired diseases like systemic
            vasculitides (e.g. ANCA vasculitis) and autoimmune diseases (e.g.,
            lupus), as well as genetic conditions like polycystic kidney
            disease. Patients are referred to nephrology experts after a
            urinalysis, for multiple reasons, such as chronic kidney disease,
            acute kidney failure, hematuria, kidney stones, proteinuria
            hypertension, and disorders of electrolytes or acid/base.
          </p>

          <h4 className="first-heading">Role of A Nephrologist</h4>

          <p className="top-para">
            Nephrologists are kidney doctors who specialise in the care and
            treatment of renal or kidney related disorders. Broadly, the
            diseases that are treated by them include autoimmune diseases,
            kidney cancers, diabetic nephropathy, blood pressure and several
            others. Nephrology requires additional training to become a
            specialist with advanced skills and knowledge.
          </p>
          <p className="top-para">
            Nephrologists, at a kidney hospital, further sub-specialise in
            kidney transplantation, dialysis, cancer-related kidney diseases
            (Onconephrology), chronic kidney disease, procedural nephrology or
            other non-nephrology areas. Some of the procedures a nephrologist
            may perform include native kidney and transplant kidney biopsy,
            dialysis access insertion (temporary vascular access lines,
            tunnelled vascular access lines, peritoneal dialysis access lines),
            fistula management (angiographic or surgical fistulogram and
            plastic).
          </p>
          <p className="top-para">
            Evan Hospitals uses the latest technologies and advanced techniques
            to be the best kidney hospital in Muzaffarnagar.
          </p>

          <h4 className="first-heading">
            Diseases Under the Branch of Nephrology
          </h4>

          <p className="top-para">
            Nephrology deals with the study of the normal working of the kidneys
            as well as its diseases. The conditions that come under the scope of
            nephrology include –
          </p>

          <ul className="list-style services-list">
            <li>Renal Transplantations</li>
            <li>
              Urine abnormalities such as excess excretion of protein, sugar,
              blood, casts, and crystals
            </li>
            <li>
              Glomerular ailments that affect the tiny filtering systems of the
              kidneys known the glomerulus
            </li>
            <li>Cancers of the kidneys, bladder, and urethra</li>
            <li>
              Renal failure that can be acute, sudden, long-term or chronic
            </li>
            <li>Kidney infections</li>
            <li>Kidney and bladder stones</li>
            <li>
              Effects of diseases like diabetes and hypertension on the kidneys
            </li>
            <li>Acid-base imbalances</li>
            <li>Ill effects of toxins and drugs on the kidneys</li>
            <li>Nephrotic syndrome and nephritis</li>
            <li>
              Renal vascular diseases affecting the blood vessel networks within
              the kidneys
            </li>
            <li>
              Polycystic kidneys diseases where large cysts or fluid-filled sacs
              are formed within the kidney impairing its functions – this is
              congenital and inherited or genetic condition
            </li>
            <li>Tubulointerstitial diseases affecting the kidneys tubules</li>
            <li>
              Dialysis and its long-term complications - dialysis consists of
              haemodialysis as well as peritoneal dialysis
            </li>
            <li>
              Autoimmune diseases including lupus and autoimmune vasculitis
            </li>
            <li>Hydronephrosis</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nephro;
