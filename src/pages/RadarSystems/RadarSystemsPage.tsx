import React, { useEffect } from 'react';
import RadarSystemsHero from './components/RadarSystemsHero';
import RadarSystemsPitch from './components/RadarSystemsPitch';
import RadarSystemsEcosystem from './components/RadarSystemsEcosystem';
import { SovereignStrip } from '../QuantumSensing/components/SovereignStrip';
import { QuantumCTA } from '../QuantumSensing/components/QuantumCTA';

export function RadarSystemsPage() {
  // Set SEO metadata on mount
  useEffect(() => {
    document.title = "Radar & Detection Systems | Defense & Electronic Warfare";
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', "Indigenous 3D Drone Detection RADAR and passive RF Detection systems engineered for 24/7 perimeter protection, border defense, and low-RCS threat detection.");
    
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full bg-[#050505] min-h-screen text-white font-sans selection:bg-[#84CC16]/30">
      <RadarSystemsHero />
      <RadarSystemsPitch />
      <RadarSystemsEcosystem />
      <SovereignStrip />
      <QuantumCTA />
    </main>
  );
}
