import React from 'react';
import { InteractiveBlueprint, TierData } from '../../../components/InteractiveBlueprint';
import imgSuite from '@/imports/magnific_extreme-closeup-macro-pro_WMNENw4cXe.png';
import imgUI from '@/imports/c2_dashboard_ui.png';
import imgTerminal from '@/imports/magnific_extreme-closeup-macro-pro_LUQGHhOswO.png';

export function SubsystemsSection() {
  const tiers: TierData[] = [
    {
      id: 'eo-ir',
      type: 'OPTICAL SENSOR',
      title: 'ADVANCED EO/IR',
      description: 'High-resolution thermal and visible-light imaging engineered for absolute clarity during day, night, and severe weather conditions.',
      image: imgSuite,
      statusBadge: 'MULTI-SPECTRAL',
      specs: [
        { label: 'Thermal', value: '12µm LWIR' },
        { label: 'Visible', value: '4K HD', highlight: 'MAX' },
        { label: 'Range', value: 'Extreme' }
      ]
    },
    {
      id: 'lrf',
      type: 'PRECISION TARGETING',
      title: 'LASER RANGER',
      description: 'Integrated laser range finders provide instantaneous, exact distance measurements for precise target acquisition and tracking.',
      image: imgUI,
      statusBadge: 'ACTIVE SENSOR',
      specs: [
        { label: 'Accuracy', value: '±1m' },
        { label: 'Max Range', value: '20+ km' },
        { label: 'Integration', value: 'Slew-to-Cue' }
      ]
    },
    {
      id: 'c2-network',
      type: 'COMMAND MODULE',
      title: 'C2 NETWORK',
      description: 'Built for scalable deployment, supporting multi-channel video streaming and centralized operation of multiple sensor suites from a single unit.',
      image: imgTerminal,
      statusBadge: 'NETWORK NODE',
      specs: [
        { label: 'Streaming', value: 'Multi-Channel', highlight: 'SECURE' },
        { label: 'Control', value: 'Centralized' },
        { label: 'Deployment', value: 'Scalable' }
      ]
    }
  ];

  return <InteractiveBlueprint title="System<br/>Architecture" subtitle="// LORROS Subsystems" tiers={tiers} />;
}
