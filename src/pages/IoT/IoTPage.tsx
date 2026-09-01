import React, { useEffect } from 'react';
import { IoTHero } from './components/IoTHero';
import { IoTPipeline } from './components/IoTPipeline';
import { IoTCapabilities } from './components/IoTCapabilities';
import { IoTSpecs } from './components/IoTSpecs';
import { IoTApplications } from './components/IoTApplications';
import { IoTCTA } from './components/IoTCTA';

export function IoTPage() {
  useEffect(() => {
    document.title = "Internet of Things | Defence Deeptech";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', "Technology and devices that connect immeasurable folks within the world, working smarter with better connectivity.");
    
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full bg-[#050505] min-h-screen text-white font-sans selection:bg-[#84CC16]/30">
      <IoTHero />
      <IoTPipeline />
      <IoTCapabilities />
      <IoTSpecs />
      <IoTApplications />
      <IoTCTA />
    </main>
  );
}
