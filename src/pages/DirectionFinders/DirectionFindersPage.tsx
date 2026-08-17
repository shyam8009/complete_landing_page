import React, { useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { PipelineSection } from './components/PipelineSection';
import { ValuePropositionSection } from './components/ValuePropositionSection';
import { SubsystemsSection } from './components/SubsystemsSection';
import { UseCasesSection } from './components/UseCasesSection';
import { QuoteSection } from './components/QuoteSection';

export function DirectionFindersPage() {
  useEffect(() => {
    document.title = "Direction Finders";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#05080D] text-white overflow-hidden">
      <HeroSection />
      <PipelineSection />
      <ValuePropositionSection />
      <SubsystemsSection />
      <UseCasesSection />
      <QuoteSection />
    </div>
  );
}
