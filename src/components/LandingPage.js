import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Tracks from './Tracks';
import Timeline from './Timeline';
import FAQ from './FAQ';
import Footer from './Footer';
import Animation from '../animation/animation';
import './FormsLanding.css'; 

const LandingPage = () => {
  return (
    <div className="landing-page" style={{position: 'relative', overflowX: 'hidden'}}>
      <Animation />
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
