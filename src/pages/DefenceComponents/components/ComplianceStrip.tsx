import React from 'react';
import { ShieldCheck, Crosshair, Award } from 'lucide-react';

const complianceData = [
  {
    icon: <Award className="w-6 h-6 text-[#84CC16]" />,
    title: "ISO & AS9100D Certified",
    desc: "Stringent adherence to ISO 9001:2015 and Aerospace Quality Management standards guaranteeing zero-defect fabrication."
  },
  {
    icon: <Crosshair className="w-6 h-6 text-[#84CC16]" />,
    title: "Uncompromising Inspection",
    desc: "Advanced testing facilities equipped with precision CMM, height gauges, and vision inspection tools for absolute geometric compliance."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#84CC16]" />,
    title: "Trusted Defence Partner",
    desc: "Over two decades of proven collaboration, standing as the partner of choice for India's leading defense and government organizations."
  }
];

export function ComplianceStrip() {
  return (
    <div className="w-full bg-[#020202] border-y border-white/10 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
        
        {complianceData.map((item, i) => (
          <div key={i} className="flex flex-col md:flex-row items-start gap-6 pt-8 md:pt-0 first:pt-0 md:pl-12 first:pl-0">
            <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
              {item.icon}
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}
