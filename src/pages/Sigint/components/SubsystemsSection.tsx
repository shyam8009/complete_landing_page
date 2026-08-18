import React from 'react';
import { InteractiveBlueprint, TierData } from '../../../components/InteractiveBlueprint';
import imgComint from '@/imports/rf_radar_generated.png';
import imgElint from '@/imports/surveillance_radar_hero.png';
import imgDf from '@/imports/digital_node_map.jpg';

export function SubsystemsSection() {
  const tiers: TierData[] = [
    {
      id: 'sigint-comint',
      type: 'COMMUNICATIONS INTELLIGENCE',
      title: 'COMINT Operations',
      description: 'Intercepts and analyzes tactical voice and data links. Features rapid frequency scanning and automatic protocol recognition to exploit modern frequency-hopping and burst transmissions.',
      image: imgComint,
      statusBadge: 'SOFTWARE ENGINE',
      specs: [
        { label: 'Scanning', value: 'Rapid' },
        { label: 'Protocol', value: 'Automatic Recognition' },
        { label: 'Status', value: 'Active', highlight: 'LIVE' }
      ]
    },
    {
      id: 'sigint-elint',
      type: 'ELECTRONIC INTELLIGENCE',
      title: 'ELINT Operations',
      description: 'Detects, identifies, and tracks hostile radar emissions and weapon guidance systems, contributing to a comprehensive Electronic Order of Battle (EOB).',
      image: imgElint,
      statusBadge: 'TRACKING SUITE',
      specs: [
        { label: 'Tracking', value: 'Radar Emissions' },
        { label: 'Mapping', value: 'EOB Integration' }
      ]
    },
    {
      id: 'sigint-df',
      type: 'TARGET ACQUISITION',
      title: 'Precision Direction Finding (DF)',
      description: 'Employs correlative interferometry and advanced antenna arrays to deliver pinpoint geographical coordinates of transmitting targets, natively feeding C2 networks.',
      image: imgDf,
      statusBadge: 'SYSTEM INTEGRATION',
      specs: [
        { label: 'Coordinates', value: 'Pinpoint' },
        { label: 'Integration', value: 'Natively feeds C2', highlight: 'ACTIVE' }
      ]
    }
  ];

  return <InteractiveBlueprint title="System<br/>Architecture" subtitle="// HARDWARE & SOFTWARE SUBSYSTEMS" tiers={tiers} />;
}

