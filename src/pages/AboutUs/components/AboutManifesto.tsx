import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const INTER = "'Inter', sans-serif";

gsap.registerPlugin(ScrollTrigger);

export default function AboutManifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from('.reveal-text', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-slate-50 text-slate-900 py-32 md:py-48 z-10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* Massive Statement */}
        <div className="mb-32">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] reveal-text">
            We do not adapt<br />
            to the future.<br />
            <span className="text-[#84CC16]">We build it.</span>
          </h2>
        </div>

        {/* Intro & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-32 border-t border-black/10 pt-16">
          <div className="md:col-span-5 reveal-text">
            <h3 className="text-sm font-bold tracking-[0.2em] text-[#84CC16] uppercase mb-6" style={{ fontFamily: INTER }}>[ INTRODUCTION ]</h3>
            <p className="text-2xl font-medium leading-snug mb-8">
              Sahana Defence is a globally aligned Aerospace and Defence company delivering decisive capabilities for national security and critical infrastructure protection.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Supported by strong in-house R&D and deeply experienced leadership and engineering teams, the company designs and deploys customized, indigenous solutions across Electronic Warfare, Information Warfare, and Defence DeepTech.
            </p>
          </div>
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div className="reveal-text">
              <h3 className="text-sm font-bold tracking-[0.2em] text-[#84CC16] uppercase mb-6" style={{ fontFamily: INTER }}>[ VISION ]</h3>
              <p className="text-xl font-medium leading-snug text-slate-800">
                To be a globally trusted Aerospace and Defence company, shaping the future of modern warfare through innovation, indigenous engineering, and sustained high-growth excellence.
              </p>
            </div>
            <div className="reveal-text">
              <h3 className="text-sm font-bold tracking-[0.2em] text-[#84CC16] uppercase mb-6" style={{ fontFamily: INTER }}>[ MISSION ]</h3>
              <p className="text-xl font-medium leading-snug text-slate-800">
                To build an advanced, mission-ready Aerospace and Defence company delivering customized solutions that safeguard national security, empower defence forces, and protect critical infrastructure.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="reveal-text">
          <h3 className="text-sm font-bold tracking-[0.2em] text-[#84CC16] uppercase mb-12 text-center" style={{ fontFamily: INTER }}>[ CORE VALUES ]</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-black/10">
            {[
              { title: "INTEGRITY", desc: "Uncompromising ethics in operations." },
              { title: "PRECISION", desc: "Flawless engineering and tactical execution." },
              { title: "INNOVATION", desc: "Pioneering indigenous deeptech solutions." },
              { title: "NATIONAL SECURITY", desc: "Sovereign capability as our ultimate goal." }
            ].map((value, i) => (
              <div key={i} className="p-8 border-[0.5px] border-black/10 hover:bg-slate-100 transition-colors group">
                <div className="text-4xl font-light text-slate-300 mb-6 group-hover:text-[#84CC16] transition-colors">0{i+1}</div>
                <h4 className="text-xl font-black uppercase tracking-wider mb-3">{value.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed" style={{ fontFamily: INTER }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
