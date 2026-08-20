import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  {
    title: "AS9100D Certified",
    description: "Aerospace Quality Management System certification guaranteeing strict adherence to global aviation manufacturing standards."
  },
  {
    title: "Uncompromising Inspection",
    description: "In-house ISO 9001:2015 certified quality department utilizing CMM, profile projectors, and non-contact optical inspection."
  },
  {
    title: "Trusted Defence Partner",
    description: "A recognized premium supplier and continuous partner to India's leading aerospace, space, and defense organizations."
  }
];

export function AS9100QualityStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo('.compliance-heading',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
      gsap.fromTo('.metric-item',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#050505] py-16 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-32 bg-[#84CC16]/5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="compliance-heading mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
            QUALITY & COMPLIANCE
          </h2>
          <div className="w-24 h-1 bg-[#84CC16] mx-auto opacity-80" />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-8">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="metric-item flex-1 flex flex-col items-center text-center p-6 bg-white/5 border border-white/10 rounded-lg backdrop-blur-md hover:border-[#84CC16]/30 transition-colors duration-500 w-full"
            >
              <div className="w-12 h-1 bg-[#84CC16] mb-6 opacity-80" />
              <h4 className="text-white font-bold uppercase tracking-widest text-lg mb-4">
                {metric.title}
              </h4>
              <p className="text-white/60 text-sm font-light leading-relaxed max-w-sm">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


