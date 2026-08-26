import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import commandImg from '../../../imports/proxy/secure_drone_c2.webp';
import jammingImg from '../../../imports/proxy/anti_jamming_comms.webp';
import reconImg from '../../../imports/proxy/recon_video_relay.webp';

gsap.registerPlugin(ScrollTrigger);

const USE_CASES = [
  {
    id: "01",
    title: "Secure Drone Command and Control",
    image: commandImg,
  },
  {
    id: "02",
    title: "Anti-Jamming Tactical Communications",
    image: jammingImg,
  },
  {
    id: "03",
    title: "Reconnaissance Video Relay",
    image: reconImg,
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
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-16 tracking-wide uppercase">
          Tactical Applications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {USE_CASES.map((useCase, idx) => (
            <div 
              key={useCase.id}
              ref={el => cardsRef.current[idx] = el}
              className="group relative aspect-[4/5] overflow-hidden bg-[#111111]"
            >
              {/* Background Image */}
              <img 
                src={useCase.image} 
                alt={useCase.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="text-white/40 font-mono tracking-widest text-sm">
                  {useCase.id}
                </div>
                
                <div>
                  <h3 className="text-2xl font-light text-white leading-tight uppercase tracking-wide">
                    {useCase.title}
                  </h3>
                  <div className="h-[2px] w-0 bg-white/30 mt-4 group-hover:w-full transition-all duration-700 ease-out" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
