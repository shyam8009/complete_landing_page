import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { Pitch } from './components/Pitch';
import { EcosystemTrack } from './components/EcosystemTrack';
import { SovereignStrip } from '../QuantumSensing/components/SovereignStrip';
import { QuantumCTA } from '../QuantumSensing/components/QuantumCTA';

export function CommunicationDetectionPage() {
  // Set SEO metadata on mount
  useEffect(() => {
    document.title = "Communication & Detection Systems";
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', "Secure, real-time tactical observation and soldier-level threat telemetry. Unifying Long Range Surveillance (LORROS) with wearable intelligence (The Guardian) for total operational awareness.");
    
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full bg-[#050505] min-h-screen text-white font-sans selection:bg-[#84CC16]/30">
      <Hero />
      <Pitch />
      <EcosystemTrack />
      <SovereignStrip />
      <QuantumCTA />
    </main>
  );
}
