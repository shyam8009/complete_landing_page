import React from 'react';

const APPLICATIONS = [
  {
    label: "Defence & Government",
    scenario: "Transforming the operational landscape by automating complex defence workflows, and modernizing government infrastructure through real-time monitoring and data-driven decision-making.",
    image: "https://images.unsplash.com/photo-1541888062598-6395eeb8e860?auto=format&fit=crop&q=80"
  },
  {
    label: "Port, Marine & Manufacturing",
    scenario: "Revolutionizing port and marine infrastructure through connected sensors, and leading the manufacturing industry revolution where sensors transfer every byte of information.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
  },
  {
    label: "Wearables & Healthcare",
    scenario: "Delivering custom-made and secure IoT wearable and Telehealth solutions, as the health care industry utilizes great services from the IOT trade.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
  }
];

export function IoTApplications() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wide">
            TACTICAL & COMMERCIAL<br />APPLICATIONS
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {APPLICATIONS.map((app, i) => (
            <div key={i} className="group relative h-[480px] rounded-xl overflow-hidden bg-[#111]">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${app.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                  {app.label}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {app.scenario}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
