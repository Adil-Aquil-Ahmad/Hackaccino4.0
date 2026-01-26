import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Tracks from '../components/Tracks';
import Timeline from '../components/Timeline';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import ShaderBackground from '../components/ShaderBackground';
import '../components/FormsLanding.css'; 

const LandingPage = () => {
  return (
    <div className="landing-page" style={{position: 'relative', overflowX: 'hidden'}}>
      <ShaderBackground />
      <Header />
      <Hero />
      <About />
      <Tracks />
      <Timeline />
      <FAQ />
      <Footer />
    </div>
  );
};

export default LandingPage;
