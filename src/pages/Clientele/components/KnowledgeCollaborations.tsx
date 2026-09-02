import React from 'react';
import { motion } from 'framer-motion';
import { KNOWLEDGE_COLLABORATIONS_LOGOS, KNOWLEDGE_ACADEMIC_SHEET } from '../data/clienteleLogosData';
import { GraduationCap, Award, Sparkles } from 'lucide-react';

const INTER = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export function KnowledgeCollaborations() {
  return (
    <section className="relative w-full section-padding bg-[#F9FAFB] text-slate-900 border-b border-slate-200 overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-70 pointer-events-none" />

      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap className="w-4 h-4 text-[#5a8b10]" />
              <span className="text-[#5a8b10] text-xs font-mono tracking-[0.2em] uppercase font-bold">
                ACADEMIC R&amp;D PARTNERSHIPS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase" style={{ fontFamily: INTER }}>
              OUR KNOWLEDGE &amp; ACADEMIC COLLABORATIONS
            </h2>
            <p className="mt-2 text-slate-600 text-xs sm:text-sm md:text-base font-medium max-w-3xl">
              Premier Indian Institutes of Technology (IITs), IIMs, and advanced scientific research institutions partnering with Sahana Defence in joint R&amp;D, talent pipeline, and defense technology co-development.
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-sm self-start lg:self-auto">
            <Sparkles className="w-4 h-4 text-[#84CC16]" />
            <span className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
              {KNOWLEDGE_COLLABORATIONS_LOGOS.length} Premier R&amp;D Institutions
            </span>
          </div>
        </motion.div>

        {/* Academic Logos Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {KNOWLEDGE_COLLABORATIONS_LOGOS.map((logo, idx) => (
            <motion.div 
              key={logo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-[#5a8b10] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-center justify-between min-h-[160px] sm:min-h-[180px]"
            >
              {/* Top Badge Indicator */}
              <div className="w-full flex justify-between items-center mb-2">
                <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400 font-semibold group-hover:text-[#5a8b10] transition-colors">
                  R&amp;D LAB
                </span>
                <Award className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#84CC16] transition-colors" />
              </div>

              {/* Logo Graphic Image */}
              <div className="w-full flex-1 flex items-center justify-center py-2">
                <img 
                  src={logo.image} 
                  alt={logo.name} 
                  className="max-h-[70px] sm:max-h-[85px] max-w-[80%] object-contain filter grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                  loading="lazy"
                />
              </div>

              {/* Client / Institute Name Text Label Below Logo */}
              <div className="w-full text-center mt-3 pt-3 border-t border-slate-100">
                <span className="inline-block text-xs sm:text-sm font-bold text-slate-900 tracking-tight leading-snug group-hover:text-[#3f620d] transition-colors duration-200">
                  {logo.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
