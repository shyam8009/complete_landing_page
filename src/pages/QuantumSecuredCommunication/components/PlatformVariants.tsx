import React from 'react';
import { InteractiveBlueprint, TierData } from '@/components/InteractiveBlueprint';
import qkdFibreImg from '@/imports/quantum-secured-communication/qkd_fibre.png';
import droneRelayImg from '@/imports/quantum-secured-communication/drone_relay_architecture.png';
import futureCapImg from '@/imports/quantum-secured-communication/future_capability.png';

export function PlatformVariants() {
  const tiers: TierData[] = [
    {
      id: 'sub-qkd-fibre',
      type: 'POINT-TO-POINT',
      title: 'QKD-Fibre',
      description: 'Quantum key distribution over fibre, securing fixed links between established sites.',
      image: qkdFibreImg,
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
      image: droneRelayImg,
      statusBadge: 'CONFIGURATION',
      specs: [
        { label: 'LINK TYPE', value: 'Over the air' },
        { label: 'TOPOLOGY', value: 'Relayed' },
        { label: 'OUTPUT', value: 'Extended secure reach', highlight: 'SECURE' }
      ]
    },
    {
      id: 'sub-future-capability',
      type: 'EXPANSION',
      title: 'Future Capability',
      description: 'Quantum-safe communication infrastructure engineered for satellite-to-ground quantum key distribution and hybrid classical-quantum networks.',
      image: futureCapImg,
      statusBadge: 'EXPANSION NODE',
      specs: [
        { label: 'LINK TYPE', value: 'Satellite / Hybrid' },
        { label: 'TOPOLOGY', value: 'Global Mesh' },
        { label: 'OUTPUT', value: 'Next-gen quantum key network', highlight: 'SECURE' }
      ]
    }
  ];

  return <InteractiveBlueprint title="PLATFORM<br/>VARIANTS" subtitle="// SYSTEM ARCHITECTURE" tiers={tiers} />;
}
