import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import imgAerospace from '@/imports/magnific_extreme-closeup-macro-pro_8vcjnezIrU.png';
import imgDefence from '@/imports/innovation_1.jpg';
import imgSatcom from '@/imports/magnific_extreme-closeup-macro-pro_WMNENw4cXe.png';
import { TechCTA } from '@/components/TechCTA';

gsap.registerPlugin(ScrollTrigger);

const ecosystemData = [
  {
    tag: "High-Strength Alloys . Structural Integrity . Flight-Critical",
    title: "Aerospace Components",
    description: "Precision-machined aerospace components engineered to withstand extreme thermal, gravitational, and vibrational stresses encountered during high-altitude and supersonic flight.",
    specs: [
      "Lightweight high-strength titanium and aluminum-lithium alloys.",
      "Stringent dimensional tolerances for turbine and fuselage assemblies.",
      "Rigorous non-destructive testing (NDT) quality validation.",
      "Aerospace-grade environmental durability."
    ],
    img: imgAerospace
  },
  {
    tag: "Ruggedized Hardware . Tactical Reliability . Military Spec",
    title: "Defence Components",
    description: "Heavy-duty defense components built to MIL-STD specifications, providing uncompromising mechanical resilience and electrical stability across severe combat and field environments.",
    specs: [
      "Shock and vibration-resistant structural housings.",
      "Corrosion-resistant protective coatings for harsh maritime/desert deployments.",
      "High-reliability interconnects and electromechanical assemblies.",
      "Zero-failure tolerance in mission-critical paths."
    ],
    img: imgDefence
  },
  {
    tag: "High-Frequency RF . Satellite Telemetry . Low Loss",
    title: "SATCOM Components",
    description: "Advanced satellite communication (SATCOM) hardware engineered for high-frequency signal propagation, low insertion loss, and stable data transmission across global defense networks.",
    specs: [
      "Precision waveguide assemblies and micro-wave components for Ka/Ku band operations.",
      "Thermal-stable antenna feed networks.",
      "Hermetically sealed RF modules.",
      "High-purity dielectric materials for minimal signal degradation."
    ],
    img: imgSatcom
  }
];

export default function AerospaceDefenceEcosystem() {
  const scrollContainer = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const panels = gsap.utils.toArray('.ecosystem-panel');
    const totalPanels = panels.length;
    
    // Calculate the exact scroll distance needed
    const getScrollDist = () => {
      if (!trackRef.current) return 0;
      return trackRef.current.scrollWidth - window.innerWidth;
    };

    gsap.to(trackRef.current, {
      x: () => -getScrollDist(),
      ease: "none",
      scrollTrigger: {
        trigger: scrollContainer.current,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${getScrollDist()}`,
        invalidateOnRefresh: true,
      }
    });
  }, { scope: scrollContainer });

  return (
    <div className="font-['Inter',sans-serif]">
      {/* HORIZONTAL ECOSYSTEM TRACK */}
      <section ref={scrollContainer} className="relative w-full h-screen overflow-hidden bg-[#050505]">
        
        {/* BACKGROUND IMAGE (Fixed, z-0) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#050505] to-[#020202]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_80%)]" />
        </div>

        {/* HORIZONTAL SCROLL TRACK */}
        <div 
          ref={trackRef}
          className="absolute top-0 left-0 h-full flex items-center pt-20 pb-20 px-6 md:px-24 w-max"
        >
          <div className="flex gap-12 lg:gap-24 h-full items-center">
            
            {ecosystemData.map((item, index) => (
              <div 
                key={index} 
                className="ecosystem-panel relative w-[85vw] md:w-[70vw] lg:w-[60vw] h-[70vh] max-h-[800px] rounded-2xl overflow-hidden shrink-0 flex items-center justify-center group shadow-2xl"
              >
                
                {/* GLASSMORPHIC CARD CONTAINER */}
                <div className="absolute inset-0 bg-[#050505]/70 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-[#84CC16]/30">
                  <div className="flex flex-col md:flex-row h-full w-full">
                    
                    {/* Left Split (Image) */}
                    <div className="w-full md:w-1/2 min-h-[250px] md:min-h-full border-b md:border-b-0 md:border-r flex" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                      <div className="relative w-full h-full flex-1 bg-[#000]">
                        <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                        
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                        
                        {/* Crosshairs & Scanning Line Effect */}
                        <div className="absolute inset-0 pointer-events-none">
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-white/10 opacity-30 group-hover:opacity-100 transition-opacity duration-700" />
                          <div className="absolute top-0 left-0 w-full h-[1px] bg-[#84CC16]/30 animate-[scan_3s_ease-in-out_infinite]" />
                        </div>
                      </div>
                    </div>

                    {/* Right Split (Content) */}
                    <div className="w-full md:w-1/2 p-6 lg:p-10 flex flex-col justify-between bg-neutral-100">
                      <div className="mb-6">
                        <span className="inline-block px-3 py-1 rounded-md text-[9px] lg:text-[10px] font-mono tracking-wider uppercase mb-4"
                          style={{ color: '#050505', backgroundColor: '#84CC16', border: '1px solid #84CC16' }}>
                          {item.tag}
                        </span>
                        
                        <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 tracking-tight leading-tight uppercase">
                          {item.title}
                        </h3>
                        
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex flex-col gap-3">
                        {item.specs.map((spec, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-sm bg-[#84CC16] mt-1.5 shrink-0" />
                            <span className="text-xs text-slate-700 leading-snug">{spec}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-5 mt-auto border-t border-slate-200">
                        <TechCTA>
                          <span>Know More</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </TechCTA>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER (Fixed, z-20) */}
        <div className="absolute bottom-8 left-0 w-full z-20 text-center pointer-events-none">
          <p className="text-white/40 tracking-widest text-xs uppercase animate-pulse">
            Scroll to Explore
          </p>
        </div>
      </section>
    </div>
  );
}
