import React from 'react';
import { InteractiveBlueprint, TierData } from '../../../components/InteractiveBlueprint';
import imgInter from '@/imports/direction-finders/correlative_interferometry.png';
import imgTdoa from '@/imports/direction-finders/tdoa_aoa_processing.jpg';
import imgTerrain from '@/imports/direction-finders/3d_terrain_compensation.png';

export function SubsystemsSection() {
  const tiers: TierData[] = [
    {
      id: 'df-inter',
      type: 'INTERFEROMETRY CORE',
      title: 'Correlative Interferometry',
      description: 'Advanced phase-measurement techniques delivering high-resolution bearing estimation even in dense, multi-path RF environments.',
      image: imgInter,
      statusBadge: 'HARDWARE SENSOR',
      specs: [
        { label: 'Technique', value: 'Phase-measurement' },
        { label: 'Bearing', value: 'High-resolution' },
        { label: 'Status', value: 'Active', highlight: 'LIVE' }
      ]
    },
    {
      id: 'df-tdoa',
      type: 'GEOLOCATION ENGINE',
      title: 'TDOA & AOA Processing',
      description: 'Combining Time Difference of Arrival and Angle of Arrival metrics for multi-station cooperative tracking of low-probability-of-intercept (LPI) signals.',
      image: imgTdoa,
      statusBadge: 'PROCESSING ENGINE',
      specs: [
        { label: 'Metrics', value: 'TDOA & AOA' },
        { label: 'Tracking', value: 'Multi-station' }
      ]
    },
    {
      id: 'df-terrain',
      type: 'TERRAIN INTEGRATION',
      title: '3D Terrain Compensation',
      description: 'Integrated elevation and topological algorithms eliminate multi-path propagation errors to optimize fix accuracy across rugged terrain.',
      image: imgTerrain,
      statusBadge: 'SOFTWARE ANALYTICS',
      specs: [
        { label: 'Integration', value: 'Elevation/Topological' },
        { label: 'Optimization', value: 'Maximized Accuracy', highlight: 'ACTIVE' }
      ]
    }
  ];

  return <InteractiveBlueprint title="System<br/>Architecture" subtitle="// HARDWARE & SOFTWARE SUBSYSTEMS" tiers={tiers} />;
}

