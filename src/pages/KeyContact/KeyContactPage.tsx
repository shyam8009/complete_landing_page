import { motion } from 'framer-motion';
import heroImg from '@/imports/corporate_house_1.jpg'; // Using placeholder
import { TechCTA } from '@/components/TechCTA';

// ── Animations ───────────────────────────────────────────────────────────────

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
              INVESTOR RELATIONS / KEY CONTACT
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight tracking-wider uppercase mb-6 leading-[0.95]"
          >
            KEY <br />
            <span className="font-bold">CONTACT</span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg md:text-xl font-light text-white/60 mb-10 max-w-2xl leading-relaxed"
          >
            Direct communication channels for our valued investors and shareholders.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// ── Content Section ───────────────────────────────────────────────────

function ContactContentSection() {
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
          className="mb-16 text-center"
        >
          {/* Tag */}
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-8">
            <span className="font-mono text-[11px] text-[#CFA438] tracking-[2px]">01</span>
            <div className="w-8 h-[1px] bg-[#CFA438]" />
            <span className="font-mono text-[11px] text-slate-500 tracking-[2px] uppercase">DOCUMENTS</span>
          </motion.div>

          {/* Title row */}
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-[#8D8239] tracking-wide leading-tight mb-4">
              Latest <span className="font-bold">Updates</span>
            </h2>
            <p className="text-slate-500 font-light max-w-2xl mx-auto">
              Providing Our Valued Investors with Essential Updates and Strategic Insights to Stay Informed on the Innovations, Achievements, and Future Directions Shaping Our Success.
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Information Blocks */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="max-w-3xl mx-auto flex flex-col gap-12"
        >
          {/* Block 1: Company Info */}
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            <h3 className="text-[17px] font-bold text-slate-700">
              Sahana Defence Limited (formerly known as Softvan Private Limited)
            </h3>
            <div className="text-[15px] leading-relaxed text-slate-500 font-light flex flex-col gap-1">
              <p>CIN- U72200GJ2020PLC113564</p>
              <p>Registered Office- 3rd Floor, 305, Sigma Legacy,</p>
              <p>Nr. Vikram Sarabhai Marg, Opp. Panjrapol, Ambawadi,</p>
              <p>Ahmedabad- 380015, Gujarat.</p>
            </div>
          </motion.div>

          {/* Block 2: Compliance Officer Info */}
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            <h3 className="text-[17px] font-bold text-slate-700">
              For all compliance matters and Investor's Complaint, please contact our compliance officer
            </h3>
            <div className="text-[15px] leading-relaxed text-slate-500 font-light flex flex-col gap-1">
              <p>Mr. Shrikant Rashmikant Khatri</p>
              <p>Company Secretary and Compliance officer</p>
              <p>Redressal of Investor's Complaints</p>
              <p>Mobile: <a href="tel:+919601676705" className="hover:text-[#8D8239] transition-colors">+91 9601676705</a></p>
              <p>Email: <a href="mailto:cs@softvan.in" className="hover:text-[#8D8239] transition-colors">cs@softvan.in</a></p>
            </div>
          </motion.div>
        </motion.div>

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
              <span className="font-mono text-[11px] text-white/30 tracking-[2px] uppercase">Reach Out</span>
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-white tracking-wide uppercase mb-6 leading-tight">
              Investor <span className="font-bold">Relations</span>
            </h3>
            <p className="text-sm md:text-base font-light text-white/45 leading-relaxed max-w-md mb-10">
              Our dedicated investor relations team is ready to assist you with any inquiries regarding shareholder services, regulatory filings, or financial information.
            </p>
          </motion.div>

          {/* Right — Interactive Element / Map Placeholder */}
          <motion.div variants={fadeUp} className="flex flex-col gap-6 justify-center">
             <div className="relative w-full h-[250px] bg-white/[0.02] border border-white/[0.06] rounded-sm overflow-hidden group">
                <div className="absolute inset-0 bg-[url('/src/imports/magnific_professional-outdoor-prod_y6xDQjJPW9.jpeg')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500 filter grayscale" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                   <div className="w-12 h-12 rounded-full bg-[#84CC16]/10 flex items-center justify-center mb-4">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#84CC16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                     </svg>
                   </div>
                   <p className="text-white font-bold text-lg mb-1">Sahana HQ</p>
                   <p className="text-white/50 text-sm">Ahmedabad, Gujarat, India</p>
                </div>
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

export default function KeyContactPage() {
  return (
    <div className="bg-[#050505] text-white overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Hero />
      <ContactContentSection />
      <CTASection />
    </div>
  );
}
