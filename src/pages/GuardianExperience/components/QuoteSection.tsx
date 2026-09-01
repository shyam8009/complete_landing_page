import React, { useRef, useLayoutEffect } from 'react';
import { ChevronRight, Quote } from 'lucide-react';
import { TechCTA } from '@/components/TechCTA';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const INTER = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export function QuoteSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Staggered fade up for the text and buttons
      gsap.fromTo(".quote-element", 
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );
      
      // Gentle pulse for the background glow
      gsap.to(".ambient-glow", {
        opacity: 0.8,
        scale: 1.1,
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="section-padding bg-[#020202] border-t border-white/5 relative overflow-hidden flex items-center justify-center min-h-[60vh]"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(132,204,22,0.08)_0%,transparent_60%)] ambient-glow opacity-40" />
      <div 
        className="absolute inset-0 opacity-[0.015]" 
        style={{ 
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '40px 40px' 
        }} 
      />
      
      <div className="max-w-5xl mx-auto px-4 lg:px-6 relative z-10 text-center flex flex-col items-center">
        
        {/* Stylized Quote Icon */}
        <div className="quote-element mb-8 relative">
          <div className="absolute inset-0 bg-[#84CC16] blur-xl opacity-20 rounded-full" />
          <Quote className="w-12 h-12 text-[#84CC16] relative z-10 opacity-80" />
        </div>

        {/* Cinematic Headline */}
        <h2 
          className="quote-element text-3xl md:text-5xl lg:text-[3.5rem] font-bold mb-12 leading-[1.15] tracking-tight uppercase" 
          style={{ fontFamily: INTER }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50">
            "Connecting the modern warfighter. Enhancing survival and operational superiority."
          </span>
        </h2>
        
        {/* CTAs */}
        <div className="quote-element flex flex-col items-center gap-6 mt-4">
          <TechCTA>
            CONTACT TACTICAL GEAR SALES
            <ChevronRight className="w-4 h-4 text-[#84CC16] group-hover:translate-x-1 transition-transform ml-2" />
          </TechCTA>
          
          <button className="group flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm uppercase tracking-[0.15em] font-semibold mt-4">
            <span className="border-b border-white/20 group-hover:border-[#84CC16] pb-1 transition-colors">
              Request a System Integration Briefing
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
