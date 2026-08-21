import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroImg from '@/imports/corporate_house_2.jpg'; // Using placeholder
import { TechCTA } from '@/components/TechCTA';

// ── Data ─────────────────────────────────────────────────────────────────────

const AGM_DOCUMENTS = [
  { name: "AGM Notice 28-09-2024", date: "28-09-2024" },
  { name: "AGM Notice 30-09-2022", date: "30-09-2022" },
  { name: "AGM-Notice-30-09-23", date: "30-09-2023" },
  { name: "AGM Notice 30-11-2021", date: "30-11-2021" },
];

const EGM_DOCUMENTS = [
  { name: "EGM Notice 06-12-2024", date: "06-12-2024" },
  { name: "EGM Notice 04-12-2024", date: "04-12-2024" },
  { name: "EGM Notice 19-11-2024", date: "19-11-2024" },
  { name: "EGM Notice 24-10-2024", date: "24-10-2024" },
  { name: "EGM Notice 04-10-2024", date: "04-10-2024" },
  { name: "EGM Notice 30-08-2024", date: "30-08-2024" },
  { name: "EGM Notice 25-05-2024", date: "25-05-2024" },
  { name: "EGM Notice 09-05-2024", date: "09-05-2024" },
  { name: "EGM Notice 12-03-2025", date: "12-03-2025" },
];

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

// ── Hero Section ─────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative w-full min-h-[75vh] md:min-h-[85vh] overflow-hidden bg-black text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.25, 1, 0.5, 1] }}
        className="absolute inset-0"
      >
        <div
          className="w-full h-full bg-slate-900"
          style={{ 
            backgroundImage: `url('/src/imports/magnific_professional-outdoor-prod_y6xDQjJPW9.jpeg')`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            filter: "grayscale(50%) brightness(0.2)"
          }}
        />
      </motion.div>

      {/* Grid Texture Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: "linear-gradient(rgba(132,204,22,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(132,204,22,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-black/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent pointer-events-none" />

      {/* Lime accent top line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#84CC16] z-10" />

      {/* Content */}
      <div className="relative z-20 h-full min-h-[75vh] md:min-h-[85vh] flex flex-col justify-center pt-32 md:pt-40 px-6 sm:px-10 md:px-16 lg:px-20 pb-16 md:pb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-black/50 backdrop-blur-md mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse" />
            <span className="text-[11px] font-bold tracking-[2.5px] text-[#84CC16] uppercase">
              INVESTOR RELATIONS / GENERAL MEETING NOTICE
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight tracking-wider uppercase mb-6 leading-[0.95]"
          >
            GENERAL MEETING <br />
            <span className="font-bold">NOTICE</span>
          </motion.h1>

          {/* CTA */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-12">
            <TechCTA>
              CONTACT INVESTOR RELATIONS
            </TechCTA>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ── Document Card ──────────────────────────────────────────────────────────────

function DocumentCard({ name, date, index }: { name: string; date: string; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative cursor-default"
    >
      {/* Card */}
      <div
        className={`relative flex items-center justify-between gap-4 px-5 sm:px-7 py-5 sm:py-6 rounded-sm transition-all duration-300 ${
          hovered
            ? "bg-[#84CC16]/[0.04] border-[#84CC16]/30 shadow-lg shadow-[#84CC16]/5"
            : "bg-white border-slate-200 shadow-sm hover:shadow-md"
        } border`}
      >
        {/* HUD Corner Accents */}
        <div className={`absolute top-0 left-0 w-3 h-3 border-t-[1.5px] border-l-[1.5px] transition-colors duration-300 ${hovered ? "border-[#84CC16]/70" : "border-slate-300"}`} />
        <div className={`absolute top-0 right-0 w-3 h-3 border-t-[1.5px] border-r-[1.5px] transition-colors duration-300 ${hovered ? "border-[#84CC16]/70" : "border-slate-300"}`} />
        <div className={`absolute bottom-0 left-0 w-3 h-3 border-b-[1.5px] border-l-[1.5px] transition-colors duration-300 ${hovered ? "border-[#84CC16]/70" : "border-slate-300"}`} />
        <div className={`absolute bottom-0 right-0 w-3 h-3 border-b-[1.5px] border-r-[1.5px] transition-colors duration-300 ${hovered ? "border-[#84CC16]/70" : "border-slate-300"}`} />

        {/* Left side */}
        <div className="flex items-center gap-4 sm:gap-6 flex-1 min-w-0">
          {/* Index */}
          <span className={`font-mono text-[11px] tracking-[2px] transition-colors duration-300 shrink-0 ${
            hovered ? "text-[#84CC16]" : "text-slate-400"
          }`}>
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Divider */}
          <div className={`w-px h-8 transition-colors duration-300 shrink-0 ${hovered ? "bg-[#84CC16]/30" : "bg-slate-200"}`} />

          {/* Name */}
          <div className="flex-1 min-w-0">
            <p className={`text-sm sm:text-[16px] font-bold leading-snug transition-colors duration-300 ${
              hovered ? "text-slate-900" : "text-slate-700"
            }`}>
              {name}
            </p>
            {/* Keeping date as category if needed, else just visually balance */}
          </div>
        </div>

        {/* Right side — Download CTA */}
        <div className="shrink-0 ml-2 sm:ml-4">
          <TechCTA theme="dark" className="!py-2.5 sm:!py-3 !px-4 sm:!px-6 min-h-[38px]">
            <span className="hidden sm:inline">Download</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:ml-2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </TechCTA>
        </div>
      </div>
    </motion.div>
  );
}

// ── Tabbed Documents Section ───────────────────────────────────────────────────

