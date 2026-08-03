import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from '../../../imports/3d-drone-detector/transceiver_array.png';
import img2 from '../../../imports/3d-drone-detector/directional_finding.png';
import img3 from '../../../imports/3d-drone-detector/reliable_performance.png';
import bgPattern from '../../../imports/light_blueprint_bg.jpg';

gsap.registerPlugin(ScrollTrigger);

const INTER = '"Inter", sans-serif';

const CARDS = [
  {
    title: "FMCW Transceiver",
    image: img1,
    desc: "Operates on the X-band using Frequency-Modulated Continuous-Wave (FMCW) technology, reaching detection ranges up to 15 km."
  },
  {
    title: "Omni-Directional Sweep",
    image: img2,
    desc: "Provides a complete horizontal perimeter sweep with 360-degree Azimuth coverage and 60-degree Elevation coverage."
  },
  {
    title: "Compact & Ruggedized",
    image: img3,
    desc: "Space-saving cylindrical construction footprint measuring 500 mm x 600 mm, featuring high durability against severe moisture and dust (IP67)."
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
          y: 0, opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%"
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="overflow-hidden py-24 bg-white relative"
    >
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
            Hardware Architecture
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card, index) => (
            <div 
              key={index} 
              ref={el => cardRefs.current[index] = el}
              className="group bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden hover:border-[#84CC16]/50 transition-colors duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-black">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-90" />
              </div>
              
              <div className="p-8 relative -mt-12">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded bg-black/50 backdrop-blur-md border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
                  <span className="text-[#84CC16] text-[10px] font-bold tracking-widest uppercase">
                    Specification
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 uppercase">
                  {card.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
