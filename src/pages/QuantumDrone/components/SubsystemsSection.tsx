import React from 'react';
import { InteractiveBlueprint, TierData } from '../../../components/InteractiveBlueprint';
import rfd1Img from '../../../imports/quantum_rfd_detect.jpg';
import rgQdImg from '../../../imports/rydberg_sensor_macro.jpg';
import amplifImg from '../../../imports/quantum_atomic_clock.jpg';

const SUBSYSTEMS = [
  {
    id: "01",
    title: "Tier 01 — Drone-as-a-Service · MANAGED",
    description: "Flexible, mission-scale deployment without capital acquisition or in-house fleet management.",
    specs: [
      { label: "MODEL", value: "Managed service" },
      { label: "NAVIGATION", value: "GPS-denied capable" },
      { label: "SCOPE", value: "Mission-scale" }
    ]
  },
  {
    id: "02",
    title: "Tier 02 — Custom UAV Build · BESPOKE",
    description: "Platforms designed and built to a specific operational requirement.",
    specs: [
      { label: "MODEL", value: "Built to specification" },
      { label: "NAVIGATION", value: "GPS-denied capable" },
      { label: "SCOPE", value: "Requirement-defined" }
    ]
  }
];

export function SubsystemsSection() {
  const tiers: TierData[] = SUBSYSTEMS.map((s) => ({
    id: s.id,
    type: s.title.split('·')[1]?.trim() || s.title,
    title: s.title.split('·')[0]?.trim() || s.title,
    description: s.description,
    image: amplifImg,
    statusBadge: 'CONFIGURATION',
    specs: s.specs
  }));

  return <InteractiveBlueprint title="PLATFORM<br/>VARIANTS" subtitle="// SYSTEM ARCHITECTURE" tiers={tiers} />;
}


