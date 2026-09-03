import React from 'react';
import { InteractiveBlueprint, TierData } from '@/components/InteractiveBlueprint';
import bspImg from '@/imports/quantum-control-systems/board_support_packages.jpg';
import softwareStackImg from '@/imports/quantum-control-systems/software_stacks_development_tools.png';
import futureCapImg from '@/imports/quantum-control-systems/future_capability.png';

const LAYERS = [
  {
    id: "01",
    title: "Board Support Packages",
    type: "ABSTRACTION",
    description: "Low-level abstraction for diverse quantum control electronics hardware, enabling hardware-software integration across platforms and vendors.",
    image: bspImg,
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
    image: softwareStackImg,
    specs: [
      { label: "SCOPE", value: "Drivers, middleware, tooling" },
      { label: "COMPATIBILITY", value: "Platform-agnostic" },
      { label: "OUTPUT", value: "Deployable software stack" }
    ]
  },
  {
    id: "03",
    title: "Future Capability",
    type: "EXPANSION",
    description: "Modular expansion architecture supporting next-generation quantum protocols and hardware platforms.",
    image: futureCapImg,
    specs: [
      { label: "SCOPE", value: "Modular Expansion" },
      { label: "COMPATIBILITY", value: "Next-gen Protocols" },
      { label: "OUTPUT", value: "Scalable Architecture" }
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