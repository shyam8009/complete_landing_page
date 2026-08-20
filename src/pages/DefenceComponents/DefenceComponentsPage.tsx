import React, { useEffect } from 'react';
import { DefenceComponentsHero } from './components/DefenceComponentsHero';
import { DefenceComponentsPipeline } from './components/DefenceComponentsPipeline';
import { DefenceComponentsCapabilities } from './components/DefenceComponentsCapabilities';
import { DefenceComponentsSpecs } from './components/DefenceComponentsSpecs';
import { ComplianceStrip } from './components/ComplianceStrip';
import { DefenceCTA } from './components/DefenceCTA';

export function DefenceComponentsPage() {
  // Set SEO metadata on mount
  useEffect(() => {
    document.title = "Defence Components | Siddhanta Machining";
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', "Mission-critical defence components and ruggedized hardware engineered for tactical reliability.");
    
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full bg-[#050505] min-h-screen text-white font-sans selection:bg-[#84CC16]/30">
      <DefenceComponentsHero />
      <DefenceComponentsPipeline />
      <DefenceComponentsCapabilities />
      <DefenceComponentsSpecs />
      <ComplianceStrip />
      <DefenceCTA />
    </main>
  );
}
