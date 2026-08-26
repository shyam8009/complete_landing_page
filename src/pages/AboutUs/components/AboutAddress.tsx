import React from 'react';
const INTER = "'Inter', sans-serif";

const LOCATIONS = [
  {
    title: 'Global Headquarters',
    address: 'Sahana Defence Corporate Center\nTech Park Avenue, Sector 45\nNew Delhi, 110001, India',
    phone: '+91 11 2345 6789',
    email: 'hq@sahanadefence.com'
  },
  {
    title: 'Manufacturing & Assembly',
    address: 'Defence Industrial Corridor\nPhase II, Industrial Area\nHyderabad, 500081, India',
    phone: '+91 40 1234 5678',
    email: 'production@sahanadefence.com'
  }
];

export default function AboutAddress() {
  return (
    <section className="w-full bg-[#050505] text-white py-24 md:py-32 z-10 relative">
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 justify-between items-start md:items-end mb-16 md:mb-20">
          <div>
            <h3 className="text-sm font-bold tracking-[0.2em] text-[#84CC16] uppercase mb-4" style={{ fontFamily: INTER }}>
              [ OUR LOCATIONS ]
            </h3>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
              Global Presence
            </h2>
          </div>
          <p className="text-white/60 max-w-md text-sm md:text-base leading-relaxed" style={{ fontFamily: INTER }}>
            Strategically located to serve national security and defense forces with unparalleled engineering, manufacturing, and operational support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {LOCATIONS.map((loc, i) => (
            <div key={i} className="flex flex-col p-8 border border-white/10 hover:border-white/30 transition-all duration-300 bg-white/[0.02] relative group overflow-hidden">
              {/* Highlight accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#84CC16] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              
              <h4 className="text-xl font-bold mb-6 text-white group-hover:text-[#84CC16] transition-colors">{loc.title}</h4>
              
              <div className="flex flex-col flex-1 gap-6 text-white/70 text-sm leading-relaxed" style={{ fontFamily: INTER }}>
                <div>
                  <span className="text-white/30 uppercase text-[10px] tracking-widest block mb-2 font-mono">Address</span>
                  <p className="whitespace-pre-line text-white/80">{loc.address}</p>
                </div>
                
                <div className="pt-4 mt-auto border-t border-white/10 flex flex-col gap-4">
                  <div>
                    <span className="text-white/30 uppercase text-[10px] tracking-widest block mb-1 font-mono">Phone</span>
                    <a href={'tel:' + loc.phone.replace(/[^0-9+]/g, '')} className="text-white hover:text-[#84CC16] transition-colors">
                      {loc.phone}
                    </a>
                  </div>
                  <div>
                    <span className="text-white/30 uppercase text-[10px] tracking-widest block mb-1 font-mono">Email</span>
                    <a href={'mailto:' + loc.email} className="text-white hover:text-[#84CC16] transition-colors">
                      {loc.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
