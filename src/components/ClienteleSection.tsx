import React from 'react';
import { Link } from 'react-router';
import { ALL_LOGOS } from '../pages/Clientele/data/clienteleLogosData';
import type { LogoItem } from '../pages/Clientele/data/clienteleLogosData';

// Take a subset of logos for the home page marquee, e.g., first 30 or so.
const displayLogos = ALL_LOGOS.slice(0, 30);
const track1 = displayLogos.slice(0, 10);
const track2 = displayLogos.slice(10, 20);
const track3 = displayLogos.slice(20, 30);

function ClientCard({ logo }: { logo: LogoItem }) {
  return (
    <div className="flex items-center gap-4 bg-white border border-neutral-200 shadow-sm rounded-xl px-6 py-4 mx-3 min-w-[280px] max-w-[400px] h-[80px] group hover:border-[#84CC16] hover:shadow-md transition-all duration-300 cursor-default">
      <div className="w-12 h-12 rounded-lg bg-transparent flex items-center justify-center flex-shrink-0 transition-colors overflow-hidden">
        <img 
          src={logo.image} 
          alt={logo.name} 
          className="max-h-full max-w-full object-contain filter grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
          loading="lazy"
        />
      </div>
      <div className="flex-1 overflow-hidden">
        <h4 className="text-sm font-bold text-slate-800 tracking-wide truncate group-hover:text-black transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
          {logo.name}
        </h4>
        <p className="text-[10px] text-slate-500 truncate uppercase tracking-widest mt-1">
          {logo.categoryLabel}
        </p>
      </div>
    </div>
  );
}

export default function ClienteleSection() {
  return (
    <section className="relative w-full bg-[#FAFAFA] section-padding overflow-hidden border-t border-neutral-200">
      
      {/* Inline styles for marquee animations */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-left {
          animation: marquee-left 60s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 55s linear infinite;
        }
        .marquee-track:hover .animate-marquee-left,
        .marquee-track:hover .animate-marquee-right {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-16 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse" />
          <span className="text-[#84CC16] font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase font-bold">
            STRATEGIC ALLIANCES
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
          Trusted by Defence & Industry Leaders
        </h2>
        <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-sm md:text-base">
          Powering the world's most critical missions across Aerospace, Defence, Government, and Enterprise Ecosystems.
        </p>
        <div className="mt-6 flex justify-center">
          <Link
            to="/clientele"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.15em] font-bold text-slate-900 hover:text-[#5a8b10] border-b border-slate-900/30 hover:border-[#5a8b10] pb-1 transition-all"
          >
            Explore Full Client &amp; Alliance Matrix →
          </Link>
        </div>
      </div>

      <div className="relative w-full flex flex-col gap-6 marquee-track">
        {/* Left Fade Gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-[10vw] max-w-[200px] bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
        {/* Right Fade Gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-[10vw] max-w-[200px] bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

        {/* Track 1 - Moving Left */}
        {track1.length > 0 && (
          <div className="flex w-max animate-marquee-left">
            {[...track1, ...track1].map((logo, idx) => (
              <ClientCard key={`t1-${idx}`} logo={logo} />
            ))}
          </div>
        )}

        {/* Track 2 - Moving Right */}
        {track2.length > 0 && (
          <div className="flex w-max animate-marquee-right" style={{ transform: 'translateX(-50%)' }}>
            {[...track2, ...track2].map((logo, idx) => (
              <ClientCard key={`t2-${idx}`} logo={logo} />
            ))}
          </div>
        )}

        {/* Track 3 - Moving Left */}
        {track3.length > 0 && (
          <div className="flex w-max animate-marquee-left" style={{ animationDuration: '65s' }}>
            {[...track3, ...track3].map((logo, idx) => (
              <ClientCard key={`t3-${idx}`} logo={logo} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

