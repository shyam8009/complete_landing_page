import React from 'react';
import { motion } from 'framer-motion';
import { Award, Layers, Shield, Cpu } from 'lucide-react';

const INTER = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

const METRICS = [
  {
    icon: Shield,
    value: '28+',
    label: 'Sovereign Alliances',
    description: 'Empanelled across Armed Forces, DPSUs & Research Centers',
  },
  {
    icon: Award,
    value: '100%',
    label: 'Indigenous IP',
    description: 'Proprietary Make in India designs & sovereign architecture',
  },
  {
    icon: Layers,
    value: '04',
    label: 'Armed Force Branches',
    description: 'Army, Navy, Air Force & Coast Guard operational deployments',
  },
  {
    icon: Cpu,
    value: 'Tier-1',
    label: 'MoD & PSU Grade',
    description: 'Certified security clearance & defense grade quality compliance',
  },
];

export function ClientMetrics() {
  return (
    <section className="relative w-full py-12 bg-neutral-950 border-b border-white/10">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {METRICS.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="relative group p-6 rounded-lg bg-black/70 border border-white/10 hover:border-[#84CC16]/60 transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                {/* Corner indicator */}
                <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#84CC16] group-hover:shadow-[0_0_8px_#84CC16] transition-all" />
                
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-md bg-[#84CC16]/10 border border-[#84CC16]/30 flex items-center justify-center text-[#84CC16] group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight group-hover:text-[#84CC16] transition-colors" style={{ fontFamily: INTER }}>
                    {metric.value}
                  </span>
                </div>
                <div>
                  <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-1" style={{ fontFamily: INTER }}>
                    {metric.label}
                  </h3>
                  <p className="text-white/50 text-xs leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
