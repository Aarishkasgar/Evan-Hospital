import React from "react";
import SpecialitiesBanner from "../components/SpecialitiesBanner";
import LungImg from "../assets/BannerImg/lungImg.png";
import BookAppointment from "../components/BookAppointment";

const Neurology = () => {
  return (
    <div>
      <SpecialitiesBanner
        title="Diagnosis, Treatment, and Management of"
        text="The Brain, Spinal Cord, and Nerves"
        img={LungImg}
      />
      <BookAppointment />
      <div className="pulmo-container">
        <div className="pulmo-inner-container">
          <h3>Overview</h3>
          <p className="top-para">
            Neurology deals with the evaluation, diagnosis, and management of
            disorders of the brain, spinal cord, peripheral nerves,
            neuromuscular junction and muscles. As a healthcare provider
            dedicated to providing the finest possible care, the Department of
            Neurology at Max Hospitals provide comprehensive diagnostic and
            therapeutic Neurology services as per internationally accepted
            evidence-based protocols.
          </p>
          <p className="top-para">
            Along with chronic neurological cases and regular OPDs, the Max
            Neurology Department is also adept at handling emergencies such as
            Convulsions, Stroke, head trauma, change in mental status/coma,
            intracranial haemorrhage, myasthenic crisis and infections.
          </p>
          <p className="top-para">
            The competence of the department is further supported by
            well-equipped Neuro ICU facilities, Bi-plane cath labs and bedside
            Electro Encephalogram (EEG) Monitoring for managing patients with
            neurological illnesses. A team of highly skilled and experienced
            specialists that is available round the clock and state-of-the-art
            imaging modalities such as 3T MRI and CT scan give the Department of
            Neurology the advantage of providing the best in patient care.
          </p>

          <h2 className="first-heading">
            Neurologists treat the following disorders:
          </h2>
          <ul className="services-list">
            <p className="top-para">
              <strong>Headaches: </strong>All types of primary headaches,
              especially migraine and secondary headaches.
            </p>
            <p className="top-para">
              <strong>Stroke: </strong>Considered a brain attack due to either
              occlusion or blockage of blood supply of the brain or due to
              rupture of brain vessels. A stroke is a medical emergency.
            </p>
            <p className="top-para">
              <strong>How to identify stroke:</strong>
            </p>
            <li>Acute onset weakness of the face, arm, or leg.</li>
            <li>
              Acute onset dizziness, imbalance, double vision, difficulty in
              swallowing or slurring of speech
            </li>
            <li>
              Acute onset loss of voice or not able to understand or amnesia
            </li>
            <p className="top-para">U CAN REMEMBER IT AS: BE-FAST</p>
            <p className="top-para">B: Balance</p>
            <p className="top-para">
              E: Eye signs (like blurring or loss of vision or diplopia)
            </p>
            <p className="top-para">F: Facial weakness</p>
            <p className="top-para">A: Arm weakness</p>
            <p className="top-para">S: Speech slurring</p>
            <p className="top-para">T: Time to call</p>
            <p className="top-para">
              What to do:
              <br /> Keep patient in left lateral position and shift immediately
              to the hospital where facilities of stroke treatment are available
              (Thrombolysis plus mechanical thrombectomy).
            </p>

            <p className="top-para">
              <strong>Seizure or epilepsy: </strong>An epileptic seizure was
              defined by the International League Against Epilepsy (ILAE) as "a
              transient occurrence of signs and/or symptoms due to abnormal
              excessive or synchronous neuronal activity in the brain. Epilepsy
              is defined as any of the following:
            </p>
            <li>
              At least two unprovoked or reflex seizures occur more than 24
              hours apart.
            </li>
            <li>
              One unprovoked or reflex seizure and chances of seizures in future
              that are similar to the general risk of at least 60% after two
              unprovoked seizures occurring over the next ten years.
            </li>
            <li>
              Diagnosis of the epilepsy syndrome. What to do if someone around
              you has a seizure:
            </li>
            <li>Remove all sharp objects</li>
            <li>Keep patient in left lateral position</li>
            <li>Don't put anything inside your mouth</li>
            <li>Shift the patient to the hospital</li>

            <p className="top-para">Important instructions for patients:</p>
            <li>Driving and swimming are not allowed</li>
            <li>Don't miss the dose</li>
            <li>
              If you missed one dose, then take two tablet stat and follow the
              previous prescription
            </li>
          </ul>

          <p className="top-para">
            <strong>
              Parkinson's disease and other hypokinetic disorders:{" "}
            </strong>
            It is a progressive degenerative disorder affecting the brain in
            which the most important symptoms are the slowness of activities of
            daily living, tremors of the hand, bradykinesia and freezing
            episodes and falls. Medications can help to manage the symptoms of
            Parkinson's disease. Usually, dopamine-increasing medications are
            given to patients. Deep brain stimulation is also a better option if
            the patient fulfils the prerequisite criteria for DBS.
          </p>
          <p className="top-para">
            <strong>Meningitis and Encephalitis: </strong>Due to inflammation of
            the meninges and brain. It could be due to viral, tubercular,
            bacterial or fungal. The patient usually presents with a history of
            fever, headache, vomiting, neck pain and drowsiness. Encephalitis
            mainly occurs due to viral infection or autoimmune process in which
            the patient usually presents with fever, headache, seizures,
            psychosis etc. Early diagnosis and treatment are mandatory because
            it is a curable disease.
          </p>
          <p className="top-para">
            <strong>
              Demyelinating disorders (Multiple sclerosis, NMOSD etc.):{" "}
            </strong>
            These are immune-mediated disorders in which demyelinating lesions
            in the brain and spinal cord will occur. Patients usually present
            with unilateral or bilateral loss of vision, fatigability, gait
            ataxia, recurrent hiccups and difficulty walking. Early and
            appropriate treatment is required because once it reaches a
            degenerative condition, complete recovery will not be possible.
            Apart from medical management, rehabilitation and physiotherapy play
            a great role in management.
          </p>
          <p className="top-para">
            <strong>Cognitive disorders: </strong>There are reversible and
            irreversible types of dementia. The reversible cause of dementia
            needs to be ruled out. Dementia is broadly classified into cortical
            and subcortical dementia. Alzheimer's disease is known to be the
            most common cause of cortical dementia. The most challenging and
            appropriate evaluation is required in cases of rapidly progressive
            dementia.
          </p>

          <h2 className="second-heading">
            When do you need to see a neurologist?
          </h2>
          <ul className="surgeries-list services-list">
            <p className="top-para">
              Patients may need to see a neurologist if they:
            </p>
            <li>Have suffered from seizures.</li>
            <li>Are facing specific taste and smell disturbances.</li>
            <li>
              Have suddenly become forgetful and frequently forget events that
              occurred in the near past.
            </li>
            <li>
              Feel a sensation of Numbness and tingling, especially in the
              patient's legs and arms.
            </li>
            <li>
              Facing vision problems like blurred vision, double vision, etc.
            </li>
            <li>Suffer from vertigo.</li>
            <li>Have suddenly faced deafness.</li>
            <li>Are witnessing slowness in movement.</li>
            <li>Are constantly experiencing tremors.</li>
            <li>Are facing muscle weakness, spasms, twitching, and cramps.</li>
            <li>Have an electric shock-like pain in the body.</li>
            <li>Find Swallowing food challenging.</li>
            <li>Have noticed sudden hoarseness in the patient's voice.</li>
            <li>
              Is finding it difficult to shrug his shoulder or move his neck.
            </li>
            <li>Is finding tongue movements challenging.</li>
            <li>There is an imbalance in gait.</li>
            <li>There are noticeable facial asymmetries.</li>
          </ul>

          <h2 className="second-heading">Diagnosis</h2>
          <ul className="surgeries-list services-list">
            <p className="top-para">
              Neurologists may order several diagnostic tests to detect the
              cause and measure the extent of the disease and disorder. Some of
              the diagnostic tests conducted by them are:
            </p>
            <li>
              <strong>Biopsy: </strong>A small part of brain tissue is extracted
              and studied under a microscope. Biopsies help to determine if the
              tumours are cancerous or benign.
            </li>
            <li>
              <strong>Electroencephalography: </strong>This test is conducted to
              measure the brain's electrical activity. It is vital in diagnosing
              seizure focus.
            </li>
            <li>
              <strong>Angiography: </strong>Angiography provides a better view
              of the patient's blood vessels to the doctor. It is conducted to
              detect blood clots and aneurysms.
            </li>
            <li>
              <strong>Electromyography: </strong>It records the electrical
              activity in the patient's muscles. It is usually performed to
              diagnose muscle and nerve disorders.
            </li>
            <li>
              <strong>Polysomnogram: </strong>This test helps measure body and
              brain activity during sleep. It is crucial to diagnose sleeping
              disorders.
            </li>
            <li>
              <strong>Evoked potential Test: </strong>This test helps measure
              the speed at which electrical signals from the patient's brain
              reach his ears, skin, or eyes. It also measures how completely
              these electrical signals pass. It can help to diagnose conditions
              like spinal cord injury, acoustic neuroma, etc.
            </li>
            <li>
              <strong>Thermography: </strong>This test measures the temperature
              changes within the patient's body. Thermography is usually ordered
              to evaluate peripheral nerve disorders, pain syndrome, and nerve
              root compression.
            </li>
            <li>
              <strong>Cerebrospinal fluid analysis: </strong>Here, a sample of
              the fluid surrounding the patient's brain is extracted and
              studied. Cerebral spinal fluid analysis can help to detect
              infection, metabolic diseases, multiple sclerosis, and brain
              bleeding.
            </li>
            <li>
              <strong>Imaging: </strong>A neurologist may order imaging tests
              like CT scans, MRI scans, and ultrasounds to get a better picture
              of the abnormal mass growth in the patient's brain. This helps the
              doctors to determine the extent of progression made by the tumours
              in the brain.
            </li>
            <li>
              <strong>Positron emission Tomography: </strong>This imaging scan
              helps doctors to get a clearer view of the tumours or metastasis.
              It also helps to evaluate diseases like Alzheimer's' and epilepsy.
            </li>
          </ul>

          <p className="last-para">
            The results of the tests mentioned above will be available within 24
            hours. Medicines and treatments will be prescribed according to the
            results of these tests. Consult a doctor immediately if you think
            you may suffer from a neurological condition.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Neurology;
