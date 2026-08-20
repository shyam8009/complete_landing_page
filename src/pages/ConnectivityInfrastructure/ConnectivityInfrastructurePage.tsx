import React from 'react';
import { ConnectivityHero } from './components/ConnectivityHero';
import { SystemPitch } from './components/SystemPitch';
import { TechEcosystem } from './components/TechEcosystem';
import { SovereignStrip } from './components/SovereignStrip';
import { QuantumCTA } from './components/QuantumCTA';

export function ConnectivityInfrastructurePage() {
  return (
    <div className="w-full bg-[#05080D] text-white overflow-hidden font-sans">
      <ConnectivityHero />
      <SystemPitch />
      <TechEcosystem />
      <SovereignStrip />
      <QuantumCTA />
    </div>
  );
}
