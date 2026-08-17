import React, { useEffect } from 'react';
import CommunicationMonitoringHero from './components/CommunicationMonitoringHero';
import CommunicationMonitoringPitch from './components/CommunicationMonitoringPitch';
import CommunicationMonitoringEcosystem from './components/CommunicationMonitoringEcosystem';
import { SovereignStrip } from '../QuantumSensing/components/SovereignStrip';
import { QuantumCTA } from '../QuantumSensing/components/QuantumCTA';

export default function CommunicationMonitoringPage() {
  // Set SEO metadata on mount
  useEffect(() => {
    document.title = "Communication & Monitoring Systems | Information Warfare";
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', "Advanced Communication Monitoring systems. Unifying wideband Radio Monitoring Portfolios and high-precision Direction Finders for total electromagnetic spectrum dominance.");
    
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full bg-[#000000] min-h-screen text-white font-sans selection:bg-[#84CC16]/30">
      <CommunicationMonitoringHero />
      <CommunicationMonitoringPitch />
      <CommunicationMonitoringEcosystem />
      <SovereignStrip />
      <QuantumCTA 
        title="Secure Your Spectral Intelligence Architecture."
        primaryAction="CONTACT MONITORING DIVISION"
        secondaryAction="Request Technical RF Demo"
      />
    </main>
  );
}
