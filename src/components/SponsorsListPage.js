import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Animation from '../animation/animation';
import Sponsors from './Sponsors';

const SponsorsListPage = () => {
  return (
    <div className="sponsors-page relative overflow-x-hidden min-h-screen">
      <div 
        className="absolute top-0 left-0 w-full h-[150vh] z-0 pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0.9) 55%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.4) 85%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0.9) 55%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.4) 85%, rgba(0,0,0,0) 100%)'
        }}
      >
        <Animation className="w-full h-full" />
      </div>
      <div className="relative z-10">
        <Header />
        <Sponsors />
        <Footer />
      </div>
    </div>
  );
};

export default SponsorsListPage;
