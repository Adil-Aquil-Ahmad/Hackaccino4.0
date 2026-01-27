import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormsLanding from './components/FormsLanding';
import LandingPage from './components/LandingPage';
import BaristasPage from './components/BaristasPage';
import SponsorsListPage from './components/SponsorsListPage';

function AppContent() {
  return (
    <div className="w-full overflow-x-hidden min-h-screen relative">
      <div className="fixed inset-0 w-full h-full bg-gradient-to-b from-[#9e2c41]/15 to-[#381017]/15 pointer-events-none z-0" />
      <div className="fixed w-[800px] h-[800px] -top-[10%] left-[20%] bg-[#191037] blur-[200px] rounded-full opacity-30 pointer-events-none z-0 animate-float" />
      
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
