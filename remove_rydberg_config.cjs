const fs = require('fs');

const targetFile = 'src/pages/RydbergAtomQuantumSensors/components/SubsystemsSection.tsx';
let content = fs.readFileSync(targetFile, 'utf8');

// Replace "Configuration XX — " (including potential mojibake dashes like we saw) with just the text.
// The raw text might have "Configuration 01 — Signal Intelligence"
content = content.replace(/Configuration 01[^A-Za-z]+Signal Intelligence/g, 'Signal Intelligence');
content = content.replace(/Configuration 02[^A-Za-z]+Spectrum Awareness/g, 'Spectrum Awareness');
content = content.replace(/Configuration 03[^A-Za-z]+Secure Sensing/g, 'Secure Sensing');

fs.writeFileSync(targetFile, content, 'utf8');
console.log('Removed Configuration prefixes from Rydberg Subsystems.');
