const fs = require('fs');

let fileContent = fs.readFileSync('src/pages/SahanaFpv/components/UseCasesSection.tsx', 'utf8');

// Replace the image imports
fileContent = fileContent.replace(
  /import counterUasImg from '.*';/,
  "import counterUasImg from '../../../imports/fpv_bullseye/counter_uas_interception.webp';"
);
fileContent = fileContent.replace(
  /import reconImg from '.*';/,
  "import reconImg from '../../../imports/fpv_bullseye/tactical_reconnaissance.webp';"
);
fileContent = fileContent.replace(
  /import perimeterImg from '.*';/,
  "import perimeterImg from '../../../imports/fpv_bullseye/perimeter_threat_neutralization.webp';"
);

fs.writeFileSync('src/pages/SahanaFpv/components/UseCasesSection.tsx', fileContent, 'utf8');
console.log('Fpv Use Cases Images updated');
