import React, { useRef, useLayoutEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { TechCTA } from '@/components/TechCTA';
import heroBg from '@/imports/Vision_Drone.mp4';

const INTER = '"Inter", sans-serif';

export function HeroSection() {
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
    const section = document.getElementById('pipeline');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className="relative w-full min-h-[100dvh] max-md:landscape:min-h-[60vh] overflow-hidden bg-black flex flex-col">
      {/* Background Video */}
      <video
        src={heroBg}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
      />
      
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
      <div className="absolute inset-0 bg-black/20 z-10" />
      
      {/* Content Container */}
      <div className="relative z-20 flex-1 flex flex-col justify-center pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-10 md:pb-12 w-full px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="max-w-3xl text-left">
          
          {/* Eyebrow */}
          <div className="hero-element inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <div className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse shadow-[0_0_8px_#84CC16]" />
            <span className="text-xs font-bold tracking-[2px] text-white uppercase" style={{ fontFamily: INTER }}>
              DEFENCE DEEPTECH / CONNECTIVITY & INFRASTRUCTURE
            </span>
          </div>
          
          {/* Headline */}
          <h1 
            className="hero-element text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 uppercase leading-[1.1] tracking-tight"
            style={{ fontFamily: INTER }}
          >
            LIVE VIDEO <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-500">
              STREAMING SERVICES
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="hero-element text-base sm:text-xl text-white/60 mb-6 sm:mb-10 max-w-lg leading-relaxed">
            Custom-tailored online-streaming solutions featuring wide hardware support for equipment like Sensible TV, streaming media receivers, tablets, and smartphones. Delivering net content in real-time as events happen, much like live television broadcasts.
          </p>
          
          {/* CTA */}
          <div className="hero-element flex flex-wrap gap-6 items-center mb-6 md:mb-16">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-start w-full">
              <TechCTA onClick={scrollToPipeline}>
                REQUEST A CONSULTATION
                <ChevronRight className="w-4 h-4 text-[#84CC16] group-hover:translate-x-1 transition-transform" />
              </TechCTA>
            </div>
          </div>
          
          {/* Quick Stats Block (Glassmorphic) */}
          <div className="hero-element flex flex-col md:flex-row gap-4 md:gap-8 p-4 sm:p-6 rounded-lg mt-6 md:mt-12 border border-white/10 bg-white/5 backdrop-blur-xl w-full sm:w-auto max-w-full">
            <div>
              <div className="text-2xl lg:text-3xl font-bold text-white uppercase">Low Latency</div>
              <div className="text-sm font-medium text-white/50 uppercase tracking-widest mt-1">Real-Time Video Analysis</div>
            </div>
            <div className="hidden md:block w-px bg-white/20" /><div className="block md:hidden h-px w-full bg-white/20" />
            <div>
              <div className="text-2xl lg:text-3xl font-bold text-white uppercase">Scalable Delivery</div>
              <div className="text-sm font-medium text-white/50 uppercase tracking-widest mt-1">Custom-Branded Platforms</div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
