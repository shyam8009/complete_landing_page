import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export function IoTCTA() {
  return (
    <section className="py-32 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ 
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '40px 40px' 
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#84CC16]/5 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
          Automate Your Operational Landscape
        </h2>
        
        <p className="text-xl text-white/60 mb-12 leading-relaxed max-w-2xl mx-auto">
          Implement customized IoT hardware, platforms, and data science solutions for the seamless management of your business.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            to="/contact"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#84CC16] text-black font-mono font-bold tracking-widest uppercase overflow-hidden w-full sm:w-auto"
          >
            <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            <span className="relative flex items-center gap-3">
              REQUEST A CONSULTATION
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          
          <button className="group px-8 py-4 bg-transparent border border-white/20 text-white font-mono font-bold tracking-widest uppercase hover:bg-white/5 transition-colors w-full sm:w-auto">
            Explore IoT Platforms
          </button>
        </div>
      </div>
    </section>
  );
}
