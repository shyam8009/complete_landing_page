import React, { useEffect } from 'react';
import { SatcomComponentsHero } from './components/SatcomComponentsHero';
import { SatcomComponentsPipeline } from './components/SatcomComponentsPipeline';
import { SatcomComponentsCapabilities } from './components/SatcomComponentsCapabilities';
import { SatcomComponentsSpecs } from './components/SatcomComponentsSpecs';
import { SatcomComplianceStrip } from './components/SatcomComplianceStrip';
import { SatcomCTA } from './components/SatcomCTA';

export function SatcomComponentsPage() {
  useEffect(() => {
    document.title = "SATCOM Components | Strategic Manufacturing";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', "Orbit-ready SATCOM components engineered for signal integrity, structural precision, and long-term reliability.");
    
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full bg-[#050505] min-h-screen text-white font-sans selection:bg-[#84CC16]/30">
      <SatcomComponentsHero />
      <SatcomComponentsPipeline />
      <SatcomComponentsCapabilities />
      <SatcomComponentsSpecs />
      <SatcomComplianceStrip />
      <SatcomCTA />
    </main>
  );
}
