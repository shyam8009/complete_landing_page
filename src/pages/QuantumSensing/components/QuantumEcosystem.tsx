import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Import local high-res images
import imgRfd from '@/imports/quantum_rfd_detect.jpg';
import imgMicrowave from '@/imports/innovation_2.jpg';
import imgRydberg from '@/imports/rydberg_sensor_macro.jpg';
import imgDrone from '@/imports/quantum_stealth_drone.jpg';
import imgClock from '@/imports/quantum_atomic_clock.jpg';
import bgVideo from '@/imports/gwr_video_mvp.mp4';
import bgSchematic from '@/imports/unified_quantum_schematic.jpg';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// ─── Card Data ────────────────────────────────────────────────
interface CardData {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  statusBadge: string;
  freqRange: string;
  specs: string[];
}

const PILLARS: CardData[] = [
  {
    id: 'rfd',
    tag: 'RFD1 · RG-QD · RF-Model / HVN S4',
    title: 'Wideband RF Detectors',
    description: "Detection hardware built for the full RF spectrum, from room temperature to cryogenic conditions. The RFD1, RG-QD, and RF-Model give platforms the sensitivity to detect what conventional receivers miss.",
    statusBadge: 'DEFENCE GRADE · ACTIVE',
    freqRange: '100 MHz – 40 GHz',
    specs: [
      "Broadband detection across RF/MW frequencies",
      "Configurable for thru-wall RADAR and SIGINT",
      "Zero foreign dependency in the critical path",
      "Noise figure: < 2 dB across full band",
      "MIL-STD-810H environmental qualification",
      "Indigenous signal processing architecture"
    ],
    image: imgRfd
  },
  {
    id: 'microwave',
    tag: 'TWPAs · HEMT Amps · IQ Mixers',
    title: 'Quantum Microwave Devices',
    description: "The amplification and signal-conditioning layer quantum systems run on. Travelling Wave Parametric Amplifiers, HEMT amplifiers, IQ mixers, and precision filters.",
    statusBadge: 'CRYOGENIC CAPABLE',
    freqRange: '4K – 300K Operating',
    specs: [
      "TWPAs for near-quantum-limited amplification",
      "HEMT amplifiers for low-noise RF/MW gain",
      "IQ mixer spurious rejection: > 25 dBc",
      "Operating temperature: 4K – 300K",
      "Custom filter design & fabrication",
      "Cryogenic RF/MW design expertise"
    ],
    image: imgMicrowave
  },
  {
    id: 'rydberg',
    tag: 'Atomic-Precision Sensing',
    title: 'Rydberg Atom Sensors',
    description: "Atomic-precision sensing for environments where classical RF sensors fall short. Detect electromagnetic fields with a sensitivity that redefines what's measurable.",
    statusBadge: 'QUANTUM ACTIVE',
    freqRange: 'DC – 100+ GHz',
    specs: [
      "Ultra-high sensitivity EM field detection",
      "Self-calibrating atomic reference standard",
      "No antenna required — atom-based reception",
      "Frequency agile: DC to 100+ GHz",
      "Applications in SIGINT and secure sensing",
      "Bridges quantum theory & defence deployment"
    ],
    image: imgRydberg
  },
  {
    id: 'drone',
    tag: 'DaaS / Mission Scale',
    title: 'Quantum Drone',
    description: "Quantum-enabled drone systems built for contested and GPS-denied environments. Engineered around indigenous quantum sensing and navigation hardware.",
    statusBadge: 'MISSION READY',
    freqRange: 'GPS-Denied Nav',
    specs: [
      "Drone-as-a-Service (DaaS) flexible deployment",
      "Onboard quantum sensing for GPS-denied nav",
      "Quantum-enhanced INS for autonomous flight",
      "Encrypted quantum key distribution payload",
      "Multi-spectral sensing integration",
      "Engineered for aerospace operational realities"
    ],
    image: imgDrone
  },
  {
    id: 'clock',
    tag: 'Quantum Limit Precision',
    title: 'Quantum Clock Source',
    description: "Precision timing at the quantum limit. A Quantum Clock Source gives navigation, communication, and RADAR systems a timing reference stable enough to operate independently.",
    statusBadge: 'SOVEREIGN TIMING',
    freqRange: 'Allan Dev < 1×10⁻¹²',
    specs: [
      "Quantum-grade frequency stability",
      "Enables sovereign, GPS-independent timing",
      "Allan deviation: < 1×10⁻¹² @ 1s",
      "Holdover: < 1 μs over 24 hours",
      "Supports distributed network synchronisation",
      "Ruggedised for field deployment"
    ],
    image: imgClock
  }
];

