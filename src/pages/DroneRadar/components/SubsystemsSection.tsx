import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ampImg from '../../../imports/infinity-rhino/magnific_extreme-closeup-macro-pho_1sfdbBur4r.png';
import thermalImg from '../../../imports/infinity-rhino/magnific_extreme-closeup-macro-pho_CHdnhd8EEy.png';
import mountsImg from '../../../imports/infinity-rhino/magnific_extreme-closeup-macro-pho_wPKasSb7EI.png';
import bgPattern from '../../../imports/light_blueprint_bg.jpg';

gsap.registerPlugin(ScrollTrigger);

const SUBSYSTEMS = [
  {
    id: '01',
    title: 'AESA ANTENNA ARRAY',
    subtitle: 'COMPONENT // 01',
    description: 'Active Electronically Scanned Array (AESA) technology allows for instantaneous beam steering, eliminating the mechanical latency of traditional rotating radars. Provides unblinking coverage of the entire hemisphere.',
    bullets: ['Solid-state transmitter architecture', 'Simultaneous multi-beam generation', 'Graceful degradation support'],
    image: ampImg,
  },
  {
    id: '02',
    title: 'AI THREAT CLASSIFIER',
    subtitle: 'COMPONENT // 02',
    description: 'Embedded edge-computing modules process radar returns in real-time, using deep neural networks to distinguish between biological targets (birds), fixed-wing aircraft, and rotary-wing drones.',
    bullets: ['Micro-Doppler signature analysis', 'False alarm reduction < 0.1%', 'Continuous model updates via secure OTA'],
    image: thermalImg,
  },
  {
    id: '03',
    title: 'C2 INTEGRATION',
    subtitle: 'COMPONENT // 03',
    description: 'Natively outputs standardized tracks (e.g., ASTERIX) for seamless ingestion into existing C2 nodes. Engineered to act as the primary sensor in a multi-layered defense architecture.',
    bullets: ['Zero-latency network distribution', 'Interoperable with legacy C2 systems', 'API-first architecture'],
    image: mountsImg,
  }
];

export function SubsystemsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden py-24 bg-white relative">
      {/* Schematic Vector Background Overlay */}
      <img 
        src={bgPattern} 
        alt="Technical Blueprint Overlay" 
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
      />
      <div className="absolute inset-0 bg-white/20 z-0" />

      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black uppercase tracking-tight">
            TECHNICAL ARCHITECTURE
          </h2>
          <p className="mt-4 text-black/60 max-w-2xl text-lg font-medium">
            ENGINEERED FOR THE MODERN BATTLESPACE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SUBSYSTEMS.map((system, index) => (
            <div 
              key={system.id} 
              ref={el => cardsRef.current[index] = el}
              className="group bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden hover:border-[#84CC16]/50 transition-colors duration-500 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-black shrink-0">
                <img 
                  src={system.image} 
                  alt={system.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-90" />
              </div>
              
              <div className="p-8 relative -mt-12 flex flex-col flex-grow">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded bg-black/50 backdrop-blur-md border border-white/10 self-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
                  <span className="text-[#84CC16] text-[10px] font-bold tracking-widest uppercase">
                    {system.subtitle}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 uppercase">
                  {system.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {system.description}
                </p>
                
                <div className="mt-auto space-y-3 pt-4 border-t border-white/10">
                  {system.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-[#84CC16] mt-2 rounded-sm shrink-0" />
                      <span className="text-white/70 text-xs">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}