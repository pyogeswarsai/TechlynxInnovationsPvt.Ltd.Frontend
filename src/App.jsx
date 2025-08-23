// App.jsx ✅
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Cookie from './pages/Cookie';
import Copyright from './pages/Copyright';

import FullStackDevelopmentServices from './pages/FullStackDevelopment'
import CloudTransformations from './pages/CloudTransformation'
import AISolutionsServices from './pages/AISolutions'
import DataIntelligence from './pages/DataIntelligence'
import UIUXDesign from './pages/UIUXDesign'
import MobileAppDevelopment from './pages/MobileAppDevelopment'
import DevOpsEngineering from './pages/DevOpsEngineering'
import CyberSecurity from './pages/CyberSecurity'
import BlockchainIntegration from './pages/BlockchainIntegration'
import OurFeatures from './pages/OurFeatures'

import Career from './pages/career';
import StudentIntern from './pages/student';
import ThankYou from './pages/thank';
import Graduate from './pages/graduate';
import OurTeam from './pages/ourteams';
import JobForm from './pages/job';
import JobCards from './pages/JobCards';

import Discoverus from './pages/Discoverus'

import ContactSection from './pages/ContactSection'

import ResetPassword from './components/ResetPassword';
import Chatbot from './components/Chatbot';

const App = () => {
  return (
   <Router> 
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path='/home' element={<Homepage />} />
      <Route path='/reset-password' element={<ResetPassword />} />
      <Route path="/terms-and-conditions" element={<Terms />} />
      <Route path="/privacy-policy" element={<Privacy />} />
      <Route path="/cookie-policy" element={<Cookie />} />
      <Route path="/copyright-policy" element={<Copyright />} />

        <Route path='/services' element={<OurFeatures />} />
        <Route path='/services/full-stack-development' element={<FullStackDevelopmentServices />} />
        <Route path='/services/cloud-transformation' element={<CloudTransformations />} />
        <Route path='/services/ai-solutions' element={<AISolutionsServices />} />
        <Route path='/services/data-intelligence' element={<DataIntelligence />} />
        <Route path='/services/uiux-design' element={<UIUXDesign />} />
        <Route path='/services/mobile-app-development' element={<MobileAppDevelopment />} />
        <Route path='/services/devops-engineering' element={<DevOpsEngineering />} />
        <Route path='/services/cybersecurity' element={<CyberSecurity />} />
        <Route path='/services/block-chain-integration' element={<BlockchainIntegration />} />


        <Route path="/careers" element={<Career />} />
        <Route path="/careers/student-intern" element={<StudentIntern />} />
        <Route path="/careers/thank-you" element={<ThankYou />} />
        <Route path="/careers/graduate" element={<Graduate />} />
         <Route path="/careers/our-full-team" element={<OurTeam />} />
         <Route path="/careers/apply-form" element={<JobForm />} />
         <Route path="/careers/jobcards" element={<JobCards />} />

         <Route path='/about-us' element={<Discoverus />} />

        <Route path='/contact-us' element={<ContactSection />} />
        
    </Routes>

      <Chatbot />
   </Router> 
  );
};

export default App;
