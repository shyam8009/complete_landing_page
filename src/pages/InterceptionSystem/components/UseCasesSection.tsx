import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import imgFob from '@/imports/sahana_facility.png';
import imgBorder from '@/imports/fpv-buddy/tactical_2.webp';
import imgEsm from '@/imports/surveillance_radar_hero.png';

gsap.registerPlugin(ScrollTrigger);

const USE_CASES = [
  {
    id: "01",
    title: "Forward Operating Bases (FOB)",
    desc: "Providing early warning threat detection through continuous perimeter spectrum monitoring against incoming hostile forces.",
    image: imgFob
  },
  {
    id: "02",
    title: "Border Intelligence & Security",
    desc: "Covert monitoring of illicit communication networks, intercepting cross-border insurgent coordination and smuggling logistics.",
    image: imgBorder
  },
  {
    id: "03",
    title: "Electronic Support Measures (ESM)",
    desc: "Mapping hostile radar arrays and communication nodes to establish absolute electronic dominance before kinetic engagement.",
    image: imgEsm
  }
];

export function UseCasesSection() {
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
    <section ref={sectionRef} className="py-24 bg-[#000000] relative">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
            OPERATIONAL APPLICATIONS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {USE_CASES.map((useCase, index) => (
            <div 
              key={useCase.id} 
              ref={el => cardsRef.current[index] = el}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10"
            >
              <img 
                src={useCase.image} 
                alt={useCase.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-[#84CC16]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
                  <span className="text-[#84CC16] font-mono text-sm tracking-widest font-bold mb-2 block">
                    {useCase.id}
                  </span>
                  <h3 className="text-2xl font-bold text-white uppercase leading-tight mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-white/60 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {useCase.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
