import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import DirectorMessage from './pages/DirectorMessage';
import ProjectsListing from './pages/ProjectsListing';
import ProjectDetail from './pages/ProjectDetail';
import Careers from './pages/Careers';
import GalleryNews from './pages/GalleryNews';
import ContactUs from './pages/ContactUs';
import EnquiryPage from './pages/EnquiryPage';
import Disclaimer from './pages/Disclaimer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/director-message" element={<DirectorMessage />} />
          <Route path="/projects" element={<ProjectsListing />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/gallery" element={<GalleryNews />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/enquiry" element={<EnquiryPage />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}
