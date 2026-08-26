import React from 'react';
const INTER = "'Inter', sans-serif";

const LEADERSHIP = [
  { 
    name: 'Pratik Kakadia', 
    role: 'Founder & Managing Director', 
    desc: 'Leading the vision and strategic direction of Sahana Defence.',
    image: '/assets/pratik_kakadia.png'
  },
  { 
    name: 'Dhaval Joshi', 
    role: 'Group CEO', 
    desc: 'Leading the vision and strategic direction of Sahana Defence.',
    image: '/assets/leader_dhaval_joshi.png'
  },
  { 
    name: 'Yogesh Pajni', 
    role: 'Director - Defence Engineering, Technical & Production', 
    desc: 'Directing the R&D, indigenous systems architecture, and production.',
    image: '/assets/leader_yogesh_pajni.png'
  },
  { 
    name: 'Brig Rajiv Singh (Retd.)', 
    role: 'Chief Security Officer', 
    desc: 'Ensuring operational relevance, security, and military compliance.',
    image: '/assets/leader_rajiv_singh.png'
  },
  { 
    name: 'Nikhil Mitaliya', 
    role: 'Director - Defence Research & Development', 
    desc: 'Driving continuous innovation and strategic technological advancements.',
    image: '/assets/leader_nikhil_mitaliya.png'
  }
];

export default function AboutLeadership() {
  return (
    <section className="w-full bg-slate-50 text-slate-900 py-32 z-10 relative">
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        <div className="flex flex-col items-center text-center mb-20">
          <h3 className="text-sm font-bold tracking-[0.2em] text-[#84CC16] uppercase mb-4" style={{ fontFamily: INTER }}>
            [ COMMAND STRUCTURE ]
          </h3>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-900">
            Leadership & Advisory
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-8">
          {LEADERSHIP.map((leader, i) => (
            <div key={i} className="group">
              {/* Photo */}
              <div className="w-full aspect-[3/4] bg-slate-200 mb-6 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                {leader.image ? (
                  <img src={leader.image} alt={leader.name} className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-slate-300 mix-blend-multiply opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-mono text-sm text-center px-4">[ IMAGE UNAVAILABLE ]</div>
                  </>
                )}
                {/* Border accents */}
                <div className="absolute top-0 left-0 w-full h-[4px] bg-slate-900 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
              </div>
              
              <h4 className="text-2xl font-black uppercase tracking-wider mb-1 text-slate-900">{leader.name}</h4>
              <p className="text-[#84CC16] font-bold text-sm tracking-widest uppercase mb-4" style={{ fontFamily: INTER }}>{leader.role}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{leader.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





