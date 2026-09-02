import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ALL_LOGOS, LOGO_CATEGORIES } from '../data/clienteleLogosData';

const INTER = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export function ClientDirectory() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredLogos = useMemo(() => {
    return ALL_LOGOS.filter((logo) => {
      return activeCategory === 'all' || logo.category === activeCategory;
    });
  }, [activeCategory]);

  return (
    <section className="relative w-full section-padding bg-[#F3F4F6] text-slate-900 border-b border-slate-200 overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-6"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#5a8b10] animate-pulse" />
              <span className="text-[#5a8b10] text-xs font-mono tracking-[0.2em] uppercase font-bold">
                OFFICIAL SOVEREIGN &amp; DEFENCE ECOSYSTEM
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase" style={{ fontFamily: INTER }}>
              SOVEREIGN ALLIANCES &amp; DEFENCE DIRECTORY
            </h2>
            <p className="mt-2 text-slate-600 text-xs sm:text-sm md:text-base font-medium max-w-2xl">
              Verified emblem and logo insignia of our sovereign defense, space, PSU, and aerospace industry partners.
            </p>
          </div>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {LOGO_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-slate-950 text-white font-bold shadow-md'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200 shadow-sm'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  isActive ? 'bg-[#84CC16] text-black' : 'bg-slate-100 text-slate-500'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Results Count Bar */}
        <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-6 pb-3 border-b border-slate-300">
          <span className="font-semibold">
            DISPLAYING {filteredLogos.length} LOGO EMBLEMS
          </span>
        </div>

        {/* --- LOGO TILES GRID --- */}
        <AnimatePresence mode="popLayout">
          <motion.div 
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5"
          >
            {filteredLogos.map((logo, idx) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25, delay: Math.min(idx * 0.02, 0.3) }}
                whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2 } }}
                key={logo.id}
                className="group relative p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-[#5a8b10] shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-center justify-between min-h-[145px] sm:min-h-[165px]"
              >
                {/* Corner category indicator on hover */}
                <span className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-[8px] font-mono uppercase tracking-widest text-[#5a8b10] font-bold bg-[#84CC16]/10 px-1.5 py-0.5 rounded pointer-events-none">
                  {logo.categoryLabel.split(' ')[0]}
                </span>

                {/* Logo Image */}
                <div className="w-full flex-1 flex items-center justify-center py-2">
                  <img 
                    src={logo.image} 
                    alt={logo.name} 
                    className="max-h-[60px] sm:max-h-[70px] max-w-[85%] object-contain filter grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Client Name Label Below Logo */}
                <div className="w-full text-center mt-2 pt-2 border-t border-slate-100/80">
                  <span className="inline-block text-[11px] sm:text-xs font-bold text-slate-800 tracking-tight leading-snug group-hover:text-[#3f620d] transition-colors duration-200 line-clamp-2">
                    {logo.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
