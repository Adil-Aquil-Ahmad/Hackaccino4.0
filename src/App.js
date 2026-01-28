import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormsLanding from './components/FormsLanding';
import LandingPage from './components/LandingPage';
import BaristasPage from './components/BaristasPage';
import SponsorsListPage from './components/SponsorsListPage';

function AppContent() {
  return (
    <div className="w-full overflow-x-hidden min-h-screen relative">
      <div className="fixed inset-0 w-full h-full bg-black pointer-events-none z-0" />
      <div className="fixed inset-0 w-full h-full bg-gradient-to-b from-black via-[#381017]/40 to-[#FF3300]/10 pointer-events-none z-0" />
      <div className="fixed w-[800px] h-[800px] -top-[10%] left-[20%] bg-[#FF3300] blur-[200px] rounded-full opacity-10 pointer-events-none z-0 animate-float" />
      
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/baristas" element={<BaristasPage />} />
          <Route path="/sponsors" element={<SponsorsListPage />} />
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
