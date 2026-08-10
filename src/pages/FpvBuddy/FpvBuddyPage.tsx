import React from 'react';
import { HeroSection } from './components/HeroSection';
import { PipelineSection } from './components/PipelineSection';
import { ValuePropositionSection } from './components/ValuePropositionSection';
import { SubsystemsSection } from './components/SubsystemsSection';
import { UseCasesSection } from './components/UseCasesSection';
import { QuoteSection } from './components/QuoteSection';
import { Interactive360Viewer } from '../../components/Interactive360Viewer';

export function FpvBuddyPage() {
  return (
    <div className="w-full bg-[#05080D] text-white overflow-hidden">
      <HeroSection />
      <Interactive360Viewer />
      <PipelineSection />
      <ValuePropositionSection />
      <SubsystemsSection />
      <UseCasesSection />
      <QuoteSection />
    </div>
  );
}