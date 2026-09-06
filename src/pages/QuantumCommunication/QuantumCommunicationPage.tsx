import React, { useEffect } from 'react';
import { QuantumCommunicationHero } from './components/QuantumCommunicationHero';
import { QuantumCommunicationPitch } from './components/QuantumCommunicationPitch';
import { QuantumCommunicationEcosystem } from './components/QuantumCommunicationEcosystem';
import { QuantumCommunicationValueTrio } from './components/QuantumCommunicationValueTrio';
import { QuantumCommunicationCTA } from './components/QuantumCommunicationCTA';

export default function QuantumCommunicationPage() {
  useEffect(() => {
    document.title = "Quantum Communication | Sahana Defence";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      "Indigenous quantum communication hardware across three platforms: Quantum Key Distribution over fibre and air, Hardware-Based Post-Quantum Cryptography, and Quantum Control Systems."
    );

    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full bg-[#000000] min-h-screen text-white font-sans selection:bg-[#84CC16]/30">
      <QuantumCommunicationHero />
      <QuantumCommunicationPitch />
      <QuantumCommunicationEcosystem />
      <QuantumCommunicationValueTrio />
      <QuantumCommunicationCTA />
    </main>
  );
}
