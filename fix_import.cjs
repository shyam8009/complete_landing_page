const fs = require('fs');

const pathStr = 'src/pages/QuantumControlSystems/components/TacticalApplications.tsx';
let content = fs.readFileSync(pathStr, 'utf8');

content = content.replace("@/imports/air_defence_gun_integration.webp", "@/imports/butterfly_adg/air_defence_gun_integration.webp");

fs.writeFileSync(pathStr, content);
console.log('Fixed import');
