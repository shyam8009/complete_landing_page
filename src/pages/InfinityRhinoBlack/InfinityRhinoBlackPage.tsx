import React from 'react';
import { HeroSection } from './components/HeroSection';
import { PipelineSection } from './components/PipelineSection';
import { Interactive360RhinoBlackViewer } from './components/Interactive360RhinoBlackViewer';
import { SubsystemsSection } from './components/SubsystemsSection';
import { UseCasesSection } from './components/UseCasesSection';
import { QuoteSection } from './components/QuoteSection';

export function InfinityRhinoBlackPage() {
  return (
    <div className="w-full bg-[#05080D] text-white overflow-hidden">
      <HeroSection />
      <PipelineSection />
      <Interactive360RhinoBlackViewer />
      <SubsystemsSection />
      <UseCasesSection />
      <QuoteSection />
    </div>
  );
}