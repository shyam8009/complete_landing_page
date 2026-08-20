import React, { useEffect } from 'react';
import { AerospaceComponentsHero } from './components/AerospaceComponentsHero';
import { AerospaceComponentsPipeline } from './components/AerospaceComponentsPipeline';
import { AerospaceComponentsCapabilities } from './components/AerospaceComponentsCapabilities';
import { AerospaceComponentsSpecs } from './components/AerospaceComponentsSpecs';
import { AerospaceApplications } from './components/AerospaceApplications';
import { AS9100QualityStrip } from './components/AS9100QualityStrip';
import { AerospaceCTA } from './components/AerospaceCTA';

export function AerospaceComponentsPage() {
  // Set SEO metadata on mount
  useEffect(() => {
    document.title = "Aerospace Components | Flight-Critical Manufacturing";
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', "Zero-defect precision machining for extreme environments. Engineered from high-strength titanium and aluminum-lithium alloys to withstand supersonic stress.");
    
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full bg-[#050505] min-h-screen text-white font-sans selection:bg-[#84CC16]/30">
      <AerospaceComponentsHero />
      <AerospaceComponentsPipeline />
      <AerospaceComponentsCapabilities />
      <AerospaceComponentsSpecs />
      <AerospaceApplications />
      <AS9100QualityStrip />
      <AerospaceCTA />
    </main>
  );
}

