import React, { useEffect, useRef } from 'react';
import { Radar, Cpu, Crosshair, ShieldAlert } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PIPELINE_STEPS = [
  {
    id: '01',
    title: 'DETECT',
    description: 'Continuous 360-degree volumetric scanning identifies potential threats at extreme ranges.',
    icon: Radar,
  },
  {
    id: '02',
    title: 'TRACK',
    description: 'AI-driven algorithms lock onto multiple targets simultaneously, predicting flight paths.',
    icon: Crosshair,
  },
  {
    id: '03',
    title: 'IDENTIFY',
    description: 'Deep learning classification distinguishes between birds, friendly aircraft, and hostile drones.',
    icon: Cpu,
  },
  {
    id: '04',
    title: 'DEFEAT',
    description: 'Seamless integration with kinetic and non-kinetic effectors for immediate threat neutralization.',
    icon: ShieldAlert,
  }
];

export function PipelineSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-transparent via-[#84CC16]/30 to-transparent" />

          {PIPELINE_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.id} 
                ref={el => stepsRef.current[index] = el}
                className="relative flex flex-col group"
              >
                {/* Step Number & Icon */}
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-4xl font-black text-white/10 font-mono tracking-tighter group-hover:text-[#84CC16]/20 transition-colors">
                    {step.id}.
                  </span>
                  <div className="w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center group-hover:border-[#84CC16]/50 group-hover:bg-[#84CC16]/5 transition-all duration-300 relative z-10">
                    <Icon className="w-6 h-6 text-white/50 group-hover:text-[#84CC16] transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm">
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