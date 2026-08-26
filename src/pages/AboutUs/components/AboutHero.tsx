import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const INTER = "'Inter', sans-serif";

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !textRef.current) return;

    gsap.fromTo(textRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
    );

    // Parallax effect
    gsap.to(heroRef.current, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#050505] flex items-center justify-center z-0">
      {/* Background Media */}
      <div 
        ref={heroRef}
        className="absolute inset-0 z-0 opacity-80 bg-cover bg-center"
        style={{ backgroundImage: 'url("/assets/about_hero_banner.jpeg")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#050505]" />
      </div>

      <div ref={textRef} className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mt-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-[1px] bg-[#84CC16]" />
          <span className="text-[#84CC16] text-sm md:text-base tracking-[0.2em] font-medium" style={{ fontFamily: INTER }}>
            [ CLASSIFICATION: UNRESTRICTED ]
          </span>
          <div className="w-12 h-[1px] bg-[#84CC16]" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.9]">
          SAHANA DEFENCE
        </h1>
        
        <p className="text-xl md:text-3xl text-white/80 max-w-3xl font-light tracking-wide leading-relaxed">
          Delivering decisive capabilities for national security and critical infrastructure protection.
        </p>
      </div>
    </section>
  );
}



