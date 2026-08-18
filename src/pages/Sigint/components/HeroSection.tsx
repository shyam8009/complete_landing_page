import React, { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import heroVideo from '@/imports/intelligence_video.mp4'; 
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
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 object-right opacity-80"
        src={heroVideo}
      />
      
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10" />
      <div className="absolute inset-0 bg-black/20 z-10" />
      
      {/* Content Container */}
      <div className="relative z-20 h-full flex flex-col justify-center px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="max-w-3xl">
          
          {/* Eyebrow */}
          <div className="hero-element inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <div className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse shadow-[0_0_8px_#84CC16]" />
            <span className="text-xs font-bold tracking-[2px] text-white uppercase" style={{ fontFamily: INTER }}>
              INTELLIGENCE & SURVEILLANCE
            </span>
          </div>
          
          {/* Headline */}
          <h1 
            className="hero-element text-5xl lg:text-7xl font-bold text-white mb-6 uppercase leading-[1.1] tracking-tight"
            style={{ fontFamily: INTER }}
          >
            SIGNAL <br />
            INTELLIGENCE <br />
            (SIGINT)
          </h1>
          
          {/* Subheadline */}
          <p className="hero-element text-lg sm:text-xl text-white/60 mb-10 max-w-xl leading-relaxed">
            Absolute electromagnetic spectrum dominance. Seamlessly integrate Communications Intelligence (COMINT) and Electronic Intelligence (ELINT) to detect, intercept, and exploit hostile emissions in real-time.
          </p>
          
          {/* CTA */}
          <div className="hero-element flex flex-wrap gap-6 items-center mb-16">
            <TechCTA>
              DEPLOY SIGINT ASSETS
              <ChevronRight className="w-4 h-4 text-[#84CC16] group-hover:translate-x-1 transition-transform" />
            </TechCTA>
          </div>
          
          {/* Quick Stats Block (Glassmorphic) */}
          <div className="hero-element flex flex-wrap gap-8 p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-xl max-w-fit">
            <div>
              <div className="text-2xl font-bold text-white">ELINT & COMINT</div>
              <div className="text-sm font-medium text-white/50 uppercase tracking-widest mt-1">Multi-Domain Fusion</div>
            </div>
            <div className="w-px bg-white/20" />
            <div>
              <div className="text-2xl font-bold text-white">TDOA / AOA</div>
              <div className="text-sm font-medium text-white/50 uppercase tracking-widest mt-1">Precision Direction-Finding</div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
