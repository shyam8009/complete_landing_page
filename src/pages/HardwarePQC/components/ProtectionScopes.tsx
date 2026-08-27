import React from 'react';
import { InteractiveBlueprint, TierData } from '@/components/InteractiveBlueprint';
import rfd1Img from '@/imports/quantum_rfd_detect.jpg';
import rgQdImg from '@/imports/rydberg_sensor_macro.jpg';

const SCOPES = [
  {
    id: "01",
    title: "Data in Transit",
    type: "COMMUNICATION",
    description: "Protection for information moving across communication links and control infrastructure.",
    image: rfd1Img,
    specs: [
      { label: "STATE", value: "In transit" },
      { label: "IMPLEMENTATION", value: "Hardware-enabled" },
      { label: "THREAT MODEL", value: "Classical and quantum" }
    ]
  },
  {
    id: "02",
    title: "Data at Rest",
    type: "STORAGE",
    description: "Protection for stored information across sensitive systems.",
    image: rgQdImg,
    specs: [
      { label: "STATE", value: "At rest" },
      { label: "IMPLEMENTATION", value: "Hardware-enabled" },
      { label: "THREAT MODEL", value: "Classical and quantum" }
    ]
  }
];

export function ProtectionScopes() {
  const tiers: TierData[] = SCOPES.map((v) => ({
    id: v.id,
    type: v.type,
    title: v.title,
    description: v.description,
    image: v.image,
    statusBadge: 'CONFIGURATION',
    specs: v.specs
  }));

  return <InteractiveBlueprint title="PROTECTION<br/>SCOPES" subtitle="// SYSTEM ARCHITECTURE" tiers={tiers} />;
}