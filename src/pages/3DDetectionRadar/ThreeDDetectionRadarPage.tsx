import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { HeroSection } from './components/HeroSection';
import { PipelineSection } from './components/PipelineSection';
import { ValuePropositionSection } from './components/ValuePropositionSection';
import { SubsystemsSection } from './components/SubsystemsSection';
import { UseCasesSection } from './components/UseCasesSection';
import { ClosingSection } from './components/ClosingSection';

export function ThreeDDetectionRadarPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-white selection:bg-[#84CC16] selection:text-black font-sans">
      <Navbar />
      
      <main className="w-full flex flex-col pt-20">
        <HeroSection />
        <PipelineSection />
        <ValuePropositionSection />
        <SubsystemsSection />
        <UseCasesSection />
        <ClosingSection />
      </main>

      <Footer />
    </div>
  );
}
