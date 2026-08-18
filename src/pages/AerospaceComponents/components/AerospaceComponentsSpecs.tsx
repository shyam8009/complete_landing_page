import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, Anchor, Settings, Disc, Frame } from 'lucide-react';

const specCards = [
  {
    id: "engine-turbomachinery",
    icon: <Settings className="w-8 h-8 text-[#84CC16]" />,
    title: "Engine & Turbomachinery Hardware",
    specs: [
      "Manufactured to severe defense-grade tolerances using titanium, high-alloy steel, and nickel alloys.",
      "Proven track record delivering over 40,000 critical engine components for Hindustan Aeronautics Limited (HAL).",
      "Directly supporting high-performance aviation platforms, including the Sukhoi (Su-30MKI) aircraft programme."
    ]
  },
  {
    id: "structural-airframe",
    icon: <Frame className="w-8 h-8 text-[#84CC16]" />,
    title: "Structural Airframe Components",
    specs: [
      "Precision-machined structural parts engineered to serve as load-bearing components for airframes and fuselages.",
      "Fabricated to meet the most stringent weight-to-strength requirements for modern aerospace flight dynamics."
    ]
  },
  {
    id: "mounting-connection",
    icon: <Disc className="w-8 h-8 text-[#84CC16]" />,
    title: "Mounting & Connection Hardware",
    specs: [
      "High-accuracy brackets and shackles designed for load-bearing defense and aerospace systems.",
      "Exacting tolerances on flanges and clamps to ensure secure sealing and connection in critical high-stress assemblies."
    ]
  }
];

export function AerospaceComponentsSpecs() {
  return (
    <section className="w-full bg-[#050505] py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
            System Architecture
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
              
              <ul className="text-white/60 text-sm leading-relaxed font-light mt-auto space-y-3">
                {card.specs.map((spec, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[#84CC16] mr-2 block mt-1">•</span>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
