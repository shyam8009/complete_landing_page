import React from 'react';
const INTER = "'Inter', sans-serif";

export default function AboutLocation() {
  return (
    <section className="w-full bg-[#050505] text-white pt-12 sm:pt-16 md:pt-24 pb-16 md:pb-32 z-10 relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h3 className="text-sm font-bold tracking-[0.2em] text-[#84CC16] uppercase mb-4" style={{ fontFamily: INTER }}>
              [ GLOBAL HEADQUARTERS ]
            </h3>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8">
              Strategic <span className="font-medium">Dispatch</span>
            </h2>
            
            <div className="space-y-6 text-white/70">
              <p className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[#84CC16] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>3rd Floor, 305, Sigma Legacy, <br/>Nr. Vikram Sarabhai Marg, Opp. Panjrapol, <br/>Ambawadi, Ahmedabad- 380015, Gujarat, India.</span>
              </p>
              <p className="flex items-center gap-4">
                <svg className="w-6 h-6 text-[#84CC16] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>contact@sahanadefence.com</span>
              </p>
            </div>
            
            <button className="mt-12 px-8 py-4 bg-[#84CC16] text-black text-sm font-bold tracking-widest uppercase hover:bg-white transition-colors" style={{ fontFamily: INTER }}>
              Initiate Contact
            </button>
          </div>
          
          {/* Radar Map Graphic */}
          <div className="relative aspect-square md:aspect-[4/3] w-full border border-white/10 bg-white/5 rounded-full md:rounded-none overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('/assets/search_config.jpg')] bg-cover bg-center opacity-30 mix-blend-screen grayscale" />
            
            {/* Radar Sweep */}
            <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,#84CC16_360deg)] opacity-20 animate-[spin_4s_linear_infinite]" style={{ borderRadius: '50%' }} />
            
            {/* Location Dot */}
            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-[#84CC16] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_#84CC16]" />
            <div className="absolute top-1/2 left-1/2 w-12 h-12 border border-[#84CC16] rounded-full -translate-x-1/2 -translate-y-1/2 animate-ping opacity-50" />
            
            <div className="absolute top-1/2 left-1/2 ml-4 -mt-6">
              <span className="text-[#84CC16] text-xs font-mono font-bold tracking-widest">AHMEDABAD_HQ</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
