import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
    <section ref={sectionRef} className="py-24 bg-[#050505] border-t border-white/5 relative">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10">
        
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-4">
            HARDWARE ARCHITECTURE
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Engineered with military-grade components to ensure flawless execution during high-speed interception maneuvers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SUBSYSTEMS.map((system, index) => (
            <div 
              key={index} 
              ref={el => cardsRef.current[index] = el}
              className="bg-[#0a0a0a] rounded-xl border border-white/10 overflow-hidden group hover:border-[#84CC16]/50 transition-colors duration-500 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-black">
                <img 
                  src={system.image} 
                  alt={system.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90" />
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-3">
                  {system.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
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
