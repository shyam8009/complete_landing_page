const fs = require('fs');

let content = fs.readFileSync('src/pages/QuantumClockSource/components/SubsystemsSection.tsx', 'utf8');

content = content.replace(/"- Navigation Systems/g, '"Navigation Systems');
content = content.replace(/"- Radar Systems/g, '"Radar Systems');
content = content.replace(/"- Distributed Networks/g, '"Distributed Networks');

fs.writeFileSync('src/pages/QuantumClockSource/components/SubsystemsSection.tsx', content, 'utf8');
console.log('Removed dashes from titles.');
