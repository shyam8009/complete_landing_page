import React, { useEffect, useRef, useState } from 'react';
import { PencilRuler, Cog, Cuboid, Scan } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PIPELINE_STEPS = [
  {
    id: "01",
    title: "DESIGN & ENGINEERING",
    icon: PencilRuler
  },
  {
    id: "02",
    title: "ADVANCED MACHINING",
    icon: Cog
  },
  {
    id: "03",
    title: "EXOTIC METALLURGY",
    icon: Cuboid
  },
  {
    id: "04",
    title: "CMM INSPECTION",
    icon: Scan
  }
];

export function AerospaceComponentsPipeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const svgLineRef = useRef<SVGPathElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current || !svgLineRef.current) return;

      const pathLength = svgLineRef.current.getTotalLength();
      gsap.set(svgLineRef.current, { strokeDasharray: pathLength, strokeDashoffset: pathLength });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'bottom 40%',
          scrub: 0.5,
          onUpdate: (self) => {
            const numSteps = PIPELINE_STEPS.length;
            let current = Math.floor(self.progress * numSteps);
            if (current >= numSteps) current = numSteps - 1;
            if (current < 0) current = 0;
            if (current !== activeStep) {
              setActiveStep(current);
            }
          }
        }
      });

      tl.to(svgLineRef.current, { strokeDashoffset: 0, ease: 'none', duration: 1 });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeStep]);

  return (
    <section ref={sectionRef} className="py-24 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="max-w-[1200px] mx-auto px-4 lg:px-6 relative z-10 flex justify-center">
        <div className="relative w-full max-w-2xl py-12">
          <div className="absolute left-[39px] top-12 bottom-12 w-0.5 -translate-x-1/2 -z-10 bg-white/5">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 2 1000">
              <path 
                ref={svgLineRef}
                d="M 1 0 L 1 1000" 
                fill="none" 
                stroke="#84CC16" 
                strokeWidth="2" 
                className="drop-shadow-[0_0_8px_rgba(132,204,22,0.8)]"
              />
            </svg>
          </div>

          <div className="flex flex-col gap-16 md:gap-24">
            {PIPELINE_STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              const isPast = idx < activeStep;
              
              return (
                <div key={step.id} className="relative group flex items-start gap-8 pl-2">
                  
                  <div className="relative z-10 mt-1 shrink-0 flex items-center justify-center w-[18px] h-[18px] ml-[2px]">
                    <div 
                      className={`absolute inset-0 rounded-full border-2 transition-all duration-500 flex items-center justify-center
                        ${isActive ? 'border-[#84CC16] bg-black scale-125 shadow-[0_0_15px_rgba(132,204,22,0.4)]' : 
                          isPast ? 'border-[#84CC16] bg-[#84CC16]' : 'border-white/20 bg-black'}`}
                    >
                      {isActive && <div className="absolute w-1.5 h-1.5 bg-[#84CC16] rounded-full animate-ping" />}
                      {isActive && <div className="absolute w-1.5 h-1.5 bg-[#84CC16] rounded-full" />}
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 items-start w-full">
                    <div className="shrink-0 flex items-center justify-center w-16 h-16 rounded-lg bg-[#0a0a0a] border border-white/10 group-hover:border-[#84CC16]/30 transition-colors duration-500">
                      <Icon className={`w-6 h-6 transition-colors duration-500 ${isActive || isPast ? 'text-[#84CC16]' : 'text-white/40'}`} />
                    </div>
                    
                    <div className="flex flex-col mt-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[#84CC16] font-mono text-sm tracking-widest font-bold">
                          {step.id}
                        </span>
                        <h3 className={`text-xl font-bold uppercase tracking-wide transition-colors duration-500 ${isActive || isPast ? 'text-white' : 'text-white/60'}`}>
                          {step.title}
                        </h3>
                      </div>
                      {step.description && (
                        <p className="text-white/50 leading-relaxed text-sm md:text-base max-w-[400px]">
                          {step.description}
                        </p>
                      )}
                    </div>
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