function DocumentsSection() {
  const [activeTab, setActiveTab] = useState<'AGM' | 'EGM'>('AGM');

  return (
    <section className="relative bg-white py-16 md:py-24" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Background grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 sm:px-10">

        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="mb-12 text-center md:text-left"
        >
          {/* Tag */}
          <motion.div variants={fadeUp} className="flex items-center justify-center md:justify-start gap-3 mb-8">
            <span className="font-mono text-[11px] text-[#84CC16] tracking-[2px]">01</span>
            <div className="w-8 h-[1px] bg-[#84CC16]" />
            <span className="font-mono text-[11px] text-slate-500 tracking-[2px] uppercase">DOCUMENTS</span>
          </motion.div>

          {/* Title row */}
          <motion.div variants={fadeUp} className="mb-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-slate-900 tracking-wide leading-tight mb-4">
              Latest <span className="font-bold">Updates</span>
            </h2>
            <p className="text-slate-500 font-light max-w-2xl mx-auto md:mx-0">
              Providing Our Valued Investors with Essential Updates and Strategic Insights to Stay Informed on the Innovations, Achievements, and Future Directions Shaping Our Success.
            </p>
          </motion.div>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 sm:gap-8 border-b border-slate-200 mb-10">
          <button
            onClick={() => setActiveTab('AGM')}
            className={`pb-4 text-sm sm:text-base font-bold transition-all duration-300 relative ${
              activeTab === 'AGM' ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            Annual General Meeting
            {activeTab === 'AGM' && (
              <motion.div layoutId="activeTabIndicator" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#84CC16]" />
            )}
          </button>
          
          <button
            onClick={() => setActiveTab('EGM')}
            className={`pb-4 text-sm sm:text-base font-bold transition-all duration-300 relative ${
              activeTab === 'EGM' ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            Extraordinary General Meeting
            {activeTab === 'EGM' && (
              <motion.div layoutId="activeTabIndicator" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#84CC16]" />
            )}
          </button>
        </div>

        {/* Documents List */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-3"
            >
              {(activeTab === 'AGM' ? AGM_DOCUMENTS : EGM_DOCUMENTS).map((doc, i) => (
                <DocumentCard key={doc.name} name={doc.name} date={doc.date} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// ── CTA Section ──────────────────────────────────────────────────────────────

function CTASection() {
  return (
    <section className="relative bg-[#050505] py-20 md:py-28 overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(132,204,22,0.04)_0%,transparent_60%)] pointer-events-none" />
      
      <div className="relative z-10 max-w-[1100px] mx-auto px-6 sm:px-10">

        {/* Top divider with accent */}
        <div className="h-px bg-gradient-to-r from-[#84CC16]/30 via-white/8 to-transparent mb-16" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20"
        >
          {/* Left — Text */}
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-[11px] text-[#84CC16] tracking-[2px]">02</span>
              <div className="w-8 h-[1px] bg-[#84CC16]" />
              <span className="font-mono text-[11px] text-white/30 tracking-[2px] uppercase">Contact</span>
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-white tracking-wide uppercase mb-6 leading-tight">
              Investor <span className="font-bold">Relations</span>
            </h3>
            <p className="text-sm md:text-base font-light text-white/45 leading-relaxed max-w-md mb-10">
              For detailed financial inquiries, analyst coverage, or shareholder documentation, 
              our investor relations team is available to assist.
            </p>

            <TechCTA>
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              CONTACT INVESTOR RELATIONS
            </TechCTA>
          </motion.div>

          {/* Right — Contact Cards */}
          <motion.div variants={fadeUp} className="flex flex-col gap-6">

            {/* Email Card */}
            <div className="relative group p-6 rounded-sm bg-white/[0.02] border border-white/[0.06] hover:border-[#84CC16]/20 transition-all duration-300">
              <div className="absolute top-0 left-0 w-3 h-3 border-t-[1.5px] border-l-[1.5px] border-[#84CC16]/40" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-[1.5px] border-r-[1.5px] border-[#84CC16]/40" />
              
              <p className="font-mono text-[10px] text-[#84CC16] tracking-[2px] uppercase mb-3">Email</p>
              <a
                href="mailto:investors@sahanadefence.com"
                className="text-base md:text-lg text-white hover:text-[#84CC16] transition-colors duration-300 border-b border-white/15 pb-0.5"
              >
                investors@sahanadefence.com
              </a>
            </div>

            {/* Address Card */}
            <div className="relative group p-6 rounded-sm bg-white/[0.02] border border-white/[0.06] hover:border-[#84CC16]/20 transition-all duration-300">
              <div className="absolute top-0 left-0 w-3 h-3 border-t-[1.5px] border-l-[1.5px] border-[#84CC16]/40" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-[1.5px] border-r-[1.5px] border-[#84CC16]/40" />
              
              <p className="font-mono text-[10px] text-[#84CC16] tracking-[2px] uppercase mb-3">Registered Office</p>
              <p className="text-sm text-white/50 leading-relaxed">
                Sahana Defence Limited<br />
                Panjrapol, Ambawadi<br />
                Ahmedabad – 380 015, Gujarat, India
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Legal footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-20 pt-8 border-t border-white/[0.06]"
        >
          <p className="font-mono text-[10px] text-white tracking-[1.5px] uppercase leading-relaxed text-center">
            Sahana Defence Limited — All governance documents are subject to periodic review and Board approval. 
            For the most current versions, contact the Company Secretary.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ── Page Export ───────────────────────────────────────────────────────────────

export default function GeneralMeetingNoticePage() {
  return (
    <div className="bg-[#050505] text-white overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Hero />
      {/* No Mission Section needed for this page as per PDF */}
      <DocumentsSection />
      <CTASection />
    </div>
  );
}
