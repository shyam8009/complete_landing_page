import React from 'react';
import { InteractiveBlueprint, TierData } from '../../../components/InteractiveBlueprint';
import sigintImg from '@/imports/rydberg-atom-quantum-sensors/signal_intelligence.png';
import specAwarenessImg from '@/imports/rydberg-atom-quantum-sensors/spectrum_awareness.png';
import secureSensingImg from '@/imports/rydberg-atom-quantum-sensors/secure_sensing.png';

const SUBSYSTEMS = [
  {
    id: "01",
    title: "Signal Intelligence · DETECTION",
    description: "Detection and characterisation of emissions sitting below the threshold of conventional receiver hardware.",
    image: sigintImg,
    specs: [
      { label: "ROLE", value: "Emitter detection" },
      { label: "DOMAIN", value: "Electromagnetic" },
      { label: "OUTPUT", value: "Signal characterisation" }
    ]
  },
  {
    id: "02",
    title: "Spectrum Awareness · MONITORING",
    description: "Continuous measurement of the electromagnetic environment across an operating area.",
    image: specAwarenessImg,
    specs: [
      { label: "ROLE", value: "Spectrum monitoring" },
      { label: "DOMAIN", value: "Electromagnetic" },
      { label: "OUTPUT", value: "Environmental picture" }
    ]
  },
  {
    id: "03",
    title: "Secure Sensing · PROTECTED",
    description: "Measurement in conditions where the sensing activity must not be revealed.",
    image: secureSensingImg,
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
    image: s.image,
    statusBadge: 'CONFIGURATION',
    specs: s.specs
  }));

  return <InteractiveBlueprint title="DEPLOYMENT<br/>CONFIGURATIONS" subtitle="// SYSTEM ARCHITECTURE" tiers={tiers} />;
}


