import React from 'react';
import { InteractiveBlueprint, TierData } from '../../../components/InteractiveBlueprint';
import twpasImg from '@/imports/quantum-microwave-devices/twpas_amplification.jpg';
import hemtImg from '@/imports/quantum-microwave-devices/hemt_amplifiers_low_noise.png';
import mixersImg from '@/imports/quantum-microwave-devices/mixers_filters_attenuators.png';

export function SubsystemsSection() {
  const tiers: TierData[] = [
    {
      id: "01",
      type: 'BROADBAND',
      title: "TWPAs · AMPLIFICATION",
      description: "Travelling Wave Parametric Amplifiers providing gain at the near-quantum-limited noise floor.",
      image: twpasImg,
      statusBadge: 'DETECTION PLATFORM',
      specs: [
        { label: "ROLE", value: "First-stage amplification" },
        { label: "ENVIRONMENT", value: "Cryogenic", highlight: 'ACTIVE' },
        { label: "OUTPUT", value: "Near-quantum-limited gain" }
      ]
    },
    {
      id: "02",
      type: 'QUANTUM-GRADE',
      title: "HEMT Amplifiers · LOW NOISE",
      description: "High Electron Mobility Transistor amplifiers delivering low-noise gain across RF and microwave bands.",
      image: hemtImg,
      statusBadge: 'QUANTUM MEASUREMENT',
      specs: [
        { label: "ROLE", value: "Low-noise amplification" },
        { label: "ENVIRONMENT", value: "Room temperature to cryogenic" },
        { label: "OUTPUT", value: "RF/MW gain" }
      ]
    },
    {
      id: "03",
      type: 'AMPLIFICATION',
      title: "Mixers, Filters and Attenuators · CONDITIONING",
      description: "IQ mixers, filters and attenuators for precision frequency conversion and signal conditioning.",
      image: mixersImg,
      statusBadge: 'SIGNAL CHAIN',
      specs: [
        { label: 'Role', value: 'Signal conditioning' },
        { label: 'Environment', value: 'Room temperature to cryogenic' },
        { label: 'Output', value: 'Conditioned signal chain', highlight: 'SECURE' }
      ]
    }
  ];

  return <InteractiveBlueprint title="PLATFORM<br/>VARIANTS" subtitle="// SYSTEM ARCHITECTURE" tiers={tiers} />;
}


