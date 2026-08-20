import React from 'react';
import { ArrowRight } from 'lucide-react';

export function BigDataBICTA() {
  return (
    <section className="py-24 bg-black border-t border-white/10 relative overflow-hidden flex justify-center text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(132,204,22,0.1)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl px-4 sm:px-6 flex flex-col items-center">
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight leading-tight">
          Transform Your Organization's Information into Actionable Insight
        </h2>
        
        <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl leading-relaxed">
          Partner with our consulting team to deploy customized Big Data services, integrate advanced BI platforms, and modernize your data warehousing architecture.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-[#84CC16] hover:bg-[#65A30D] text-black px-8 py-4 rounded font-bold uppercase tracking-wider transition-all hover:scale-105 active:scale-95 group">
            REQUEST A CONSULTATION
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 border border-white/20 text-white px-8 py-4 rounded font-bold uppercase tracking-wider transition-all">
            Explore BI Solutions
          </button>
        </div>
      </div>
    </section>
  );
}
