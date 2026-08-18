import React from 'react';
import { InteractiveBlueprint, TierData } from '../../../components/InteractiveBlueprint';
import imgAwareness from '@/imports/rf_radar_generated.png';
import imgIntelligence from '@/imports/rf_radar_hud.png';
import imgTargeting from '@/imports/interception_ui.jpg';

export function SubsystemsSection() {
  const tiers: TierData[] = [
    {
      id: 'sub-wideband',
      type: 'SPECTRUM AWARENESS',
      title: 'Wideband Spectrum Analysis',
      description: "Utilizes ultra-fast sweep rates across VHF, UHF, and microwave bands to detect burst transmissions and low-probability-of-intercept (LPI) signals instantly.",
      image: imgAwareness,
      statusBadge: 'HARDWARE CAPABILITY',
      specs: [
        { label: 'Sweep', value: 'Ultra-fast' },
        { label: 'Detection', value: 'LPI Signals' },
        { label: 'Status', value: 'Active', highlight: 'LIVE' }
      ]
    },
    {
      id: 'sub-demod',
      type: 'SIGNAL INTELLIGENCE',
      title: 'Advanced Demodulation Engine',
      description: "Employs AI-driven classification to automatically recognize, demodulate, and decrypt complex digital waveforms and frequency-hopping protocols in real-time.",
      image: imgIntelligence,
      statusBadge: 'SOFTWARE ENGINE',
      specs: [
        { label: 'Classification', value: 'AI-driven' },
        { label: 'Decryption', value: 'Real-time' }
      ]
    },
    {
      id: 'sub-geo',
      type: 'TARGET ACQUISITION',
      title: 'High-Precision Geolocation',
      description: "Utilizes advanced Time Difference of Arrival (TDOA) and Angle of Arrival (AOA) metrics alongside correlative interferometry for high-resolution target triangulation.",
      image: imgTargeting,
      statusBadge: 'SYSTEM METRICS',
      specs: [
        { label: 'Metrics', value: 'TDOA / AOA' },
        { label: 'Resolution', value: 'High', highlight: 'ACTIVE' }
      ]
    }
  ];

  return <InteractiveBlueprint title="System<br/>Architecture" subtitle="// HARDWARE & SOFTWARE SUBSYSTEMS" tiers={tiers} />;
}

