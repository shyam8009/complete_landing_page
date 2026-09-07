import React from 'react';
import { InteractiveBlueprint, TierData } from '../../../components/InteractiveBlueprint';
import ergonomicImg from '../../../imports/infinity-spear/ergonomic_chassis.webp';
import antennaImg from '../../../imports/infinity-spear/directional_antenna_array.webp';
import batteryImg from '../../../imports/infinity-spear/extended_battery_life.webp';

export function SubsystemsSection() {
  const tiers: TierData[] = [
    {
      id: 'sub-chassis',
      type: 'CHASSIS',
      title: 'Ergonomic Chassis',
      description: 'Balanced, lightweight chassis designed for prolonged tactical engagements without operator fatigue.',
      image: ergonomicImg,
      statusBadge: 'FORM FACTOR',
      specs: [
        { label: 'Weight', value: 'Lightweight' },
        { label: 'Fatigue', value: 'Reduced', highlight: 'ACTIVE' }
      ]
    },
    {
      id: 'sub-antenna',
      type: 'RF MODULE',
      title: 'Directional Antenna Array',
      description: 'High-gain antennas focusing disruption energy squarely on the target to maximize effective range.',
      image: antennaImg,
      statusBadge: 'RF PROJECTION',
      specs: [
        { label: 'Gain', value: 'High' },
        { label: 'Focus', value: 'Targeted' },
        { label: 'Range', value: 'Maximized' }
      ]
    },
    {
      id: 'sub-battery',
      type: 'POWER NODE',
      title: 'Extended Battery Life',
      description: 'Quick-swap battery modules ensuring continuous operational readiness during critical missions.',
      image: batteryImg,
      statusBadge: 'POWER SOURCE',
      specs: [
        { label: 'Swap', value: 'Quick-release' },
        { label: 'Readiness', value: 'Continuous', highlight: 'READY' }
      ]
    }
  ];

  return <InteractiveBlueprint title="Hardware<br/>Specifications" subtitle="// Technical Architecture" tiers={tiers} />;
}