// ─── Main Export ──────────────────────────────────────────────
export function QuantumEcosystem() {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Determine if mobile (don't run complex GSAP horizontal on very small screens if preferred)
    // But user wants horizontal scroll, so we will apply it universally.
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
      {/* Intro Section - Light Canvas Theme */}
      <section className="relative w-full py-32 md:py-48 flex flex-col items-start justify-center overflow-hidden bg-slate-50">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video 
            src={bgVideo} 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-20"
          />
          {/* Gradient overlay to ensure text is legible on the light background */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-slate-50/70 to-transparent" />
          
          {/* Bottom fade to blend seamlessly into the next section */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-50 to-transparent" />
        </div>

        <div className="relative z-10 px-6 md:px-12 max-w-3xl text-left">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase mb-6 text-amber-900 bg-amber-100 border border-amber-300">
            Sovereign Technology
          </span>
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-slate-900 leading-tight">
            The Quantum <br className="hidden md:block" /> Ecosystem
          </h2>
          <p className="mt-6 text-sm md:text-base leading-relaxed text-slate-600 max-w-xl">
            Sensing built on quantum principles, engineered for a sensitivity classical hardware can't reach. 
            From RF detection to atomic clocks, this is the measurement layer for modern aerospace and defence programmes.
          </p>
        </div>
      </section>

      {/* GSAP Horizontal Scroll Section */}
      <section 
        ref={containerRef} 
        className="relative h-screen overflow-hidden bg-slate-50"
      >
        {/* Background Schematic Image (Fixed Z-0) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img 
            src={bgSchematic} 
            alt="Quantum Schematic Background" 
            className="w-full h-full object-cover opacity-15"
          />
          {/* Subtle light gradient overlaid on schematic */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.0)_0%,rgba(248,250,252,0.85)_80%)]" />
        </div>

        {/* Track Container (Z-10) with 3D Perspective */}
        <div className="h-full w-full flex items-center overflow-visible z-10 relative" style={{ perspective: '1500px' }}>
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
      className="relative w-[90vw] max-w-[1100px] rounded-2xl mx-auto h-[min(520px,72vh)] overflow-hidden bg-white/95 border border-slate-200/80 shadow-xl shadow-slate-900/5 transition-transform duration-300"
      style={{ 
        display: 'flex',
        flexDirection: 'column',
        transform: 'rotateY(-4deg) scale(0.98)', // Slight 3D rotation, clamped safely
        willChange: 'transform'
      }}
    >
      {/* HUD Corner Accents (Subtle Light Theme) */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 z-20 border-slate-300" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 z-20 border-slate-300" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 z-20 border-slate-300" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 z-20 border-slate-300" />

      {/* Grid Layout - Forced to 100% height without internal scrolling */}
      <div className="flex flex-col md:grid md:grid-cols-12 h-full w-full overflow-hidden">
        
        {/* LEFT: Hardware Visual (5 cols / ~42%) */}
        <div className="md:col-span-5 p-5 border-b md:border-b-0 md:border-r border-slate-200 bg-slate-100/80">
          {/* Image */}
          <div className="relative w-full h-full rounded-xl overflow-hidden group border border-slate-200 bg-white">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Status indicator */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-[10px] font-mono text-slate-900 bg-white/90 px-2 py-1 rounded shadow-sm backdrop-blur-md border border-white/40">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-amber-500" />
                {data.statusBadge}
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT: Specifications & CTAs (7 cols / ~58%) */}
        <div className="md:col-span-7 p-6 lg:p-8 flex flex-col justify-between h-full bg-transparent">
          <div>
            {/* Tag */}
            <span className="inline-block px-3 py-1 rounded-md text-[9px] lg:text-[10px] font-mono tracking-wider uppercase mb-4 text-amber-900 bg-amber-100 border border-amber-300">
              {data.tag}
            </span>

            {/* Title */}
            <h3 className="text-xl lg:text-3xl font-bold tracking-wide uppercase leading-tight text-slate-900 line-clamp-1">
              {data.title}
            </h3>
            <p className="text-xs lg:text-sm mt-2 leading-relaxed text-slate-600 line-clamp-2">
              {data.description}
            </p>

            <div className="my-5 border-t border-slate-200" />

            {/* Specs Grid */}
            <h4 className="text-[10px] font-mono uppercase tracking-[0.15em] mb-4 text-slate-500 font-semibold">
              Key Technical Features
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {data.specs.slice(0, 4).map((spec, idx) => (
                <div key={idx} className="flex items-start gap-2 text-[11px] lg:text-xs text-slate-600 leading-tight">
                  <span className="mt-[2px] font-bold text-amber-600">›</span>
                  <span className="line-clamp-2">{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-5 mt-auto border-t border-slate-200">
            <button className="w-full md:w-auto py-2.5 px-6 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white">
              <span>View Data Sheet</span>
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
