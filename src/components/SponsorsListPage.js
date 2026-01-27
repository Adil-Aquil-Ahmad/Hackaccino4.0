import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Animation from '../animation/animation';
import Sponsors from './Sponsors';

const SponsorsListPage = () => {
  return (
    <div className="sponsors-page" style={{position: 'relative', overflowX: 'hidden', minHeight: '100vh'}}>
      <Animation />
      <Header />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default SponsorsListPage;
