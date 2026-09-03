import React from 'react';
import { InteractiveBlueprint, TierData } from '../../../components/InteractiveBlueprint';
import imgCoverage from '@/imports/radio-monitoring/vlf_to_shf_coverage.png';
import imgProcessing from '@/imports/radio-monitoring/simultaneous_processing.png';
import imgClassification from '@/imports/radio-monitoring/automated_classification.png';

export function SubsystemsSection() {
  const tiers: TierData[] = [
    {
      id: 'rm-coverage',
      type: 'WIDEBAND RECEIVERS',
      title: 'VLF to SHF Coverage',
      description: 'Ultra-fast sweep rates and high-dynamic-range front ends capable of capturing weak signals amidst heavy spectrum congestion.',
      image: imgCoverage,
      statusBadge: 'HARDWARE SENSOR',
      specs: [
        { label: 'Sweep Rate', value: 'Ultra-fast' },
        { label: 'Dynamic Range', value: 'High' },
        { label: 'Status', value: 'Active', highlight: 'LIVE' }
      ]
    },
    {
      id: 'rm-processing',
      type: 'MULTI-CHANNEL CORE',
      title: 'Simultaneous Processing',
      description: 'Multi-channel architecture allows operators to monitor, record, and analyze multiple distinct frequency channels concurrently.',
      image: imgProcessing,
      statusBadge: 'PROCESSING ENGINE',
      specs: [
        { label: 'Architecture', value: 'Multi-channel' },
        { label: 'Concurrency', value: 'Simultaneous' }
      ]
    },
    {
      id: 'rm-classification',
      type: 'INTELLIGENT ANALYSIS',
      title: 'Automated Classification',
      description: 'Embedded software routines automatically classify modulation types, identify protocols, and flag anomalous transmissions.',
      image: imgClassification,
      statusBadge: 'SOFTWARE ANALYTICS',
      specs: [
        { label: 'Modulation', value: 'Auto-classify' },
        { label: 'Anomalies', value: 'Flagged', highlight: 'ACTIVE' }
      ]
    }
  ];

  return <InteractiveBlueprint title="System<br/>Architecture" subtitle="// HARDWARE & SOFTWARE SUBSYSTEMS" tiers={tiers} />;
}

