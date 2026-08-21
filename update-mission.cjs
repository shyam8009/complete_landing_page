const fs = require('fs');
const path = require('path');

const files = [
  'src/pages/AnnualReturn/AnnualReturnPage.tsx',
  'src/pages/CodeOfConduct/CodeOfConductPage.tsx',
  'src/pages/CompositionOfCommittees/CompositionOfCommitteesPage.tsx',
  'src/pages/GovernancePolicies/GovernancePoliciesPage.tsx',
  'src/pages/KeyManagerialPersonnel/KeyManagerialPersonnelPage.tsx',
  'src/pages/ShareholderInformation/ShareholderInformationPage.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Extract the text inside the <motion.p> tag of MissionSection
  const missionRegex = /function MissionSection\(\) \{[\s\S]*?<motion\.p[^>]*>([\s\S]*?)<\/motion\.p>[\s\S]*?<\/section>\s*\}/;
  
  const match = content.match(missionRegex);
  if (match) {
    let missionText = match[1].trim();
    
    // Convert text-[#84CC16] or text-white to dark theme equivalent if needed
    // The existing text usually has <span className="text-[#84CC16] font-normal">
    missionText = missionText.replace(/text-\[\#84CC16\] font-normal/g, 'text-[#84CC16] font-medium');
    missionText = missionText.replace(/text-white\/85/g, 'text-slate-800');
    
    const newMissionSection = `function MissionSection() {
  return (
    <section className="relative bg-slate-50 py-16 md:py-24 border-b border-slate-200" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Background grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="relative z-10 max-w-[1100px] mx-auto px-6 sm:px-10"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
          <div className="w-8 h-[2px] bg-[#84CC16]" />
          <h3 className="text-[#84CC16] font-mono text-[11px] tracking-[2.5px] uppercase">Our Purpose</h3>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="text-xl sm:text-2xl md:text-3xl font-extralight text-slate-700 leading-relaxed tracking-wide max-w-4xl"
        >
          ${missionText}
        </motion.p>
      </motion.div>
    </section>
  );
}`;

    content = content.replace(missionRegex, newMissionSection);
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  } else {
    console.log(`Could not find MissionSection in ${file}`);
  }
});
