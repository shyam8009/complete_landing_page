const fs = require('fs');

let content = fs.readFileSync('src/app/App.tsx', 'utf8');

// 1. Update click handler from navigate() to window.open() for document links
content = content.replace(
  `onClick={() => { setHoveredNav(null); if (navigate) navigate(link.url); }}`,
  `onClick={() => { setHoveredNav(null); window.open(link.url, '_blank'); }}`
);

// 2. Update AGM/EGM links to actual PDFs
content = content.replace(
  `{ text: 'AGM Notice 28-09-2024', url: '/investors/general-meeting-notice' },\r\n      { text: 'AGM Notice 30-09-2023', url: '/investors/general-meeting-notice' },\r\n      { text: 'EGM Notice 06-12-2024', url: '/investors/general-meeting-notice' },`,
  `{ text: 'AGM Notice 28-09-2024', url: '/documents/agm/AGM Notice 28-09-2024.pdf' },\r\n      { text: 'AGM Notice 30-09-2023', url: '/documents/agm/AGM-Notice-30-09-23.pdf' },\r\n      { text: 'EGM Notice 06-12-2024', url: '/documents/egm/EGM Notice 06-12-2024.pdf' },`
);

// 3. Update Code of Conduct links to actual PDFs
content = content.replace(
  `{ text: "Code of Conduct for Company's Personnel", url: '/investors/code-of-conduct-policies' },\r\n      { text: 'Code of Conduct \u2013 Independent Directors', url: '/investors/code-of-conduct-policies' },\r\n      { text: 'Fair Disclosure of UPSI', url: '/investors/code-of-conduct-policies' },`,
  `{ text: "Code of Conduct for Company's Personnel", url: "/documents/code-of-conduct/Code of Conduct for Company's Personnel.pdf" },\r\n      { text: 'Code of Conduct \u2013 Independent Directors', url: '/documents/code-of-conduct/Code of Conduct of Independent Directors.pdf' },\r\n      { text: 'Fair Disclosure of UPSI', url: '/documents/code-of-conduct/Fair Disclosure Of UPSI.pdf' },`
);

// 4. Update Annual Return links to actual PDFs
content = content.replace(
  `{ text: 'Form MGT 7 2023-24', url: '/investors/annual-return' },\r\n      { text: 'Form MGT 7A 2022-23', url: '/investors/annual-return' },\r\n      { text: 'Form MGT 7 2021-22', url: '/investors/annual-return' },`,
  `{ text: 'Form MGT 7 2023-24', url: '/documents/annual-returns/Form MGT 7 2023-24.pdf' },\r\n      { text: 'Form MGT 7A 2022-23', url: '/documents/annual-returns/Form MGT 7A 2022-23.pdf' },\r\n      { text: 'Form MGT 7 2021-22', url: '/documents/annual-returns/Form MGT 7 2021-22.pdf' },`
);

// 5. Update Policies links to actual PDFs
content = content.replace(
  `{ text: 'Nomination & Remuneration Policy', url: '/investors/policies' },\r\n      { text: 'Risk Management Policy', url: '/investors/policies' },\r\n      { text: 'Anti Corruption & Anti Bribery Policy', url: '/investors/policies' },`,
  `{ text: 'Nomination & Remuneration Policy', url: '/documents/policies/Nomination And Remuneration Policy.pdf' },\r\n      { text: 'Risk Management Policy', url: '/documents/policies/Risk Management Policy.pdf' },\r\n      { text: 'Anti Corruption & Anti Bribery Policy', url: '/documents/policies/Anti Corruption Anti Bribery Policy.pdf' },`
);

// 6. Update Annual Reports links to actual PDFs
content = content.replace(
  `{ text: 'Annual Report 2023-24', url: '/investors/annual-reports' },\r\n      { text: 'Annual Report 2022-23', url: '/investors/annual-reports' },\r\n      { text: 'Annual Report 2021-22', url: '/investors/annual-reports' },`,
  `{ text: 'Annual Report 2023-24', url: '/documents/annual-reports/annual-report_2023-24.pdf' },\r\n      { text: 'Annual Report 2022-23', url: '/documents/annual-reports/annual-report_2022-23.pdf' },\r\n      { text: 'Annual Report 2021-22', url: '/documents/annual-reports/final_ar_2021-22.pdf' },`
);

// 7. Update Shareholder Info links to actual PDFs
content = content.replace(
  `{ text: 'Softvan Limited \u2013 FY 2024-25', url: '/investors/shareholder-info' },\r\n      { text: 'Softvan Labs \u2013 FY 2024-25', url: '/investors/shareholder-info' },\r\n      { text: 'Sourceved Technologies \u2013 FY 2024-25', url: '/investors/shareholder-info' },`,
  `{ text: 'Softvan Limited \u2013 FY 2024-25', url: '/documents/shareholders/Softvan Limited/Financials for FY 2024-25.pdf' },\r\n      { text: 'Softvan Labs \u2013 FY 2024-25', url: '/documents/shareholders/Softvan Labs Private Limited/Financials for FY 2024-25.pdf' },\r\n      { text: 'Sourceved Technologies \u2013 FY 2024-25', url: '/documents/shareholders/Sourceved Technalogies private Limited/Financials for FY 2024-25.pdf' },`
);

fs.writeFileSync('src/app/App.tsx', content, 'utf8');
console.log('Done! Verifying...');

const updated = fs.readFileSync('src/app/App.tsx', 'utf8');
const checks = [
  "window.open(link.url, '_blank')",
  "/documents/agm/AGM Notice 28-09-2024.pdf",
  "/documents/code-of-conduct/Fair Disclosure Of UPSI.pdf",
  "/documents/annual-returns/Form MGT 7 2023-24.pdf",
  "/documents/policies/Nomination And Remuneration Policy.pdf",
  "/documents/annual-reports/annual-report_2023-24.pdf",
  "/documents/shareholders/Softvan Limited/Financials for FY 2024-25.pdf"
];
checks.forEach(c => console.log((updated.includes(c) ? '✓' : '✗') + ' ' + c));
