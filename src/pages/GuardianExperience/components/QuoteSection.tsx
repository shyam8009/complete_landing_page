import React, { useRef, useLayoutEffect } from 'react';
import { ArrowRight, Shield, Globe, Target } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Attempting to reuse an existing tactical/defense asset
import bgAircraft from '@/imports/sahana_fpv_interceptor.jpg';

gsap.registerPlugin(ScrollTrigger);

export function QuoteSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Background Parallax
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          y: '5%',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      }

      // Staggered reveal for main content
      gsap.fromTo('.mission-reveal', 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.15, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      );

      // Trust strip reveal (from bottom)
      gsap.fromTo('.trust-strip',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );
      
      // HUD elements fade in
      gsap.fromTo('.hud-element',
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.5,
          delay: 0.8,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          }
        }
      );
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  // Technical UI colors
  const ACCENT = '#9CFF00'; // Neon tactical lime green

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full min-h-[750px] lg:min-h-[900px] bg-[#030504] overflow-hidden flex flex-col justify-between pt-24 lg:pt-32 pb-8"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      {/* --- BACKGROUND SYSTEM --- */}
      
      {/* 1. Subtle Radial Glow */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 40%, rgba(156,255,0,0.03) 0%, rgba(3,5,4,1) 60%)` }}
      />

      {/* 2. Technical Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.025] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          backgroundPosition: 'center center'
        }} 
      />

      {/* 3. Fighter Aircraft / Right Background */}
      <div 
        ref={bgRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-20 lg:opacity-[0.25]"
      >
        {/* We push it to the right using backgroundPosition */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${bgAircraft})`,
            backgroundSize: 'cover',
            backgroundPosition: 'calc(100% + 150px) center', // Bias toward right
            backgroundRepeat: 'no-repeat',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 50%, black 100%), linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)',
            WebkitMaskComposite: 'source-in',
            maskComposite: 'intersect'
          }}
        />
      </div>

      {/* 4. Left Topographic / Map overlay */}
      <div className="absolute top-0 left-0 w-[50%] h-full z-0 opacity-[0.02] pointer-events-none overflow-hidden">
        {/* CSS generated radar/topo circles */}
        <div className="absolute top-[30%] left-[-10%] w-[600px] h-[600px] border border-white rounded-full" />
        <div className="absolute top-[35%] left-[-5%] w-[450px] h-[450px] border border-white rounded-full" />
        <div className="absolute top-[40%] left-[0%] w-[300px] h-[300px] border border-dashed border-white rounded-full" />
        <div className="absolute top-1/2 left-[15%] w-full h-px bg-white/50" />
        <div className="absolute top-0 left-[15%] w-px h-full bg-white/50" />
      </div>
      
      {/* Atmospheric Haze / Noise */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-noise" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#030504] via-transparent to-[#030504] pointer-events-none" />

      {/* HUD Details (Corners & Crosshairs) */}
      <div className="hud-element absolute top-12 left-12 w-8 h-8 border-t-2 border-l-2 border-[#9CFF00]/40 z-0" />
      <div className="hud-element absolute top-12 right-12 w-8 h-8 border-t-2 border-r-2 border-[#9CFF00]/40 z-0" />
      <div className="hud-element absolute bottom-12 left-12 w-8 h-8 border-b-2 border-l-2 border-[#9CFF00]/40 z-0" />
      <div className="hud-element absolute bottom-12 right-12 w-8 h-8 border-b-2 border-r-2 border-[#9CFF00]/40 z-0" />
      
      <div className="hud-element absolute top-[25%] left-[20%] text-[#9CFF00]/20 font-mono text-[10px] tracking-widest">+</div>
      <div className="hud-element absolute bottom-[40%] right-[25%] text-[#9CFF00]/20 font-mono text-[10px] tracking-widest">+</div>
      <div className="hud-element absolute top-1/2 right-[10%] w-12 h-px bg-[#9CFF00]/20" />


      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-4 md:px-8 flex flex-col items-center text-center">
        
        {/* Quote Mark */}
        <div className="mission-reveal relative mb-[70px] lg:mb-[90px] flex justify-center">
          <div 
            className="absolute inset-0 blur-md opacity-30 rounded-full" 
            style={{ backgroundColor: ACCENT }}
          />
          <svg width="48" height="42" viewBox="0 0 48 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10" style={{ color: ACCENT }}>
            <path d="M19.5 21C19.5 28.5 13.5 34.5 6 34.5V40.5C16.815 40.5 25.5 31.815 25.5 21V1.5H0V21H19.5ZM42 21C42 28.5 36 34.5 28.5 34.5V40.5C39.315 40.5 48 31.815 48 21V1.5H22.5V21H42Z" fill="currentColor"/>
          </svg>
        </div>

        {/* Main Headline */}
        <h2 className="mission-reveal text-[34px] sm:text-[44px] md:text-[58px] lg:text-[72px] font-extrabold uppercase text-[#F5F5F5] leading-[1.0] lg:leading-[0.98] tracking-[-0.02em] mb-12">
          CONNECTING THE MODERN <br className="hidden md:block" />
          <span className="text-[#9CFF00]" style={{ textShadow: '0 0 15px rgba(156,255,0,0.3)' }}>WARFIGHTER.</span> ENHANCING <br className="hidden md:block" />
          SURVIVAL AND OPERATIONAL <br className="hidden md:block" />
          <span className="text-[#9CFF00]" style={{ textShadow: '0 0 15px rgba(156,255,0,0.3)' }}>SUPERIORITY.</span>
        </h2>

        {/* Decorative Headline Element */}
        <div className="mission-reveal flex flex-col items-center justify-center mb-10 w-full">
          <div className="flex items-center w-full max-w-[120px] justify-center opacity-80">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent to-[#9CFF00]" />
            <div 
              className="w-2 h-2 mx-2 rotate-45 border border-[#9CFF00]" 
              style={{ boxShadow: '0 0 8px rgba(156,255,0,0.4)' }}
            />
            <div className="h-[1px] w-full bg-gradient-to-l from-transparent to-[#9CFF00]" />
          </div>
        </div>

        {/* Supporting Message */}
        <p className="mission-reveal text-[#858585] font-medium text-xs md:text-sm lg:text-base uppercase tracking-[0.15em] mb-12 lg:mb-16 max-w-[90vw]">
          LET'S BUILD A SMARTER, SAFER AND MORE RESILIENT TOMORROW — TOGETHER.
        </p>

        {/* CTAs */}
        <div className="mission-reveal flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-[800px]">
          
          {/* Primary CTA */}
          <button 
            className="group relative flex items-center justify-center w-full md:w-[410px] h-[64px] lg:h-[72px] bg-[#9CFF00] text-[#030504] font-bold uppercase tracking-wide transition-all duration-300 overflow-hidden"
            style={{ 
              clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%)',
              boxShadow: '0 0 20px rgba(156,255,0,0.1)'
            }}
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10 flex items-center text-sm lg:text-[15px]">
              CONTACT TACTICAL GEAR SALES
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" strokeWidth={2.5} />
            </span>
          </button>

          {/* Secondary CTA */}
          <button 
            className="group relative flex items-center justify-center w-full md:w-[320px] h-[64px] lg:h-[72px] bg-transparent border border-white/20 text-[#F5F5F5] font-semibold uppercase tracking-wide transition-all duration-300 hover:border-[#9CFF00] hover:text-white"
            style={{ 
              clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%)'
            }}
          >
            <div className="absolute inset-0 bg-[#9CFF00]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10 flex items-center text-xs lg:text-[13px] group-hover:drop-shadow-[0_0_8px_rgba(156,255,0,0.4)] transition-all">
              REQUEST A SYSTEM INTEGRATION BRIEFING
              <ArrowRight className="w-4 h-4 ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 group-hover:text-[#9CFF00] transition-all duration-300" strokeWidth={2} />
            </span>
          </button>
        </div>
      </div>

      {/* --- TRUST / CREDIBILITY STRIP --- */}
      <div className="trust-strip relative z-20 w-full mt-24 px-4 pb-4">
        <div className="max-w-[1400px] mx-auto bg-black/40 backdrop-blur-md border border-white/10 p-5 md:p-0">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            
            {/* Item 1 */}
            <div className="flex items-center gap-4 py-4 md:py-6 px-4 lg:px-10">
              <Shield className="w-7 h-7 lg:w-8 lg:h-8 shrink-0" style={{ color: ACCENT, strokeWidth: 1.5 }} />
              <div className="text-[#F5F5F5] font-bold text-xs lg:text-sm tracking-wider uppercase leading-snug">
                TRUSTED BY <br className="hidden md:block"/>DEFENCE FORCES
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-4 py-4 md:py-6 px-4 lg:px-10">
              <Globe className="w-7 h-7 lg:w-8 lg:h-8 shrink-0" style={{ color: ACCENT, strokeWidth: 1.5 }} />
              <div className="text-[#F5F5F5] font-bold text-xs lg:text-sm tracking-wider uppercase leading-snug">
                ENGINEERED FOR <br className="hidden md:block"/>REAL-WORLD MISSIONS
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-4 py-4 md:py-6 px-4 lg:px-10">
              <Target className="w-7 h-7 lg:w-8 lg:h-8 shrink-0" style={{ color: ACCENT, strokeWidth: 1.5 }} />
              <div className="text-[#F5F5F5] font-bold text-xs lg:text-sm tracking-wider uppercase leading-snug">
                COMMITTED TO <br className="hidden md:block"/>A SAFER WORLD
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
