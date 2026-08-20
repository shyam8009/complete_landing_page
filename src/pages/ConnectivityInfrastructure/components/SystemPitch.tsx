import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Network, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function SystemPitch() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.pitch-element',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
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
    <section ref={sectionRef} className="py-24 bg-[#020202] text-white border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(132,204,22,0.05),transparent_50%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="pitch-element inline-flex items-center gap-2 mb-6">
            <span className="text-[#84CC16] text-sm font-bold tracking-[3px] uppercase">
              TACTICAL FOUNDATION
            </span>
          </div>
          
          <h2 className="pitch-element text-4xl lg:text-5xl font-bold mb-6 uppercase tracking-tight leading-tight">
            The Backbone of Modern Defence Communication.
          </h2>
          
          <p className="pitch-element text-white/60 text-lg leading-relaxed">
            In mission-critical environments, communication is only as strong as the network that carries it. Sahana's Connectivity & Infrastructure practice covers IoT integration, cloud architecture, and live video and streaming delivery, giving defence and enterprise teams a dependable foundation to run on. Architected and supported by our in-house engineering team, our solutions use cloud-native and serverless approaches designed to grow seamlessly with operational demand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="pitch-element bg-[#050505] border border-white/10 p-8 rounded-xl hover:border-white/20 transition-colors">
            <Network className="w-8 h-8 text-[#84CC16] mb-6" />
            <h3 className="text-xl font-bold mb-3 uppercase tracking-wide">End-to-End Infrastructure</h3>
            <p className="text-white/60 leading-relaxed text-sm">
              Connected devices, cloud platforms, and streaming delivery managed under one unified practice.
            </p>
          </div>

          <div className="pitch-element bg-[#050505] border border-white/10 p-8 rounded-xl hover:border-white/20 transition-colors">
            <ShieldCheck className="w-8 h-8 text-[#84CC16] mb-6" />
            <h3 className="text-xl font-bold mb-3 uppercase tracking-wide">Security & Compliance First</h3>
            <p className="text-white/60 leading-relaxed text-sm">
              Cloud security and compliance are built directly into the architecture from the start, never added as an afterthought.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
