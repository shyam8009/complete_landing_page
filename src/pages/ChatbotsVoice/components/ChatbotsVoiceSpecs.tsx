import React from 'react';
import { InteractiveBlueprint, TierData } from '../../../components/InteractiveBlueprint';
import voiceControlImg from '../../../imports/command_control_2.jpeg';
import interceptImg from '../../../imports/interception_ui.jpg';
import osintImg from '../../../imports/osint_dashboard.jpg';

export function ChatbotsVoiceSpecs() {
  const tiers: TierData[] = [
    {
      id: 'voice-assist',
      type: 'COMMAND & CONTROL',
      title: 'Text-to-Voice Assistance',
      description: 'Voice-activated AI systems that allow operators in hands-free or high-stress environments to verbally query logistics, request threat analysis, and issue system commands.',
      image: voiceControlImg,
      statusBadge: 'VOICE ACTIVATED',
      specs: [
        { label: 'Latency', value: 'Sub-Second', highlight: 'ULTRA-LOW' },
        { label: 'Execution', value: 'Hands-Free' },
        { label: 'Interface', value: 'Natural Language' }
      ]
    },
    {
      id: 'translation',
      type: 'SIGNAL INTERCEPT',
      title: 'Automated Translation',
      description: 'Advanced linguistic models capable of instantly processing, transcribing, and translating intercepted foreign communications and regional dialects for coalition forces.',
      image: interceptImg,
      statusBadge: 'REAL-TIME',
      specs: [
        { label: 'Processing', value: 'Real-Time' },
        { label: 'Dialects', value: 'Multi-Regional', highlight: 'GLOBAL' },
        { label: 'Accuracy', value: 'High Confidence' }
      ]
    },
    {
      id: 'osint-bots',
      type: 'DATA RETRIEVAL',
      title: 'Secure Chatbots',
      description: 'Military-grade chatbots that sit atop massive, unstructured OSINT and intelligence databases, allowing analysts to retrieve exact insights using natural language instead of complex code.',
      image: osintImg,
      statusBadge: 'SECURE ENCLAVE',
      specs: [
        { label: 'Querying', value: 'Natural Language' },
        { label: 'Database', value: 'Deep OSINT', highlight: 'CLASSIFIED' },
        { label: 'Integration', value: 'API Driven' }
      ]
    }
  ];

  return <InteractiveBlueprint title="Core Technical<br/>Capabilities" subtitle="// System Architecture" tiers={tiers} />;
}
