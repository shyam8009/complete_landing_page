import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Bot, Database, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ECOSYSTEM_CARDS = [
  {
    id: "01",
    tag: "NLP . Voice Command . Conversational AI",
    title: "Chatbots and Voice Solution",
    description: "Secure, military-grade conversational AI and voice recognition systems designed for tactical environments. Overcome cognitive overload by enabling operators to interact with complex databases and command systems using natural language.",
    features: [
      "Secure, offline Natural Language Processing (NLP) for air-gapped command centers.",
      "Real-time voice-to-text transcription for rapid intelligence logging and communication routing.",
      "Automated tactical briefings and multilingual translation modules for allied coalition operations."
    ],
    icon: Bot
  },
  {
    id: "02",
    tag: "Data Fusion . Predictive Analytics . OSINT",
    title: "Big Data and Business Intelligence",
    description: "Transform fragmented, high-velocity data into a unified operational picture. Our BI architecture ingests massive datasets from radar, OSINT, and logistics networks to expose hidden tactical patterns and supply chain vulnerabilities.",
    features: [
      "Real-time ingestion and normalization of unstructured intelligence datasets.",
      "Customizable, high-performance BI dashboards deployed at the tactical edge.",
      "Predictive logistics modeling to anticipate supply chain disruptions before they impact troop readiness."
    ],
    icon: Database
  },
  {
    id: "03",
    tag: "Machine Learning . Neural Networks . Automation",
    title: "Artificial Intelligence",
    description: "Deploy advanced algorithmic warfare capabilities. We build, train, and deploy custom machine learning models and neural networks that automate target recognition, optimize communication arrays, and accelerate decision-making cycles.",
    features: [
      "Computer vision algorithms for automated target detection in ISR video feeds.",
      "Anomaly detection models to identify hostile electronic warfare (EW) interference.",
      "Edge-deployed AI processing, ensuring autonomous capabilities even when disconnected from central servers."
    ],
    icon: Cpu
  }
];

export function TechEcosystem() {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const container = containerRef.current;
      const track = trackRef.current;
      
      if (container && track) {
        const getScrollAmount = () => {
          let trackWidth = track.scrollWidth;
          return -(trackWidth - window.innerWidth);
        };

        const tween = gsap.to(track, {
          x: getScrollAmount,
          ease: "none"
        });

        ScrollTrigger.create({
          trigger: container,
          start: "top top",
          end: () => "+=" + (getScrollAmount() * -1),
          pin: true,
          animation: tween,
          scrub: 1,
          invalidateOnRefresh: true
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-[#050505] relative h-screen overflow-hidden border-t border-white/5 flex flex-col justify-center">
      {/* Background ambient gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(132,204,22,0.1),transparent_50%)] pointer-events-none" />

      {/* Header (fixed while scrolling) */}
      <div className="absolute top-16 left-0 w-full px-6 lg:px-12 z-20 pointer-events-none">
        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">
          AI & Data Ecosystem
        </h2>
        <div className="w-24 h-1 bg-[#84CC16] mt-6 opacity-80" />
      </div>

      <div className="h-full flex items-center pt-24 pb-12 overflow-hidden">
        <div ref={trackRef} className="flex gap-12 px-6 lg:px-12 w-max">
          {ECOSYSTEM_CARDS.map((card, index) => {
            const Icon = card.icon;
            return (
              <div 
                key={card.id}
                className="w-[85vw] md:w-[60vw] lg:w-[45vw] max-w-[800px] h-[60vh] min-h-[450px] bg-[#050505]/70 backdrop-blur-xl border border-white/10 rounded-2xl p-8 lg:p-12 flex flex-col justify-between hover:border-[#84CC16]/30 transition-colors duration-500 shadow-2xl relative overflow-hidden group"
              >
                {/* Subtle corner glow */}
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#84CC16]/10 rounded-full blur-[80px] group-hover:bg-[#84CC16]/20 transition-colors duration-500" />
                
                <div className="relative z-10 flex flex-col gap-6">
                  <div className="flex justify-between items-start">
                    <span className="text-[#84CC16] font-mono text-xs font-bold tracking-[2px] uppercase bg-[#84CC16]/10 px-3 py-1.5 rounded-full">
                      {card.tag}
                    </span>
                    <span className="text-white/20 font-bold text-4xl leading-none">
                      {card.id}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                      <Icon className="w-8 h-8 text-[#84CC16]" />
                    </div>
                    <h3 className="text-3xl font-bold text-white uppercase tracking-tight">
                      {card.title}
                    </h3>
                  </div>
                  
                  <p className="text-white/70 text-lg leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="relative z-10 mt-8 pt-8 border-t border-white/10">
                  <h4 className="text-white text-sm font-bold tracking-widest uppercase mb-4">Key Features</h4>
                  <ul className="space-y-3">
                    {card.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#84CC16] mt-2 shrink-0" />
                        <span className="text-white/60 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

