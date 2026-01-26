import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ShaderBackground from '../components/ShaderBackground';
import Sponsors from '../components/Sponsors';

const SponsorsListPage = () => {
  return (
    <div className="sponsors-page" style={{position: 'relative', overflowX: 'hidden', minHeight: '100vh'}}>
      <ShaderBackground />
      <Header />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default SponsorsListPage;
