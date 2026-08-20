import React, { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import heroBg from '../../../imports/guardian/magnific_photorealistic-outdoor-fi_YV36av5WeC.png';
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
    <section ref={containerRef} className="relative w-full min-h-[100dvh] max-md:landscape:min-h-[60vh] overflow-hidden bg-black flex flex-col">
      {/* Background Media */}
      <img
        src={heroBg}
        alt="The Guardian Smart Soldier Band"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
      />
      
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
      <div className="absolute inset-0 bg-black/20 z-10" />
      
      {/* Content Container */}
      <div className="relative z-20 flex-1 flex flex-col justify-center pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-10 md:pb-12 w-full px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="max-w-3xl">
          
          {/* Eyebrow */}
          <div className="hero-element inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <div className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse" />
            <span className="text-xs font-bold tracking-[2px] text-white uppercase" style={{ fontFamily: INTER }}>
              TACTICAL WEARABLES
            </span>
          </div>
          
          {/* Headline */}
          <h1 
            className="hero-element text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 uppercase leading-[1.1] tracking-tight"
            style={{ fontFamily: INTER }}
          >
            THE GUARDIAN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">SMART BAND</span>
          </h1>
          
          {/* Subheadline */}
          <p className="hero-element text-xl text-white/60 mb-10 max-w-lg leading-relaxed">
            Next-generation tactical wearable for real-time biometric monitoring and situational awareness.
          </p>
          
          {/* CTA */}
          <div className="hero-element flex flex-wrap gap-6 items-center mb-6 md:mb-16">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
                <TechCTA>
              REQUEST CONSULTATION
              <ChevronRight className="w-4 h-4 text-[#84CC16] group-hover:translate-x-1 transition-transform" />
            </TechCTA>
                <TechCTA>
                  DOWNLOAD CAPABILITY BROCHURE
                </TechCTA>
              </div>
          </div>
          
          {/* Quick Stats Block (Glassmorphic) */}
          <div className="hero-element flex flex-col md:flex-row gap-4 md:gap-8 p-6 rounded-lg mt-6 md:mt-12 border border-white/10 bg-white/5 backdrop-blur-xl max-w-fit">
            <div>
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-sm font-medium text-white/50 uppercase tracking-widest mt-1">Biometric Monitoring</div>
            </div>
            <div className="hidden md:block w-px bg-white/20" /><div className="block md:hidden h-px w-full bg-white/20" />
            <div>
              <div className="text-2xl font-bold text-white">AES-256</div>
              <div className="text-sm font-medium text-white/50 uppercase tracking-widest mt-1">Encrypted Comms</div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}






