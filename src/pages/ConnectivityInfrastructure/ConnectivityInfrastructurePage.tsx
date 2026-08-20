import React from 'react';
import { ConnectivityHero } from './components/ConnectivityHero';
import { SystemPitch } from './components/SystemPitch';
import { TechEcosystem } from './components/TechEcosystem';
import { SovereignStrip } from './components/SovereignStrip';
import { QuantumCTA } from './components/QuantumCTA';

export function ConnectivityInfrastructurePage() {
  return (
    <main className="w-full bg-[#000000] min-h-screen text-white font-sans selection:bg-[#84CC16]/30">
      <ConnectivityHero />
      <SystemPitch />
      <TechEcosystem />
      <SovereignStrip />
      <QuantumCTA />
    </main>
  );
}
