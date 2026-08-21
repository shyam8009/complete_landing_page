import React from 'react';
import { InteractiveBlueprint, TierData } from '../../../components/InteractiveBlueprint';
import rfd1Img from '../../../imports/quantum_rfd_detect.jpg';
import rgQdImg from '../../../imports/rydberg_sensor_macro.jpg';
import amplifImg from '../../../imports/quantum_atomic_clock.jpg';

const SUBSYSTEMS = [
  {
    id: "01",
    title: "Configuration 01 — Signal Intelligence · DETECTION",
    description: "Detection and characterisation of emissions sitting below the threshold of conventional receiver hardware.",
    specs: [
      { label: "ROLE", value: "Emitter detection" },
      { label: "DOMAIN", value: "Electromagnetic" },
      { label: "OUTPUT", value: "Signal characterisation" }
    ]
  },
  {
    id: "02",
    title: "Configuration 02 — Spectrum Awareness · MONITORING",
    description: "Continuous measurement of the electromagnetic environment across an operating area.",
    specs: [
      { label: "ROLE", value: "Spectrum monitoring" },
      { label: "DOMAIN", value: "Electromagnetic" },
      { label: "OUTPUT", value: "Environmental picture" }
    ]
  },
  {
    id: "03",
    title: "Configuration 03 — Secure Sensing · PROTECTED",
    description: "Measurement in conditions where the sensing activity must not be revealed.",
    specs: [
      { label: "ROLE", value: "Covert measurement" },
      { label: "DOMAIN", value: "Electromagnetic" },
      { label: "OUTPUT", value: "Protected sensing" }
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

  return <InteractiveBlueprint title="DEPLOYMENT<br/>CONFIGURATIONS" subtitle="// SYSTEM ARCHITECTURE" tiers={tiers} />;
}


