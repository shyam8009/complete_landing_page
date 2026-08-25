import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Check } from 'lucide-react';

import bgGrid from '@/imports/spear_cad_blueprint.png'; 
import imgHugo from '@/imports/electro-optics/Hugo - Triton.png';
import imgNubra from '@/imports/electro-optics/Nubra - Rogue.png';
import imgSalte from '@/imports/electro-optics/Salte - Atlas.png';
import imgOslo from '@/imports/electro-optics/Oslo - Neptune.png';
import imgIncas from '@/imports/electro-optics/Incas - Sentry.png';
import imgYoto from '@/imports/electro-optics/Yoto - Sigma.png';
import imgTroy from '@/imports/electro-optics/Troy - Vega.png';
import imgAlta from '@/imports/electro-optics/Alta - Arc.png';
import { TechCTA } from '@/components/TechCTA';

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  {
    id: 'hugo',
    tag: 'Portable . Mobile Surveillance',
    title: 'Hugo',
    desc: 'A compact, rugged portable PTZ engineered for rapid vehicle and marine deployments. Packing up to 12MP high-resolution visible sensors and thermal imaging into a highly mobile footprint.',
    bullets: [
      'Up to 30X optical day/night zoom',
      'Active IR LED for covert illumination',
      'IP66 weatherproof housing'
    ],
    img: imgHugo
  },
  {
    id: 'nubra',
    tag: 'Modular . Military-Grade',
    title: 'Nubra',
    desc: 'A military-grade PTZ surveillance system built on a modular architecture. Match-to-mission payloads integrate long-range thermal detection with active laser illumination for true 24/7 imaging.',
    bullets: [
      '12Âµm LWIR uncooled thermal imaging for extreme long-range detection',
      'ZLIDâ„¢ illumination',
      'Rapid deployment kits available'
    ],
    img: imgNubra
  },
  {
    id: 'salte',
    tag: 'Portable . All-Weather EO/IR',
    title: 'Salte',
    desc: 'A resilient all-weather PTZ camera system offering true multispectral imaging. Pairs ultra-high-definition visible imaging with active illumination for uncompromising nighttime performance.',
    bullets: [
      '8MP (4K) visible sensor',
      'Mechanical visible cut filters for daytime NIR viewing',
      'Integrated rapid auto-focus continuous zoom lenses'
    ],
    img: imgSalte
  },
  {
    id: 'oslo',
    tag: 'Maritime . Salt-Fog Resistant',
    title: 'Oslo',
    desc: 'A heavily ruggedized multi-sensor PTZ system engineered specifically for severe maritime and coastal environments.',
    bullets: [
      'Advanced Gyro-Stabilization eliminates wave-induced shakiness',
      'Hermetically sealed anti-corrosive housing',
      'Multi-wavelength fog penetration'
    ],
    img: imgOslo
  },
  {
    id: 'incas',
    tag: 'Perimeter . Super Telephoto Thermal',
    title: 'Incas',
    desc: 'An ultra long-range surveillance platform built for border security and critical infrastructure. Integrates super-telephoto thermal optics to detect and track targets across extreme distances.',
    bullets: [
      'Long-range laser rangefinder (LRF) integration',
      'Extreme thermal DRI (Detection, Recognition, Identification) ratings',
      'AI-driven target tracking'
    ],
    img: imgIncas
  },
  {
    id: 'yoto',
    tag: 'C-UAS . Extreme Long Range',
    title: 'Yoto',
    desc: 'An extreme-range multi-sensor PTZ system engineered for counter-drone (C-UAS) and strategic defense. High-payload positioning ensures millimeter-precise tracking of evasive airborne threats.',
    bullets: [
      'High-torque continuous pan/tilt mechanics',
      'Radar slew-to-cue integration',
      'Simultaneous multi-stream video pipelines'
    ],
    img: imgYoto
  },
  {
    id: 'troy',
    tag: 'Ultra-Compact . Tactical Mobile',
    title: 'Troy',
    desc: 'An ultra-compact, lightweight micro PTZ designed for tactical ground vehicles, UGVs, and airborne platforms where space and weight are critical, without sacrificing HD optical performance.',
    bullets: [
      'Low-profile aerodynamic footprint',
      'Extreme shock and vibration resistance',
      'Rapid motorized targeting'
    ],
    img: imgTroy
  },
  {
    id: 'alta',
    tag: 'Heavy-Duty . Precision Positioner',
    title: 'Alta',
    desc: 'A heavy-duty, high-precision pan-tilt positioner built to carry massive multi-sensor payloadsâ€”including SWIR, continuous zoom thermal, and long-range ZLID illuminationâ€”with absolute zero-backlash accuracy.',
    bullets: [
      'Supports extreme payload weights',
      'Absolute encoder positioning',
      'Modular payload brackets for custom sensor suites'
    ],
    img: imgAlta
  }
];

