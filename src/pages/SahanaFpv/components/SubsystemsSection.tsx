import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bgPattern from '../../../imports/light_blueprint_bg.jpg';
import chassisImg from '../../../imports/magnific_extreme-closeup-macro-pro_8vcjnezIrU.png';
import propulsionImg from '../../../imports/magnific_extreme-closeup-macro-pro_WMNENw4cXe.png';
import opticsImg from '../../../imports/magnific_extreme-closeup-macro-pro_LUQGHhOswO.png';

gsap.registerPlugin(ScrollTrigger);

const SUBSYSTEMS = [
  {
    title: 'Chassis & Stability',
    description: '10" Frame Size, high-velocity stability architecture.',
    image: chassisImg,
  },
  {
    title: 'High-Speed Drive',
    description: 'LiPo 8s 22,000 mAh battery, up to 400 kmph maximum speed.',
    image: propulsionImg,
  },
  {
    title: 'Tactical Communications',
    description: '1.2–3.5 GHz on-demand video transmission, Fiber Optics Pool integration option.',
    image: opticsImg,
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
          stagger: 0.2,
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
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      
      {/* Schematic Vector Background Overlay */}
      <img 
        src={bgPattern} 
        alt="Technical Blueprint Overlay" 
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
      />
      <div className="absolute inset-0 bg-white/20 z-0" />

      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] uppercase tracking-tight mb-4">
            HARDWARE ARCHITECTURE
          </h2>
          <p className="text-[#0F172A]/70 max-w-2xl text-lg">
            Engineered with military-grade components to ensure flawless execution during high-speed interception maneuvers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SUBSYSTEMS.map((system, index) => (
            <div 
              key={index} 
              ref={el => cardsRef.current[index] = el}
              className="group bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden hover:border-[#82C91E]/50 transition-colors duration-500"
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
                  <span className="w-1.5 h-1.5 rounded-full bg-[#82C91E]" />
                  <span className="text-[#82C91E] text-[10px] font-bold tracking-widest uppercase">
                    Specification
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
