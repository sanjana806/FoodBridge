import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactStats from './components/ImpactStats';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import ActionModal from './components/ActionModal';

export default function App() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    mode: 'donate' // 'donate' or 'find'
  });

  const handleOpenDonate = () => {
    setModalState({ isOpen: true, mode: 'donate' });
  };

  const handleOpenFindFood = () => {
    setModalState({ isOpen: true, mode: 'find' });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="app-root">
      <Navbar 
        onDonateClick={handleOpenDonate} 
        onFindFoodClick={handleOpenFindFood} 
      />
      
      <main>
        <Hero 
          onDonateClick={handleOpenDonate} 
          onFindFoodClick={handleOpenFindFood} 
        />
        
        <ImpactStats />
        
        <HowItWorks 
          onDonateClick={handleOpenDonate} 
          onFindFoodClick={handleOpenFindFood} 
        />
        
        <Features />
        
        <CallToAction 
          onDonateClick={handleOpenDonate} 
          onFindFoodClick={handleOpenFindFood} 
        />
      </main>

      <Footer />

      <ActionModal 
        isOpen={modalState.isOpen}
        mode={modalState.mode}
        onClose={handleCloseModal}
      />
    </div>
  );
}
