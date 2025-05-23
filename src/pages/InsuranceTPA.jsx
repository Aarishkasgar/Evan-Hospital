import React from "react";
import "../styles/InsuranceTPA.css";

const InsuranceTPA = () => {
  return (
    <div>
      <div className="tpa-container">
        <div className="tpa-header">
          <h2>TPA and Panel Information</h2>
        </div>
      </div>
      <div className="tpaInfo-container">
        <div className="tpaInfo-inner-container">
          <p>
            To get you back to your healthy self and back to the comfort of your
            home, we at Evan Healthcare have tied up with recognized Third Party
            Administrators and insurance companies, providing you with a
            hassle-free experience.
          </p>

          <h2>List of Associated TPA</h2>
          <hr className="Headingunderline" />
          <ul className="tpa-list">
            <li>Aditya Birla Health Insurance company Ltd</li>
            <li>Bajaj Allianz General Insurance Company Ltd.</li>
            <li>Chola Mandalam Ms General Insurance Co. Ltd.</li>
            <li>Ericson TPA Healthcare Pvt. Ltd.</li>
            <li>Hdfc Ergo General Insurance Co. Ltd.</li>
            <li>Heritage Health TPA Pvt. Ltd.</li>
            <li>Icici Lombard General Insurance Co. Ltd.</li>
            <li>Iffco Tokio General Insracne Co. Ltd.</li>
            <li>Manipal Cigna Health Insurance co Ltd</li>
            <li>Max Bupa Health Insurance Company Ltd</li>
            <li>Md India Healthcare Services (TPA) Pvt. Ltd.</li>
            <li>Medi Assist India TPA Pvt. Ltd.</li>
            <li>Medsave Healthcare TPA Ltd.</li>
            <li>Paramount Health Services (TPA) Pvt. Ltd.</li>
            <li>Park Mediclaim TPA Pvt. Ltd.</li>
            <li>Raksha TPA Pvt. Ltd.</li>
            <li>Reliance General Insurance Co. Ltd</li>
            <li>Safeway TPA Services Pvt. Ltd.</li>
            <li>Star Health & Allied Insurance Co. Ltd.</li>
            <li>Universal Sompo General Insurance Co. Ltd.</li>
            <li>Vidal Health TPA Pvt. Ltd.</li>
            <li>Health Insurance TPA of India Limited</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InsuranceTPA;
