import React from 'react';
import { InteractiveBlueprint, TierData } from '@/components/InteractiveBlueprint';
import img1 from '@/imports/aerospace-components/mechanical_structural.png';
import img2 from '@/imports/aerospace-components/rf_microwave.jpg';
import img3 from '@/imports/aerospace-components/optical_electro-optics.jpg';
import img4 from '@/imports/infinity-rhino/magnific_extreme-closeup-macro-pho_CHdnhd8EEy.png';

export function AerospaceComponentsSpecs() {
  const tiers: TierData[] = [
    {
      id: 'aero-1',
      type: 'STRUCTURAL ASSEMBLIES',
      title: 'Mechanical & Structural',
      description: 'We manufacture high-precision structural assemblies that form the backbone of satellite and antenna systems, including pedestal assemblies (such as the 112 mm pedestal for ECIL), mirror support assemblies, reflector supports, INVAR precision structures, feed brackets, antenna structures, and waveguide components. Every part is machined to aerospace tolerances using CNC processes and validated through a dedicated precision machining inspection facility.',
      image: img1,
      statusBadge: 'Hardware Systems',
      specs: [
        { label: 'TOLERANCE', value: 'Aerospace Grade' },
        { label: 'MATERIAL', value: 'INVAR / High-Alloy' }
      ]
    },
    {
      id: 'aero-2',
      type: 'SIGNAL ARCHITECTURE',
      title: 'RF & Microwave',
      description: 'Our RF and microwave capability covers C-band and Ku-band assemblies, SSPAs (Solid State Power Amplifiers), diplexers, polarizers, harmonic filters, RF receivers, power dividers, couplers, and local oscillators. These components demand exceptional dimensional accuracy and surface finish, and our engineering teams bring high-precision expertise to every build.',
      image: img2,
      statusBadge: 'Microwave Systems',
      specs: [
        { label: 'BANDWIDTH', value: 'C-Band & Ku-Band' },
        { label: 'PRECISION', value: 'Exceptional Accuracy' }
      ]
    },
    {
      id: 'aero-3',
      type: 'IMAGING & SENSING',
      title: 'Optical & Electro-Optics',
      description: 'We manufacture optical payloads and assemblies used in radiometer modules, camera systems, weather forecast payloads, and ocean monitoring payloads, supporting missions where imaging clarity and structural stability are non-negotiable.',
      image: img3,
      statusBadge: 'Payload Assemblies',
      specs: [
        { label: 'CLARITY', value: 'Non-Negotiable' },
        { label: 'STABILITY', value: 'Structural Support' }
      ]
    },
    {
      id: 'aero-4',
      type: 'AVIONICS & CONTROL',
      title: 'Space Electronics',
      description: 'On the electronics side, we support on-board computer assemblies, PCB and TR module packaging, and high-density electronic modules built for the rigors of space deployment.',
      image: img4,
      statusBadge: 'Electronic Modules',
      specs: [
        { label: 'PACKAGING', value: 'High-Density Modules' },
        { label: 'DEPLOYMENT', value: 'Space Rigors' }
      ]
    }
  ];

  return <InteractiveBlueprint title="Satellite Components<br/>& Payloads" subtitle="// PRECISION AEROSPACE PORTFOLIO" tiers={tiers} />;
}
