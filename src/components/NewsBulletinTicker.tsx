import React from 'react';
import { useNavigate } from 'react-router';

interface BulletinItem {
  id: number;
  tag: string;
  date: string;
  headline: string;
  link?: string;
}

const BULLETIN_NEWS: BulletinItem[] = [
  {
    id: 1,
    tag: 'CONTRACT',
    date: 'JUN 26, 2026',
    headline: 'Sahana Defence Signs Strategic Manufacturing Agreement with Central Electronics Limited (CEL)',
    link: '/newsroom'
  },
  {
    id: 2,
    tag: 'EVENT',
    date: 'AUG 23, 2026',
    headline: "Capabilities Showcased at ISRO's National Space Day before Distinguished Defence Leadership",
    link: '/newsroom'
  },
  {
    id: 3,
    tag: 'TECH TRANSFER',
    date: 'APR 10, 2026',
    headline: 'ISRO Transfers TRISP Technology to Infitron Accelerating Sovereign Energy Innovation',
    link: '/newsroom'
  },
  {
    id: 4,
    tag: 'MEMBERSHIP',
    date: 'DEC 27, 2025',
    headline: 'Sahana System Joins Society of Indian Defence Manufacturers (SIDM) as Full Member',
    link: '/newsroom'
  },
  {
    id: 5,
    tag: 'EMPANELMENT',
    date: 'NOV 15, 2025',
    headline: 'Bharat Electronics Limited (BEL) Vendor Empanelment for Strategic DefenseTech Fabrication',
    link: '/newsroom'
  },
  {
    id: 6,
    tag: 'R&D BREAKTHROUGH',
    date: 'OCT 08, 2025',
    headline: 'Successful Field Trials of Multi-Band Handheld Jammer & 3D Drone Radar Interceptors',
    link: '/newsroom'
  }
];

export function NewsBulletinTicker() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#080b08] border-y border-white/10 text-white relative overflow-hidden select-none z-10 group">
      {/* CSS Animation Keyframes */}
      <style>{`
        @keyframes ticker-slide {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker-slide 38s linear infinite;
        }
        .group:hover .animate-ticker {
          animation-play-state: paused;
        }
      `}</style>

      <div className="flex items-center w-full h-[52px]">
        {/* Left Fixed Badge: LIVE BULLETIN */}
        <div className="flex items-center gap-2.5 px-4 sm:px-6 h-full bg-[#111811] border-r border-[#84CC16]/30 shrink-0 z-20 shadow-md">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#84CC16] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#84CC16]" />
          </span>
          <span className="font-mono text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#84CC16] uppercase whitespace-nowrap">
            NEWS BULLETIN
          </span>
        </div>

        {/* Scrolling Ticker Track */}
        <div className="relative flex-1 overflow-hidden h-full flex items-center">
          {/* Left Fade Overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#080b08] to-transparent z-10 pointer-events-none" />
          {/* Right Fade Overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#080b08] to-transparent z-10 pointer-events-none" />

          {/* Marquee Elements (duplicated for seamless loop) */}
          <div className="flex items-center w-max animate-ticker cursor-pointer">
            {[...BULLETIN_NEWS, ...BULLETIN_NEWS].map((item, idx) => (
              <div
                key={idx}
                onClick={() => item.link && navigate(item.link)}
                className="flex items-center gap-3 px-6 text-xs sm:text-[13px] hover:text-[#84CC16] transition-colors whitespace-nowrap"
              >
                <span className="px-1.5 py-0.5 rounded bg-white/10 text-white/70 font-mono text-[10px] tracking-wider uppercase">
                  {item.tag}
                </span>
                <span className="text-white/40 font-mono text-[11px]">
                  [{item.date}]
                </span>
                <span className="font-medium text-white/90 group-hover:underline decoration-[#84CC16]/40 underline-offset-4">
                  {item.headline}
                </span>
                <span className="text-[#84CC16]/40 ml-4">✦</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right "View All" Button */}
        <button
          onClick={() => navigate('/newsroom')}
          className="hidden md:flex items-center gap-1.5 px-5 h-full bg-[#111811] border-l border-white/10 hover:border-[#84CC16]/40 text-[11px] font-mono tracking-wider uppercase text-white/70 hover:text-white transition-colors shrink-0 z-20 cursor-pointer"
        >
          <span>ALL NEWS</span>
          <span className="text-[#84CC16]">→</span>
        </button>
      </div>
    </div>
  );
}

export default NewsBulletinTicker;
