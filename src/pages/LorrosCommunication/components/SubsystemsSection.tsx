import React from 'react';
import { InteractiveBlueprint, TierData } from '../../../components/InteractiveBlueprint';
import imgEoIr from '@/imports/lorros/advanced_eoir_sensors.png';
import imgLaser from '@/imports/lorros/laser_range_finding.jpg';
import imgControl from '@/imports/lorros/distributed_control_architecture.jpg';

export function SubsystemsSection() {
  const tiers: TierData[] = [
    {
      id: 'lorros-eo',
      type: 'ELECTRO-OPTICAL SUITE',
      title: 'Advanced EO/IR Sensors',
      description: 'High-resolution thermal and day imaging engineered for absolute clarity, providing real-time visual feeds during day, night, and adverse conditions.',
      image: imgEoIr,
      statusBadge: 'HARDWARE CAPABILITY',
      specs: [
        { label: 'Imaging', value: 'Day / Thermal' },
        { label: 'Clarity', value: 'High-res' },
        { label: 'Status', value: 'Active', highlight: 'LIVE' }
      ]
    },
    {
      id: 'lorros-lrf',
      type: 'PRECISION TARGETING',
      title: 'Laser Range Finding',
      description: 'Integrated laser range finders provide instantaneous, exact distance measurements for precise long-range target acquisition.',
      image: imgLaser,
      statusBadge: 'SENSOR METRICS',
      specs: [
        { label: 'Measurement', value: 'Instantaneous' },
        { label: 'Acquisition', value: 'Long-range' }
      ]
    },
    {
      id: 'lorros-c2',
      type: 'COMMAND INTEGRATION',
      title: 'Distributed Control Architecture',
      description: 'Built for efficient resource management, supporting multi-channel video streaming where multiple suites can be operated by a single command unit.',
      image: imgControl,
      statusBadge: 'SYSTEM INTEGRATION',
      specs: [
        { label: 'Streaming', value: 'Multi-channel' },
        { label: 'Management', value: 'Efficient', highlight: 'ACTIVE' }
      ]
    }
  ];

  return <InteractiveBlueprint title="System<br/>Architecture" subtitle="// HARDWARE SUBSYSTEMS" tiers={tiers} />;
}

