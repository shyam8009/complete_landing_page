import React from 'react';
import { InteractiveBlueprint, TierData } from '@/components/InteractiveBlueprint';
import rfd1Img from '@/imports/drone_radar_3d/c2_integration.webp';
import rgQdImg from '@/imports/c2_dashboard_ui.png';

const LAYERS = [
  {
    id: "01",
    title: "Board Support Packages",
    type: "ABSTRACTION",
    description: "Low-level abstraction for diverse quantum control electronics hardware, enabling hardware-software integration across platforms and vendors.",
    image: rfd1Img,
    specs: [
      { label: "SCOPE", value: "Hardware abstraction" },
      { label: "COMPATIBILITY", value: "Vendor-agnostic" },
      { label: "OUTPUT", value: "Common hardware interface" }
    ]
  },
  {
    id: "02",
    title: "Software Stacks and Development Tools",
    type: "APPLICATION",
    description: "Device drivers, middleware and developer tools built on standardised APIs.",
    image: rgQdImg,
    specs: [
      { label: "SCOPE", value: "Drivers, middleware, tooling" },
      { label: "COMPATIBILITY", value: "Platform-agnostic" },
      { label: "OUTPUT", value: "Deployable software stack" }
    ]
  }
];

export function SoftwareLayers() {
  const tiers: TierData[] = LAYERS.map((v) => ({
    id: v.id,
    type: v.type,
    title: v.title,
    description: v.description,
    image: v.image,
    statusBadge: 'LAYER',
    specs: v.specs
  }));

  return <InteractiveBlueprint title="SOFTWARE<br/>LAYERS" subtitle="// SYSTEM ARCHITECTURE" tiers={tiers} />;
}