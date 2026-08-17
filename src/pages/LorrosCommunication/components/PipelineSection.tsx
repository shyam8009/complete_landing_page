import React, { useEffect, useRef } from 'react';
import { MapPin, Eye, Sliders, Network } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PIPELINE_STEPS = [
  {
    id: "01",
    title: "DEPLOY",
    icon: MapPin,
    description: "Flexible architecture supporting stationary, mobile, and highly portable configurations across a variety of operational environments."
  },
  {
    id: "02",
    title: "OBSERVE",
    icon: Eye,
    description: "Delivers real-time surveillance and long-range target observation through advanced electro-optical capabilities, including day and thermal imaging."
  },
  {
    id: "03",
    title: "MANAGE",
    icon: Sliders,
    description: "Enables efficient resource management; a single control unit can operate multiple sensor suites, or individual sensors can be controlled from different stations."
  },
  {
    id: "04",
    title: "INTEGRATE",
    icon: Network,
    description: "Seamlessly networks with broader Intelligence, Surveillance, and Reconnaissance (ISR) frameworks and command-and-control systems."
  }
];

export function PipelineSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const progressLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Step appearances
      gsap.fromTo(stepsRef.current,
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

      // Progress line animation
      gsap.fromTo(progressLineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-24 bg-[#020202] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative">
        
        {/* Connecting Lines */}
        <div className="absolute top-[100px] left-0 w-full h-px bg-white/10 hidden md:block" />
        <div 
          ref={progressLineRef}
          className="absolute top-[100px] left-0 w-full h-[2px] bg-[#84CC16] hidden md:block origin-left drop-shadow-[0_0_8px_rgba(132,204,22,0.6)]" 
        />

        {/* Nodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
          {PIPELINE_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.id} 
                ref={el => stepsRef.current[idx] = el}
                className="flex flex-col items-center text-center relative group"
              >
                {/* Node Badge */}
                <div className="w-24 h-24 rounded-full bg-[#0a0a0a] border border-white/10 flex flex-col items-center justify-center relative mb-8 group-hover:border-[#84CC16]/50 transition-colors duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                  <span className="text-[10px] text-white/40 font-mono absolute top-4">{step.id}</span>
                  <Icon className="w-6 h-6 text-white mt-3 group-hover:text-[#84CC16] transition-colors duration-500" />
                  
                  {/* Outer pulse ring on hover */}
                  <div className="absolute inset-0 rounded-full border border-[#84CC16]/0 group-hover:border-[#84CC16]/30 group-hover:scale-110 transition-all duration-500" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white tracking-widest uppercase mb-4">
                  {step.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed max-w-[280px]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
