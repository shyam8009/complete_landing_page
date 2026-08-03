import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from '../../../imports/osint/search_config.jpg';
import img2 from '../../../imports/osint/facial_rec.jpg';
import img3 from '../../../imports/osint/c2_integration.jpg';
import bgPattern from '../../../imports/info_warfare_bg.jpg';

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  {
    title: "Deep-Level Data Mining",
    specs: "1000+ advanced search configuration filters enabling operators to filter by specific dates, languages, and localized scripts.",
    image: img1
  },
  {
    title: "Machine Learning Biometrics",
    specs: "Embedded facial recognition pipeline optimized to detect, isolate, and match target identities within streamed visual media.",
    image: img2
  },
  {
    title: "Slew-to-Cue Command (C2)",
    specs: "Natively compatible with FUSION Core AI Command and Control platforms, linking physical detections with digital open-source footprints.",
    image: img3
  }
];

export function SubsystemsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(cardRefs.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-[#ffffff] relative overflow-hidden">
      {/* Information Warfare Technical Blueprint Overlay */}
      <img 
        src={bgPattern} 
        alt="Information Warfare Schematic Overlay" 
        className="absolute inset-0 w-full h-full object-cover opacity-[0.15] pointer-events-none mix-blend-multiply"
      />

      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <span className="text-[#84CC16] text-sm font-bold tracking-[3px] uppercase font-mono block mb-4">
            SOFTWARE CAPABILITIES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black uppercase tracking-tight">
            System Specifications
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card, index) => (
            <div 
              key={index} 
              ref={el => cardRefs.current[index] = el}
              className="group bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden hover:border-[#84CC16]/50 transition-colors duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-black">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-90" />
              </div>
              
              {/* Content */}
              <div className="p-8 relative -mt-12">
                <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                  {card.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {card.specs}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
