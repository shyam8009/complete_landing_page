import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Database, Network, Settings, BarChart2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const NODES = [
  {
    id: "01",
    title: "INGEST",
    icon: Database,
    description: "Utilizing Text-Audio-Video Analytics to retrieve relevant information from photos, text, video, and audio content."
  },
  {
    id: "02",
    title: "MODEL",
    icon: Network,
    description: "Helping firms perceive and bottle their experience and belongings into reusable machine learning models through analysis of knowledge sources."
  },
  {
    id: "03",
    title: "AUTOMATE",
    icon: Settings,
    description: "Accelerating intelligent automation with straightforward tools for image processing, image recognition, and object detection."
  },
  {
    id: "04",
    title: "DECIDE",
    icon: BarChart2,
    description: "Delivering better recommendations with image, video, and text models to enable faster and smarter decision making."
  }
];

export function AIPipeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const progressLineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
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
    <section ref={sectionRef} className="py-20 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 relative">
          
          {/* Connecting Line Base (Desktop) */}
          <div className="hidden lg:block absolute top-0 h-[1px] bg-white/5" style={{ left: "calc((100% - 6rem) / 8)", right: "calc((100% - 6rem) / 8)" }} />
          
          {/* Glowing Progress Line */}
          <div ref={progressLineRef} className="hidden lg:block absolute top-0 h-[2px] bg-[#84CC16] shadow-[0_0_15px_#84CC16]" style={{ left: "calc((100% - 6rem) / 8)", right: "calc((100% - 6rem) / 8)", transformOrigin: "left center" }} />

          {NODES.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.id} 
                ref={el => stepsRef.current[index] = el}
                className="relative flex flex-col group items-center text-center"
              >
                {/* Step Number (Above the line) */}
                <span className="absolute -top-10 text-[#84CC16] font-mono text-sm font-bold tracking-widest">
                  {step.id}
                </span>

                <div className="mt-8 mb-6 flex flex-col items-center justify-center w-16 h-16 rounded-full bg-[#0a0a0a] border border-white/10 group-hover:bg-[#111111] transition-all duration-500 relative z-10 shadow-xl">
                  <Icon className="w-6 h-6 text-white/60 group-hover:text-[#84CC16] group-hover:scale-110 transition-all duration-500" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-[13px] max-w-[260px]">
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
