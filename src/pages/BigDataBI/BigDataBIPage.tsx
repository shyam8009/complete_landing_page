import React from 'react';
import { BigDataBIHero } from './components/BigDataBIHero';
import { BigDataBIPipeline } from './components/BigDataBIPipeline';
import { BigDataBICapabilities } from './components/BigDataBICapabilities';
import { BigDataBISpecs } from './components/BigDataBISpecs';
import { BigDataBIApplications } from './components/BigDataBIApplications';
import { BigDataBICTA } from './components/BigDataBICTA';

export function BigDataBIPage() {
  return (
    <div className="w-full bg-[#05080D] text-white overflow-hidden font-sans">
      <BigDataBIHero />
      <BigDataBIPipeline />
      <BigDataBICapabilities />
      <BigDataBISpecs />
      <BigDataBIApplications />
      <BigDataBICTA />
    </div>
  );
}
