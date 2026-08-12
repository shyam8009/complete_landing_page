import React, { useEffect } from 'react';
import JammingSystemsHero from './components/JammingSystemsHero';
import JammingSystemsPitch from './components/JammingSystemsPitch';
import JammingSystemsEcosystem from './components/JammingSystemsEcosystem';
import { JammingSovereignStrip } from './components/JammingSovereignStrip';
import { JammingCTA } from './components/JammingCTA';

export function JammingSystemsPage() {
  // Set SEO metadata on mount
  useEffect(() => {
    document.title = "Jamming Systems | Electronic Warfare & Counter-UAS";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', "Next-generation tactical jamming systems and Counter-UAS platforms. Featuring the Infinity Spear, Rhino Manpack series, and ADG L70 integrated electronic countermeasures.");
    
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full bg-[#050505] min-h-screen text-white font-sans selection:bg-[#84CC16]/30">
      <JammingSystemsHero />
      <JammingSystemsPitch />
      <JammingSystemsEcosystem />
      <JammingSovereignStrip />
      <JammingCTA />
    </main>
  );
}
