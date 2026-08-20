import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mic, Cpu, BrainCircuit, ShieldAlert } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const NODES = [
  {
    step: "01",
    title: "INGEST",
    icon: Mic,
    description: "Secure capture of incoming tactical audio streams, intercepted multi-channel communications, and direct operator voice commands at the tactical edge."
  },
  {
    step: "02",
    title: "TRANSCRIBE",
    icon: Cpu,
    description: "High-speed, offline Natural Language Processing (NLP) converts spoken audio and regional dialects into highly accurate, machine-readable text instantly."
  },
  {
    step: "03",
    title: "SYNTHESIZE",
    icon: BrainCircuit,
    description: "Algorithmic extraction of critical operational context—automatically tagging threat indicators, grid coordinates, and specific tactical intents from the transcription."
  },
  {
    step: "04",
    title: "EXECUTE",
    icon: ShieldAlert,
    description: "Seamless integration with C2 systems to autonomously route intelligence, generate automated briefings, or execute direct database queries via natural language."
  }
];

export function ChatbotsVoicePipeline() {
  const containerRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Animate line width
      gsap.fromTo(lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 70%",
            scrub: 1,
          }
        }
      );

      // Animate nodes
      gsap.fromTo(".pipeline-node",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="pipeline-section" ref={containerRef} className="py-24 bg-[#020202] text-white border-t border-white/5 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10">
        
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            DEEPTECH PROCESS PIPELINE
          </h2>
          <div className="w-24 h-1 bg-[#84CC16] mx-auto opacity-80" />
        </div>

        <div className="relative">
          {/* Background Track Line */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[2px] bg-white/10 hidden lg:block" />
          
          {/* Glowing Progress Line */}
          <div 
            ref={lineRef}
            className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[2px] bg-[#84CC16] origin-left hidden lg:block shadow-[0_0_15px_rgba(132,204,22,0.8)]" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {NODES.map((node, index) => {
              const Icon = node.icon;
              return (
                <div key={index} className="pipeline-node flex flex-col items-center text-center group">
                  <span className="text-[#84CC16] font-mono text-xl font-bold mb-6 tracking-widest bg-black px-2 relative z-10">
                    {node.step}
                  </span>
                  
                  <div className="w-20 h-20 rounded-full bg-black border-2 border-white/20 flex items-center justify-center mb-8 group-hover:border-[#84CC16] group-hover:shadow-[0_0_30px_rgba(132,204,22,0.3)] transition-all duration-500 relative z-10">
                    <Icon className="w-8 h-8 text-white group-hover:text-[#84CC16] transition-colors" />
                  </div>
                  
                  <h3 className="text-2xl font-bold uppercase tracking-wide mb-4">
                    {node.title}
                  </h3>
                  
                  <p className="text-white/60 leading-relaxed text-sm max-w-sm">
                    {node.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
