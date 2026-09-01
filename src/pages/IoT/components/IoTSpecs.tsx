import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  {
    badge: "PROCESS MANAGEMENT",
    title: "AUTOMATED SYSTEMS",
    description: "We automatize devices and information technologies for handling different processes and machineries in an industry.",
    footerLeftLabel: "HARDWARE",
    footerLeftValue: "Computers & Robots",
    footerRightLabel: "FOCUS",
    footerRightValue: "Industry Processes"
  },
  {
    badge: "END-TO-END",
    title: "CUSTOMIZED HARDWARE",
    description: "Get custom-made and secure IoT solutions specifically engineered by focusing on your business domain.",
    footerLeftLabel: "INTERACTION",
    footerLeftValue: "Device-to-Device",
    footerRightLabel: "EXECUTION",
    footerRightValue: "Total Automation"
  },
  {
    badge: "ANALYTICS",
    title: "DATA SCIENCE PLATFORMS",
    description: "Our data science team helps you find new opportunities, while our knowledge image services assist you in taking the right choices through data visualization.",
    footerLeftLabel: "INSIGHT",
    footerLeftValue: "Bug Fixing",
    footerRightLabel: "PLATFORM",
    footerRightValue: "Customized Management"
  }
];

export function IoTSpecs() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-white text-black relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10">
        
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            CORE TECHNICAL CAPABILITIES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CARDS.map((card, i) => (
            <div 
              key={i} 
              ref={el => cardsRef.current[i] = el}
              className="flex flex-col h-full bg-gray-50 border border-gray-200 p-8 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-black text-white font-mono text-xs tracking-wider uppercase rounded-full">
                  {card.badge}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold uppercase tracking-wide mb-4">
                {card.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-12 flex-grow">
                {card.description}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                <div>
                  <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mb-1">{card.footerLeftLabel}</div>
                  <div className="font-semibold text-sm">{card.footerLeftValue}</div>
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mb-1">{card.footerRightLabel}</div>
                  <div className="font-semibold text-sm">{card.footerRightValue}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
