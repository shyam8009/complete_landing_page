import React from 'react';
import { InteractiveBlueprint, TierData } from '@/components/InteractiveBlueprint';
import img1 from '@/imports/command_control_2.jpeg';
import img2 from '@/imports/rf_radar_hud.png';
import img3 from '@/imports/c2_dashboard_ui.png';

export function SubsystemsSection() {
  const tiers: TierData[] = [
    {
      id: 'sub-serverless',
      type: 'CLOUD-NATIVE',
      title: 'Serverless Development',
      description: 'We provide applications that use no provisioned servers at all, being completely serverless. This architecture is fully scalable and offers greater business efficiency.',
      image: img1,
      statusBadge: 'ZERO PROVISIONED',
      specs: [
        { label: 'Deployment', value: 'Cloud-Ready' },
        { label: 'Servers', value: 'Zero Provisioned' }
      ]
    },
    {
      id: 'sub-micro',
      type: 'SOFTWARE SYSTEMS',
      title: 'Microservice Architecture',
      description: 'A particular methodology of developing software systems that focuses on building single-function modules with well-defined interfaces and operations to drive business gracefulness.',
      image: img2,
      statusBadge: 'SINGLE-FUNCTION',
      specs: [
        { label: 'Modules', value: 'Single-Function' },
        { label: 'Approach', value: 'Subject Area' }
      ]
    },
    {
      id: 'sub-db',
      type: 'INFRASTRUCTURE',
      title: 'Database Migration & Scripting',
      description: 'Safely migrate your databases onto cloud clusters utilizing easy, repeatable scripts that may be deployed rapidly at the push of a button.',
      image: img3,
      statusBadge: 'AUTOMATED',
      specs: [
        { label: 'Automation', value: 'Push-Button' },
        { label: 'Security', value: 'Compliant' }
      ]
    }
  ];

  return (
    <section className="bg-black section-padding border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">
          Core Technical Capabilities
        </h2>
      </div>
      <InteractiveBlueprint tiers={tiers} defaultTier="sub-serverless" />
    </section>
  );
}
