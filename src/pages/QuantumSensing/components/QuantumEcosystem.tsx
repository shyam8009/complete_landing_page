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
import { TechCTA } from '@/components/TechCTA';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// â”€â”€â”€ Card Data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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
    tag: 'RFD1 Â· RG-QD Â· RF-Model / HVN S4',
    title: 'Wideband RF Detectors',
    description: "Detection hardware built for the full RF spectrum, from room temperature to cryogenic conditions. The RFD1, RG-QD, and RF-Model give platforms the sensitivity to detect what conventional receivers miss.",
    statusBadge: 'DEFENCE GRADE Â· ACTIVE',
    freqRange: '100 MHz â€“ 40 GHz',
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
    tag: 'TWPAs Â· HEMT Amps Â· IQ Mixers',
    title: 'Quantum Microwave Devices',
    description: "The amplification and signal-conditioning layer quantum systems run on. Travelling Wave Parametric Amplifiers, HEMT amplifiers, IQ mixers, and precision filters.",
    statusBadge: 'CRYOGENIC CAPABLE',
    freqRange: '4K â€“ 300K Operating',
    specs: [
      "TWPAs for near-quantum-limited amplification",
      "HEMT amplifiers for low-noise RF/MW gain",
      "IQ mixer spurious rejection: > 25 dBc",
      "Operating temperature: 4K â€“ 300K",
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
    freqRange: 'DC â€“ 100+ GHz',
    specs: [
      "Ultra-high sensitivity EM field detection",
      "Self-calibrating atomic reference standard",
      "No antenna required â€” atom-based reception",
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
    freqRange: 'Allan Dev < 1Ã—10â»Â¹Â²',
    specs: [
      "Quantum-grade frequency stability",
      "Enables sovereign, GPS-independent timing",
      "Allan deviation: < 1Ã—10â»Â¹Â² @ 1s",
      "Holdover: < 1 Î¼s over 24 hours",
      "Supports distributed network synchronisation",
      "Ruggedised for field deployment"
    ],
    image: imgClock
  }
];

// â”€â”€â”€ Main Export â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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

      {/* GSAP Horizontal Scroll Section */}
      <section 
        ref={containerRef} 
        className="relative h-screen overflow-hidden"
        style={{ backgroundColor: '#050505' }} // Dark background base
      >
        {/* Background Schematic Image (Fixed Z-0) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img 
            src={bgSchematic} 
            alt="Quantum Schematic Background" 
            className="w-full h-full object-cover opacity-[0.15] mix-blend-screen invert"
            // Inverting the white schematic to make it look like a dark blueprint
          />
          {/* Faint green glow overlaid on schematic */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(132,204,22,0.06)_0%,rgba(5,5,5,0.85)_80%)]" />
        </div>



        {/* Track Container (Z-10) */}
        <div className="h-full w-full flex items-center overflow-visible z-10 relative">
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

// ——————————————————————————————————————————————————————————————————————————————
function TacticalConsoleCard({ data }: { data: CardData }) {
  return (
    <div className="relative w-[85vw] md:w-[70vw] lg:w-[60vw] h-[70vh] max-h-[800px] rounded-2xl overflow-hidden shrink-0 flex items-center justify-center group shadow-2xl">
      {/* GLASSMORPHIC CARD CONTAINER */}
      <div className="absolute inset-0 bg-[#050505]/70 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-[#84CC16]/30">
        <div className="flex flex-col md:flex-row h-full w-full">
          
          {/* Left Split (Image) */}
          <div className="w-full md:w-1/2 min-h-[250px] md:min-h-full border-b md:border-b-0 md:border-r flex" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
            <div className="relative w-full h-full flex-1 bg-[#000]">
              <img src={data.image} alt={data.title} className="absolute inset-0 w-full h-full object-cover" />
              
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
                {data.tag}
              </span>
              
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 tracking-tight leading-tight uppercase">
                {data.title}
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed">
                {data.description}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {data.specs.map((spec, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-sm bg-[#84CC16] mt-1.5 shrink-0" />
                  <span className="text-xs text-slate-700 leading-snug">{spec}</span>
                </div>
              ))}
            </div>

            <div className="pt-5 mt-auto border-t border-slate-200">
              <TechCTA theme="dark">
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
  );
}


