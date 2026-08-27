const fs = require('fs');

let fileContent = fs.readFileSync('src/pages/DroneRadar/components/UseCasesSection.tsx', 'utf8');

// Replace the image imports
fileContent = fileContent.replace(
  /import motorcadeImg from '.*';/,
  "import motorcadeImg from '../../../imports/drone_radar/forward_operating_bases.webp';"
);
fileContent = fileContent.replace(
  /import convoyImg from '.*';/,
  "import convoyImg from '../../../imports/drone_radar/border_surveillance.webp';"
);
fileContent = fileContent.replace(
  /import baseImg from '.*';/,
  "import baseImg from '../../../imports/drone_radar/vip_event_security.webp';"
);

fs.writeFileSync('src/pages/DroneRadar/components/UseCasesSection.tsx', fileContent, 'utf8');
console.log('Drone Radar Use Cases Images updated');
