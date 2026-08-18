import React, { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import heroVideo from '@/imports/drone_radar_hero_bg.mp4'; 
import { TechCTA } from '@/components/TechCTA';

const INTER = "'Inter', sans-serif";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-element",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-[90vh] overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 object-right"
        src={heroVideo}
      />
      
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
      <div className="absolute inset-0 bg-black/20 z-10" />
      
      {/* Content Container */}
      <div className="relative z-20 h-full flex flex-col justify-center px-4 sm:px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="max-w-3xl">
          
          {/* Eyebrow */}
          <div className="hero-element inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <div className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse shadow-[0_0_8px_#84CC16]" />
            <span className="text-xs font-bold tracking-[2px] text-white uppercase" style={{ fontFamily: INTER }}>
              INFORMATION WARFARE / COMMAND CONTROL
            </span>
          </div>
          
          {/* Headline */}
          <h1 
            className="hero-element text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 uppercase leading-[1.1] tracking-tight"
            style={{ fontFamily: INTER }}
          >
            TACTICAL <br />
            INTERCEPTION <br />
            SYSTEM
          </h1>
          
          {/* Subheadline */}
          <p className="hero-element text-lg sm:text-xl text-white/60 mb-10 max-w-xl leading-relaxed">
            Invisible exploitation of the electromagnetic spectrum. Isolate, decrypt, and extract actionable intelligence from hostile communications in real-time.
          </p>
          
          {/* CTA */}
          <div className="hero-element flex flex-wrap gap-6 items-center mb-16">
            <TechCTA>
              DEPLOY INTERCEPTION ASSETS
              <ChevronRight className="w-4 h-4 text-[#84CC16] group-hover:translate-x-1 transition-transform" />
            </TechCTA>
          </div>
          
          {/* Quick Stats Block (Glassmorphic) */}
          <div className="hero-element flex flex-col md:flex-row gap-4 md:gap-8 p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-xl max-w-fit">
            <div>
              <div className="text-2xl font-bold text-white">Wideband RF</div>
              <div className="text-sm font-medium text-white/50 uppercase tracking-widest mt-1">Spectrum Scanning</div>
            </div>
            <div className="hidden md:block w-px bg-white/20" /><div className="block md:hidden h-px w-full bg-white/20" />
            <div>
              <div className="text-2xl font-bold text-white">TDOA / AOA</div>
              <div className="text-sm font-medium text-white/50 uppercase tracking-widest mt-1">Direction-Finding Geolocation</div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}


