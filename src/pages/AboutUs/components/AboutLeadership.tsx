import React from 'react';
const INTER = "'Inter', sans-serif";

const LEADERSHIP = [
  { 
    name: 'Pratik Kakadia', 
    role: 'Founder & Managing Director', 
    desc: "Pratik Kakadia is the Founder and Managing Director, providing the strategic vision that drives the organization's growth and innovation. With a strong focus on indigenous technology development, operational excellence, and long-term value creation, he continues to lead the company's evolution as a trusted partner in defence and advanced engineering. His leadership has been instrumental in building a culture of innovation, agility, and execution.",
    image: '/assets/pratik_kakadia.png',
    linkedin: '#'
  },
  { 
    name: 'Dhaval Joshi', 
    role: 'Group CEO', 
    desc: "Dhaval Joshi leads the organization's business strategy and operations, driving sustainable growth and organizational excellence. With extensive experience in managing complex businesses and scaling operations, he focuses on translating strategic objectives into measurable outcomes. His leadership plays a key role in strengthening the company's capabilities, customer relationships, and market presence across strategic sectors.",
    image: '/assets/leader_dhaval_joshi.png',
    linkedin: '#'
  },
  { 
    name: 'Yogesh Pajni', 
    role: 'Director - Defence Engineering, Technical & Production', 
    desc: "Yogesh Pajni oversees defence engineering, technical operations, and production functions. With deep expertise in product development, manufacturing, and systems engineering, he is responsible for ensuring the delivery of reliable, mission-ready solutions. His focus on quality, innovation, and execution excellence supports the company's commitment to developing advanced technologies for critical applications.",
    image: '/assets/leader_yogesh_pajni.png',
    linkedin: '#'
  },
  { 
    name: 'Brig Rajiv Singh (Retd.)', 
    role: 'Chief Security Officer', 
    desc: "Brig Rajiv Singh (Retd.) brings extensive leadership and security experience gained through a distinguished career. He leads the organization's security strategy, risk management, and compliance initiatives, ensuring the highest standards of resilience and operational readiness. His expertise strengthens the company's ability to support strategic programs while maintaining a robust security and governance framework.",
    image: '/assets/leader_rajiv_singh.png',
    linkedin: '#'
  },
  { 
    name: 'Nikhil Mitaliya', 
    role: 'Director - Defence Research & Development', 
    desc: "Nikhil Mitaliya leads the company's Research & Development initiatives, driving innovation in next-generation defence technologies. He focuses on transforming advanced concepts into practical, high-performance solutions that address evolving operational requirements. His commitment to indigenous innovation and engineering excellence plays a vital role in shaping the company's future technology roadmap.",
    image: '/assets/leader_nikhil_mitaliya.png',
    linkedin: '#'
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

        {/* 2-Row Flex Layout (Centered) */}
        <div className="flex flex-wrap justify-center items-start gap-x-8 gap-y-16 max-w-[1200px] mx-auto">
          {LEADERSHIP.map((leader, i) => (
            <div key={i} className="group w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[360px] flex flex-col relative cursor-pointer">
              
              {/* Photo */}
              <div className="w-full aspect-[3/4] bg-slate-200 mb-6 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 shadow-lg">
                {leader.image ? (
                  <img src={leader.image} alt={leader.name} className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-slate-300 mix-blend-multiply opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-mono text-sm text-center px-4">[ IMAGE UNAVAILABLE ]</div>
                  </>
                )}
                
                {/* Border accents */}
                <div className="absolute top-0 left-0 w-full h-[4px] bg-[#84CC16] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
              </div>
              
              {/* Text Block & LinkedIn */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col">
                  <h4 className="text-xl md:text-2xl font-black uppercase tracking-wider mb-1 text-slate-900">{leader.name}</h4>
                  <p className="text-[#84CC16] font-bold text-xs tracking-widest uppercase" style={{ fontFamily: INTER }}>{leader.role}</p>
                </div>
                {/* LinkedIn Icon */}
                <a 
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-[#0077b5] transition-colors mt-1 flex-shrink-0"
                  aria-label={"LinkedIn Profile for " + leader.name}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>

              {/* Expandable Description */}
              <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-[500px] group-hover:opacity-100 group-hover:mt-4 transition-all duration-700 ease-in-out">
                <p className="text-slate-600 text-[13px] leading-relaxed text-justify" style={{ fontFamily: INTER }}>
                  {leader.desc}
                </p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
