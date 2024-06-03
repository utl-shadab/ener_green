import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Page/Home';
import Gbc from './Page/Gbc';
import BioDiesel from "./Page/BioDiesel";
import BioEthonol from "./Page/BioEthonol";
import ContactUs from "./Page/ContactUs";
import Gallery from "./Page/Gallery";
import AboutUs from "./Page/AboutUs";
import PrivacyPolicy from "./Page/PrivacyPolicy";
import TermsConditions from "./Page/TermsConditions";
import Whatsapp from './Page/Whatsapp';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio-diesel" element={<BioDiesel />} />
        <Route path="/bio-ethanol" element={<BioEthonol />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/cbg" element={<Gbc />} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/privacy" element={<PrivacyPolicy/>} />
        <Route path="/terms" element={<TermsConditions/>} />
        <Route path="/whatsapp" element={<Whatsapp/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
