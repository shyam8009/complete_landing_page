import React from 'react';
import { InteractiveBlueprint, TierData } from '../../../components/InteractiveBlueprint';
import navImg from '@/imports/quantum-clock-source/navigation_systems.png';
import radarImg from '@/imports/quantum-clock-source/radar_systems.png';
import distImg from '@/imports/quantum-clock-source/distributed_networks.png';

const SUBSYSTEMS = [
  {
    id: "01",
    title: "Navigation Systems · POSITIONING",
    description: "Timing reference for positioning systems operating without satellite support.",
    image: navImg,
    specs: [
      { label: "ROLE", value: "Navigation timing" },
      { label: "DEPENDENCY", value: "None external" },
      { label: "OUTPUT", value: "Sovereign time base" }
    ]
  },
  {
    id: "02",
    title: "Radar Systems · RESOLUTION",
    description: "Stable frequency reference for Radar, where timing precision sets the resolution ceiling.",
    image: radarImg,
    specs: [
      { label: "ROLE", value: "Radar timing" },
      { label: "DEPENDENCY", value: "None external" },
      { label: "OUTPUT", value: "Precision reference" }
    ]
  },
  {
    id: "03",
    title: "Distributed Networks · COHERENCE",
    description: "Synchronisation across distributed sensor and communication nodes.",
    image: distImg,
    specs: [
      { label: "ROLE", value: "Network synchronisation" },
      { label: "DEPENDENCY", value: "None external" },
      { label: "OUTPUT", value: "Common time base" }
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
    statusBadge: 'INTEGRATION',
    specs: s.specs
  }));

  return <InteractiveBlueprint title="INTEGRATION<br/>POINTS" subtitle="// SYSTEM ARCHITECTURE" tiers={tiers} />;
}


