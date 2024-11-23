import React from "react";
import SpecialitiesBanner from "../components/SpecialitiesBanner";
import LungImg from "../assets/BannerImg/lungImg.png";
import BookAppointment from "../components/BookAppointment";

const Cardiology = () => {
  return (
    <div>
      <SpecialitiesBanner
        title="Diagnosis, Treatment, and Management of"
        text="Heart-related conditions"
        img={LungImg}
      />
      <BookAppointment />
      <div className="pulmo-container">
        <div className="pulmo-inner-container">
          <h3>Overview</h3>
          <p className="top-para">
            Cardiology is a speciality of medicine that deals with diseases of
            the heart. The doctors who specialise in this field are known as
            cardiologists. They are trained in diagnosing and treating
            conditions of the heart such as congenital heart diseases,
            infections, infarctions, heart failure, or valvular heart diseases.
          </p>
          <p className="top-para">
            There is a multitude of disorders of the cardiovascular system that
            need individual attention and clinical expertise to be treated.
            These include acute coronary syndrome, atherosclerosis, angina
            pectoris, coronary heart disease, and restenosis.
          </p>
          <p className="top-para">
            Other common disorders include cardiac arrest; disorders of the
            myocardium, or the muscle of the heart, known as cardiomyopathy,
            disorders of the pericardium, or the outer lining of the heart,
            which include types of pericarditis diseases of the valves such as
            aortic, mitral, pulmonary and tricuspid valves; congenital heart
            defects, like an atrial or ventricular septal defect, certain
            diseases of the blood vessels, known as vascular diseases, such as
            deep vein thrombosis, varicose veins, aneurysm, vasculitis, and
            others.
          </p>
          <p className="top-para">
            Cardiologists not only limit themselves to surgical treatment
            modalities but also have expertise in using several devices such as
            balloons and defibrillators, a pacemaker, and a stethoscope used for
            diagnosing and treating numerous heart ailments.
          </p>
          <p className="top-para">
            Cardiologists use some strategies to combat cardiovascular diseases,
            such as percutaneous coronary intervention, percutaneous
            transluminal angioplasty, coronary artery bypass surgery, and
            stenting. Cardiologists also use different diagnostic methods such
            as computed tomography (CT scans), cardiac stress tests,
            echocardiography or electrocardiography, blood tests, and magnetic
            resonance imaging (MRI) techniques.
          </p>
          <p className="top-para">
            Cardiologists require more than ten years of studies that include
            internal medicine and specialised programs to become qualified
            practitioners. After they receive their licensure and certification,
            they practice at private or public hospitals or start with their own
            private clinics.
          </p>
          <h2 className="first-heading">Types of cardiology</h2>
          <ul className="services-list">
            <p className="top-para">
              The different types of cardiology categories can be described as
              follows:
            </p>
            <li>Cardiac Electrophysiology</li>
            <li>Interventional cardiology</li>
            <li>Echocardiography</li>
            <li>Nuclear Cardiology</li>
            <p className="top-para">
              On the other hand, cardiologists can specialise in the following
              fields:
            </p>
            <li>Clinical cardiology</li>
            <li>Cardio-oncology</li>
            <li>Heart failure specialist</li>
            <li>Cardiac imaging specialist</li>
            <li>Congenital heart specialist</li>
            <li>Peripheral interventional specialist</li>
            <li>Critical care cardiologist</li>
            <li>Sports cardiologist</li>
            <li>Geriatric cardiologist</li>
            <li>Cardio-rheumatologist</li>
            <li>Electrophysiologist</li>
            <li>Preventive cardiologist</li>
            <li>Cardiac rehabilitation specialist</li>
          </ul>

          <h2 className="second-heading">Cardiology Symptoms</h2>
          <ul className="surgeries-list services-list">
            <p className="top-para">
              The following symptoms indicate heart disorders and the need to
              see a cardiologist immediately.
            </p>
            <li>shortness of breath</li>
            <li>chest pains</li>
            <li>dizziness</li>
            <li>high blood pressure</li>
            <li>changes in heart rate or rhythm</li>
            <li>
              pain in the left hand, jaw, or neck indicates a heart attack.
            </li>
          </ul>

          <h2 className="second-heading">When to see a Cardiologist?</h2>
          <p className="top-para">
            A patient must consult a cardiologist for a heart murmur, an
            abnormal heart rhythm, a history of heart attack or other heart
            ailments. In addition, patients who wish to undergo major surgical
            treatments such as organ transplants, knee replacement surgeries,
            and others must consult a cardiologist before the surgery. This is
            because surgeries significantly impact the heart in terms of altered
            blood flow or medications. Hence, a green signal from cardiologists
            is necessary. In case any heart ailment such as atherosclerosis
            (blocked blood vessels) is diagnosed at the time of consultation,
            the issue is addressed before scheduling the surgery.
          </p>

          <h2 className="second-heading">Diseases that cardiologists treat</h2>
          <ul className="surgeries-list services-list">
            <p className="top-para">
              Heart diseases that a cardiologist treats are:
            </p>
            <li>Atherosclerosis</li>
            <li>High Blood Cholesterol and Triglycerides</li>
            <li>Hypertension</li>
            <li>Ventricular Tachycardia</li>
            <li>Atrial Fibrillation</li>
            <li>Coronary Heart Disease</li>
            <li>Congestive Heart Disease</li>
            <li>Arrhythmias</li>
            <li>Congenital Heart Disease</li>
            <li>Pericarditis</li>
          </ul>

          <p className="last-para">
            In addition to the above, cardiologists also advise preventing heart
            diseases in the future. People can visit them for a routine check-up
            even without having any symptoms. This is especially true if they
            have a family history of diabetes or high cholesterol or personally
            have habits such as smoking or drinking. Preventive care also aims
            to guide pregnant women at a higher risk of developing heart
            diseases and a history of pre-eclampsia.
          </p>

          <h2 className="first-heading">Cardiology Diagnosis</h2>
          <p className="top-para">
            Cardiologists often begin by reviewing a patient's medical history,
            followed by a physical examination. They may advise some tests such
            as ECG to assess heart rhythm. Interventional cardiologists perform
            basic procedures such as stenting, valvuloplasties, angioplasties,
            congenital heart defect corrections, and coronary thrombectomies.
          </p>
          <ul className="services-list">
            <p className="top-para">Some tests that they may advise are:</p>
            <li>
              Electrocardiogram (ECG or EKG): Electrocardiography is a procedure
              in which the electrical activities of the heart are recorded. Tiny
              patches are connected to the machine and placed over several
              places on the chest.
            </li>
            <li>
              Ambulatory ECG or Holter monitoring: This type of ECG involves the
              recording of heart rhythms while the person is working out or
              performing an activity. Electrodes are attached to the chest, and
              wires are connected to a Holter monitor to record heart rhythms.
            </li>
            <li>
              Event monitoring: Event monitoring is advised when long-term heart
              functioning readings need to be assessed.
            </li>
            <li>
              Blood tests: These tests are required to assess medical conditions
              like thyroid and diabetes that may cause atrial flutter.
            </li>
            <li>
              Magnetic resonance imaging (MRI): In recent years, MRIs are
              proving to be helpful in evaluating aortic pathology owing to the
              ability of MRI to assess the dynamics of the flow. Other heart
              ailments can also be assessed with MRI.
            </li>
            <li>
              Transesophageal echocardiography (TEE): This procedure is most
              helpful in diagnosing dissection in the aorta with high
              sensitivity. It is considered an ideal diagnostic modality for
              intubated patients.
            </li>
            <li>
              Conventional angiography (aortography): Not used frequently
              nowadays. It has low sensitivity and requires a high contrast
              load.
            </li>
            <li>
              An exercise test or stress test: Some kinds of tachycardia are
              triggered by exercise or strenuous physical activity. The heart's
              activity is monitored during a stress test while walking on a
              treadmill or riding a stationary bicycle.
            </li>
            <li>
              Pulmonary angiography: This test uses X-rays to examine how the
              blood flows through the valve and requires injecting contrast
              material into a vein. Healthcare providers use angiography to
              locate any structural changes in the valve and the extent of
              narrowing of the valve.
            </li>
            <li>
              Cardiac catheterisation: Cardiac catheterisation allows a catheter
              to be directed through a blood vessel to the heart. This procedure
              can help diagnose or treat certain heart conditions, such as
              embolisms or arrhythmias. In addition, cardiac catheterisation
              provides essential information about the components of the heart,
              such as heart valves, heart muscles, and blood vessels.
            </li>
            <li>
              Nuclear cardiology: Nuclear imaging techniques utilise radioactive
              materials to help diagnose cardiovascular disorders. This
              technique is non-invasive. Some examples include planar imaging,
              and infarction imaging, single-photon-emission computed tomography
              (SPECT).
            </li>
            <li>
              Electrophysiology study (EPS) of the heart: This test involves
              threading a catheter into the vein in the groin region. Using
              fluoroscopy, images are taken to guide the way to the heart. The
              catheter is then used to measure the electrical signals of the
              heart. A cardiac electrophysiologist provides treatment for
              abnormal rhythms, including cardiac ablation, implantable
              cardioverter defibrillators, or pacemakers.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cardiology;
