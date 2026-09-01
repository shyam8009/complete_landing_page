import React, { useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { PipelineSection } from './components/PipelineSection';
import { ValuePropositionSection } from './components/ValuePropositionSection';
import { SubsystemsSection } from './components/SubsystemsSection';
import { UseCasesSection } from './components/UseCasesSection';
import { ClosingSection } from './components/ClosingSection';

export function VideoStreamingPage() {
  useEffect(() => {
    document.title = "Video Streaming Services | Defence Deeptech";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', "Custom-tailored online-streaming solutions featuring wide hardware support for equipment like Sensible TV, streaming media receivers, tablets, and smartphones.");
    
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#000000] text-white selection:bg-[#84CC16] selection:text-black font-sans overflow-hidden">
      <HeroSection />
      <PipelineSection />
      <ValuePropositionSection />
      <SubsystemsSection />
      <UseCasesSection />
      <ClosingSection />
    </div>
  );
}
