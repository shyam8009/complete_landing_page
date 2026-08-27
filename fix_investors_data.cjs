const fs = require('fs');

let content = fs.readFileSync('src/app/App.tsx', 'utf8');

// Fix General Meeting Notice
content = content.replace(
  "{ text: 'Upcoming AGM Notice', url: '/investors/general-meeting-notice' },\r\n      { text: 'EGM Minutes 2024', url: '/investors/general-meeting-notice' },\r\n      { text: 'Proxy Forms', url: '/investors/general-meeting-notice' },",
  "{ text: 'AGM Notice 28-09-2024', url: '/investors/general-meeting-notice' },\r\n      { text: 'AGM Notice 30-09-2023', url: '/investors/general-meeting-notice' },\r\n      { text: 'EGM Notice 06-12-2024', url: '/investors/general-meeting-notice' },"
);

// Fix Code of Conduct
content = content.replace(
  "{ text: 'Code of Business Conduct', url: '/investors/code-of-conduct-policies' },\r\n      { text: 'Whistleblower Policy', url: '/investors/code-of-conduct-policies' },\r\n      { text: 'Anti-Bribery Guidelines', url: '/investors/code-of-conduct-policies' },",
  "{ text: \"Code of Conduct for Company's Personnel\", url: '/investors/code-of-conduct-policies' },\r\n      { text: 'Code of Conduct \u2013 Independent Directors', url: '/investors/code-of-conduct-policies' },\r\n      { text: 'Fair Disclosure of UPSI', url: '/investors/code-of-conduct-policies' },"
);

// Fix Policies
content = content.replace(
  "{ text: 'Corporate Governance Policies', url: '/investors/policies' },\r\n      { text: 'Board of Directors Policies', url: '/investors/policies' },\r\n      { text: 'Compliance Documents', url: '/investors/policies' },",
  "{ text: 'Nomination & Remuneration Policy', url: '/investors/policies' },\r\n      { text: 'Risk Management Policy', url: '/investors/policies' },\r\n      { text: 'Anti Corruption & Anti Bribery Policy', url: '/investors/policies' },"
);

// Fix Shareholder Info
content = content.replace(
  "{ text: 'Softvan Limited Financials', url: '/investors/shareholder-info' },\r\n      { text: 'Softvan Labs Financials', url: '/investors/shareholder-info' },\r\n      { text: 'Sourceved Tech Financials', url: '/investors/shareholder-info' },",
  "{ text: 'Softvan Limited \u2013 FY 2024-25', url: '/investors/shareholder-info' },\r\n      { text: 'Softvan Labs \u2013 FY 2024-25', url: '/investors/shareholder-info' },\r\n      { text: 'Sourceved Technologies \u2013 FY 2024-25', url: '/investors/shareholder-info' },"
);

fs.writeFileSync('src/app/App.tsx', content, 'utf8');
console.log('Done! Verifying...');

// Verify
const updated = fs.readFileSync('src/app/App.tsx', 'utf8');
const checks = ['AGM Notice 28-09-2024', "Code of Conduct for Company", 'Nomination & Remuneration Policy', 'Softvan Limited \u2013 FY 2024-25'];
checks.forEach(c => console.log(c + ': ' + (updated.includes(c) ? 'OK' : 'MISSING')));
