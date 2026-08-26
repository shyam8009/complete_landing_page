import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    jobTitle: '',
    organization: '',
    country: '',
    message: '',
    captchaChecked: false,
  });

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      onClose();
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex flex-col bg-[#0B0F19] text-[#F9FAFB] overflow-y-auto overflow-x-hidden font-mono sm:font-sans"
        >
          {/* Top Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#1E293B] bg-[#0B0F19] sticky top-0 z-10">
            <div className="text-xl font-bold tracking-[2px] uppercase">
              <span className="text-white">Sahana</span> <span className="text-white/50">Defence</span>
            </div>
            <button 
              onClick={onClose}
              className="p-2 text-[#9CA3AF] hover:text-white hover:bg-[#111827] rounded-sm transition-colors flex items-center gap-2 text-sm uppercase tracking-widest"
            >
              <span className="hidden sm:inline">Close</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Main Grid */}
          <div className="flex-1 flex flex-col lg:flex-row w-full max-w-[1600px] mx-auto relative">
            
            {/* Left Column (Brand & Impact) */}
            <div className="w-full lg:w-1/2 p-6 md:p-12 lg:p-16 flex flex-col border-b lg:border-b-0 lg:border-r border-[#1E293B]">
              <div className="mb-10">
                <span className="inline-block px-3 py-1 bg-[#FF5A1F]/10 border border-[#FF5A1F]/30 text-[#FF5A1F] text-xs font-bold tracking-[2px] uppercase rounded-full mb-6">
                  Sovereign Autonomy & Hardware Integration
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-6 leading-[1.1]">
                  Direct Operations & Integration Inquiry
                </h1>
                <p className="text-[#9CA3AF] text-lg max-w-xl leading-relaxed">
                  Connect directly with our engineering, defense procurement, and mission deployment teams to evaluate sovereign AI stacks and autonomous platforms.
                </p>
              </div>

              {/* High-tech imagery container */}
              <div className="w-full h-[240px] sm:h-[320px] bg-[#111827] border border-[#1E293B] rounded-sm overflow-hidden mb-10 relative group">
                <div className="absolute inset-0 bg-[#FF5A1F]/5 mix-blend-overlay z-10"></div>
                <img 
                  src="/assets/dashboard_ui.jpg" 
                  alt="Autonomous Defense Hardware" 
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-700"
                />
                {/* HUD Elements */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#FF5A1F] z-20"></div>
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#FF5A1F] z-20"></div>
              </div>

              {/* Feature list */}
              <ul className="flex flex-col gap-5 mb-12">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-0.5 flex items-center justify-center bg-[#FF5A1F]/10 text-[#FF5A1F] rounded-sm shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <strong className="text-white block mb-1">GPS & Comms-Denied Navigation</strong>
                    <span className="text-[#9CA3AF] text-sm">Tested in electronic warfare environments.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-0.5 flex items-center justify-center bg-[#FF5A1F]/10 text-[#FF5A1F] rounded-sm shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <strong className="text-white block mb-1">Multi-Domain Swarming</strong>
                    <span className="text-[#9CA3AF] text-sm">Coordinated aerial, land, and maritime integration.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-0.5 flex items-center justify-center bg-[#FF5A1F]/10 text-[#FF5A1F] rounded-sm shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <strong className="text-white block mb-1">Rapid Deployment</strong>
                    <span className="text-[#9CA3AF] text-sm">Modular software configured in days, not months.</span>
                  </div>
                </li>
              </ul>

              <div className="mt-auto pt-8 border-t border-[#1E293B]">
                <blockquote className="text-xl font-medium text-white italic border-l-4 border-[#FF5A1F] pl-6 py-2">
                  "Protecting operational integrity through sovereign AI and mission-ready autonomy."
                </blockquote>
              </div>
            </div>

            {/* Right Column (Form) */}
            <div className="w-full lg:w-1/2 p-6 md:p-12 lg:p-16 bg-[#0B0F19]">
              <div className="max-w-xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 uppercase tracking-wide">Reach Out to Our Team</h2>
                <p className="text-[#9CA3AF] mb-10">Connect with engineering & procurement.</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Full Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-[#9CA3AF] uppercase tracking-widest">Full Name <span className="text-[#FF5A1F]">*</span></label>
                    <input 
                      type="text" 
                      required
                      placeholder="Introduce yourself"
                      className="w-full bg-[#111827] border border-[#1E293B] text-white px-4 py-4 rounded-sm focus:outline-none focus:border-[#FF5A1F] focus:ring-1 focus:ring-[#FF5A1F] transition-all placeholder:text-[#4B5563]"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    />
                  </div>

                  {/* Work Email */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-[#9CA3AF] uppercase tracking-widest">Work E-mail <span className="text-[#FF5A1F]">*</span></label>
                    <input 
                      type="email" 
                      required
                      placeholder="name@organization.gov / company.com"
                      className="w-full bg-[#111827] border border-[#1E293B] text-white px-4 py-4 rounded-sm focus:outline-none focus:border-[#FF5A1F] focus:ring-1 focus:ring-[#FF5A1F] transition-all placeholder:text-[#4B5563]"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  {/* Job Title & Organization */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-[#9CA3AF] uppercase tracking-widest">Job Title / Rank <span className="text-[#FF5A1F]">*</span></label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g., Chief Engineer, Commander"
                        className="w-full bg-[#111827] border border-[#1E293B] text-white px-4 py-4 rounded-sm focus:outline-none focus:border-[#FF5A1F] focus:ring-1 focus:ring-[#FF5A1F] transition-all placeholder:text-[#4B5563]"
                        value={formData.jobTitle}
                        onChange={(e) => setFormData({...formData, jobTitle: e.target.value})}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-[#9CA3AF] uppercase tracking-widest">Organization Name <span className="text-[#FF5A1F]">*</span></label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g., Defense Ministry, OEM"
                        className="w-full bg-[#111827] border border-[#1E293B] text-white px-4 py-4 rounded-sm focus:outline-none focus:border-[#FF5A1F] focus:ring-1 focus:ring-[#FF5A1F] transition-all placeholder:text-[#4B5563]"
                        value={formData.organization}
                        onChange={(e) => setFormData({...formData, organization: e.target.value})}
                      />
                    </div>
                  </div>

                  {/* Country */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-[#9CA3AF] uppercase tracking-widest">Country / Region <span className="text-[#FF5A1F]">*</span></label>
                    <div className="relative">
                      <select 
                        required
                        className="w-full bg-[#111827] border border-[#1E293B] text-white px-4 py-4 rounded-sm focus:outline-none focus:border-[#FF5A1F] focus:ring-1 focus:ring-[#FF5A1F] transition-all appearance-none"
                        value={formData.country}
                        onChange={(e) => setFormData({...formData, country: e.target.value})}
                      >
                        <option value="" disabled>Select Country...</option>
                        <option value="IN">India</option>
                        <option value="US">United States</option>
                        <option value="UK">United Kingdom</option>
                        <option value="AU">Australia</option>
                        <option value="JP">Japan</option>
                        <option value="OTHER">Other / International</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#9CA3AF]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    </div>
                  </div>

                  {/* How Can We Help */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-[#9CA3AF] uppercase tracking-widest">How Can We Help? <span className="text-[#FF5A1F]">*</span></label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="Describe platform specs, integration needs, or tactical scope..."
                      className="w-full bg-[#111827] border border-[#1E293B] text-white px-4 py-4 rounded-sm focus:outline-none focus:border-[#FF5A1F] focus:ring-1 focus:ring-[#FF5A1F] transition-all placeholder:text-[#4B5563] resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  {/* Captcha */}
                  <div className="mt-4 p-4 border border-[#1E293B] bg-[#111827] rounded-sm flex items-center gap-4">
                    <input 
                      type="checkbox" 
                      id="captcha" 
                      required
                      className="w-5 h-5 accent-[#FF5A1F] cursor-pointer"
                      checked={formData.captchaChecked}
                      onChange={(e) => setFormData({...formData, captchaChecked: e.target.checked})}
                    />
                    <label htmlFor="captcha" className="text-[#9CA3AF] text-sm cursor-pointer flex-1 select-none">
                      I'm not a robot (reCAPTCHA v3 Integration)
                    </label>
                    <div className="flex flex-col items-center">
                      <svg className="w-8 h-8 text-[#9CA3AF]/30" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                      <span className="text-[9px] text-[#9CA3AF]/50 mt-1">reCAPTCHA</span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    className="mt-4 w-full bg-[#FF5A1F] hover:bg-[#e04e17] text-white font-bold text-[15px] uppercase tracking-[2px] py-5 rounded-sm transition-all duration-300 shadow-[0_0_20px_rgba(255,90,31,0.2)] hover:shadow-[0_0_30px_rgba(255,90,31,0.4)]"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-auto border-t border-[#1E293B] bg-[#0B0F19] py-6 px-6 text-[#9CA3AF] text-xs flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Security Standards</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Supplier Portal</a>
            </div>
            <div>
              &copy; 2026 Sahana Defence Inc.
            </div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
