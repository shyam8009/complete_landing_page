import React, { useRef, useLayoutEffect } from 'react';
import { PencilRuler, Cog, Cuboid, Scan } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PIPELINE_STEPS = [
  {
    id: "01",
    title: "DESIGN & ENGINEERING",
    icon: PencilRuler,
    description: "Comprehensive in-house design utilizing the latest CAD/CAM software to generate manufacturing drawings directly from customer specifications, ensuring full stage-wise traceability."
  },
  {
    id: "02",
    title: "ADVANCED MACHINING",
    icon: Cog,
    description: "Full spectrum fabrication utilizing 3, 4, and 5-axis CNC milling and turning for high-precision, complex geometries in a single setup."
  },
  {
    id: "03",
    title: "EXOTIC METALLURGY",
    icon: Cuboid,
    description: "Proven expertise in machining high-strength materials, including Titanium, Invar, Super Invar, AZ31B, nickel alloys, and high-alloy steel."
  },
  {
    id: "04",
    title: "CMM INSPECTION",
    icon: Scan,
    description: "100% inspection for critical components using advanced Coordinate Measuring Machines (CMM), vision systems, and surface roughness validation to guarantee zero defects."
  }
];

export function AerospaceComponentsPipeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const progressLineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
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

      // Glowing progress line
      if (progressLineRef.current) {
        gsap.fromTo(progressLineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            transformOrigin: "left center",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 50%',
              end: 'bottom 80%',
              scrub: true,
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="pipeline-section" ref={sectionRef} className="py-20 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
            Manufacturing Process Pipeline
          </h2>
          <div className="w-24 h-1 bg-[#84CC16] mx-auto opacity-80" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 relative pt-8">
          
          {/* Connecting Line Base (Desktop) */}
          <div className="hidden lg:block absolute top-[5rem] left-[12%] right-[12%] h-[1px] bg-white/5" />
          
          {/* Glowing Progress Line */}
          <div 
            ref={progressLineRef}
            className="hidden lg:block absolute top-[5rem] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-transparent via-[#84CC16] to-[#84CC16] shadow-[0_0_15px_#84CC16]"
            style={{ transformOrigin: 'left center' }}
          />

          {PIPELINE_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.id} 
                ref={el => stepsRef.current[index] = el}
                className="relative flex flex-col group items-center text-center z-10"
              >
                {/* Unified Circular Step Node */}
                <div className="mb-8 flex flex-col items-center justify-center w-24 h-24 rounded-full bg-[#0a0a0a] border border-white/10 transition-all duration-300 shadow-xl relative">
                  <Icon className="w-8 h-8 text-white/60 group-hover:text-[#84CC16] group-hover:scale-110 transition-all duration-500" />
                </div>

                {/* Content */}
                <div className="flex flex-col items-center">
                  <span className="text-[#84CC16] font-mono text-sm font-bold mb-2">{step.id}</span>
                  <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-sm max-w-[280px]">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
