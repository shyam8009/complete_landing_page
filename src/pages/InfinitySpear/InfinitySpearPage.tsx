import React from 'react';
import { HeroSection } from './components/HeroSection';
import { PipelineSection } from './components/PipelineSection';
import { Interactive360SpearViewer } from './components/Interactive360SpearViewer';
import { SubsystemsSection } from './components/SubsystemsSection';
import { UseCasesSection } from './components/UseCasesSection';
import { QuoteSection } from './components/QuoteSection';

export function InfinitySpearPage() {
  return (
    <div className="w-full bg-[#05080D] text-white overflow-hidden">
      <HeroSection />
      <PipelineSection />
      <Interactive360SpearViewer />
      <SubsystemsSection />
      <UseCasesSection />
      <QuoteSection />
    </div>
  );
}