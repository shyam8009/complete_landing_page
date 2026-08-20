import React, { useRef, useLayoutEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import heroBg from '@/imports/quantum_communication_intro_video.mp4';
import { TechCTA } from '@/components/TechCTA';

const INTER = '"Inter", sans-serif';

export function ChatbotsVoiceHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".hero-element",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const scrollToPipeline = () => {
    const section = document.getElementById('pipeline-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className="relative w-full min-h-screen overflow-hidden bg-black flex items-center">
      {/* Background Video */}
      <video
        src={heroBg}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
      />
      
      {/* Overlays - Fade from black/80 on left to transparent on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-10" />
      <div className="absolute inset-0 bg-black/20 z-10" />
      
      {/* Content Container */}
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto pt-20 md:pt-0">
        <div className="max-w-3xl flex flex-col items-start text-left">
          
          {/* Eyebrow */}
          <div className="hero-element inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 md:mb-8">
            <div className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse shadow-[0_0_8px_#84CC16]" />
            <span className="text-[10px] md:text-xs font-bold tracking-[2px] text-white uppercase" style={{ fontFamily: INTER }}>
              DEFENCE DEEPTECH / AI & DATA
            </span>
          </div>
          
          {/* Headline */}
          <h1 
            className="hero-element text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 uppercase leading-[1.1] tracking-tight"
            style={{ fontFamily: INTER }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-500">
              CHATBOTS & VOICE SOLUTIONS
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="hero-element text-base sm:text-lg md:text-xl text-white/70 mb-10 max-w-lg leading-relaxed">
            Secure, military-grade conversational AI and natural language processing. Overcome cognitive overload by enabling tactical operators to interact with complex command systems and databases using intuitive voice commands.
          </p>
          
          {/* CTA */}
          <div className="hero-element flex flex-wrap gap-4 md:gap-6 items-center mb-16">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
                <TechCTA onClick={scrollToPipeline}>
              INITIALIZE VOICE ARCHITECTURE
              <ChevronRight className="w-4 h-4 text-[#84CC16] group-hover:translate-x-1 transition-transform" />
            </TechCTA>
                <TechCTA>
                  DOWNLOAD CAPABILITY BROCHURE
                </TechCTA>
              </div>
          </div>
          
          {/* Quick Stats Block (Glassmorphic) */}
          <div className="hero-element flex flex-col md:flex-row gap-6 md:gap-8 p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-xl w-full md:max-w-fit">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">NLP Engines</div>
              <div className="text-xs md:text-sm font-medium text-white/50 uppercase tracking-widest mt-1">Tactical Transcription</div>
            </div>
            
            {/* Divider */}
            <div className="h-px w-full md:w-px md:h-auto bg-white/20" />
            
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">Air-Gapped</div>
              <div className="text-xs md:text-sm font-medium text-white/50 uppercase tracking-widest mt-1">Secure Edge Inference</div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
