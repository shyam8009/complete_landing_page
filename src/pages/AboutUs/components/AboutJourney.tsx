import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const INTER = "'Inter', sans-serif";

gsap.registerPlugin(ScrollTrigger);

const JOURNEY_DATA = [
  { year: '2015', title: 'SAHANA FOUNDED', desc: 'Inception of the aerospace division.' },
  { year: '2018', title: 'FIRST DEPLOYMENT', desc: 'Operational capabilities deployed.' },
  { year: '2022', title: 'DEEPTECH EXPANSION', desc: 'Entry into Quantum & AI sectors.' },
  { year: '2023', title: 'STRATEGIC TARGETING', desc: 'First comms-denied targeting.' },
  { year: '2024', title: 'AUTONOMY SOLUTION', desc: 'Enterprise hivemind deployed.' },
  { year: '2025', title: 'GLOBAL FOOTPRINT', desc: 'Serving 25+ global enterprise clients.' },
  { year: 'FUTURE', title: 'SOVEREIGN CAPABILITY', desc: 'Complete autonomy for every mission.' }
];

export default function AboutJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.matchMedia().add("(min-width: 1024px)", () => {
        const panels = gsap.utils.toArray('.journey-panel') as HTMLElement[];
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=4000",
            pin: true,
            scrub: 1,
            anticipatePin: 1
          }
        });

        panels.forEach((panel, i) => {
          if (i === 0) return;
          tl.to(panels[i - 1], { flex: 1, duration: 1 }, i)
            .to(panel, { flex: 8, duration: 1 }, i)
            .to(panels[i - 1].querySelector('.journey-content'), { opacity: 0, duration: 0.5 }, i)
            .to(panel.querySelector('.journey-content'), { opacity: 1, duration: 0.5 }, i + 0.5);
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full h-screen bg-[#050505] text-white flex flex-col justify-center overflow-hidden z-10 relative">
      <div className="px-6 md:px-12 mb-8 shrink-0 pt-24 lg:pt-0">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
          A Decade of <span className="font-medium">Autonomy Leadership</span>
        </h2>
      </div>

      <div ref={trackRef} className="flex flex-col lg:flex-row w-full h-[60vh] lg:h-[600px] border-y border-white/10 overflow-y-auto lg:overflow-hidden">
        {JOURNEY_DATA.map((item, i) => (
          <div 
            key={i} 
            className={`journey-panel border-b lg:border-b-0 lg:border-r border-white/10 flex lg:flex-col justify-between overflow-hidden relative transition-all duration-300 ease-out ${
              i === 0 ? 'lg:flex-[8]' : 'lg:flex-[1]'
            } ${item.year === 'FUTURE' ? 'bg-[#84CC16]/5' : ''}`}
            style={{ minWidth: '80px' }}
          >
            {/* Year - Top aligned on desktop, left on mobile */}
            <div className="p-4 lg:p-6 shrink-0 flex items-start justify-center h-auto lg:h-[180px]">
              <h3 className={`text-4xl md:text-5xl font-light tracking-widest ${item.year === 'FUTURE' ? 'text-[#84CC16]' : 'text-white'}`} 
                  style={{ writingMode: 'vertical-rl', transform: 'scale(-1)' }}>
                {item.year}
              </h3>
            </div>
            
            {/* Content - Bottom aligned */}
            <div className={`journey-content p-4 lg:p-6 shrink-0 flex flex-col justify-end w-full lg:w-[350px] h-full ${i === 0 ? 'opacity-100' : 'opacity-100 lg:opacity-0'}`}>
              <p className={`text-sm tracking-widest font-bold mb-2 uppercase ${item.year === 'FUTURE' ? 'text-white' : 'text-white/70'}`} style={{ fontFamily: INTER }}>{item.title}</p>
              <p className="text-sm text-white/50 font-mono mb-4">{item.desc}</p>
              
              {/* Decorative block representing an image/schematic */}
              <div className="w-full h-24 lg:h-32 border border-white/10 bg-white/5 relative overflow-hidden flex items-center justify-center">
                 <div className="absolute inset-0 bg-[url('/assets/Hardware_Spec_1.webp')] bg-cover bg-center opacity-20 mix-blend-screen" />
                 {item.year === 'FUTURE' && <div className="absolute inset-0 bg-[#84CC16]/20 mix-blend-overlay" />}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
