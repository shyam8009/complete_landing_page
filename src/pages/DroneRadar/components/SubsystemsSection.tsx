import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Use same generic images from drone-detector or infinity-rhino
import imgAmp from '../../../imports/infinity-rhino/magnific_extreme-closeup-macro-pho_1sfdbBur4r.png';
import imgThermal from '../../../imports/infinity-rhino/magnific_extreme-closeup-macro-pho_CHdnhd8EEy.png';
import imgMounts from '../../../imports/infinity-rhino/magnific_extreme-closeup-macro-pho_wPKasSb7EI.png';
import bgPattern from '../../../imports/light_blueprint_bg.jpg';

gsap.registerPlugin(ScrollTrigger);

// ─── Card Data ────────────────────────────────────────────────
interface CardData {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  statusBadge: string;
  specs: string[];
}

const PILLARS: CardData[] = [
  {
    id: '01',
    tag: 'Hardware · Sensor',
    title: 'AESA ANTENNA ARRAY',
    description: 'Active Electronically Scanned Array (AESA) technology allows for instantaneous beam steering, eliminating the mechanical latency of traditional rotating radars. Provides unblinking coverage of the entire hemisphere.',
    statusBadge: 'ACTIVE SENSOR',
    specs: [
      'Solid-state transmitter architecture', 
      'Simultaneous multi-beam generation', 
      'Graceful degradation support',
      'Hemispherical 3D coverage'
    ],
    image: imgAmp
  },
  {
    id: '02',
    tag: 'Software · Edge Computing',
    title: 'AI THREAT CLASSIFIER',
    description: 'Embedded edge-computing modules process radar returns in real-time, using deep neural networks to distinguish between biological targets (birds), fixed-wing aircraft, and rotary-wing drones.',
    statusBadge: 'EDGE AI ENGINE',
    specs: [
      'Micro-Doppler signature analysis', 
      'False alarm reduction < 0.1%', 
      'Continuous model updates via secure OTA',
      'Instantaneous threat categorization'
    ],
    image: imgThermal
  },
  {
    id: '03',
    tag: 'Network · Integration',
    title: 'C2 INTEGRATION',
    description: 'Natively outputs standardized tracks (e.g., ASTERIX) for seamless ingestion into existing C2 nodes. Engineered to act as the primary sensor in a multi-layered defense architecture.',
    statusBadge: 'NETWORKED NODE',
    specs: [
      'Zero-latency network distribution', 
      'Interoperable with legacy C2 systems', 
      'API-first architecture',
      'Multi-layered defense capability'
    ],
    image: imgMounts
  }
];

export function SubsystemsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.qs-card');
    if (!trackRef.current || cards.length === 0) return;

    const track = trackRef.current;
    
    // Total distance the track needs to slide to show the last card
    const getScrollDist = () => track.scrollWidth - window.innerWidth;

    gsap.to(track, {
      x: () => -getScrollDist(),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1, // Smooth scrubbing
        start: "top top",
        end: () => `+=${getScrollDist()}`,
        invalidateOnRefresh: true, // Recalculate distances on window resize
      }
    });
  }, { scope: containerRef });

  return (
    <div className="font-['Inter',sans-serif]">
      {/* GSAP Horizontal Scroll Section */}
      <section 
        ref={containerRef} 
        className="relative h-screen overflow-hidden bg-white"
      >
        {/* Schematic Vector Background Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img 
            src={bgPattern} 
            alt="Technical Blueprint Overlay" 
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
          />
          <div className="absolute inset-0 bg-white/20 z-0" />
        </div>

        {/* Section Intro text floating over the track */}
        <div className="absolute top-[10vh] left-[5vw] md:left-[10vw] z-20 pointer-events-none w-full max-w-xl">
           <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase mb-6" style={{ color: '#84CC16', backgroundColor: 'rgba(132,204,22,0.1)', border: '1px solid rgba(132,204,22,0.2)' }}>
            // TECHNICAL ARCHITECTURE
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-black uppercase tracking-tight leading-tight">
            ENGINEERED FOR THE <br /> MODERN BATTLESPACE.
          </h2>
        </div>

        {/* Track Container (Z-10) */}
        <div className="h-full w-full flex items-center overflow-visible z-10 relative mt-20">
          <div ref={trackRef} className="flex flex-nowrap h-full items-center pl-[5vw] md:pl-[10vw]">
            {PILLARS.map((pillar, idx) => (
              <div 
                key={idx} 
                className="qs-card shrink-0 flex items-center justify-center pr-[10vw]"
                style={{ width: '100vw' }} // Force each card container to take up one viewport width
              >
                <TacticalConsoleCard data={pillar} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── Tactical Console Card ────────────────────────────────────
function TacticalConsoleCard({ data }: { data: CardData }) {
  return (
    <div
      className="relative w-[90vw] max-w-[1100px] rounded-2xl overflow-hidden mx-auto h-[min(540px,75vh)]"
      style={{ 
        backgroundColor: 'rgba(8, 8, 8, 0.75)', 
        border: '1px solid rgba(255,255,255,0.08)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8)',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* HUD Corner Accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />

      {/* Grid Layout - Forced to 100% height without internal scrolling */}
      <div className="flex flex-col md:grid md:grid-cols-12 h-full w-full overflow-hidden">
        
        {/* LEFT: Hardware Visual (5 cols / ~42%) */}
        <div className="md:col-span-5 p-5 lg:p-6 border-b md:border-b-0 md:border-r" 
          style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}>
          {/* Image */}
          <div className="relative w-full h-48 md:h-full rounded-xl overflow-hidden group" 
            style={{ border: '1px solid rgba(255,255,255,0.08)', backgroundColor: '#000', minHeight: '300px' }}>
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.9) 0%, transparent 60%)' }} className="absolute inset-0" />
            
            {/* Status indicator */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-[10px] font-mono text-white/90">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#84CC16' }} />
                {data.statusBadge}
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT: Specifications & CTAs (7 cols / ~58%) */}
        <div className="md:col-span-7 p-6 lg:p-8 flex flex-col justify-between h-full bg-neutral-100">
          <div>
            {/* Tag */}
            <span className="inline-block px-3 py-1 rounded-md text-[9px] lg:text-[10px] font-mono tracking-wider uppercase mb-4"
              style={{ color: '#050505', backgroundColor: '#84CC16', border: '1px solid #84CC16' }}>
              {data.tag}
            </span>

            {/* Title */}
            <h3 className="text-slate-900 text-xl lg:text-3xl font-bold tracking-wide uppercase leading-tight line-clamp-1">
              {data.title}
            </h3>
            <p className="text-xs lg:text-sm mt-3 leading-relaxed text-slate-600 line-clamp-3">
              {data.description}
            </p>

            <div className="my-5 border-t border-slate-200" />

            {/* Specs Grid */}
            <h4 className="text-[10px] font-mono uppercase tracking-[0.15em] mb-4 text-slate-500">
              Key Technical Features
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {data.specs.slice(0, 4).map((spec, idx) => (
                <div key={idx} className="flex items-start gap-2 text-[11px] lg:text-[13px] text-slate-700 leading-tight">
                  <span className="mt-[2px] font-bold text-amber-600">›</span>
                  <span className="line-clamp-2">{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA Block locked to bottom via mt-auto */}
          <div className="pt-6 mt-auto border-t border-slate-200">
            <button className="w-full md:w-auto py-3 px-8 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 bg-slate-900 hover:bg-[#84CC16] hover:text-slate-900 text-white group">
              <span>Know More</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}