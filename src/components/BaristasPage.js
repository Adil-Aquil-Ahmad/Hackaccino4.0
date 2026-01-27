import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Animation from '../animation/animation';
import Baristas from './Baristas';

const BaristasPage = () => {
  return (
    <div className="baristas-page relative overflow-x-hidden min-h-screen">
      <Animation />
      <Header />
      <div className="pt-[100px]">
        <Baristas />
      </div>
      <Footer />
    </div>
  );
};

export default BaristasPage;
