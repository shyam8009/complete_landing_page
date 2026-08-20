import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lock, BrainCircuit, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const METRICS = [
  {
    title: "Air-Gapped Deployment",
    description: "Models operate securely without requiring internet connectivity, eliminating external cyber threat vectors.",
    icon: Lock
  },
  {
    title: "Algorithmic Sovereignty",
    description: "100% indigenous neural networks free from foreign backdoors or compromised training datasets.",
    icon: BrainCircuit
  },
  {
    title: "Edge Computing",
    description: "Inference executed directly on the hardware for zero-latency response during critical tactical operations.",
    icon: Zap
  }
];

export function SovereignStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.sovereign-item',
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
    <section ref={sectionRef} className="w-full bg-[#000000] py-20 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-32 bg-[#84CC16]/5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-stretch gap-12 md:gap-8">
          {METRICS.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div 
                key={index}
                className="sovereign-item flex-1 flex flex-col items-center text-center p-8 bg-white/5 border border-white/10 rounded-lg backdrop-blur-md hover:border-[#84CC16]/30 transition-all duration-500 w-full group"
              >
                <div className="mb-6 p-4 rounded-full bg-black/50 border border-white/10 group-hover:border-[#84CC16]/50 transition-colors">
                  <Icon className="w-8 h-8 text-[#84CC16]" />
                </div>
                <h4 className="text-white font-bold uppercase tracking-wide text-lg mb-4">
                  {metric.title}
                </h4>
                <p className="text-white/60 text-sm font-light leading-relaxed max-w-sm">
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
