import React from 'react';
import { PenTool, Target, Layers, ScanLine } from 'lucide-react';

const pipelineData = [
  {
    num: "01",
    title: "ENGINEER",
    icon: <PenTool className="w-8 h-8 text-[#84CC16]" />,
    desc: "Comprehensive in-house design capabilities generating precision manufacturing drawings to guarantee exact compliance with defense specifications."
  },
  {
    num: "02",
    title: "FABRICATE",
    icon: <Target className="w-8 h-8 text-[#84CC16]" />,
    desc: "Utilizing advanced 3, 4, and 5-axis CNC milling and turning infrastructure to achieve complex geometries in a single setup."
  },
  {
    num: "03",
    title: "HARDEN",
    icon: <Layers className="w-8 h-8 text-[#84CC16]" />,
    desc: "Specialized machining of high-strength titanium alloys, high-alloy steels, and nickel alloys optimized for extreme thermal and corrosive resistance."
  },
  {
    num: "04",
    title: "INSPECT",
    icon: <ScanLine className="w-8 h-8 text-[#84CC16]" />,
    desc: "100% precision measurement using advanced Coordinate Measuring Machines (CMM) and profile projectors to assure complete dimensional accuracy."
  }
];

export function DefenceComponentsPipeline() {
  return (
    <section id="pipeline" className="w-full bg-[#050505] py-24 px-6 md:px-12 lg:px-24 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <span className="text-[#84CC16] font-mono text-sm tracking-widest uppercase block mb-4">Manufacturing Workflow</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">
            Precision Pipeline
          </h2>
        </div>

        {/* Pipeline Grid */}
        <div className="relative">
          {/* Glowing Line Background (Desktop) */}
          <div className="hidden lg:block absolute top-[40px] left-0 right-0 h-[2px] bg-white/10 z-0">
            <div className="h-full bg-[#84CC16] w-full origin-left opacity-80" style={{ boxShadow: '0 0 15px #84CC16' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {pipelineData.map((node, i) => (
              <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left group">
                
                {/* Node Header */}
                <div className="mb-8 relative flex flex-col items-center lg:items-start">
                  <div className="w-20 h-20 bg-black border border-white/20 rounded-full flex items-center justify-center mb-4 transition-colors group-hover:border-[#84CC16]">
                    {node.icon}
                  </div>
                  <span className="text-white/40 font-mono text-2xl font-bold absolute -top-4 -right-4 lg:right-auto lg:left-16 lg:-top-6 z-[-1] opacity-50 select-none">
                    {node.num}
                  </span>
                  <h3 className="text-white text-xl font-bold tracking-wider">{node.title}</h3>
                </div>

                {/* Node Description */}
                <p className="text-white/60 text-sm leading-relaxed">
                  {node.desc}
                </p>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
