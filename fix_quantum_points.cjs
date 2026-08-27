const fs = require('fs');

let content = fs.readFileSync('src/pages/QuantumClockSource/components/SubsystemsSection.tsx', 'utf8');

// The original file has mojibake or UTF-8 em dash. I'll use a regex to match "Point 01 [^A-Za-z]+ Navigation" etc.
content = content.replace(/Point 01[^A-Za-z]+Navigation Systems/g, '- Navigation Systems');
content = content.replace(/Point 02[^A-Za-z]+Radar Systems/g, '- Radar Systems');
content = content.replace(/Point 03[^A-Za-z]+Distributed Networks/g, '- Distributed Networks');

fs.writeFileSync('src/pages/QuantumClockSource/components/SubsystemsSection.tsx', content, 'utf8');
console.log('Fixed Points and dashes.');
