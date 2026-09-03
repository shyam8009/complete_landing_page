import React from 'react';
import { InteractiveBlueprint, TierData } from '@/components/InteractiveBlueprint';
import img1 from '@/imports/satcom-components/high-frequency_assemblies.png';
import img2 from '@/imports/satcom-components/antenna_support_structures.jpg';
import img3 from '@/imports/satcom-components/invar_precision_structures.jpg';

export function SatcomComponentsSpecs() {
  const tiers: TierData[] = [
    {
      id: 'sat-1',
      type: 'SIGNAL ARCHITECTURE',
      title: 'High-Frequency Assemblies',
      description: 'Comprehensive SATCOM portfolio including C-band and Ku-band assemblies, SSPAs, diplexers, polarizers, harmonic filters, RF receivers, power dividers, couplers, and local oscillators.',
      image: img1,
      statusBadge: 'RF & Microwave',
      specs: [
        { label: 'ENGINEERING', value: 'High-Precision RF' },
        { label: 'BANDWIDTH', value: 'C-Band & Ku-Band' }
      ]
    },
    {
      id: 'sat-2',
      type: 'PAYLOAD HARDWARE',
      title: 'Antenna Support Structures',
      description: 'Precision manufacturing of pedestal assemblies, mirror and reflector support structures, feed brackets, and complete antenna structures to support critical RF systems.',
      image: img2,
      statusBadge: 'Structural Assemblies',
      specs: [
        { label: 'STABILITY', value: 'Dimensional' },
        { label: 'RELIABILITY', value: 'Long-Term Orbit' }
      ]
    },
    {
      id: 'sat-3',
      type: 'MATERIAL SCIENCE',
      title: 'INVAR Precision Structures',
      description: 'Specialized fabrication of waveguide components and INVAR precision structures, exclusively engineered to withstand severe mechanical and thermal stresses without warping.',
      image: img3,
      statusBadge: 'Waveguides',
      specs: [
        { label: 'MATERIAL', value: 'INVAR Alloy' },
        { label: 'RESISTANCE', value: 'Thermal Stress' }
      ]
    }
  ];

  return <InteractiveBlueprint title="Manufacturing<br/>Specifications" subtitle="// CORE MANUFACTURING CAPABILITIES" tiers={tiers} />;
}

