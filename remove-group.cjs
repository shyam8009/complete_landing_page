const fs = require('fs');

const files = [
  'src/pages/AnnualReturn/AnnualReturnPage.tsx',
  'src/pages/CodeOfConduct/CodeOfConductPage.tsx',
  'src/pages/CompositionOfCommittees/CompositionOfCommitteesPage.tsx',
  'src/pages/FinancialReports/FinancialReportsPage.tsx',
  'src/pages/GeneralMeetingNotice/GeneralMeetingNoticePage.tsx',
  'src/pages/GovernancePolicies/GovernancePoliciesPage.tsx',
  'src/pages/KeyManagerialPersonnel/KeyManagerialPersonnelPage.tsx',
  'src/pages/ShareholderInformation/ShareholderInformationPage.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content.replace(/className="group relative cursor-pointer"/g, 'className="relative cursor-pointer"');
  newContent = newContent.replace(/className="group relative cursor-default"/g, 'className="relative cursor-default"');
  
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Updated ${file}`);
  }
});
