import React from 'react';
import { InteractiveBlueprint, TierData } from '@/components/InteractiveBlueprint';
import rfd1Img from '@/imports/quantum_rfd_detect.jpg';
import rgQdImg from '@/imports/rydberg_sensor_macro.jpg';

export function PlatformVariants() {
  const tiers: TierData[] = [
    {
      id: 'sub-qkd-fibre',
      type: 'POINT-TO-POINT',
      title: 'QKD-Fibre',
      description: 'Quantum key distribution over fibre, securing fixed links between established sites.',
      image: rfd1Img,
      statusBadge: 'CONFIGURATION',
      specs: [
        { label: 'LINK TYPE', value: 'Fibre' },
        { label: 'TOPOLOGY', value: 'Point-to-point', highlight: 'ACTIVE' },
        { label: 'OUTPUT', value: 'Detectable-interception key exchange' }
      ]
    },
    {
      id: 'sub-drone-relay',
      type: 'MOBILE',
      title: 'Drone-Relay Architecture',
      description: 'Airborne relay nodes extending secure quantum links across contested or unwired terrain.',
      image: rgQdImg,
      statusBadge: 'CONFIGURATION',
      specs: [
        { label: 'LINK TYPE', value: 'Over the air' },
        { label: 'TOPOLOGY', value: 'Relayed' },
        { label: 'OUTPUT', value: 'Extended secure reach', highlight: 'SECURE' }
      ]
    }
  ];

  return <InteractiveBlueprint title="PLATFORM<br/>VARIANTS" subtitle="// SYSTEM ARCHITECTURE" tiers={tiers} />;
}
