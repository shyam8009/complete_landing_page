import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TechCTA } from './TechCTA';

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
          className="fixed inset-0 z-[100] flex flex-col bg-black text-white overflow-y-auto overflow-x-hidden font-sans"
        >
          {/* Top Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-black sticky top-0 z-10">
            <img src="/assets/logo-sahana.png" alt="Sahana Defence" className="h-8 w-auto object-contain" />
            <button 
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-white rounded-none transition-colors flex items-center gap-2 text-sm uppercase tracking-widest"
            >
              <span className="hidden sm:inline">Close</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Main Grid */}
          <div className="flex-1 flex flex-col lg:flex-row w-full max-w-[1600px] mx-auto relative">
            
            {/* Left Column (Brand & Impact) */}
            <div className="w-full lg:w-1/2 p-6 md:p-12 lg:p-16 flex flex-col border-b lg:border-b-0 lg:border-r border-neutral-800">
              <div className="mb-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                  Mission-Critical Aerospace & Defense Solutions
                </h1>
                <p className="text-neutral-400 text-lg max-w-xl leading-relaxed">
                  Connect with our engineering and procurement teams to discuss heavy-lift UAV platforms, precision aerospace manufacturing, and tactical defense integration.
                </p>
              </div>

              {/* High-tech imagery container */}
              <div className="w-full h-[240px] sm:h-[320px] bg-neutral-950 border border-neutral-800 overflow-hidden mb-10 relative group">
                <img 
                  src="/assets/contact_modal_hero.jpeg" 
                  alt="Aerospace Hardware" 
                  className="w-full h-full object-cover"
                />
                {/* HUD Elements */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white z-20"></div>
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white z-20"></div>
              </div>

              {/* Feature list */}
              <ul className="flex flex-col gap-6 mb-12">
                <li className="flex items-start gap-4">
                  <div className="w-5 h-5 mt-1 flex items-center justify-center text-white shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <strong className="text-white block text-lg font-medium">High-Payload UAV Systems</strong>
                    <span className="text-neutral-400 text-sm block mt-1">Engineered for logistics and tactical deployment.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-5 h-5 mt-1 flex items-center justify-center text-white shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <strong className="text-white block text-lg font-medium">Precision Aerospace Engineering</strong>
                    <span className="text-neutral-400 text-sm block mt-1">Built to rigorous military and defense standards.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-5 h-5 mt-1 flex items-center justify-center text-white shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <strong className="text-white block text-lg font-medium">Strategic Integration</strong>
                    <span className="text-neutral-400 text-sm block mt-1">Custom platform development for specialized mission requirements.</span>
                  </div>
                </li>
              </ul>

              <div className="mt-auto pt-8 border-t border-neutral-800">
                <blockquote className="text-xl font-medium text-white italic border-l-2 border-white pl-6 py-2">
                  "Engineering excellence for modern defense and aerospace."
                </blockquote>
              </div>
            </div>

            {/* Right Column (Form) */}
            <div className="w-full lg:w-1/2 p-6 md:p-12 lg:p-16 bg-black">
              <div className="max-w-xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 uppercase tracking-wide">Reach Out to Our Team</h2>
                <p className="text-neutral-400 mb-10">Connect with engineering & procurement.</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  {/* Full Name */}
                  <div className="flex flex-col gap-2 relative">
                    <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Full Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Introduce yourself"
                      className="w-full bg-transparent border-b border-neutral-600 text-white px-0 py-3 rounded-none focus:outline-none focus:border-white transition-all placeholder:text-neutral-600"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    />
                  </div>

                  {/* Work Email */}
                  <div className="flex flex-col gap-2 relative">
                    <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Work E-mail *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="name@organization.gov / company.com"
                      className="w-full bg-transparent border-b border-neutral-600 text-white px-0 py-3 rounded-none focus:outline-none focus:border-white transition-all placeholder:text-neutral-600"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  {/* Job Title & Organization */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2 relative">
                      <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Job Title / Rank *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g., Chief Engineer, Commander"
                        className="w-full bg-transparent border-b border-neutral-600 text-white px-0 py-3 rounded-none focus:outline-none focus:border-white transition-all placeholder:text-neutral-600"
                        value={formData.jobTitle}
                        onChange={(e) => setFormData({...formData, jobTitle: e.target.value})}
                      />
                    </div>
                    <div className="flex flex-col gap-2 relative">
                      <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Organization Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g., Defense Ministry, OEM"
                        className="w-full bg-transparent border-b border-neutral-600 text-white px-0 py-3 rounded-none focus:outline-none focus:border-white transition-all placeholder:text-neutral-600"
                        value={formData.organization}
                        onChange={(e) => setFormData({...formData, organization: e.target.value})}
                      />
                    </div>
                  </div>

                  {/* Country */}
                  <div className="flex flex-col gap-2 relative">
                    <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Country / Region *</label>
                    <div className="relative">
                      <select 
                        required
                        className="w-full bg-transparent border-b border-neutral-600 text-white px-0 py-3 rounded-none focus:outline-none focus:border-white transition-all appearance-none"
                        value={formData.country}
                        onChange={(e) => setFormData({...formData, country: e.target.value})}
                      >
                        <option value="" disabled className="bg-black text-white">Select Country...</option>
                        <option value="IN" className="bg-black text-white">India</option>
                        <option value="US" className="bg-black text-white">United States</option>
                        <option value="UK" className="bg-black text-white">United Kingdom</option>
                        <option value="AU" className="bg-black text-white">Australia</option>
                        <option value="JP" className="bg-black text-white">Japan</option>
                        <option value="OTHER" className="bg-black text-white">Other / International</option>
                      </select>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-white">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    </div>
                  </div>

                  {/* How Can We Help */}
                  <div className="flex flex-col gap-2 relative">
                    <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest">How Can We Help? *</label>
                    <textarea 
                      required
                      rows={3}
                      placeholder="Describe platform specs, integration needs, or tactical scope..."
                      className="w-full bg-transparent border-b border-neutral-600 text-white px-0 py-3 rounded-none focus:outline-none focus:border-white transition-all placeholder:text-neutral-600 resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  {/* Captcha */}
                  <div className="mt-2 p-4 border border-neutral-800 bg-[#111111] rounded-none flex items-center gap-4 grayscale">
                    <input 
                      type="checkbox" 
                      id="captcha" 
                      required
                      className="w-5 h-5 cursor-pointer accent-white"
                      checked={formData.captchaChecked}
                      onChange={(e) => setFormData({...formData, captchaChecked: e.target.checked})}
                    />
                    <label htmlFor="captcha" className="text-neutral-400 text-sm cursor-pointer flex-1 select-none">
                      I'm not a robot (reCAPTCHA v3)
                    </label>
                    <div className="flex flex-col items-center">
                      <svg className="w-8 h-8 text-neutral-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                      <span className="text-[9px] text-neutral-600 mt-1">reCAPTCHA</span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-6 w-full flex"><TechCTA className="w-full">Submit Inquiry</TechCTA></div>
                </form>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-auto border-t border-neutral-800 bg-black py-6 px-6 text-neutral-500 text-xs flex flex-col sm:flex-row justify-between items-center gap-4">
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




