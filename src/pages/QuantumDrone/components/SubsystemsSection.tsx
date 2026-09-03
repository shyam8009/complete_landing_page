import React from 'react';
import { InteractiveBlueprint, TierData } from '../../../components/InteractiveBlueprint';
import daasImg from '@/imports/quantum-drone/drone_as_a_service.png';
import customUavImg from '@/imports/quantum-drone/custom_uav_build.png';
import futureCapImg from '@/imports/quantum-drone/future_capability.png';

const SUBSYSTEMS = [
  {
    id: "01",
    title: "Drone-as-a-Service · MANAGED",
    description: "Flexible, mission-scale deployment without capital acquisition or in-house fleet management.",
    image: daasImg,
    specs: [
      { label: "MODEL", value: "Managed service" },
      { label: "NAVIGATION", value: "GPS-denied capable" },
      { label: "SCOPE", value: "Mission-scale" }
    ]
  },
  {
    id: "02",
    title: "Custom UAV Build · BESPOKE",
    description: "Platforms designed and built to a specific operational requirement.",
    image: customUavImg,
    specs: [
      { label: "MODEL", value: "Built to specification" },
      { label: "NAVIGATION", value: "GPS-denied capable" },
      { label: "SCOPE", value: "Requirement-defined" }
    ]
  },
  {
    id: "03",
    title: "Future Capability · EXPANSION",
    description: "Autonomous quantum-assisted UAV swarm architectures with optical quantum key exchange.",
    image: futureCapImg,
    specs: [
      { label: "MODEL", value: "Next-gen Swarm" },
      { label: "NAVIGATION", value: "Quantum positioning" },
      { label: "SCOPE", value: "Global operations" }
    ]
  }
];

export function SubsystemsSection() {
  const tiers: TierData[] = SUBSYSTEMS.map((s) => ({
    id: s.id,
    type: s.title.split('·')[1]?.trim() || s.title,
    title: s.title.split('·')[0]?.trim() || s.title,
    description: s.description,
    image: s.image,
    statusBadge: 'CONFIGURATION',
    specs: s.specs
  }));

  return <InteractiveBlueprint title="PLATFORM<br/>VARIANTS" subtitle="// SYSTEM ARCHITECTURE" tiers={tiers} />;
}


