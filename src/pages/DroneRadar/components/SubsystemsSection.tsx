import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Activity, Cpu, Network, Radio, Target, Zap } from 'lucide-react';
import bgPattern from '../../../imports/light_blueprint_bg.jpg';

gsap.registerPlugin(ScrollTrigger);

const TIERS = [
  {
    id: 'tier1',
    title: 'AESA ANTENNA ARRAY',
    type: 'HARDWARE NODE',
  },
  {
    id: 'tier2',
    title: 'AI THREAT CLASSIFIER',
    type: 'PROCESSING NODE',
  },
  {
    id: 'tier3',
    title: 'C2 INTEGRATION',
    type: 'OUTPUT NODE',
  }
];

export function SubsystemsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightPanelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const svgLineRef = useRef<SVGPathElement>(null);
  const nodeDotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeTier, setActiveTier] = useState(0);

  useGSAP(() => {
    if (!containerRef.current || !svgLineRef.current) return;

    // Calculate total path length for drawing animation
    const pathLength = svgLineRef.current.getTotalLength();
    gsap.set(svgLineRef.current, { strokeDasharray: pathLength, strokeDashoffset: pathLength });

    // Hide all right panels except the first one initially
    gsap.set(rightPanelsRef.current.slice(1), { autoAlpha: 0, rotationX: 10, y: 30, transformPerspective: 1000 });
    gsap.set(rightPanelsRef.current[0], { autoAlpha: 1, rotationX: 0, y: 0, transformPerspective: 1000 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=2000', // Scroll duration for the entire section
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          // Update active tier based on scroll progress (3 sections = 33% each roughly)
          let current = 0;
          if (self.progress > 0.66) current = 2;
          else if (self.progress > 0.33) current = 1;
          
          if (current !== activeTier) {
            setActiveTier(current);
          }
        }
      }
    });

    // Animate the line drawing down across the whole scroll duration
    tl.to(svgLineRef.current, { strokeDashoffset: 0, ease: 'none', duration: 3 }, 0);

    // Cross-fade animations for panels tied to scroll progress
    // Transition 1 to 2
    tl.to(rightPanelsRef.current[0], { autoAlpha: 0, rotationX: -10, y: -30, duration: 0.5, ease: 'power2.inOut' }, 0.8);
    tl.to(rightPanelsRef.current[1], { autoAlpha: 1, rotationX: 0, y: 0, duration: 0.5, ease: 'power2.out' }, 1.0);

    // Transition 2 to 3
    tl.to(rightPanelsRef.current[1], { autoAlpha: 0, rotationX: -10, y: -30, duration: 0.5, ease: 'power2.inOut' }, 1.8);
    tl.to(rightPanelsRef.current[2], { autoAlpha: 1, rotationX: 0, y: 0, duration: 0.5, ease: 'power2.out' }, 2.0);

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen bg-[#F8F9FA] overflow-hidden flex items-center font-['Inter',sans-serif]"
    >
      {/* Background Blueprint Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]">
        <img 
          src={bgPattern} 
          alt="System Blueprint" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9FA] via-transparent to-[#F8F9FA]" />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 lg:px-8 w-full relative z-10 flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
        
        {/* LEFT COLUMN: Architecture Nav Tree */}
        <div ref={leftColRef} className="w-full md:w-1/3 relative flex flex-col justify-between py-12" style={{ height: '70vh' }}>
          
          {/* Section Header */}
          <div className="mb-8">
            <span className="text-[#0052FF] font-mono text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
              // Technical Architecture
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 uppercase tracking-tight leading-tight">
              System<br/>Blueprint
            </h2>
          </div>

          {/* SVG Trace Line */}
          <div className="absolute left-6 top-48 bottom-12 w-0.5 bg-slate-200">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 2 1000">
              <path 
                ref={svgLineRef}
                d="M 1 0 L 1 1000" 
                fill="none" 
                stroke="#0052FF" 
                strokeWidth="2" 
                className="drop-shadow-[0_0_8px_rgba(0,82,255,0.8)]"
              />
            </svg>
          </div>

          {/* Nodes */}
          <div className="flex flex-col justify-between flex-grow pl-14 relative z-10">
            {TIERS.map((tier, idx) => {
              const isActive = activeTier === idx;
              const isPast = activeTier > idx;
              return (
                <div key={tier.id} className="relative group cursor-pointer transition-all duration-500">
                  {/* Node Dot */}
                  <div 
                    className={`absolute -left-10 top-2 w-4 h-4 rounded-full border-2 transition-all duration-500 flex items-center justify-center
                      ${isActive ? 'border-[#0052FF] bg-white scale-125 shadow-[0_0_15px_rgba(0,82,255,0.4)]' : 
                        isPast ? 'border-[#0052FF] bg-[#0052FF]' : 'border-slate-300 bg-white'}`}
                  >
                    {isActive && <div className="w-1.5 h-1.5 bg-[#0052FF] rounded-full animate-ping" />}
                  </div>

                  <span className={`text-[10px] font-mono tracking-widest uppercase transition-colors duration-300 block mb-1
                    ${isActive ? 'text-[#0052FF] font-bold' : 'text-slate-400'}`}>
                    Tier 0{idx + 1} // {tier.type}
                  </span>
                  <h3 className={`text-xl lg:text-2xl font-bold uppercase tracking-wide transition-colors duration-300
                    ${isActive ? 'text-slate-900' : 'text-slate-400 group-hover:text-slate-600'}`}>
                    {tier.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: Dynamic Spec Inspector */}
        <div className="w-full md:w-2/3 relative" style={{ height: '70vh' }}>
          
          {/* TIER 1: AESA Antenna Array (Hardware Node - Circular/Pill shape) */}
          <div ref={el => rightPanelsRef.current[0] = el} className="absolute inset-0 flex items-center justify-center invisible">
            <div className="w-full max-w-4xl bg-white border border-slate-200 rounded-[3rem] p-10 lg:p-14 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] relative overflow-hidden group flex flex-col md:flex-row gap-8">
              {/* Decorative Background rings */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-[30rem] h-[30rem] rounded-full border border-slate-100 flex items-center justify-center opacity-50">
                <div className="w-[20rem] h-[20rem] rounded-full border border-slate-100 flex items-center justify-center">
                  <div className="w-[10rem] h-[10rem] rounded-full border border-slate-100/50" />
                </div>
              </div>

              {/* Hardware Render */}
              <div className="w-full md:w-1/2 relative z-10 flex items-center justify-center">
                <div className="relative w-full aspect-square max-w-[300px] rounded-full overflow-hidden border-4 border-slate-100 shadow-inner group-hover:border-blue-100 transition-colors duration-700">
                   <img src={imgAmp} alt="AESA Array" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                   {/* Simulated Radar Wave Overlays */}
                   <div className="absolute inset-0 rounded-full border border-blue-500/0 group-hover:border-blue-500/50 group-hover:animate-[ping_2s_ease-out_infinite]" />
                   <div className="absolute inset-0 rounded-full border border-blue-500/0 group-hover:border-blue-500/30 group-hover:animate-[ping_2.5s_ease-out_infinite_0.5s]" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent mix-blend-overlay" />
                </div>
              </div>

              <div className="relative z-10 w-full md:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#0052FF] rounded-full text-xs font-mono font-bold tracking-widest mb-8 border border-blue-100">
                  <Radio className="w-4 h-4 animate-pulse" />
                  TRANSMITTER ACTIVE
                </div>

                <h4 className="text-3xl font-bold text-slate-900 mb-6 uppercase tracking-tight">
                  Solid-State <br/> Multi-Beam Array
                </h4>

                <p className="text-slate-600 leading-relaxed mb-8">
                  Instantaneous beam steering eliminates mechanical latency. Configured for unblinking hemispherical 3D coverage and graceful degradation.
                </p>

                <div className="flex gap-4 items-end">
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex-1">
                    <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1">Frequency Band</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl lg:text-2xl font-bold text-slate-900">X-Band</span>
                      <span className="text-[10px] text-[#0052FF] font-mono animate-pulse">LIVE</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex-1">
                    <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1">Coverage</span>
                    <span className="text-xl lg:text-2xl font-bold text-slate-900">360° / 90°</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TIER 2: AI Threat Classifier (Processing Node - Hexagonal layout styling) */}
          <div ref={el => rightPanelsRef.current[1] = el} className="absolute inset-0 flex items-center justify-center invisible">
             <div className="w-full max-w-4xl bg-white border border-slate-200 p-1 lg:p-1 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] relative overflow-hidden" 
                  style={{ clipPath: 'polygon(3% 0, 100% 0, 100% 95%, 97% 100%, 0 100%, 0 5%)' }}>
               <div className="bg-slate-50 h-full w-full p-8 lg:p-12 flex flex-col md:flex-row gap-8 items-center" style={{ clipPath: 'polygon(3% 0, 100% 0, 100% 95%, 97% 100%, 0 100%, 0 5%)' }}>
                  
                  {/* Hexagon Grid Background pattern */}
                  <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                  {/* Processing Node Visual */}
                  <div className="w-full md:w-1/2 relative z-10 flex items-center justify-center">
                    <div className="relative w-full aspect-[4/3] max-w-[350px] overflow-hidden rounded-xl border border-slate-200 shadow-md group">
                      <img src={imgThermal} alt="Neural Network Edge Node" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-125" />
                      {/* Simulated Micro-Doppler Waves */}
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay" />
                      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-amber-400/50 transform -translate-y-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left" />
                    </div>
                  </div>

                  <div className="relative z-10 w-full md:w-1/2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-600 rounded-sm text-xs font-mono font-bold tracking-widest mb-6 border border-amber-100">
                      <Cpu className="w-4 h-4 animate-spin-slow" />
                      NEURAL NET ONLINE
                    </div>

                    <h4 className="text-3xl font-bold text-slate-900 mb-4 uppercase tracking-tight">
                      Micro-Doppler <br/> Analysis Engine
                    </h4>

                    <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                      Embedded edge-computing modules process radar returns in real-time, distinguishing between biological targets, fixed-wing, and rotary drones.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 border border-slate-200 border-l-4 border-l-amber-500 shadow-sm relative overflow-hidden group">
                        <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1 relative z-10">False Alarm Rate</span>
                        <div className="flex items-baseline gap-1 relative z-10">
                          <span className="text-2xl font-bold text-slate-900">&lt; 0.1%</span>
                        </div>
                        {/* Fake telemetry bar */}
                        <div className="absolute bottom-0 left-0 h-1 bg-amber-500 w-full transform origin-left scale-x-100 group-hover:scale-x-90 transition-transform duration-1000" />
                      </div>
                      
                      <div className="bg-white p-4 border border-slate-200 border-l-4 border-l-amber-500 shadow-sm relative overflow-hidden group">
                        <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1 relative z-10">Model Updates</span>
                        <div className="flex items-baseline gap-1 relative z-10">
                          <span className="text-lg font-bold text-slate-900 mt-2">SECURE OTA</span>
                        </div>
                         {/* Fake telemetry bar */}
                         <div className="absolute bottom-0 left-0 h-1 bg-amber-500 w-full transform origin-left scale-x-100 group-hover:scale-x-[0.95] transition-transform duration-1000" />
                      </div>
                    </div>

                  </div>
               </div>
             </div>
          </div>

          {/* TIER 3: C2 Integration (Output Node - Wide network link banner) */}
          <div ref={el => rightPanelsRef.current[2] = el} className="absolute inset-0 flex items-center justify-center invisible">
            <div className="w-full max-w-4xl bg-slate-900 text-white border border-slate-800 rounded-sm p-0 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)] relative overflow-hidden group flex flex-col md:flex-row">
              
              {/* Network Node Background */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%">
                  <pattern id="network" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 40" fill="none" stroke="white" strokeWidth="1"/>
                  </pattern>
                  <rect x="0" y="0" width="100%" height="100%" fill="url(#network)"/>
                </svg>
              </div>

              {/* Tactical Command Node Illustration */}
              <div className="w-full md:w-5/12 relative z-10 border-r border-white/10 overflow-hidden bg-black flex-shrink-0">
                <img src={imgMounts} alt="C2 Integration Node" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700 min-h-[250px]" />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/40 to-transparent mix-blend-color" />
                {/* Data stream overlay */}
                <div className="absolute left-0 bottom-0 p-4 w-full bg-gradient-to-t from-black/80 to-transparent">
                  <div className="h-1 w-full bg-white/20 overflow-hidden rounded-full">
                    <div className="h-full bg-emerald-500 w-1/3 group-hover:w-full transition-all duration-3000 ease-in-out" />
                  </div>
                  <span className="text-[8px] font-mono text-emerald-400 mt-1 block tracking-widest opacity-80">MULTI-DOMAIN DATA STREAM [ACTIVE]</span>
                </div>
              </div>

              <div className="relative z-10 w-full md:w-7/12 p-10 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                   <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/50 text-emerald-400 rounded-sm text-[10px] font-mono font-bold tracking-widest border border-emerald-900">
                    <Network className="w-3 h-3" />
                    ASTERIX LINK ESTABLISHED
                  </div>
                  <div className="flex gap-2">
                     <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                     <span className="w-2 h-2 rounded-full bg-emerald-500 opacity-50" />
                     <span className="w-2 h-2 rounded-full bg-emerald-500 opacity-50" />
                  </div>
                </div>

                <h4 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">
                  Zero-Latency <br/> Distribution
                </h4>
                <p className="text-slate-400 leading-relaxed text-sm mb-8">
                  Natively outputs standardized tracks for seamless ingestion into existing C2 nodes. Engineered as the primary sensor in multi-layered defense architectures.
                </p>

                <div className="space-y-4 w-full">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Protocol</span>
                    <span className="text-xs font-bold text-emerald-400">ASTERIX / API-FIRST</span>
                  </div>
                  <div className="h-px w-full bg-white/10" />
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Latency</span>
                    <span className="text-xs font-bold text-white">NEAR-ZERO MS</span>
                  </div>
                  <div className="h-px w-full bg-white/10" />
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Architecture</span>
                    <span className="text-xs font-bold text-white">MULTI-LAYER DEFENSE</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}