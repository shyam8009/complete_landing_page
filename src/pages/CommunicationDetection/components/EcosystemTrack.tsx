import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';

import bgGrid from '@/imports/spear_cad_blueprint.png'; 
import guardianImg from '@/imports/guardian/magnific_professional-studio-produ_brfvUMF5Y2.png';
import sensorDomeImg from "@/imports/magnific_extreme-closeup-macro-pro_WMNENw4cXe.png";

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  {
    id: 'lorros',
    tag: 'Border Protection . Electro-Optical Surveillance',
    title: 'Long Range Surveillance System (LORROS)',
    desc: 'A modular long-range reconnaissance and observation system designed for border protection, coastal defense, and critical site security. Its highly configurable architecture allows seamless integration with multiple sensor types, communication networks, and command-and-control (C2) systems.',
    img: sensorDomeImg
  },
  {
    id: 'guardian',
    tag: 'Wearable Intelligence . Multi-Threat Telemetry',
    title: 'The Guardian: Smart Soldier Band',
    desc: 'A comprehensive wearable detection system offering advanced threat telemetry directly to the tactical operator. Engineered for extreme situational awareness, it provides real-time alerts for incoming fire, drone proximity, and invisible spectrum threats via a ruggedized LCD wristlet.',
    img: guardianImg
  }
];

export function EcosystemTrack() {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!trackRef.current || CARDS.length === 0) return;
    const getScrollDist = () => trackRef.current ? trackRef.current.scrollWidth - window.innerWidth : 0;

    ScrollTrigger.create({
      trigger: scrollContainer.current,
      start: "top top",
      end: () => `+=${getScrollDist()}`,
      pin: true,
      animation: gsap.to(trackRef.current, {
        x: () => -getScrollDist(),
        ease: "none"
      }),
      scrub: 1,
      invalidateOnRefresh: true,
    });
  }, { scope: scrollContainer });

  return (
    <div className="font-['Inter',sans-serif]">
      <section ref={scrollContainer} id="ecosystem-track" className="relative w-full h-screen overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src={bgGrid} 
            alt="Intelligence Network Schematic" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,5,5,0.2)_0%,rgba(5,5,5,0.95)_100%)]" />
        </div>

        <div className="absolute top-8 left-0 right-0 z-20 flex justify-center pointer-events-none">
          <span className="text-[#84CC16] font-mono font-bold tracking-[0.2em] text-sm md:text-base uppercase">
            COMMUNICATION & SURVEILLANCE ECOSYSTEM
          </span>
        </div>

        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center pointer-events-none">
          <span className="text-white/40 font-mono tracking-widest text-xs uppercase animate-pulse">
            SCROLL TO EXPLORE
          </span>
        </div>

        <div className="relative z-10 flex h-full items-center overflow-visible">
          <div ref={trackRef} className="flex flex-nowrap h-full items-center px-[5vw] md:px-[10vw] gap-12 md:gap-24">
            
            {CARDS.map((item, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 flex items-center justify-center"
              >
                
                <div 
                  className="w-[90vw] max-w-[1100px] rounded-2xl mx-auto flex flex-col md:flex-row items-stretch relative"
                  style={{ 
                    backgroundColor: 'rgba(8, 8, 8, 0.75)', 
                    border: '1px solid rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8)',
                  }}
                >
                  
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />

                  <div className="w-full md:w-1/2 min-h-[250px] md:min-h-full border-b md:border-b-0 md:border-r flex rounded-t-2xl md:rounded-t-none md:rounded-l-2xl overflow-hidden" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                    <div className="relative w-full h-full flex-1 bg-[#000]">
                      <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                      <div style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.9) 0%, transparent 60%)' }} className="absolute inset-0" />
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 p-6 lg:p-10 flex flex-col justify-between bg-neutral-100 rounded-b-2xl md:rounded-b-none md:rounded-r-2xl">
                    <div className="mb-6">
                      <span className="inline-block px-3 py-1 rounded-md text-[9px] lg:text-[10px] font-mono tracking-wider uppercase mb-4"
                        style={{ color: '#050505', backgroundColor: '#84CC16', border: '1px solid #84CC16' }}>
                        {item.tag}
                      </span>
                      
                      <h2 className="text-slate-900 text-xl lg:text-3xl font-bold uppercase mb-4 leading-tight line-clamp-2">
                        {item.title}
                      </h2>
                      
                      <p className="text-sm lg:text-base text-slate-600 mb-3 ">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-5 mt-auto border-t border-slate-200">
                      <button className="w-full md:w-auto py-3 px-8 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 bg-slate-900 hover:bg-[#84CC16] hover:text-slate-900 text-white">
                        EXPLORE ASSET <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
