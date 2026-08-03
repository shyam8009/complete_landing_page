import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import borderImg from '../../../imports/infinity-rhino/magnific_professional-editorialtac_wPKaCMd7EI.jpeg';
import infraImg from '../../../imports/corporate_house_2.jpg';
import navalImg from '../../../imports/rf-detector-d360/magnific_professional-outdoor-prod_62g8z7SiJO.png';

gsap.registerPlugin(ScrollTrigger);

const INTER = '"Inter", sans-serif';

const USE_CASES = [
  {
    label: "Unregulated Military Border Surveillance",
    image: borderImg,
  },
  {
    label: "Critical Physical Infrastructure Protection",
    image: infraImg,
  },
  {
    label: "Naval & Air Borne Applications",
    image: navalImg,
  }
];

export function UseCasesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      cardRefs.current.forEach((card, i) => {
        if (card) {
          gsap.fromTo(card,
            { opacity: 0, scale: 0.95 },
            {
              opacity: 1, scale: 1,
              duration: 1,
              delay: i * 0.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top 60%"
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
      className="w-full bg-[#000000] py-24 md:py-32 px-4 md:px-8 border-b border-white/10"
    >
      <div className="max-w-[1600px] mx-auto flex flex-col gap-12">
        
        <h2 className="text-4xl md:text-6xl text-white font-bold tracking-tighter uppercase text-center" style={{ fontFamily: INTER }}>
          Tactical Applications
        </h2>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {USE_CASES.map((useCase, idx) => (
            <div 
              key={idx}
              ref={el => cardRefs.current[idx] = el}
              className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden group rounded-sm"
            >
              {/* Background Image */}
              <img 
                src={useCase.image} 
                alt={useCase.label} 
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              {/* Hover Tint Overlay (Neon Green) */}
              <div className="absolute inset-0 bg-[#84CC16]/0 group-hover:bg-[#84CC16]/20 transition-colors duration-500 mix-blend-overlay" />

              {/* Text Label */}
              <div className="absolute bottom-8 left-8 right-8 z-10">
                <div className="w-8 h-1 bg-[#84CC16] mb-4 transform origin-left transition-all duration-300 group-hover:w-16" />
                <h3 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-wide leading-tight" style={{ fontFamily: INTER }}>
                  {useCase.label}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
