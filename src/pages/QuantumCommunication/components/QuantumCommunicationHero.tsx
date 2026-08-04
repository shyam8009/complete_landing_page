import React from 'react';

export default function QuantumCommunicationHero() {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative w-full h-screen bg-[#050505] flex flex-col items-center justify-center overflow-hidden border-b border-white/10">
      
      {/* Background Particle Effects (CSS only for MVP) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-[#84CC16]/5 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] bg-[#0ea5e9]/5 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '10s' }} />
        
        {/* Simple simulated glowing nodes/particles */}
        <div className="absolute top-[30%] left-[25%] w-1.5 h-1.5 bg-[#84CC16] rounded-full shadow-[0_0_15px_#84CC16]" />
        <div className="absolute top-[60%] right-[30%] w-1 h-1 bg-white rounded-full shadow-[0_0_10px_white]" />
        <div className="absolute bottom-[40%] left-[40%] w-2 h-2 bg-[#0ea5e9] rounded-full shadow-[0_0_20px_#0ea5e9]" />
        
        {/* faint grid overlay to make it tech-y */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        {/* Eyebrow Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8" 
          style={{ backgroundColor: 'rgba(132,204,22,0.1)', border: '1px solid rgba(132,204,22,0.2)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16] animate-pulse shadow-[0_0_8px_#84CC16]" />
          <span className="text-[10px] font-mono tracking-wider uppercase text-[#84CC16] font-bold">
            Quantum Technology Solutions
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-white mb-6">
          Quantum Communication
        </h1>

        {/* Subheadline */}
        <p className="text-base md:text-xl text-neutral-400 leading-relaxed max-w-2xl mx-auto mb-12">
          Secure, sovereign communication built on quantum principles. From key distribution to post-quantum cryptography, this is the layer that keeps India's most sensitive channels unbreakable.
        </p>

        {/* Primary CTA */}
        <button 
          onClick={scrollToNextSection}
          className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest text-[#050505] transition-all hover:scale-105"
          style={{ backgroundColor: '#84CC16', boxShadow: '0 0 30px rgba(132,204,22,0.2)' }}
        >
          Explore Secure Channels
        </button>
      </div>

    </section>
  );
}
