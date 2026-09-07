import React, { useEffect } from 'react';
import { Shield, Target, Cpu, Zap, Radio, Rocket, Activity, Box, Ship, ArrowRight } from 'lucide-react';
import { TechCTA } from '@/components/TechCTA';

import heroImg from '@/imports/corporate_house_1.jpg';
import indigenousImg from '@/imports/arsenal_facility.jpg';
import aiImg from '@/imports/c2_dashboard_ui.png';
import ecosystemImg from '@/imports/command_center.jpg';
import criticalImg from '@/imports/corporate_house_2.jpg';

export function WhySahanaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen font-sans selection:bg-[#84CC16] selection:text-black pt-[86px]">
      
      {/* 1. HERO SECTION - LIGHT THEME */}
      <section className="relative w-full bg-white text-black py-20 lg:py-32 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-9 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 relative z-10">
            <div className="inline-block px-4 py-1.5 bg-black/5 rounded-full text-xs font-bold tracking-widest uppercase mb-8">
              Why Sahana
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-8">
              Engineering Sovereign Advantage<br />
              <span className="text-[#84CC16] font-normal">through integrated capabilities</span>
            </h1>
            <p className="text-lg sm:text-xl text-black/70 leading-relaxed max-w-2xl">
              Security today demands more than technology. It demands intelligence, agility, and the ability to operate across interconnected domains. Sahana Defence develops indigenous, AI-enabled capabilities that strengthen defence, aerospace, maritime, and critical infrastructure operations.
            </p>
            <div className="mt-10 flex gap-6">
              <button 
                onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
                className="px-8 py-4 bg-black text-white text-sm font-bold tracking-widest uppercase hover:bg-[#84CC16] hover:text-black transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="absolute inset-0 bg-[#84CC16] translate-x-4 translate-y-4 rounded-xl opacity-20"></div>
            <img 
              src={heroImg} 
              alt="Sahana Corporate House" 
              className="relative z-10 w-full h-[400px] lg:h-[600px] object-cover rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* 2. WHAT SETS US APART - ZIG ZAG SECTIONS (Mixed Backgrounds) */}
      <section className="w-full">
        <div className="w-full text-center py-20 bg-gray-50 border-y border-black/5">
          <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-black">What Sets Us Apart</h2>
          <p className="text-black/60 mt-4 max-w-2xl mx-auto">Our unique approach to delivering mission-critical advantage</p>
        </div>

        {/* Feature 1: Indigenous - White */}
        <div className="w-full bg-white py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-9 flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 order-2 md:order-1">
              <img src={indigenousImg} alt="Indigenous by Design" className="w-full aspect-[4/3] object-cover rounded-xl shadow-lg" />
            </div>
            <div className="flex-1 order-1 md:order-2">
              <Shield className="w-10 h-10 text-[#84CC16] mb-6" />
              <h3 className="text-3xl font-bold text-black mb-6">Indigenous by Design</h3>
              <p className="text-lg text-black/70 leading-relaxed">
                We develop sovereign technologies that enhance operational independence, reduce reliance on external systems, and support long-term strategic resilience.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 2: AI First - Dark Gray */}
        <div className="w-full bg-[#0a0a0a] text-white py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-9 flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <Cpu className="w-10 h-10 text-[#84CC16] mb-6" />
              <h3 className="text-3xl font-bold mb-6">AI-First by Architecture</h3>
              <p className="text-lg text-white/70 leading-relaxed">
                Our platforms integrate intelligence, automation, and decision support to transform data into actionable operational advantage. We build technologies that help organizations detect faster and decide smarter.
              </p>
            </div>
            <div className="flex-1">
              <img src={aiImg} alt="AI Architecture" className="w-full aspect-[4/3] object-cover rounded-xl shadow-2xl border border-white/10" />
            </div>
          </div>
        </div>

        {/* Feature 3: Ecosystems - White */}
        <div className="w-full bg-white py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-9 flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 order-2 md:order-1">
              <img src={ecosystemImg} alt="Mission Ecosystems" className="w-full aspect-[4/3] object-cover rounded-xl shadow-lg" />
            </div>
            <div className="flex-1 order-1 md:order-2">
              <Activity className="w-10 h-10 text-[#84CC16] mb-6" />
              <h3 className="text-3xl font-bold text-black mb-6">Integrated Mission Ecosystems</h3>
              <p className="text-lg text-black/70 leading-relaxed">
                We connect sensing, intelligence, command, and response into unified capabilities that deliver greater situational awareness and mission effectiveness across interconnected domains.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 4: Critical Missions - Light Gray */}
        <div className="w-full bg-gray-100 py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-9 flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <Target className="w-10 h-10 text-[#84CC16] mb-6" />
              <h3 className="text-3xl font-bold text-black mb-6">Built for Critical Missions</h3>
              <p className="text-lg text-black/70 leading-relaxed">
                Every solution is designed, developed and manufactured for reliability, scalability, and performance in environments where outcomes have zero-error possibility.
              </p>
            </div>
            <div className="flex-1">
              <img src={criticalImg} alt="Critical Missions" className="w-full aspect-[4/3] object-cover rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPERTISE SECTION - DARK THEME */}
      <section className="py-24 bg-[#05080D] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-9">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl tracking-tight mb-6">Deep Technology. Real-World Impact.</h2>
            <p className="text-white/70">
              By combining multidisciplinary engineering with operational insight, we deliver solutions designed to address the evolving challenges of modern security. Our expertise spans:
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { name: "Electronic & Information Warfare", icon: Radio, desc: "Dominating the electromagnetic spectrum." },
              { name: "Aerospace & Space Fabrication", icon: Rocket, desc: "Precision engineering for high-altitude." },
              { name: "Quantum Sensing and Comms", icon: Zap, desc: "Next-gen secure intelligence." },
              { name: "Advanced Optics & Imaging", icon: Target, desc: "Persistent surveillance in any condition." },
              { name: "Command & Control Platforms", icon: Activity, desc: "Unified operational awareness." },
              { name: "Digital Twin Engineering", icon: Box, desc: "Simulated readiness and testing." },
              { name: "Maritime & Port Security", icon: Ship, desc: "Safeguarding critical waters." }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-[#84CC16]/30 transition-all group">
                <item.icon className="w-8 h-8 text-[#84CC16] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                <p className="text-sm text-white/50">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA SECTION - LIGHT THEME */}
      <section className="py-32 bg-white text-black border-t border-black/10">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 md:px-9 text-center">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#84CC16] mb-8">Ready to explore strategic collaboration?</h2>
          <h3 className="text-3xl sm:text-4xl font-light leading-snug mb-8">
            We believe the future belongs to organizations that can sense faster, decide with clarity, and act with precision. Sahana Defence is building the technologies that make that possible.
          </h3>
          <p className="text-xl sm:text-2xl text-black font-serif italic mb-10">
            "Engineering the future. Securing the mission."
          </p>
          <p className="text-black/60 mb-12 text-lg">
            Whether you are a defence organization, government agency, critical infrastructure operator, aerospace institution, or industry partner, we welcome the opportunity to discuss mission-driven technology solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
              className="px-8 py-4 bg-black text-white text-sm font-bold tracking-widest uppercase hover:bg-[#84CC16] hover:text-black transition-colors"
            >
              Contact Us
            </button>
            <button 
              onClick={() => window.open('/assets/Sahana_Defence_Corporate_Deck.pdf', '_blank')}
              className="px-8 py-4 bg-transparent border-2 border-black text-black text-sm font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-colors"
            >
              Explore Our Capabilities
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
