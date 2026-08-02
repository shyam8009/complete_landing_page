import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ampImg from '../../../imports/infinity-rhino/magnific_extreme-closeup-macro-pho_1sfdbBur4r.png';
import remoteImg from '../../../imports/infinity-rhino/magnific_extreme-closeup-macro-pho_CHdnhd8EEy.png';
import ruggedImg from '../../../imports/infinity-rhino/magnific_extreme-closeup-macro-pho_wPKasSb7EI.png';

gsap.registerPlugin(ScrollTrigger);

const SUBSYSTEMS = [
  {
    id: "sub-rf",
    title: "Targeted RF Disruption",
    subtitle: "Power Output",
    description: "5 channel operation spanning 860-950 MHz up to 5725-5850 MHz, delivering 210 Watts of total RF power.",
    image: ampImg,
  },
  {
    id: "sub-remote",
    title: "Wired Remote Control",
    subtitle: "Tactical Command",
    description: "Equipped with a flexible 3 mtr wired remote control featuring channel selection and direct on/off control.",
    image: remoteImg,
  },
  {
    id: "sub-rugged",
    title: "Ruggedized Endurance",
    subtitle: "Power & Environment",
    description: "Air Cooled system capable of high altitude operations and up to 95% operational humidity, running on battery or integrated platform power.",
    image: ruggedImg,
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
    <section ref={sectionRef} className="py-24 bg-white relative">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black uppercase tracking-tight">
            HARDWARE SPECIFICATIONS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SUBSYSTEMS.map((system, index) => (
            <div 
              key={system.id} 
              ref={el => cardsRef.current[index] = el}
              className="group bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden hover:border-[#84CC16]/50 transition-colors duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-black">
                <img 
                  src={system.image} 
                  alt={system.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-90" />
              </div>
              
              <div className="p-8 relative -mt-12">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded bg-black/50 backdrop-blur-md border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
                  <span className="text-[#84CC16] text-[10px] font-bold tracking-widest uppercase">
                    {system.subtitle}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 uppercase">
                  {system.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {system.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
