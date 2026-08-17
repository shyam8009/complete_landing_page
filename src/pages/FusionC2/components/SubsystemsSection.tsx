import React from 'react';
import { InteractiveBlueprint, TierData } from '../../../components/InteractiveBlueprint';
import imgTrack from '@/imports/digital_node_map.jpg';
import imgAlarm from '@/imports/interception_ui.jpg';
import imgResponse from '@/imports/c2_dashboard_ui.png';

export function SubsystemsSection() {
  const tiers: TierData[] = [
    {
      id: 'sub-tracking',
      type: 'PROCESSING MODULE',
      title: '1000+ Object Tracking',
      description: "Provides the processing power necessary for highly congested threat environments without interface lag. Simultaneously tracks over 1000+ objects in real-time. Integrates Blue Force tracking for absolute spatial dominance.",
      image: imgTrack,
      statusBadge: 'SOFTWARE CAPABILITY',
      specs: [
        { label: 'Objects', value: '1000+' },
        { label: 'Tracking', value: 'Blue Force' },
        { label: 'Status', value: 'Real-time', highlight: 'LIVE' }
      ]
    },
    {
      id: 'sub-alarms',
      type: 'ALERTS PIPELINE',
      title: 'Smart Alarms & Handovers',
      description: "Supports real-time visual and audio alarms, automated tracking, and seamless camera handover, ensuring continuous coverage. Allows operators to draw user-defined protection zones that trigger alarms upon breach.",
      image: imgAlarm,
      statusBadge: 'AUTOMATED PIPELINE',
      specs: [
        { label: 'Zones', value: 'User-defined' },
        { label: 'Handover', value: 'Seamless' }
      ]
    },
    {
      id: 'sub-effector',
      type: 'COMMAND LINK',
      title: 'Direct Effector Control',
      description: "Operators aren't just observing; the Multi-Touch control and Countermeasure Menu allow direct engagement of threats from the exact same screen. Provides a customizable Countermeasure Menu based on target type.",
      image: imgResponse,
      statusBadge: 'SYSTEM INTEGRATION',
      specs: [
        { label: 'Control', value: 'Multi-Touch' },
        { label: 'Engagement', value: 'Direct', highlight: 'ACTIVE' }
      ]
    }
  ];

  return <InteractiveBlueprint title="System<br/>Architecture" subtitle="// SOFTWARE SUBSYSTEMS" tiers={tiers} />;
}
