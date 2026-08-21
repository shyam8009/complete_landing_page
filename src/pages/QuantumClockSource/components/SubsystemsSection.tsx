import React from 'react';
import { InteractiveBlueprint, TierData } from '../../../components/InteractiveBlueprint';
import rfd1Img from '../../../imports/quantum_rfd_detect.jpg';
import rgQdImg from '../../../imports/rydberg_sensor_macro.jpg';
import amplifImg from '../../../imports/quantum_atomic_clock.jpg';

const SUBSYSTEMS = [
  {
    id: "01",
    title: "Point 01 — Navigation Systems · POSITIONING",
    description: "Timing reference for positioning systems operating without satellite support.",
    specs: [
      { label: "ROLE", value: "Navigation timing" },
      { label: "DEPENDENCY", value: "None external" },
      { label: "OUTPUT", value: "Sovereign time base" }
    ]
  },
  {
    id: "02",
    title: "Point 02 — Radar Systems · RESOLUTION",
    description: "Stable frequency reference for Radar, where timing precision sets the resolution ceiling.",
    specs: [
      { label: "ROLE", value: "Radar timing" },
      { label: "DEPENDENCY", value: "None external" },
      { label: "OUTPUT", value: "Precision reference" }
    ]
  },
  {
    id: "03",
    title: "Point 03 — Distributed Networks · COHERENCE",
    description: "Synchronisation across distributed sensor and communication nodes.",
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
    image: amplifImg,
    statusBadge: 'INTEGRATION',
    specs: s.specs
  }));

  return <InteractiveBlueprint title="INTEGRATION<br/>POINTS" subtitle="// SYSTEM ARCHITECTURE" tiers={tiers} />;
}


