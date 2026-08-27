const fs = require('fs');
const path = require('path');

const dir = 'src/pages/QuantumSecuredCommunication/components';

// 4. PlatformVariants.tsx
fs.writeFileSync(path.join(dir, 'PlatformVariants.tsx'), `import React from 'react';
import { InteractiveBlueprint, TierData } from '@/components/InteractiveBlueprint';
import amplifImg from '@/imports/quantum_rfd_detect.jpg'; // generic placeholder

const VARIANTS = [
  {
    id: "01",
    title: "QKD-Fibre",
    type: "POINT-TO-POINT",
    description: "Quantum key distribution over fibre, securing fixed links between established sites.",
    specs: [
      { label: "LINK TYPE", value: "Fibre" },
      { label: "TOPOLOGY", value: "Point-to-point" },
      { label: "OUTPUT", value: "Detectable-interception key exchange" }
    ]
  },
  {
    id: "02",
    title: "Drone-Relay Architecture",
    type: "MOBILE",
    description: "Airborne relay nodes extending secure quantum links across contested or unwired terrain.",
    specs: [
      { label: "LINK TYPE", value: "Over the air" },
      { label: "TOPOLOGY", value: "Relayed" },
      { label: "OUTPUT", value: "Extended secure reach" }
    ]
  }
];

export function PlatformVariants() {
  const tiers: TierData[] = VARIANTS.map((v) => ({
    id: v.id,
    type: v.type,
    title: v.title,
    description: v.description,
    image: amplifImg,
    statusBadge: 'CONFIGURATION',
    specs: v.specs
  }));

  return <InteractiveBlueprint title="PLATFORM<br/>VARIANTS" subtitle="// SYSTEM ARCHITECTURE" tiers={tiers} />;
}`);

// 5. TacticalApplications.tsx
fs.writeFileSync(path.join(dir, 'TacticalApplications.tsx'), `import React from 'react';
import { UseCasesSection } from '@/components/UseCasesSection';
import cmdImg from '@/imports/c2_integration.webp';
import terrainImg from '@/imports/dynamic_battlefield_environments.webp';
import opImg from '@/imports/perimeter_threat_neutralization.webp';

const CASES = [
  {
    id: "01",
    title: "SECURE COMMAND LINKS",
    description: "",
    image: cmdImg
  },
  {
    id: "02",
    title: "CONTESTED TERRAIN",
    description: "",
    image: terrainImg
  },
  {
    id: "03",
    title: "SENSITIVE OPERATIONS",
    description: "",
    image: opImg
  }
];

export function TacticalApplications() {
  return <UseCasesSection title="TACTICAL APPLICATIONS" cases={CASES} />;
}`);

// 6. ClosingCTA.tsx
fs.writeFileSync(path.join(dir, 'ClosingCTA.tsx'), `import React from 'react';
import { TechCTA } from '@/components/TechCTA';

export function ClosingCTA() {
  return (
    <section className="w-full bg-[#000000] section-padding px-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-[800px] mx-auto z-10 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-10 leading-tight font-['Inter',sans-serif]">
          "THE DANGEROUS INTERCEPTION IS THE ONE YOU NEVER FIND OUT ABOUT."
        </h2>
        
        <TechCTA className="mb-6">
          REQUEST FOR PROPOSAL
        </TechCTA>
      </div>
    </section>
  );
}`);

// Page Component
fs.writeFileSync('src/pages/QuantumSecuredCommunication/QuantumSecuredCommunicationPage.tsx', `import React, { useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { OperationalSequence } from './components/OperationalSequence';
import { CoreCapabilities } from './components/CoreCapabilities';
import { PlatformVariants } from './components/PlatformVariants';
import { TacticalApplications } from './components/TacticalApplications';
import { ClosingCTA } from './components/ClosingCTA';

export default function QuantumSecuredCommunicationPage() {
  useEffect(() => {
    document.title = "Quantum Secured Communication | Sahana Defence";
  }, []);

  return (
    <main className="w-full bg-[#000000] min-h-screen text-white font-sans selection:bg-[#84CC16]/30">
      <HeroSection />
      <OperationalSequence />
      <CoreCapabilities />
      <PlatformVariants />
      <TacticalApplications />
      <ClosingCTA />
    </main>
  );
}`);

console.log('Created remaining components and main page.');
