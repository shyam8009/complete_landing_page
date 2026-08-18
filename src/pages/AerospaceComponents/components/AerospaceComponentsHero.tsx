import React, { useRef, useLayoutEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import heroBg from '@/imports/arsenal_facility.jpg';
import { TechCTA } from '@/components/TechCTA';

const INTER = '"Inter", sans-serif';

export function AerospaceComponentsHero() {
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
    const pipelineSection = document.getElementById('pipeline-section');
    if (pipelineSection) {
      pipelineSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <img
        src={heroBg}
        alt="Precision CNC Machining"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
      />
      
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
      <div className="absolute inset-0 bg-black/20 z-10" />
      
      {/* Content Container */}
      <div className="relative z-20 h-full flex flex-col justify-center px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="max-w-3xl">
          
          {/* Eyebrow */}
          <div className="hero-element inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <div className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse shadow-[0_0_8px_#84CC16]" />
            <span className="text-xs font-bold tracking-[2px] text-white uppercase" style={{ fontFamily: INTER }}>
              STRATEGIC MANUFACTURING / AEROSPACE COMPONENTS
            </span>
          </div>
          
          {/* Headline */}
          <h1 
            className="hero-element text-5xl lg:text-7xl font-bold text-white mb-6 uppercase leading-[1.1] tracking-tight"
            style={{ fontFamily: INTER }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-500">
              FLIGHT-CRITICAL<br />AEROSPACE COMPONENTS
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="hero-element text-xl text-white/60 mb-10 max-w-lg leading-relaxed">
            Zero-defect precision machining for extreme aviation environments. Delivering mission-critical engine hardware and structural components with uncompromising quality.
          </p>
          
          {/* CTA */}
          <div className="hero-element flex flex-wrap gap-6 items-center mb-16">
            <TechCTA onClick={scrollToPipeline}>
              REQUEST COMPONENT QUOTE
              <ChevronRight className="w-4 h-4 text-[#84CC16] group-hover:translate-x-1 transition-transform" />
            </TechCTA>
          </div>
          
          {/* Quick Stats Block (Glassmorphic) */}
          <div className="hero-element flex flex-wrap gap-8 p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-xl max-w-fit">
            <div>
              <div className="text-3xl font-bold text-white">AS9100D</div>
              <div className="text-sm font-medium text-white/50 uppercase tracking-widest mt-1">Aerospace Quality Management</div>
            </div>
            <div className="w-px bg-white/20" />
            <div>
              <div className="text-3xl font-bold text-white">20+ Years</div>
              <div className="text-sm font-medium text-white/50 uppercase tracking-widest mt-1">Precision Operations</div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
