import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import img1 from '@/imports/command_control_2.jpeg';
import img2 from '@/imports/rf_radar_hud.png';
import img3 from '@/imports/proxy/magnific_photorealistic-outdoor-fi_Piskn0l42C 1.jpeg';

gsap.registerPlugin(ScrollTrigger);

const APPLICATIONS = [
  {
    id: "01",
    label: "Defence & Government",
    scenario: "Transforming the operational landscape by automating complex defence workflows, and modernizing government infrastructure through real-time monitoring and data-driven decision-making.",
    image: img1
  },
  {
    id: "02",
    label: "Port, Marine & Manufacturing",
    scenario: "Revolutionizing port and marine infrastructure through connected sensors, and leading the manufacturing industry revolution where sensors transfer every byte of information.",
    image: img2
  },
  {
    id: "03",
    label: "Wearables & Healthcare",
    scenario: "Delivering custom-made and secure IoT wearable and Telehealth solutions, as the health care industry utilizes great services from the IOT trade.",
    image: img3
  }
];

export function IoTApplications() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
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
    <section ref={sectionRef} className="section-padding bg-black relative">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
            TACTICAL & COMMERCIAL<br />APPLICATIONS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {APPLICATIONS.map((app, index) => (
            <div 
              key={app.id} 
              ref={el => cardsRef.current[index] = el}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10"
            >
              {/* Background Image */}
              <img 
                src={app.image} 
                alt={app.label} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />
              
              {/* Neon Green Tint Hover Overlay */}
              <div className="absolute inset-0 bg-[#84CC16]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
                  <span className="text-[#84CC16] font-mono text-sm tracking-widest font-bold mb-2 block">
                    {app.id}
                  </span>
                  <h3 className="text-2xl font-bold text-white uppercase leading-tight mb-3">
                    {app.label}
                  </h3>
                  <p className="text-white/70 leading-relaxed text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
