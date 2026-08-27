const fs = require('fs');

let c = fs.readFileSync('src/pages/QuantumSecuredCommunication/components/TacticalApplications.tsx', 'utf8');

c = c.replace(/@\/imports\/c2_integration\.webp/, '@/imports/drone_radar_3d/c2_integration.webp');
c = c.replace(/@\/imports\/dynamic_battlefield_environments\.webp/, '@/imports/butterfly_adg/dynamic_battlefield_environments.webp');
c = c.replace(/@\/imports\/perimeter_threat_neutralization\.webp/, '@/imports/fpv_bullseye/perimeter_threat_neutralization.webp');

fs.writeFileSync('src/pages/QuantumSecuredCommunication/components/TacticalApplications.tsx', c);
console.log('Fixed imports in TacticalApplications');
