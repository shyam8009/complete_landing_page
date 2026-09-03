import React from 'react';
import { InteractiveBlueprint, TierData } from '../../../components/InteractiveBlueprint';
import img1 from '@/imports/big-data/engineering_solutions.png';
import img2 from '@/imports/big-data/real-time_analytics.jpg';
import img3 from '@/imports/big-data/business_intelligence.png';

export function BigDataBISpecs() {
  const tiers: TierData[] = [
    {
      id: 'spec-eng',
      type: 'DATA INTEGRATION',
      title: 'ENGINEERING SOLUTIONS',
      description: 'Preprocesses real-time stream information for analysis and image. Seamlessly migrates data between databases while sharing processing logic across internet apps, batch jobs, and APIs.',
      image: img1,
      statusBadge: 'PIPELINE ARCHITECTURE',
      specs: [
        { label: 'Pipelines', value: 'Complex Advancement' },
        { label: 'Intake', value: 'Real-Time', highlight: 'STREAMING' }
      ]
    },
    {
      id: 'spec-ana',
      type: 'INTELLIGENCE PROCESSING',
      title: 'REAL-TIME ANALYTICS',
      description: 'Builds and extends analytics to create efficiency in work by leveraging the most recent knowledge technologies, including Spark, Hadoop, and MongoDB.',
      image: img2,
      statusBadge: 'ANALYTICS ENGINE',
      specs: [
        { label: 'Frameworks', value: 'Open-Source' },
        { label: 'Speed', value: 'Times Quicker', highlight: 'BOOST' }
      ]
    },
    {
      id: 'spec-bi',
      type: 'DASHBOARDING',
      title: 'BUSINESS INTELLIGENCE',
      description: 'Facilitates enterprise solutions by providing highly customized BI solutions engineered using industry-leading platforms like PowerBI, Tableau, and Quick Sight.',
      image: img3,
      statusBadge: 'ENTERPRISE VISUALIZATION',
      specs: [
        { label: 'Visualization', value: 'Customized' },
        { label: 'Access', value: 'Instant' }
      ]
    }
  ];

  return <InteractiveBlueprint title="Core Technical<br/>Capabilities" subtitle="// SYSTEM ARCHITECTURE" tiers={tiers} />;
}
