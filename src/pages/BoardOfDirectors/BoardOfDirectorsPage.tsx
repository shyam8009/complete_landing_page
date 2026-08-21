import { motion } from 'framer-motion';
import heroImg from '@/imports/corporate_house_2.jpg'; // Using placeholder
import { TechCTA } from '@/components/TechCTA';

// ── Data ─────────────────────────────────────────────────────────────────────

const BOARD_MEMBERS = [
  { sr: "1.", name: "Mr. Pratik Ramjibhai Kakadiya", designation: "Managing Director & Chairman" },
  { sr: "2.", name: "Ms. Hetal Pratikbhai Kakadiya", designation: "Director" },
  { sr: "3.", name: "Mr. Jatinkumar Dhirajlal Jogani", designation: "Chief Financial Officer" },
  { sr: "4.", name: "Mr. Anuja Jain", designation: "Non- Executive Independent Director" },
  { sr: "5.", name: "Mr. Dhawal Akhilesh Deopura", designation: "Non- Executive Independent Director" },
  { sr: "6.", name: "Mr. Shrikant Rashmikanth Khatri", designation: "Company Secretary & Compliance Officer" },
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
              INVESTOR RELATIONS / BOARD OF DIRECTORS
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight tracking-wider uppercase mb-6 leading-[0.95]"
          >
            BOARD OF <br />
            <span className="font-bold">DIRECTORS</span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg md:text-xl font-light text-white/60 mb-10 max-w-2xl leading-relaxed"
          >
            Leadership guiding our strategic vision and corporate governance.
          </motion.p>

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

// ── Table Section ───────────────────────────────────────────────────

function BoardTableSection() {
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
            <span className="font-mono text-[11px] text-[#CFA438] tracking-[2px]">01</span>
            <div className="w-8 h-[1px] bg-[#CFA438]" />
            <span className="font-mono text-[11px] text-slate-500 tracking-[2px] uppercase">DOCUMENTS</span>
          </motion.div>

          {/* Title row */}
          <motion.div variants={fadeUp} className="mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-[#8D8239] tracking-wide leading-tight mb-4">
              Latest <span className="font-bold">Updates</span>
            </h2>
            <p className="text-slate-500 font-light max-w-2xl mx-auto md:mx-0">
              Providing Our Valued Investors with Essential Updates and Strategic Insights to Stay Informed on the Innovations, Achievements, and Future Directions Shaping Our Success.
            </p>
          </motion.div>
        </motion.div>

        {/* Board of Directors Table */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
          className="w-full"
        >
          <h3 className="text-sm font-bold text-slate-700 tracking-wide uppercase mb-4">
            BOARD OF DIRECTORS
          </h3>
          
          <div className="overflow-x-auto w-full border border-slate-700/80 rounded-sm">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-700/80">
                  <th className="py-4 px-6 font-bold text-slate-700 text-sm w-[10%] border-r border-slate-700/80">Sr No</th>
                  <th className="py-4 px-6 font-bold text-slate-700 text-sm w-[45%] border-r border-slate-700/80">Name of the Director</th>
                  <th className="py-4 px-6 font-bold text-slate-700 text-sm w-[45%]">Designation</th>
                </tr>
              </thead>
              <tbody>
                {BOARD_MEMBERS.map((member, i) => (
                  <tr key={i} className="border-b border-slate-700/80 last:border-b-0 hover:bg-slate-50 transition-colors duration-150">
                    <td className="py-4 px-6 text-slate-600 text-sm border-r border-slate-700/80">{member.sr}</td>
                    <td className="py-4 px-6 text-slate-600 text-sm border-r border-slate-700/80">{member.name}</td>
                    <td className="py-4 px-6 text-slate-600 text-sm">{member.designation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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

export default function BoardOfDirectorsPage() {
  return (
    <div className="bg-[#050505] text-white overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Hero />
      <BoardTableSection />
      <CTASection />
    </div>
  );
}
