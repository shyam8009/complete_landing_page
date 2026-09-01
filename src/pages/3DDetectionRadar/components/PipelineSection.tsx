import React, { useRef, useLayoutEffect, useState } from 'react';


const INTER = '"Inter", sans-serif';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PIPELINE_STEPS = [
  {
    num: '01',
    title: 'SCAN',
    desc: 'Utilizes advanced day-and-night X-band FMCW tracking sensor arrays optimized for minimal radar cross-section target tracking.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M4.9 19.1L19.1 4.9"/>
        <circle cx="12" cy="12" r="6"/>
      </svg>
    )
  },
  {
    num: '02',
    title: 'CLASSIFY',
    desc: 'Employs high-resolution signature sorting logic to effectively differentiate structural drone patterns from avian signatures.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a10 10 0 1 0 10 10H12V2Z"/>
        <path d="M12 2a10 10 0 0 1 10 10h-10V2Z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    )
  },
  {
    num: '03',
    title: 'TRACK',
    desc: 'Delivers automatic targets tracking and built-in test diagnostic systems (BIT) to counter multi-drone or swarm attacks.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="16"/>
        <line x1="8" y1="12" x2="16" y2="12"/>
      </svg>
    )
  },
  {
    num: '04',
    title: 'INTEGRATE',
    desc: 'Seamlessly integrates into broader counter-UAS platforms and AI-powered OSINT Command & Control (C2) frameworks.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    )
  }
];

export function PipelineSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const progressLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Step appearances
      gsap.fromTo(stepsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      );

      // Glowing progress line
      if (progressLineRef.current) {
        gsap.fromTo(progressLineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            transformOrigin: "left center",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 50%',
              end: 'bottom 80%',
              scrub: true,
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 relative">
          
          {/* Connecting Line Base (Desktop) */}
          <div className="hidden lg:block absolute top-[2.5rem] h-[1px] bg-white/5" style={{ left: "calc((100% - 6rem) / 8)", right: "calc((100% - 6rem) / 8)" }} />
          
          {/* Glowing Progress Line */}
          <div ref={progressLineRef} className="hidden lg:block absolute top-[2.5rem] h-[2px] bg-gradient-to-r from-[#84CC16] to-[#84CC16] shadow-[0_0_15px_#84CC16]" style={{ left: "calc((100% - 6rem) / 8)", right: "calc((100% - 6rem) / 8)", transformOrigin: "left center" }} />

          {PIPELINE_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.id} 
                ref={el => stepsRef.current[index] = el}
                className="relative flex flex-col group items-center text-center"
              >
                {/* Unified Circular Step Node */}
                <div className="mb-8 flex flex-col items-center justify-center w-20 h-20 rounded-full bg-[#0a0a0a] border border-white/10 group-hover:bg-[#111111] transition-all duration-500 relative z-10 shadow-xl">
                  <Icon className="w-8 h-8 text-white/60 group-hover:text-[#84CC16] group-hover:scale-110 transition-all duration-500" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm max-w-[280px]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
