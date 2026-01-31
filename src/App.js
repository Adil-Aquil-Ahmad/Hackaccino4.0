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
      
      {/* Smoother Gradient with noise to prevent banding */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0" 
           style={{
             background: 'linear-gradient(180deg, #000000 0%, #1a0400 25%, #330800 50%, #4d0c00 75%, #661000 100%)',
             opacity: 0.9
           }} 
      />
      
      {/* Soft Radial Glow - sharper and more vibrant */}
      <div className="fixed w-[1200px] h-[1200px] -top-[20%] left-[10%] pointer-events-none z-0 animate-float"
           style={{
             background: 'radial-gradient(circle, rgba(255, 60, 0, 0.15) 0%, rgba(255, 90, 0, 0.08) 35%, rgba(255, 60, 0, 0.02) 60%, transparent 80%)',
             filter: 'blur(20px)', 
           }} 
      />

      {/* Noise Overlay */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-[0.03]"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
           }}
      />
      
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
