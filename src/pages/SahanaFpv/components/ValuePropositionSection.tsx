import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield } from 'lucide-react';
import post01Img from '../../../assets/Drone 2 - Post01.jpg';

gsap.registerPlugin(ScrollTrigger);

export function ValuePropositionSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.fade-up', 
        { opacity: 0, y: 50 },
        {
          opacity: 1, 
          y: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full py-32 px-6 bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 fade-up">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white uppercase">
            Secure Operations in <br/>Challenging Environments
          </h2>
          <p className="text-xl text-white/70 font-light mb-8 leading-relaxed">
            The Drone Buddy features a lightweight, durable frame that ensures resilience in challenging environments, positioned as an essential tool for reconnaissance, training, and field operations.
          </p>
          <div className="bg-[#3C5929]/10 border border-[#3C5929]/30 p-6 rounded-lg flex items-start gap-4">
            <Shield className="w-8 h-8 text-[#3C5929] shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-lg mb-2 text-white uppercase tracking-wide">Interference-Resistant "Proxy" Channel</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Employs a proprietary secure communications architecture for secure operations, alongside on-demand video across multiple GHz bands (1.2–3.5 GHz) to bypass active electronic jamming.
              </p>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative fade-up">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#3C5929]/20 to-transparent blur-3xl opacity-30" />
          <img 
            src={post01Img} 
            alt="Drone GPS and Antenna macro shot" 
            className="w-full rounded-2xl border border-white/10 relative z-10 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
