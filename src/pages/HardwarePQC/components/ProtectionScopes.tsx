import React from 'react';
import { InteractiveBlueprint, TierData } from '@/components/InteractiveBlueprint';
import dataTransitImg from '@/imports/hardware-pqc/data_in_transit.png';
import dataRestImg from '@/imports/hardware-pqc/data_at_rest.jpg';
import futureCapImg from '@/imports/hardware-pqc/future_capability.jpg';

const SCOPES = [
  {
    id: "01",
    title: "Data in Transit",
    type: "COMMUNICATION",
    description: "Protection for information moving across communication links and control infrastructure.",
    image: dataTransitImg,
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
    image: dataRestImg,
    specs: [
      { label: "STATE", value: "At rest" },
      { label: "IMPLEMENTATION", value: "Hardware-enabled" },
      { label: "THREAT MODEL", value: "Classical and quantum" }
    ]
  },
  {
    id: "03",
    title: "Future Capability",
    type: "EXPANSION",
    description: "Hardware-enabled cryptographic architecture designed for long-term algorithmic agility and future quantum standards.",
    image: futureCapImg,
    specs: [
      { label: "STATE", value: "Algorithmic agility" },
      { label: "IMPLEMENTATION", value: "Hardware-enabled" },
      { label: "THREAT MODEL", value: "Next-gen post-quantum" }
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