import React from 'react';

const steps = [
  {
    title: "GENERATE",
    desc: "High-speed quantum random number generation produces cryptographically secure randomness at over 2 Gbps, with continuous entropy validation."
  },
  {
    title: "DISTRIBUTE",
    desc: "Quantum key distribution over fibre, where any attempt to intercept the key disturbs it and is detected at both ends."
  },
  {
    title: "EXTEND",
    desc: "Drone-relay architectures carry secure quantum links across terrain where fibre cannot be laid."
  },
  {
    title: "SECURE",
    desc: "Military-grade encryption for operations that cannot afford a compromised channel."
  }
];

export function OperationalSequence() {
  return (
    <section className="w-full bg-[#050505] text-white section-padding px-6 md:px-12 lg:px-24 border-t border-white/5 font-['Inter',sans-serif]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col border-t border-white/10 pt-6">
            <div className="text-[#84CC16] font-mono text-sm tracking-widest mb-4">0{idx + 1} // {step.title}</div>
            <p className="text-white/60 leading-relaxed text-sm lg:text-base">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}