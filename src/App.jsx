import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import OurDoctors from "./pages/OurDoctors";
import DrVisiting from "./pages/DrVisiting";
import DrInHospital from "./pages/DrInHospital";
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
import EvanLab from "./pages/EvanLab";
import InsuranceTPA from "./pages/InsuranceTPA";
import AmbulanceService from "./pages/AmbulanceService";
import Specialities from "./pages/Specialities";
import InternationalPatients from "./pages/InternationalPatients";
import Gallery from "./pages/Gallery";

// import Projects from "./pages/Products";
// import Services from "./pages/Services";
import Navigation from "./components/Navigation/Navigation";
const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dr-visiting" element={<DrVisiting />} />
        <Route path="/dr-in-hospital" element={<DrInHospital />} />
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
        <Route path="/evan-lab" element={<EvanLab />} />
        <Route path="/insurance-tpa" element={<InsuranceTPA />} />
        <Route path="/ambulance-service" element={<AmbulanceService />} />
        <Route path="/specialities" element={<Specialities />} />
        <Route
          path="/international-patients"
          element={<InternationalPatients />}
        />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
};

export default App;
