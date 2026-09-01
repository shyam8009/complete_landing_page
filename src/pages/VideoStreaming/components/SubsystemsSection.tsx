import React from 'react';
import { InteractiveBlueprint, TierData } from '@/components/InteractiveBlueprint';
import img1 from '@/imports/command_control_2.jpeg';
import img2 from '@/imports/rf_radar_hud.png';
import img3 from '@/imports/c2_dashboard_ui.png';

export function SubsystemsSection() {
  const tiers: TierData[] = [
    {
      id: 'sub-wowza',
      type: 'PLATFORM ARCHITECTURE',
      title: 'WOWZA Engine & OTT',
      description: 'Customizable streaming server software services utilizing the WOWZA Video Streaming Engine to build and deliver professional-grade streaming at any scale. We also deliver over-the-top (OTT) content solutions without the involvement of a multiple-system operator (MSO).',
      image: img1,
      statusBadge: 'DIRECT OTT',
      specs: [
        { label: 'Scale', value: 'Professional-Grade' },
        { label: 'Delivery', value: 'Direct OTT' }
      ]
    },
    {
      id: 'sub-aws',
      type: 'CLOUD INTEGRATION',
      title: 'AWS Elemental Services',
      description: 'Comprehensive managed video infrastructure provided through AWS Elemental Media Convert, MediaLive, MediaPackage, and MediaStore.',
      image: img2,
      statusBadge: 'MANAGED INFRASTRUCTURE',
      specs: [
        { label: 'Focus', value: 'Content Creation' },
        { label: 'UX', value: 'Great Experience' }
      ]
    },
    {
      id: 'sub-ml',
      type: 'COMPUTER VISION',
      title: 'Kinesis & ML Integration',
      description: 'AWS Kinesis Video Streams utilizing analytics and machine learning (ML) to build computer vision applications through Amazon Rekognition Video and libraries like Apache MxNet, TensorFlow, and OpenCV.',
      image: img3,
      statusBadge: 'AI ANALYTICS',
      specs: [
        { label: 'Frameworks', value: 'TensorFlow & OpenCV' },
        { label: 'Analytics', value: 'Cost-Effective' }
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
      <InteractiveBlueprint tiers={tiers} defaultTier="sub-wowza" />
    </section>
  );
}
