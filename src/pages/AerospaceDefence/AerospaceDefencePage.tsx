import React, { useEffect } from 'react';
import AerospaceDefenceHero from './components/AerospaceDefenceHero';
import AerospaceDefencePitch from './components/AerospaceDefencePitch';
import AerospaceDefenceEcosystem from './components/AerospaceDefenceEcosystem';
import { SovereignStrip } from '../QuantumSensing/components/SovereignStrip';
import { QuantumCTA } from '../QuantumSensing/components/QuantumCTA';

export default function AerospaceDefencePage() {
  // Set SEO metadata on mount
  useEffect(() => {
    document.title = "Aerospace & Defence Components | Strategic Manufacturing";
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', "High-precision Aerospace, Defence, and SATCOM components engineered for extreme environments, structural integrity, and mission-critical defense reliability.");
    
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full bg-[#000000] min-h-screen text-white font-sans selection:bg-[#84CC16]/30">
      <AerospaceDefenceHero />
      <AerospaceDefencePitch />
      <AerospaceDefenceEcosystem />
      <SovereignStrip 
        stats={[
          { value: "AS9100", label: "Certified Quality" },
          { value: "MIL-STD", label: "Compliant Fabrication" },
          { value: "100%", label: "Indigenous Supply Chain" }
        ]}
      />
      <QuantumCTA 
        title="Secure Your Mission-Critical Component Supply Chain."
        primaryAction="CONTACT MANUFACTURING DIVISION"
        secondaryAction="Request Engineering Spec Review"
      />
    </main>
  );
}
