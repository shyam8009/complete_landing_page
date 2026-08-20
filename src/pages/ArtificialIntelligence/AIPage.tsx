import React from 'react';
import { AIHero } from './components/AIHero';
import { AIPipeline } from './components/AIPipeline';
import { AICapabilities } from './components/AICapabilities';
import { AISpecs } from './components/AISpecs';
import { AIApplications } from './components/AIApplications';
import { AICTA } from './components/AICTA';

export function AIPage() {
  return (
    <div className="w-full bg-[#05080D] text-white overflow-hidden font-sans">
      <AIHero />
      <AIPipeline />
      <AICapabilities />
      <AISpecs />
      <AIApplications />
      <AICTA />
    </div>
  );
}
