import React from 'react';
import { motion } from 'framer-motion';

const pipelineSteps = [
  {
    step: "01",
    title: "ALLOY SELECTION",
    description: "Sourcing certified aerospace-grade titanium, Inconel, and aluminum-lithium billets with complete mill test traceability."
  },
  {
    step: "02",
    title: "MULTI-AXIS CNC",
    description: "Advanced 5-axis simultaneous milling and turning to achieve complex aerodynamic geometries and tight tolerances."
  },
  {
    step: "03",
    title: "NDT VALIDATION",
    description: "Rigorous non-destructive testing (NDT), including ultrasonic and X-ray inspection to guarantee structural flawlessness."
  },
  {
    step: "04",
    title: "CERTIFICATION",
    description: "Final dimensional laser scanning, surface treatment passivation, and AS9100 quality release documentation."
  }
];

export function AerospaceComponentsPipeline() {
  return (
    <section id="pipeline-section" className="w-full bg-[#050505] py-32 px-6 md:px-12 lg:px-24 border-t border-white/10 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
            Manufacturing Process Pipeline
          </h2>
          <div className="w-24 h-1 bg-[#84CC16] mx-auto opacity-80" />
        </div>

        {/* Pipeline Grid */}
        <div className="relative">
          {/* Glowing Neon Progress Line */}
          <div className="hidden lg:block absolute top-[40px] left-0 w-full h-[2px] bg-white/10">
            <motion.div 
              className="h-full bg-[#84CC16] shadow-[0_0_15px_rgba(132,204,22,0.8)]"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
            {pipelineSteps.map((item, index) => (
              <motion.div 
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                {/* Node Dot */}
                <div className="w-20 h-20 rounded-full bg-black border border-white/20 flex items-center justify-center mb-8 relative z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)] lg:mx-0 mx-auto group">
                  <div className="absolute inset-0 rounded-full border border-[#84CC16]/50 scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <span className="text-[#84CC16] font-mono text-xl font-bold">{item.step}</span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed font-light">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
