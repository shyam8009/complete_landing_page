const fs = require('fs');

const files = [
  'src/pages/IoT/components/UseCasesSection.tsx',
  'src/pages/IoT/components/ValuePropositionSection.tsx',
  'src/pages/IoT/components/SubsystemsSection.tsx',
  'src/pages/IoT/components/ClosingSection.tsx'
];

files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  c = c.replace(/className="py-24 /g, 'className="section-padding ');
  c = c.replace(/className="bg-black py-24 /g, 'className="section-padding bg-black ');
  fs.writeFileSync(f, c);
});
