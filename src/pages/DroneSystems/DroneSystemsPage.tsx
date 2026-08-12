import React, { useEffect } from 'react';
import DroneSystemsHero from './components/DroneSystemsHero';
import DroneSystemsPitch from './components/DroneSystemsPitch';
import DroneSystemsEcosystem from './components/DroneSystemsEcosystem';
import { SovereignStrip } from '../QuantumSensing/components/SovereignStrip';
import { QuantumCTA } from '../QuantumSensing/components/QuantumCTA';

export function DroneSystemsPage() {
  // Set SEO metadata on mount
  useEffect(() => {
    document.title = "Intelligence & Surveillance: Tactical Drone & EW Systems";
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', "Hardened FPV drone architectures, high-speed kinetic interceptors, and non-ISM anti-jamming communication channels engineered for electronic warfare environments.");
    
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full bg-[#000000] min-h-screen text-white font-sans selection:bg-[#84CC16]/30">
      <DroneSystemsHero />
      <DroneSystemsPitch />
      <DroneSystemsEcosystem />
      <SovereignStrip />
      <QuantumCTA />
    </main>
  );
}
