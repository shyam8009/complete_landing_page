import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  {
    title: "AS9100D Certified",
    description: "International aviation quality management standard compliance."
  },
  {
    title: "100% Lot Traceability",
    description: "Complete digital genealogy records for every raw material batch."
  },
  {
    title: "ITAR Compliant",
    description: "Secure handling of classified aerospace blueprints and defense specs."
  }
];

export function AS9100QualityStrip() {
  return (
    <section className="w-full bg-[#84CC16] py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
        {metrics.map((metric, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex-1 text-center md:text-left flex flex-col items-center md:items-start"
          >
            <h4 className="text-[#050505] font-black uppercase tracking-widest text-lg mb-2">
              {metric.title}
            </h4>
            <p className="text-[#050505]/80 text-sm font-medium max-w-xs text-center md:text-left">
              {metric.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