export function EcosystemTrack() {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!trackRef.current || CARDS.length === 0) return;
    const getScrollDist = () => trackRef.current ? trackRef.current.scrollWidth - window.innerWidth : 0;

    ScrollTrigger.create({
      trigger: scrollContainer.current,
      start: "top top",
      end: () => `+=${getScrollDist()}`,
      pin: true,
      animation: gsap.to(trackRef.current, {
        x: () => -getScrollDist(),
        ease: "none"
      }),
      scrub: 1,
      invalidateOnRefresh: true,
    });
  }, { scope: scrollContainer });

  return (
    <div className="font-['Inter',sans-serif]">
      <section ref={scrollContainer} id="ecosystem-track" className="relative w-full h-screen overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src={bgGrid} 
            alt="Intelligence Network Schematic" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,5,5,0.2)_0%,rgba(5,5,5,0.95)_100%)]" />
        </div>

        <div className="absolute top-8 left-0 right-0 z-20 flex justify-center pointer-events-none">
          <span className="text-[#84CC16] font-mono font-bold tracking-[0.2em] text-sm md:text-base uppercase">
            ELECTRO-OPTICAL ECOSYSTEM
          </span>
        </div>

        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center pointer-events-none">
          <span className="text-white/40 font-mono tracking-widest text-xs uppercase animate-pulse">
            SCROLL TO EXPLORE
          </span>
        </div>

        <div className="relative z-10 flex h-full items-center overflow-visible">
          <div ref={trackRef} className="flex flex-nowrap h-full items-center px-[5vw] md:px-[10vw] gap-12 md:gap-24">
            
            {CARDS.map((item, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 flex items-center justify-center"
              >
                
                <div 
                  className="w-[90vw] max-w-[1100px] min-h-[500px] rounded-2xl mx-auto flex flex-col md:flex-row items-stretch relative"
                  style={{ 
                    backgroundColor: 'rgba(8, 8, 8, 0.75)', 
                    border: '1px solid rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8)',
                  }}
                >
                  
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />

                  <div className="w-full md:w-1/2 min-h-[250px] md:min-h-full border-b md:border-b-0 md:border-r flex rounded-t-2xl md:rounded-t-none md:rounded-l-2xl overflow-hidden" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                    <div className="relative w-full h-full flex-1 bg-[#000]">
                      <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                      <div style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.9) 0%, transparent 60%)' }} className="absolute inset-0" />
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 p-6 lg:p-10 flex flex-col justify-between bg-neutral-100 rounded-b-2xl md:rounded-b-none md:rounded-r-2xl">
                    <div className="mb-6">
                      <span className="inline-block px-3 py-1 rounded-md text-[9px] lg:text-[10px] font-mono tracking-wider uppercase mb-4"
                        style={{ color: '#050505', backgroundColor: '#84CC16', border: '1px solid #84CC16' }}>
                        {item.tag}
                      </span>
                      
                      <h2 className="text-slate-900 text-xl lg:text-3xl font-bold uppercase mb-4 leading-tight line-clamp-2">
                        {item.title}
                      </h2>
                      
                      <p className="text-sm lg:text-base text-slate-600 mb-6 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-5 mt-4 border-t border-slate-200">
                      <TechCTA>
                        EXPLORE ASSET <ArrowRight className="w-4 h-4" />
                      </TechCTA>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

