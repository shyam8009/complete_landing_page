import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from '@/imports/aerospace-components/manned_aircraft_systems.jpg';
import img2 from '@/imports/aerospace-components/unmanned_aerial_vehicles.jpg';
import img3 from '@/imports/aerospace-components/space_launch_vehicles.jpg';

gsap.registerPlugin(ScrollTrigger);

const APPLICATIONS = [
  {
    id: "01",
    title: "Manned Aircraft Systems",
    image: img1,
  },
  {
    id: "02",
    title: "Unmanned Aerial Vehicles",
    image: img2,
  },
  {
    id: "03",
    title: "Space & Launch Vehicles",
    image: img3,
  }
];

export function AerospaceApplications() {
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
    <section ref={sectionRef} className="section-padding bg-black relative border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10">
        
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-[#84CC16] text-sm font-bold tracking-[3px] uppercase">
              // DEPLOYMENT ZONES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
            AEROSPACE APPLICATIONS
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
                alt={app.title} 
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
                  <h3 className="text-2xl font-bold text-white uppercase leading-tight">
                    {app.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
