import React from 'react';
import { InteractiveBlueprint, TierData } from '@/components/InteractiveBlueprint';
import img1 from '@/imports/iot/automated_systems.jpg';
import img2 from '@/imports/iot/customized_hardware.jpg';
import img3 from '@/imports/iot/data_science_platforms.jpg';

export function SubsystemsSection() {
  const tiers: TierData[] = [
    {
      id: 'sub-automation',
      type: 'PROCESS MANAGEMENT',
      title: 'Automated Systems',
      description: 'We automatize devices and information technologies for handling different processes and machineries in an industry.',
      image: img1,
      statusBadge: 'HARDWARE & ROBOTS',
      specs: [
        { label: 'Hardware', value: 'Computers & Robots' },
        { label: 'Focus', value: 'Industry Processes' }
      ]
    },
    {
      id: 'sub-custom',
      type: 'END-TO-END',
      title: 'Customized Hardware',
      description: 'Get custom-made and secure IoT solutions specifically engineered by focusing on your business domain.',
      image: img2,
      statusBadge: 'IOT PLATFORMS',
      specs: [
        { label: 'Interaction', value: 'Device-to-Device' },
        { label: 'Execution', value: 'Total Automation' }
      ]
    },
    {
      id: 'sub-data',
      type: 'ANALYTICS',
      title: 'Data Science Platforms',
      description: 'Our data science team helps you find new opportunities, while our knowledge image services assist you in taking the right choices through data visualization.',
      image: img3,
      statusBadge: 'PLATFORM MANAGEMENT',
      specs: [
        { label: 'Insight', value: 'Bug Fixing' },
        { label: 'Platform', value: 'Customized Management' }
      ]
    }
  ];

  return (
    <section className="section-padding bg-black border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">
          Core Technical Capabilities
        </h2>
      </div>
      <InteractiveBlueprint tiers={tiers} defaultTier="sub-automation" />
    </section>
  );
}
