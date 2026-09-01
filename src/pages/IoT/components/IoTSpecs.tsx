import React from 'react';

const CARDS = [
  {
    badge: "PROCESS MANAGEMENT",
    title: "AUTOMATED SYSTEMS",
    description: "We automatize devices and information technologies for handling different processes and machineries in an industry.",
    footerLeftLabel: "HARDWARE",
    footerLeftValue: "Computers & Robots",
    footerRightLabel: "FOCUS",
    footerRightValue: "Industry Processes"
  },
  {
    badge: "END-TO-END",
    title: "CUSTOMIZED HARDWARE",
    description: "Get custom-made and secure IoT solutions specifically engineered by focusing on your business domain.",
    footerLeftLabel: "INTERACTION",
    footerLeftValue: "Device-to-Device",
    footerRightLabel: "EXECUTION",
    footerRightValue: "Total Automation"
  },
  {
    badge: "ANALYTICS",
    title: "DATA SCIENCE PLATFORMS",
    description: "Our data science team helps you find new opportunities, while our knowledge image services assist you in taking the right choices through data visualization.",
    footerLeftLabel: "INSIGHT",
    footerLeftValue: "Bug Fixing",
    footerRightLabel: "PLATFORM",
    footerRightValue: "Customized Management"
  }
];

export function IoTSpecs() {
  return (
    <section className="py-24 bg-white text-black relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CARDS.map((card, i) => (
            <div key={i} className="flex flex-col h-full bg-gray-50 border border-gray-200 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-black text-white font-mono text-xs tracking-wider uppercase rounded-full">
                  {card.badge}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold uppercase tracking-wide mb-4">
                {card.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-12 flex-grow">
                {card.description}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                <div>
                  <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mb-1">{card.footerLeftLabel}</div>
                  <div className="font-semibold text-sm">{card.footerLeftValue}</div>
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mb-1">{card.footerRightLabel}</div>
                  <div className="font-semibold text-sm">{card.footerRightValue}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
