import React, { useRef, useLayoutEffect } from 'react';
import { Layers, Workflow, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import cadImage from '@/imports/c2_network_schematic.jpg'; 

gsap.registerPlugin(ScrollTrigger);

export function SatcomComponentsCapabilities() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.fade-in-left',
        { x: -50, opacity: 0 },
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
          
          {/* Left Text Content */}
          <div className="flex flex-col">
            <div className="fade-in-left inline-flex items-center gap-2 mb-6">
              <span className="text-[#84CC16] text-sm font-bold tracking-[3px] uppercase">
                MISSION-CRITICAL CONNECTIVITY
              </span>
            </div>
            
            <h2 className="fade-in-left text-4xl lg:text-5xl font-bold text-white mb-8 uppercase tracking-tight leading-[1.1]">
              Uncompromising Signal Integrity for Orbital Operations.
            </h2>
            
            <div className="fade-in-left space-y-6 text-white/60 text-lg leading-relaxed max-w-xl">
              <p>
                In satellite communications, even microscopic deviations can catastrophically affect signal quality across an entire mission. We deliver absolute precision through three core value propositions:
              </p>
              <ul className="space-y-4">
                <li>
                  <strong className="text-white">Signal Integrity:</strong> High-precision RF engineering practices applied to all microwave systems to guarantee lossless data transmission.
                </li>
                <li>
                  <strong className="text-white">Structural Precision:</strong> Micro-tolerance machining of pedestal assemblies, mirrors, and feed brackets to ensure exact payload alignment.
                </li>
                <li>
                  <strong className="text-white">Long-Term Reliability:</strong> Materials and structures specifically engineered to maintain dimensional stability under the extreme thermal and mechanical stresses of space.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="relative h-[600px] flex items-center justify-center">
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(132,204,22,0.15)_0%,transparent_70%)] pointer-events-none" />
            
            {/* Central Render */}
            <img 
              src={cadImage} 
              alt="High-fidelity 3D CAD schematic" 
              className="relative z-10 w-full object-contain rounded-xl border border-white/10 drop-shadow-[0_0_50px_rgba(132,204,22,0.1)] opacity-60 mix-blend-screen hover:scale-105 transition-transform duration-700"
            />
            
            {/* HUD Callouts */}
            <div className="hud-element absolute top-[15%] -left-[10%] bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-md z-20 shadow-2xl hover:border-[#84CC16]/50 transition-colors cursor-default">
              <div className="flex flex-col gap-1 text-right">
                <div className="text-white font-bold text-sm tracking-wide uppercase">Zero-Defect Signal Pathways</div>
              </div>
            </div>

            <div className="hud-element absolute bottom-[25%] -left-[5%] bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-md z-20 shadow-2xl hover:border-[#84CC16]/50 transition-colors cursor-default">
              <div className="flex flex-col gap-1">
                <div className="text-white font-bold text-sm tracking-wide uppercase">Thermal Stress Immunity</div>
              </div>
            </div>

            <div className="hud-element absolute top-[40%] -right-[5%] bg-black/60 backdrop-blur-md border border-[#84CC16]/30 p-4 rounded-md z-20 shadow-2xl hover:border-[#84CC16]/50 transition-colors cursor-default">
              <div className="flex flex-col gap-1 text-right">
                <div className="text-white font-bold text-sm tracking-wide uppercase">Orbital Lifecycle Reliability</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
