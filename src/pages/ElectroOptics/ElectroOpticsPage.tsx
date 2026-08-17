import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { TacticalImagingCore } from './components/TacticalImagingCore';
import { EcosystemTrack } from './components/EcosystemTrack';
import { SovereignStrip } from '../QuantumSensing/components/SovereignStrip';
import { QuantumCTA } from '../QuantumSensing/components/QuantumCTA';

export function ElectroOpticsPage() {
  // Set SEO metadata on mount
  useEffect(() => {
    document.title = "Electro-Optics & Tactical Imaging Systems";
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', "Multi-spectral Electro-Optic (EO/IR) surveillance systems. Featuring 8 tactical platforms including Hugo, Nubra, and Salte, engineered for extreme long-range target tracking and thermal imaging.");
    
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full bg-[#050505] min-h-screen text-white font-sans selection:bg-[#84CC16]/30">
      <Hero />
      <TacticalImagingCore />
      <EcosystemTrack />
      <SovereignStrip />
      <QuantumCTA />
    </main>
  );
}
