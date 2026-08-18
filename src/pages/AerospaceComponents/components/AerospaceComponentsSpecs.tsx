import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, Anchor } from 'lucide-react';

const specCards = [
  {
    id: "structural-spars",
    icon: <Layers className="w-8 h-8 text-[#84CC16]" />,
    title: "Structural Airframe Spars",
    specs: "High-strength aluminum and titanium rib structures engineered to handle wing load distributions and fuselage stress points without micro-fracturing."
  },
  {
    id: "turbine-engine",
    icon: <Zap className="w-8 h-8 text-[#84CC16]" />,
    title: "Turbine & Engine Subassemblies",
    specs: "Heat-resistant superalloy components built to operate reliably inside high-bypass turbofan engines under extreme combustion temperatures."
  },
  {
    id: "landing-gear",
    icon: <Anchor className="w-8 h-8 text-[#84CC16]" />,
    title: "Actuation & Landing Gear Hardware",
    specs: "Precision hydraulic and mechanical housings designed for high-impact landing compression and rapid deployment cycles."
  }
];

export function AerospaceComponentsSpecs() {
  return (
    <section className="w-full bg-[#050505] py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
            Technical Specifications <br /> & Applications
          </h2>
          <div className="w-24 h-1 bg-[#84CC16] mx-auto opacity-80" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#0a0a0a] border border-white/10 rounded-lg p-8 flex flex-col hover:border-[#84CC16]/50 transition-colors duration-300 relative group overflow-hidden"
            >
              {/* Hover effect gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#84CC16]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="mb-6 p-4 bg-white/5 rounded-md inline-block w-fit border border-white/5">
                {card.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide leading-snug">
                {card.title}
              </h3>
              
              <p className="text-white/60 text-sm leading-relaxed font-light mt-auto">
                {card.specs}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
