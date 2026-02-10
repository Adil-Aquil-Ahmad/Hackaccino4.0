import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormsLanding from './components/FormsLanding';
import LandingPage from './components/LandingPage';
import BaristasPage from './components/BaristasPage';
import SponsorsListPage from './components/SponsorsListPage';
import AboutCSIPage from './components/AboutCSIPage';

function AppContent() {
  return (
    <div className="w-full overflow-x-hidden min-h-screen relative">
      <div className="fixed inset-0 w-full h-full bg-black pointer-events-none z-0" />
      <div className="fixed inset-0 w-full h-full bg-gradient-to-b from-black via-[#381017]/40 to-[#FF3300]/10 pointer-events-none z-0" />
      <div 
        className="fixed w-[1200px] h-[1200px] -top-[20%] left-[10%] pointer-events-none z-0 animate-float"
        style={{
          background: 'radial-gradient(circle, rgba(255, 51, 0, 0.1) 0%, rgba(255, 51, 0, 0) 70%)'
        }}
      />
      
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/baristas" element={<BaristasPage />} />
          <Route path="/sponsors" element={<SponsorsListPage />} />
          <Route path="/about-csi" element={<AboutCSIPage />} />
          <Route path="/forms" element={<FormsLanding />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
