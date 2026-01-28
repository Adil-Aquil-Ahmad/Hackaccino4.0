import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Animation from '../animation/animation';
import Baristas from './Baristas';

const BaristasPage = () => {
  return (
    <div className="baristas-page" style={{position: 'relative', overflowX: 'hidden', minHeight: '100vh'}}>
      <Animation />
      <Header />
      <div style={{ paddingTop: '100px' }}>
        <Baristas />
      </div>
      <Footer />
    </div>
  );
};

export default BaristasPage;
