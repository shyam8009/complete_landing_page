import React, { useEffect } from 'react';
import { Shield, Target, Cpu, Zap, Radio, Rocket, Activity, Box, Ship } from 'lucide-react';
import { TechCTA } from '@/components/TechCTA';

export function WhySahanaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#05080D] min-h-screen text-white pt-24 font-sans selection:bg-[#84CC16] selection:text-black">
      {/* Hero Section */}
      <section className="relative w-full py-24 sm:py-32 flex flex-col justify-center px-4 sm:px-6 md:px-9">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
        <div className="max-w-[900px] mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.1] mb-8">
            Engineering Sovereign Advantage<br />
            <span className="text-[#84CC16] font-normal">through integrated capabilities</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed">
            Security today demands more than technology. It demands intelligence, agility, and the ability to operate across interconnected domains. Sahana Defence develops indigenous, AI-enabled capabilities that strengthen defence, aerospace, maritime, and critical infrastructure operations. We build technologies that help organizations detect faster, decide smarter, and respond with confidence.
          </p>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-24 border-t border-white/10 bg-black/50 relative">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-9">
          <h2 className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#84CC16] mb-12 text-center">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Indigenous by Design", desc: "We develop sovereign technologies that enhance operational independence, reduce reliance on external systems, and support long-term strategic resilience.", icon: Shield },
              { title: "AI-First by Architecture", desc: "Our platforms integrate intelligence, automation, and decision support to transform data into actionable operational advantage.", icon: Cpu },
              { title: "Integrated Mission Ecosystems", desc: "We connect sensing, intelligence, command, and response into unified capabilities that deliver greater situational awareness and mission effectiveness.", icon: Activity },
              { title: "Built for Critical Missions", desc: "Every solution is designed, developed and manufactured for reliability, scalability, and performance in environments where outcomes has zero-error possibility.", icon: Target }
            ].map((feature, i) => (
              <div key={i} className="p-8 border border-white/10 bg-white/5 rounded-2xl hover:border-[#84CC16]/50 transition-colors group">
                <feature.icon className="w-8 h-8 text-white/50 group-hover:text-[#84CC16] transition-colors mb-6" />
                <h3 className="text-lg font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 md:px-9 text-center">
          <h2 className="text-3xl md:text-4xl tracking-tight mb-6">Deep Technology. Real-World Impact.</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-16">
            By combining multidisciplinary engineering with operational insight, we deliver solutions designed to address the evolving challenges of modern security. Our expertise spans:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-left">
            {[
              { name: "Electronic & Information Warfare", icon: Radio },
              { name: "Aerospace & Space fabrication", icon: Rocket },
              { name: "Quantum Sensing and Comms", icon: Zap },
              { name: "Advanced Optics & Imaging", icon: Target },
              { name: "Command & Control Platforms", icon: Activity },
              { name: "Digital Twin Engineering", icon: Box },
              { name: "Maritime & Port Security", icon: Ship }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                <item.icon className="w-5 h-5 text-[#84CC16] shrink-0" />
                <span className="text-sm font-medium text-white/90">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-white/10 bg-black">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-9 text-center">
          <h2 className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#84CC16] mb-8">Ready to explore strategic collaboration?</h2>
          <h3 className="text-2xl sm:text-3xl font-light leading-snug mb-6">
            We believe the future belongs to organizations that can sense faster, decide with clarity, and act with precision. Sahana Defence is building the technologies that make that possible.
          </h3>
          <p className="text-xl text-white mb-8 font-serif italic">
            Engineering the future. Securing the mission.
          </p>
          <p className="text-white/60 mb-12">
            Whether you are a defence organization, government agency, critical infrastructure operator, aerospace institution, or industry partner, we welcome the opportunity to discuss mission-driven technology solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <TechCTA onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}>
              CONTACT US
            </TechCTA>
            <TechCTA theme="dark" className="border border-white/30 text-white hover:bg-white hover:text-black" onClick={() => window.location.href = '/'}>
              EXPLORE OUR CAPABILITIES
            </TechCTA>
          </div>
        </div>
      </section>
    </main>
  );
}
