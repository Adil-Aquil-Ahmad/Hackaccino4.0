import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Animation from '../animation/animation';
import Sponsors from './Sponsors';

const SponsorsListPage = () => {
  return (
    <div className="sponsors-page relative overflow-x-hidden min-h-screen">
      <Animation />
      <Header />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default SponsorsListPage;
