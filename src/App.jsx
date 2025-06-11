import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NavTop from "./components/NavTop";
import About from "./pages/About";
// import OurDoctors from "./pages/OurDoctors";
// import DrVisiting from "./pages/DrVisiting";

// Department-----------
import Managements from "./pages/Managements";
import DrInHospital from "./pages/DrInHospital";
// import SupportiveDr from "./pages/SupportiveDr";
import Counsellor from "./pages/Counsellor";
import Rmo from "./pages/Rmo";
import Nurses from "./pages/Nurses";
import Technician from "./pages/Technician";
// Department------------

// Specialities----------
import Pulmonology from "./pages/Pulmonology";
import Ent from "./pages/Ent";
import Surgery from "./pages/Surgery";
import InternalMedicins from "./pages/InternalMedicins";
import Cardiology from "./pages/Cardiology";
import Neurology from "./pages/Neurology";
import Gynecology from "./pages/Gynecology";
import Orthopedics from "./pages/Orthopedics";
import EmergencyCare from "./pages/EmergencyCare";
import Pharmacy from "./pages/Pharmacy";
import Oncology from "./pages/Oncology";
import Dental from "./pages/Dental";
import HomeHealthCare from "./pages/HomeHealthCare";
import Physiotherapy from "./pages/Physiotherapy";
import Urology from "./pages/Urology";
import Dermatology from "./pages/Dermatology";
import Paediatric from "./pages/Paediatric";
import CriticalCare from "./pages/CriticalCare";

import Dialysis from "./pages/Dialysis";
import Nephro from "./pages/Nephro";
import Gastro from "./pages/Gastro";

// Specialities-----------

// Services----------
import AmbulanceService from "./pages/AmbulanceService";
import Radiology from "./pages/Radiology";
import Ayushman from "./pages/Ayushman";
import InsuranceTPA from "./pages/InsuranceTPA";
import EvanLab from "./pages/EvanLab";
// Services------------

// import Specialities from "./pages/Specialities";
import VideoGallery from "./pages/VideoGallery";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

import Navigation from "./components/Navigation/Navigation";
import ViewSpecialities from "./pages/ViewSpecialities";
// import CriticalCare from "./pages/CriticalCare";
const App = () => {
  return (
    <>
      <NavTop />
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* ----------Department--------- */}
          <Route path="/managements" element={<Managements />} />
          <Route path="/dr-in-hospital" element={<DrInHospital />} />
          {/* <Route path="/supportive-dr" element={<SupportiveDr />} /> */}
          <Route path="/counsellor" element={<Counsellor />} />
          <Route path="/rmo" element={<Rmo />} />
          <Route path="/nurses" element={<Nurses />} />
          <Route path="/technician" element={<Technician />} />
          {/* ---------Department---------- */}

          {/* -----------Specialities---------- */}
          <Route path="/pulmonology" element={<Pulmonology />} />
          <Route path="/ent" element={<Ent />} />
          <Route path="/surgery" element={<Surgery />} />
          <Route path="/internal-medicins" element={<InternalMedicins />} />
          <Route path="/cardiology" element={<Cardiology />} />
          <Route path="/neurology" element={<Neurology />} />
          <Route path="/gynecology" element={<Gynecology />} />
          <Route path="/orthopedics" element={<Orthopedics />} />
          <Route path="/emergency-care" element={<EmergencyCare />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/viewall-specialities" element={<ViewSpecialities />} />
          <Route path="/oncology" element={<Oncology />} />
          <Route path="/dental" element={<Dental />} />
          <Route path="/homehealthcare" element={<HomeHealthCare />} />
          <Route path="/physiotherapy" element={<Physiotherapy />} />
          <Route path="/urology" element={<Urology />} />
          <Route path="/dermatology" element={<Dermatology />} />
          <Route path="/paediatric" element={<Paediatric />} />
          <Route path="/criticalcare" element={<CriticalCare />} />

          <Route path="/dialysis" element={<Dialysis />} />
          <Route path="/nephro" element={<Nephro />} />
          <Route path="/gastro" element={<Gastro />} />

          {/* ------------Specialities------------- */}

          {/* ---------Services----------- */}
          <Route path="/evan-lab" element={<EvanLab />} />
          <Route path="/insurance-tpa" element={<InsuranceTPA />} />
          <Route path="/ambulance-service" element={<AmbulanceService />} />
          <Route path="/radiology" element={<Radiology />} />
          <Route path="/ayushman" element={<Ayushman />} />
          {/* ---------Services---------- */}

          {/* <Route path="/specialities" element={<Specialities />} /> */}
          <Route path="/video-gallery" element={<VideoGallery />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
