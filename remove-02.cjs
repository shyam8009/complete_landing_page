const fs = require('fs');

const files = [
  'src/pages/AnnualReturn/AnnualReturnPage.tsx',
  'src/pages/CodeOfConduct/CodeOfConductPage.tsx',
  'src/pages/CompositionOfCommittees/CompositionOfCommitteesPage.tsx',
  'src/pages/FinancialReports/FinancialReportsPage.tsx',
  'src/pages/GeneralMeetingNotice/GeneralMeetingNoticePage.tsx',
  'src/pages/GovernancePolicies/GovernancePoliciesPage.tsx',
  'src/pages/KeyManagerialPersonnel/KeyManagerialPersonnelPage.tsx',
  'src/pages/ShareholderInformation/ShareholderInformationPage.tsx',
  'src/pages/BoardOfDirectors/BoardOfDirectorsPage.tsx',
  'src/pages/KeyContact/KeyContactPage.tsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // We want to remove: <span className="font-mono text-[11px] text-[#84CC16] tracking-[2px]">02</span>
    // And possibly the gap or adjust it, but removing just the span is enough.
    // The exact regex:
    const regex = /<span className="font-mono text-\[11px\] text-\[\#84CC16\] tracking-\[2px\]">02<\/span>\s*<div className="w-8 h-\[1px\] bg-\[\#84CC16\]" \/>/g;
    
    let newContent = content.replace(regex, '<div className="w-8 h-[1px] bg-[#84CC16]" />');
    
    if (content !== newContent) {
      fs.writeFileSync(file, newContent, 'utf8');
      console.log(`Updated ${file}`);
    } else {
      console.log(`No changes made to ${file} - pattern not found.`);
    }
  } else {
    console.log(`File not found: ${file}`);
  }
});
