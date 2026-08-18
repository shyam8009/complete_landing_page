import React, { useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { PipelineSection } from './components/PipelineSection';
import { Pitch } from './components/Pitch';
import { SubsystemsSection } from './components/SubsystemsSection';
import { UseCasesSection } from './components/UseCasesSection';
import { QuoteSection } from './components/QuoteSection';

export function DroneRadarPage() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-[#84CC16]/30 selection:text-white">
      <HeroSection />
      <PipelineSection />
      <Pitch />
      <SubsystemsSection />
      <UseCasesSection />
      <QuoteSection />
    </div>
  );
}