import React from 'react';
import { InteractiveBlueprint, TierData } from '../../../components/InteractiveBlueprint';
import img1 from '@/imports/artificial-intelligence/cognitive_algorithms.png';
import img2 from '@/imports/artificial-intelligence/image_video_analytics.jpg';
import img3 from '@/imports/artificial-intelligence/nlp_engine.png';

export function AISpecs() {
  const tiers: TierData[] = [
    {
      id: 'spec-ml',
      type: 'PREDICTIVE MODELING',
      title: 'COGNITIVE ALGORITHMS',
      description: 'Comprehensive, intuitive machine learning tools that incorporate Neural Networks, Classification algorithms, and Deep Learning to deliver better recommendations.',
      image: img1,
      statusBadge: 'MACHINE LEARNING',
      specs: [
        { label: 'Models', value: 'Reusable' },
        { label: 'Decisions', value: 'Faster', highlight: 'OPTIMIZED' }
      ]
    },
    {
      id: 'spec-cv',
      type: 'VISUAL INTELLIGENCE',
      title: 'IMAGE & VIDEO ANALYTICS',
      description: 'Advanced Computer Vision and Optical Character Recognition (OCR) systems producing a high degree of recognition accuracy for many fonts and digital image file formats.',
      image: img2,
      statusBadge: 'COMPUTER VISION',
      specs: [
        { label: 'Detection', value: 'Object & Text' },
        { label: 'Automation', value: 'Intelligent', highlight: 'VISION AI' }
      ]
    },
    {
      id: 'spec-nlp',
      type: 'TEXT ANALYTICS',
      title: 'NLP ENGINE',
      description: 'Mechanically extracting essential business insights and rising trends from massive amounts of structured and unstructured content using advanced NLP.',
      image: img3,
      statusBadge: 'NATURAL LANGUAGE',
      specs: [
        { label: 'Data', value: 'Unstructured' },
        { label: 'Insights', value: 'Essential' }
      ]
    }
  ];

  return <InteractiveBlueprint title="Core Technical<br/>Capabilities" subtitle="// SYSTEM ARCHITECTURE" tiers={tiers} />;
}
