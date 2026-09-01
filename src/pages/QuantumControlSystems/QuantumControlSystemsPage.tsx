import React, { useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { OperationalSequence } from './components/OperationalSequence';
import { CoreCapabilities } from './components/CoreCapabilities';
import { SoftwareLayers } from './components/SoftwareLayers';
import { TacticalApplications } from './components/TacticalApplications';
import { ClosingCTA } from './components/ClosingCTA';

export default function QuantumControlSystemsPage() {
  useEffect(() => {
    document.title = "Quantum Control Systems | Sahana Defence";
  }, []);

  return (
    <div className="w-full bg-[#05080D] min-h-screen text-white overflow-hidden font-sans selection:bg-[#84CC16]/30">
      <HeroSection />
      <OperationalSequence />
      <CoreCapabilities />
      <SoftwareLayers />
      <TacticalApplications />
      <ClosingCTA />
    </div>
  );
}