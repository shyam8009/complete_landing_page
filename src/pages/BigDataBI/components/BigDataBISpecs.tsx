import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Network, Zap, LineChart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SPECS = [
  {
    badge: "DATA INTEGRATION",
    title: "ENGINEERING SOLUTIONS",
    description: "Preprocesses real-time stream information for analysis and image. Seamlessly migrates data between databases while sharing processing logic across internet apps, batch jobs, and APIs.",
    icon: Network,
    footerLeft: { label: "PIPELINES", value: "Complex Advancement" },
    footerRight: { label: "INTAKE", value: "Real-Time" }
  },
  {
    badge: "INTELLIGENCE PROCESSING",
    title: "REAL-TIME ANALYTICS",
    description: "Builds and extends analytics to create efficiency in work by leveraging the most recent knowledge technologies, including Spark, Hadoop, and MongoDB.",
    icon: Zap,
    footerLeft: { label: "FRAMEWORKS", value: "Open-Source" },
    footerRight: { label: "SPEED", value: "Times Quicker" }
  },
  {
    badge: "DASHBOARDING",
    title: "BUSINESS INTELLIGENCE",
    description: "Facilitates enterprise solutions by providing highly customized BI solutions engineered using industry-leading platforms like PowerBI, Tableau, and Quick Sight.",
    icon: LineChart,
    footerLeft: { label: "VISUALIZATION", value: "Customized" },
    footerRight: { label: "ACCESS", value: "Instant" }
  }
];

export function BigDataBISpecs() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.spec-card',
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
    <section ref={sectionRef} className="py-24 bg-white text-black relative">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10">
        
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4 text-black">
            CORE TECHNICAL CAPABILITIES
          </h2>
          <div className="w-24 h-1 bg-[#84CC16] mx-auto opacity-80" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SPECS.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <div 
                key={index}
                className="spec-card flex flex-col h-full bg-neutral-50 border border-neutral-200 rounded-xl overflow-hidden hover:shadow-2xl hover:border-black transition-all duration-300 group"
              >
                <div className="p-8 flex-grow">
                  <div className="flex items-center justify-between mb-8">
                    <span className="inline-block px-3 py-1 bg-black text-white text-[10px] font-bold tracking-widest uppercase rounded">
                      {spec.badge}
                    </span>
                    <Icon className="w-6 h-6 text-neutral-400 group-hover:text-black transition-colors" />
                  </div>
                  
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4 leading-tight">
                    {spec.title}
                  </h3>
                  
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {spec.description}
                  </p>
                </div>
                
                <div className="bg-neutral-100 p-6 flex justify-between items-center border-t border-neutral-200 mt-auto">
                  <div>
                    <div className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest mb-1">{spec.footerLeft.label}</div>
                    <div className="text-sm font-bold text-black uppercase">{spec.footerLeft.value}</div>
                  </div>
                  <div className="w-px h-8 bg-neutral-300" />
                  <div className="text-right">
                    <div className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest mb-1">{spec.footerRight.label}</div>
                    <div className="text-sm font-bold text-black uppercase">{spec.footerRight.value}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
