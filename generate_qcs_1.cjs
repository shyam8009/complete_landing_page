const fs = require('fs');
const path = require('path');

const dir = 'src/pages/QuantumControlSystems/components';

// 1. HeroSection.tsx
fs.writeFileSync(path.join(dir, 'HeroSection.tsx'), `import React, { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { TechCTA } from '@/components/TechCTA';
import heroBg from '@/imports/c2_dashboard_ui.png'; // using generic tech dashboard image

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
      <img
        src={heroBg}
        alt="Quantum Control Systems"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10" />
      <div className="absolute inset-0 bg-black/20 z-10" />
      
      <div className="relative z-20 flex-1 flex flex-col justify-center pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-10 md:pb-12 w-full px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="max-w-3xl">
          
          <div className="hero-element inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <div className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse" />
            <span className="text-xs font-bold tracking-[2px] text-white uppercase" style={{ fontFamily: INTER }}>
              QUANTUM COMMUNICATION
            </span>
          </div>
          
          <h1 
            className="hero-element text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 uppercase leading-[1.1] tracking-tight"
            style={{ fontFamily: INTER }}
          >
            QUANTUM <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">CONTROL SYSTEMS</span>
          </h1>
          
          <p className="hero-element text-xl text-white/60 mb-10 max-w-lg leading-relaxed">
            The software layer that makes quantum hardware deployable.
          </p>
          
          <div className="hero-element flex flex-wrap gap-6 items-center mb-6 md:mb-16">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
                <TechCTA>
                  REQUEST FOR PROPOSAL
                  <ChevronRight className="w-4 h-4 text-[#84CC16] group-hover:translate-x-1 transition-transform" />
                </TechCTA>
                <TechCTA>
                  DOWNLOAD CAPABILITY BROCHURE
                </TechCTA>
            </div>
          </div>
          
          <div className="hero-element flex flex-col md:flex-row gap-4 md:gap-8 p-6 rounded-lg mt-6 md:mt-12 border border-white/10 bg-white/5 backdrop-blur-xl max-w-fit">
            <div>
              <div className="text-2xl font-bold text-white">Hardware-agnostic</div>
              <div className="text-sm font-medium text-white/50 uppercase tracking-widest mt-1">BOARD SUPPORT PACKAGES</div>
            </div>
            <div className="hidden md:block w-px bg-white/20" />
            <div className="block md:hidden h-px w-full bg-white/20" />
            <div>
              <div className="text-2xl font-bold text-white">Standardised</div>
              <div className="text-sm font-medium text-white/50 uppercase tracking-widest mt-1">DEVICE APIS</div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}`);

// 2. OperationalSequence.tsx (using the new horizontal layout)
fs.writeFileSync(path.join(dir, 'OperationalSequence.tsx'), `import React, { useEffect, useRef } from 'react';
import { Box, Code, Sliders, Rocket } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PIPELINE_STEPS = [
  {
    id: "01",
    title: "ABSTRACT",
    icon: Box,
    description: "Board Support Packages provide low-level abstraction across diverse quantum control electronics, so the hardware underneath can change without the stack above it changing too."
  },
  {
    id: "02",
    title: "STANDARDISE",
    icon: Code,
    description: "Common APIs for device drivers, middleware and developer tools, replacing bespoke integration work on every platform."
  },
  {
    id: "03",
    title: "INTEGRATE",
    icon: Sliders,
    description: "Reduced integration friction across vendors and platforms, including hardware Sahana did not build."
  },
  {
    id: "04",
    title: "DEPLOY",
    icon: Rocket,
    description: "Faster time-to-mission across quantum and RF/MW systems, where integration is usually the longest part of the schedule."
  }
];

export function OperationalSequence() {
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
}`);

// 3. CoreCapabilities.tsx
fs.writeFileSync(path.join(dir, 'CoreCapabilities.tsx'), `import React, { useEffect, useRef } from 'react';
import { Laptop, LayoutTemplate, Share2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import rfdImg from '@/imports/rf_radar_generated.png'; // generic software/tech image

gsap.registerPlugin(ScrollTrigger);

export function CoreCapabilities() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.fade-in-right',
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          }
        }
      );
      
      gsap.fromTo('.hud-element',
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-[#020202] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col">
            <div className="fade-in-right inline-flex items-center gap-2 mb-6">
              <span className="text-[#84CC16] text-sm font-bold tracking-[3px] uppercase">
                CORE CAPABILITIES
              </span>
            </div>
            
            <h2 className="fade-in-right text-4xl lg:text-5xl font-bold text-white mb-8 uppercase tracking-tight">
              HARDWARE-AGNOSTIC CONTROL & FASTER INTEGRATION
            </h2>
            
            <div className="fade-in-right space-y-6 text-white/60 text-lg leading-relaxed max-w-xl">
              <p>
                Quantum hardware arrives from different vendors with different interfaces, and every one of them costs integration time before anything reaches the field. Quantum Control Systems put a common layer over that variation: Board Support Packages, device drivers, middleware and developer tools that give diverse hardware a single standardised interface, cutting the integration work that usually sits between delivery and deployment.
              </p>
            </div>
          </div>

          <div className="relative h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(132,204,22,0.15)_0%,transparent_70%)] pointer-events-none" />
            
            <img 
              src={rfdImg} 
              alt="Core Capabilities" 
              className="relative z-10 w-full max-w-[600px] object-cover rounded-xl drop-shadow-[0_0_50px_rgba(132,204,22,0.1)] hover:scale-105 transition-transform duration-700"
            />
            
            <div className="hud-element absolute top-[15%] left-[5%] bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-md z-20 shadow-2xl">
              <div className="flex items-center gap-3">
                <Laptop className="text-[#84CC16] w-5 h-5" />
                <div>
                  <div className="text-white font-bold text-sm">Hardware-Agnostic BSPs</div>
                </div>
              </div>
            </div>

            <div className="hud-element absolute bottom-[25%] left-0 bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-md z-20 shadow-2xl">
              <div className="flex items-center gap-3">
                <LayoutTemplate className="text-[#84CC16] w-5 h-5" />
                <div>
                  <div className="text-white font-bold text-sm">Standardised APIs</div>
                </div>
              </div>
            </div>

            <div className="hud-element absolute top-[40%] right-[5%] bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-md z-20 shadow-2xl">
              <div className="flex items-center gap-3">
                <Share2 className="text-[#84CC16] w-5 h-5" />
                <div>
                  <div className="text-white font-bold text-sm">Cross-Vendor Compatibility</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}`);

console.log('Created components 1/2 for QuantumControlSystems');
