import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from '../../../imports/3d-drone-detector/magnific_professional-highend-prod_DB2qjCTpcl.png';
import img2 from '../../../imports/3d-drone-detector/Directional finding capability for accurate localization of drone signal sources.png';
import img3 from '../../../imports/3d-drone-detector/Reliable performance in extreme environments, operating from -20°C to +50°C and up to 95% humidity.png';

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
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      cardRefs.current.forEach((card, i) => {
        if (card) {
          gsap.fromTo(card,
            { y: 60, opacity: 0 },
            {
              y: 0, opacity: 1,
              duration: 0.8,
              delay: i * 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%"
              }
            }
          );
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="w-full bg-[#050505] py-24 md:py-32 px-8 md:px-16 border-b border-white/10"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col gap-16">
        
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-3xl md:text-5xl text-white uppercase tracking-tight font-bold" style={{ fontFamily: INTER }}>
            Hardware Architecture
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto" style={{ fontFamily: INTER }}>
            Advanced engineering delivering robust surveillance capabilities in a compact form factor.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CARDS.map((card, idx) => (
            <div 
              key={idx}
              ref={el => cardRefs.current[idx] = el}
              className="flex flex-col bg-[#0a0a0a] border border-white/10 overflow-hidden group hover:border-white/20 transition-colors duration-300 rounded-sm"
            >
              <div className="relative w-full h-64 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
              </div>
              <div className="p-8 flex flex-col gap-4 flex-grow">
                <h3 className="text-xl text-white font-bold tracking-wide uppercase" style={{ fontFamily: INTER }}>
                  {card.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: INTER }}>
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
