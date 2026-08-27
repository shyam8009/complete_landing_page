import React from 'react';
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
}