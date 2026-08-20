import React, { useEffect } from 'react';
import { DeeptechHero } from './components/DeeptechHero';
import { SystemPitch } from './components/SystemPitch';
import { TechEcosystem } from './components/TechEcosystem';
import { SovereignStrip } from './components/SovereignStrip';
import { DeeptechCTA } from './components/DeeptechCTA';

export function DefenceDeeptechPage() {
  useEffect(() => {
    document.title = "Defence Deeptech | AI, Big Data & Voice Systems";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', "Next-generation Defence Deeptech. Empowering military communication systems with Artificial Intelligence, Big Data analytics, and secure Voice Solutions for absolute cognitive overmatch.");
    
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full bg-[#050505] min-h-screen text-white font-sans selection:bg-[#84CC16]/30">
      <DeeptechHero />
      <SystemPitch />
      <TechEcosystem />
      <SovereignStrip />
      <DeeptechCTA />
    </main>
  );
}
