import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  {
    title: "AS9100D Certified",
    description: "Aerospace Quality Management System certification guaranteeing strict adherence to global aviation manufacturing standards."
  },
  {
    title: "Uncompromising Inspection",
    description: "In-house ISO 9001:2015 certified quality department utilizing CMM, profile projectors, and non-contact optical inspection."
  },
  {
    title: "Trusted Defence Partner",
    description: "A recognized premium supplier and continuous partner to India's leading aerospace, space, and defense organizations."
  }
];

export function AS9100QualityStrip() {
  return (
    <section className="w-full bg-[#84CC16] py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4">
        {metrics.map((metric, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex-1 text-center md:text-left flex flex-col items-center md:items-start"
          >
            <h4 className="text-[#050505] font-black uppercase tracking-widest text-lg mb-3">
              {metric.title}
            </h4>
            <p className="text-[#050505]/80 text-sm font-medium max-w-sm text-center md:text-left">
              {metric.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
