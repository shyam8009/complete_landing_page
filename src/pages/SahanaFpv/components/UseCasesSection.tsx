import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import counterUasImg from '../../../imports/fpv_bullseye/counter_uas_interception.webp';
import reconImg from '../../../imports/fpv_bullseye/tactical_reconnaissance.webp';
import perimeterImg from '../../../imports/fpv_bullseye/perimeter_threat_neutralization.webp';

gsap.registerPlugin(ScrollTrigger);

const USE_CASES = [
  {
    title: 'Counter-UAS Interception.',
    image: counterUasImg,
  },
  {
    title: 'Tactical Reconnaissance.',
    image: reconImg,
  },
  {
    title: 'Perimeter Threat Neutralization.',
    image: perimeterImg,
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
    <section ref={sectionRef} className="section-padding bg-black relative">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
            TACTICAL APPLICATIONS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {USE_CASES.map((useCase, index) => (
            <div 
              key={index} 
              ref={el => cardsRef.current[index] = el}
              className="relative aspect-[3/4] md:aspect-auto md:h-[600px] overflow-hidden group cursor-pointer"
            >
              <img 
                src={useCase.image} 
                alt={useCase.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
              <div className="absolute inset-0 bg-[#84CC16]/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-bold text-white uppercase leading-tight group-hover:text-[#84CC16] transition-colors">
                  {useCase.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}



