const fs = require('fs');

const targetFile = 'src/pages/QuantumDrone/components/SubsystemsSection.tsx';
let content = fs.readFileSync(targetFile, 'utf8');

// Replace "Tier 0X — " (including potential mojibake dashes) with just the text.
content = content.replace(/Tier 01[^A-Za-z]+Drone-as-a-Service/g, 'Drone-as-a-Service');
content = content.replace(/Tier 02[^A-Za-z]+Custom UAV Build/g, 'Custom UAV Build');

fs.writeFileSync(targetFile, content, 'utf8');
console.log('Removed Tier prefixes from Quantum Drone Subsystems.');
