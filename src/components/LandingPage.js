import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Tracks from './Tracks';
import Timeline from './Timeline';
import FAQ from './FAQ';
import Footer from './Footer';
import Animation from '../animation/animation';

const LandingPage = () => {
  return (
    <div className="landing-page relative overflow-x-hidden">
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <Animation className="w-full h-full" />
        {/* Subtle Gradient Overlay to ensure readability at the bottom */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.8) 100%)'
          }}
        />
      </div>
      <div className="relative z-10">
        <Header />
        <Hero />
        <div className="bg-[#000000] bg-opacity-20 backdrop-blur-sm"> {/* Optional wrapper for content below Hero to ensure readability over static bg if needed, or just let it be transparent over App.js bg */}
            <About />
            <Tracks />
            <Timeline />
            <FAQ />
            <Footer />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
