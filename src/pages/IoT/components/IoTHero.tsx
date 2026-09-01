import React, { useRef, useLayoutEffect } from 'react';
import { ChevronRight, Network, Database } from 'lucide-react';
import gsap from 'gsap';
import { TechCTA } from '@/components/TechCTA';
// Replace with appropriate IoT video path
import heroBg from '@/imports/quantum_communication_intro_video.mp4'; 

const INTER = '"Inter", sans-serif';

export function IoTHero() {
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
      
      {/* Overlays - Fade from black/90 on left to transparent on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-10" />
      <div className="absolute inset-0 bg-black/20 z-10" />
      
      {/* Content Container */}
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto pt-20 md:pt-0">
        <div className="max-w-3xl flex flex-col items-start text-left">
          
          {/* Eyebrow */}
          <div className="hero-element inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 md:mb-8">
            <div className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse shadow-[0_0_8px_#84CC16]" />
            <span className="text-[10px] md:text-xs font-bold tracking-[2px] text-white uppercase" style={{ fontFamily: INTER }}>
              DEFENCE DEEPTECH / CONNECTIVITY & INFRASTRUCTURE
            </span>
          </div>
          
          {/* Headline */}
          <h1 
            className="hero-element text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 uppercase leading-[1.1] tracking-tight"
            style={{ fontFamily: INTER }}
          >
            INTERNET OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">THINGS</span>
          </h1>
          
          {/* Subheadline */}
          <p className="hero-element text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-2xl">
            Technology and devices that connect immeasurable folks within the world, working smarter with better connectivity. Adopt an IoT strategy to deliver higher services and redefine relationships with your clients, partners, and employees.
          </p>

          <div className="hero-element w-full sm:w-auto">
            <TechCTA 
              text="REQUEST A CONSULTATION" 
              onClick={scrollToPipeline}
            />
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 hero-element w-full">
            <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
              <Network className="w-8 h-8 text-[#84CC16]" />
              <div>
                <div className="text-2xl font-bold text-white mb-1">Total Automation</div>
                <div className="text-sm text-white/60 font-mono">Device-to-Device Interaction</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
              <Database className="w-8 h-8 text-[#84CC16]" />
              <div>
                <div className="text-2xl font-bold text-white mb-1">Seamless Management</div>
                <div className="text-sm text-white/60 font-mono">Customized IoT Platforms</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
