import React from 'react';
import { InteractiveBlueprint, TierData } from '../../../components/InteractiveBlueprint';
import rfd1Img from '../../../imports/quantum_rfd_detect.jpg';
import rgQdImg from '../../../imports/rydberg_sensor_macro.jpg';
import amplifImg from '../../../imports/quantum_atomic_clock.jpg';

export function SubsystemsSection() {
  const tiers: TierData[] = [
    {
      id: 'sub-rfd1',
      type: 'BROADBAND',
      title: 'RFD1',
      description: 'Wideband RF detection across the full spectrum, configurable across surveillance and acquisition roles.',
      image: rfd1Img,
      statusBadge: 'DETECTION PLATFORM',
      specs: [
        { label: 'Role', value: 'Broadband detection' },
        { label: 'Environment', value: 'Room temp to cryogenic', highlight: 'ACTIVE' },
        { label: 'Output', value: 'Wideband RF detection' }
      ]
    },
    {
      id: 'sub-rgqd',
      type: 'QUANTUM-GRADE',
      title: 'RG-QD',
      description: 'Detection engineered for the sensitivity demands of quantum and research-grade measurement.',
      image: rgQdImg,
      statusBadge: 'QUANTUM MEASUREMENT',
      specs: [
        { label: 'Role', value: 'High-sensitivity detection' },
        { label: 'Environment', value: 'Cryogenic capable' },
        { label: 'Output', value: 'Precision measurement' }
      ]
    },
    {
      id: 'sub-amplif',
      type: 'AMPLIFICATION',
      title: 'RF-Model / HVN S4 Series',
      description: 'Amplification hardware that preserves signal strength across the detection chain.',
      image: amplifImg,
      statusBadge: 'SIGNAL CHAIN',
      specs: [
        { label: 'Role', value: 'Signal amplification' },
        { label: 'Environment', value: 'Room temp to cryogenic' },
        { label: 'Output', value: 'Conditioned RF signal', highlight: 'SECURE' }
      ]
    }
  ];

  return <InteractiveBlueprint title="PLATFORM<br/>VARIANTS" subtitle="// SYSTEM ARCHITECTURE" tiers={tiers} />;
}


