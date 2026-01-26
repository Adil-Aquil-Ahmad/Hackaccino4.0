import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import FormsLanding from './components/FormsLanding';
import LandingPage from './pages/LandingPage';
import BaristasPage from './pages/BaristasPage';
import SponsorsListPage from './pages/SponsorsListPage';

function AppContent() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/baristas" element={<BaristasPage />} />
        <Route path="/sponsors" element={<SponsorsListPage />} />
        <Route path="/forms" element={<FormsLanding />} />
      </Routes>
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
