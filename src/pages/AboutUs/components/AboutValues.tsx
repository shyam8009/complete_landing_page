import React, { useState } from 'react';

const INTER = "'Inter', sans-serif";

const VALUES = [
  {
    title: 'Do what honor dictates',
    image: '/assets/corporate_house_3.jpg'
  },
  {
    title: 'Live as a servant leader',
    image: '/assets/innovation_5.jpg'
  },
  {
    title: 'Pursue excellence',
    image: '/assets/Hardware_Spec_1.webp'
  },
  {
    title: 'Sovereign security',
    image: '/assets/tactical_3.webp'
  }
];

export default function AboutValues() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-black text-white pt-24 pb-32 z-10 relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row md:justify-between md:items-end gap-8">
        <div>
          <p className="text-xs tracking-[0.2em] text-white/50 mb-4 font-mono uppercase">[ ABOUT US ]</p>
          <h2 className="text-5xl md:text-6xl font-light">Our values</h2>
        </div>
        <div className="max-w-md">
          <p className="text-sm text-white/70 leading-relaxed" style={{ fontFamily: INTER }}>
            Driven by our values — doing what honor dictates and the pursuit of excellence — we're revolutionizing defence technology for a safer world.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row w-full h-[70vh] md:h-[600px] border-t border-white/20">
          {VALUES.map((val, i) => {
            const isActive = activeIndex === i;
            return (
              <div
                key={i}
                onMouseEnter={() => setActiveIndex(i)}
                className={`relative flex flex-col border-b md:border-b-0 md:border-r border-white/20 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isActive ? 'md:flex-[2.5]' : 'md:flex-1'
                } ${i === 0 ? 'md:border-l' : ''}`}
              >
                <div className="flex-1 w-full p-4 md:p-8 pb-0 overflow-hidden relative">
                  <div 
                    className={`w-full h-full bg-cover bg-center transition-all duration-700 ease-out ${
                      isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                    style={{ backgroundImage: `url(${val.image})` }}
                  />
                </div>

                <div className="p-4 md:p-8 flex gap-3 h-auto md:h-[120px] shrink-0">
                  <div className="w-2 h-2 mt-1.5 shrink-0 bg-[#84CC16]" />
                  <h3 className="text-xl md:text-2xl font-light leading-snug">
                    {val.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}