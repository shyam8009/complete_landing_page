import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import img1 from '@/imports/command_control_2.jpeg';
import img2 from '@/imports/rf_radar_hud.png';
import img3 from '@/imports/proxy/magnific_photorealistic-outdoor-fi_Piskn0l42C 1.jpeg';

gsap.registerPlugin(ScrollTrigger);

const APPS = [
  {
    label: "Tactical Operations Centers (TOC)",
    scenario: "Enabling commanders to use natural language voice queries to instantly pull up drone ISR feeds, troop locations, and logistics databases without navigating complex graphical interfaces.",
    image: img1
  },
  {
    label: "SIGINT & Electronic Warfare",
    scenario: "Automating the transcription and translation of intercepted hostile radio communications in real-time, instantly converting raw audio into searchable intelligence text.",
    image: img2
  },
  {
    label: "Forward Operating Bases (FOB)",
    scenario: "Allowing forward-deployed units to log situation reports (SITREPs) and request medical or supply drops completely hands-free while maintaining weapon readiness.",
    image: img3
  }
];

export function ChatbotsVoiceApplications() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.app-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10">
        
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-[#84CC16] text-sm font-bold tracking-[3px] uppercase">
              // DEPLOYMENT ZONES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight">
            TACTICAL APPLICATIONS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {APPS.map((app, index) => (
            <div 
              key={index}
              className="app-card group relative aspect-[4/5] rounded-xl overflow-hidden border border-white/10"
            >
              <img 
                src={app.image} 
                alt={app.label} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
                  <h3 className="text-2xl font-bold text-white uppercase leading-tight mb-4">
                    {app.label}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto overflow-hidden">
                    {app.scenario}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

