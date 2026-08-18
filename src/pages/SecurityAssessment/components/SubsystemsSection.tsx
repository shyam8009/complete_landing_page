import React from 'react';
import { InteractiveBlueprint, TierData } from '../../../components/InteractiveBlueprint';
import imgRedTeam from '@/imports/surveillance_blueprint.png';
import imgMatrix from '@/imports/rf_radar_generated.png';
import imgCompliance from '@/imports/digital_node_map.jpg';

export function SubsystemsSection() {
  const tiers: TierData[] = [
    {
      id: 'sa-redteam',
      type: 'RED-TEAMING',
      title: 'Full-Spectrum Red-Teaming',
      description: 'Encompassing physical perimeter breaches, social engineering vectors, and deep cyber intrusion testing to expose hidden operational seams.',
      image: imgRedTeam,
      statusBadge: 'ASSESSMENT CORE',
      specs: [
        { label: 'Scope', value: 'Physical & Cyber' },
        { label: 'Intrusion', value: 'Deep Testing' },
        { label: 'Status', value: 'Active', highlight: 'LIVE' }
      ]
    },
    {
      id: 'sa-matrix',
      type: 'RISK ANALYSIS',
      title: 'Threat Matrix Generation',
      description: 'Comprehensive mapping of internal and external threat vectors, prioritizing vulnerabilities based on potential impact and exploit probability.',
      image: imgMatrix,
      statusBadge: 'ANALYTICS ENGINE',
      specs: [
        { label: 'Mapping', value: 'Internal / External' },
        { label: 'Prioritization', value: 'Impact Based' }
      ]
    },
    {
      id: 'sa-compliance',
      type: 'STANDARDS COMPLIANCE',
      title: 'Resilience Benchmarking',
      description: 'Rigorous evaluation against global defense software and infrastructure standards to guarantee mission-ready compliance.',
      image: imgCompliance,
      statusBadge: 'SYSTEM COMPLIANCE',
      specs: [
        { label: 'Standards', value: 'Global Defense' },
        { label: 'Compliance', value: 'Mission-Ready', highlight: 'VERIFIED' }
      ]
    }
  ];

  return <InteractiveBlueprint title="Assessment<br/>Methodology" subtitle="// TECH SPECS & ARCHITECTURE" tiers={tiers} />;
}

