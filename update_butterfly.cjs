const fs = require('fs');

// Update SubsystemsSection
let subsContent = fs.readFileSync('src/pages/ButterflyADG/components/SubsystemsSection.tsx', 'utf8');
subsContent = subsContent.replace(
  /import ampImg from '.*';/,
  "import ampImg from '../../../imports/butterfly_adg/targeted_rf_disruption.webp';"
);
subsContent = subsContent.replace(
  /import remoteImg from '.*';/,
  "import remoteImg from '../../../imports/butterfly_adg/wired_remote_control.webp';"
);
subsContent = subsContent.replace(
  /import ruggedImg from '.*';/,
  "import ruggedImg from '../../../imports/butterfly_adg/ruggedized_endurance.webp';"
);
fs.writeFileSync('src/pages/ButterflyADG/components/SubsystemsSection.tsx', subsContent, 'utf8');

// Update UseCasesSection
let useCasesContent = fs.readFileSync('src/pages/ButterflyADG/components/UseCasesSection.tsx', 'utf8');
useCasesContent = useCasesContent.replace(
  /import convoyImg from '.*';/,
  "import convoyImg from '../../../imports/butterfly_adg/air_defence_gun_integration.webp';"
);
useCasesContent = useCasesContent.replace(
  /import baseImg from '.*';/,
  "import baseImg from '../../../imports/butterfly_adg/high_altitude_operations.webp';"
);
useCasesContent = useCasesContent.replace(
  /import motorcadeImg from '.*';/,
  "import motorcadeImg from '../../../imports/butterfly_adg/dynamic_battlefield_environments.webp';"
);
fs.writeFileSync('src/pages/ButterflyADG/components/UseCasesSection.tsx', useCasesContent, 'utf8');

console.log('Butterfly ADG Images Updated successfully');
