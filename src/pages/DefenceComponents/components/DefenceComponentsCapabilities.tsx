import React, { useRef, useLayoutEffect } from 'react';
import { Layers, Workflow, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import cadImage from '@/imports/spear_cad_blueprint.png'; 

gsap.registerPlugin(ScrollTrigger);

export function DefenceComponentsCapabilities() {
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
                RUGGEDIZED HARDWARE
              </span>
            </div>
            
            <h2 className="fade-in-left text-4xl lg:text-5xl font-bold text-white mb-8 uppercase tracking-tight leading-[1.1]">
              Tactical Reliability for Severe Combat Environments.
            </h2>
            
            <div className="fade-in-left space-y-6 text-white/60 text-lg leading-relaxed max-w-xl">
              <p>
                Defense deployment leaves zero margin for error. Siddhanta Machining—the integrated precision engineering arm of Sahana Defence—delivers mission-critical parts for defense vehicles, weapons systems, and support equipment. By leveraging state-of-the-art machinery and a strict space-grade quality culture, our components ensure uncompromising mechanical resilience, structural strength, and stable performance at elevated operational temperatures.
              </p>
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
                <div className="text-xs text-[#84CC16] font-mono tracking-widest uppercase">Ratio</div>
                <div className="text-white font-bold text-sm tracking-wide">High Strength-to-Weight</div>
              </div>
            </div>

            <div className="hud-element absolute bottom-[25%] -left-[5%] bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-md z-20 shadow-2xl hover:border-[#84CC16]/50 transition-colors cursor-default">
              <div className="flex flex-col gap-1">
                <div className="text-xs text-[#84CC16] font-mono tracking-widest uppercase">Resistance</div>
                <div className="text-white font-bold text-sm tracking-wide">Corrosion & Thermal</div>
              </div>
            </div>

            <div className="hud-element absolute top-[40%] -right-[5%] bg-black/60 backdrop-blur-md border border-[#84CC16]/30 p-4 rounded-md z-20 shadow-2xl hover:border-[#84CC16]/50 transition-colors cursor-default">
              <div className="flex flex-col gap-1 text-right">
                <div className="text-xs text-[#84CC16] font-mono tracking-widest uppercase">Integrity</div>
                <div className="text-white font-bold text-sm tracking-wide">Uncompromising Structural</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
