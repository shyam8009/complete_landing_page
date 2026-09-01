import React from 'react';

const allClients = [
  "BEML - Bharat Earth Movers Limited",
  "Visakhapatnam Port Authority",
  "NABARD - National Bank for Agriculture and Rural Development",
  "RailTel",
  "ONGC - Oil and Natural Gas Corporation",
  "ITI Limited",
  "UPDESCO - Uttar Pradesh Development Systems Corporation",
  "RINL - Rashtriya Ispat Nigam Limited",
  "Engineers India Limited (EIL)",
  "Hindustan Shipyard Limited (HSL)",
  "Central Electronics Limited (CEL)",
  "NICSI - National Informatics Centre Services Incorporated",
  "C-DAC - Centre for Development of Advanced Computing",
  "HAL - Hindustan Aeronautics Limited",
  "BEL - Bharat Electronics Limited",
  "MIDHANI - Mishra Dhatu Nigam Limited",
  "SAC - Space Applications Centre, ISRO",
  "DRDO",
  "Indian Army",
  "Indian Navy",
  "Indian Air Force",
  "Coast Guard",
  "SIDM - Society of Indian Defence Manufacturers",
  "VEM Technologies",
  "MTAR Technologies",
  "Epsilon Advanced Materials",
  "Anant Aerospace / Anant Technologies",
  "Bharat Dynamics Limited (BDL)"
];

// Split 28 clients into 3 roughly equal tracks
const track1 = allClients.slice(0, 10);
const track2 = allClients.slice(10, 19);
const track3 = allClients.slice(19, 28);

function ClientCard({ name }: { name: string }) {
  // Simple deterministic initial based on name
  const initial = name.charAt(0).toUpperCase();
  
  return (
    <div className="flex items-center gap-4 bg-white border border-neutral-200 shadow-sm rounded-xl px-6 py-4 mx-3 min-w-[280px] max-w-[400px] h-[80px] group hover:border-[#84CC16] hover:shadow-md transition-all duration-300 cursor-default">
      <div className="w-10 h-10 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center flex-shrink-0 group-hover:bg-[#84CC16]/10 group-hover:border-[#84CC16]/30 transition-colors">
        <span className="text-neutral-500 font-bold font-mono group-hover:text-[#84CC16]">{initial}</span>
      </div>
      <div className="flex-1 overflow-hidden">
        <h4 className="text-sm font-bold text-slate-800 tracking-wide truncate group-hover:text-black transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
          {name.split('—')[0].trim()}
        </h4>
        {name.includes('—') && (
          <p className="text-[10px] text-slate-500 truncate uppercase tracking-widest mt-1">
            {name.split('—')[1].trim()}
          </p>
        )}
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
      </div>

      <div className="relative w-full flex flex-col gap-6 marquee-track">
        {/* Left Fade Gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-[10vw] max-w-[200px] bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
        {/* Right Fade Gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-[10vw] max-w-[200px] bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

        {/* Track 1 - Moving Left */}
        <div className="flex w-max animate-marquee-left">
          {/* Double the array to create seamless loop */}
          {[...track1, ...track1].map((client, idx) => (
            <ClientCard key={`t1-${idx}`} name={client} />
          ))}
        </div>

        {/* Track 2 - Moving Right */}
        <div className="flex w-max animate-marquee-right" style={{ transform: 'translateX(-50%)' }}>
          {[...track2, ...track2].map((client, idx) => (
            <ClientCard key={`t2-${idx}`} name={client} />
          ))}
        </div>

        {/* Track 3 - Moving Left */}
        <div className="flex w-max animate-marquee-left" style={{ animationDuration: '65s' }}>
          {[...track3, ...track3].map((client, idx) => (
            <ClientCard key={`t3-${idx}`} name={client} />
          ))}
        </div>

      </div>
    </section>
  );
}

