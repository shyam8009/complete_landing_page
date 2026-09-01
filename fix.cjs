const fs = require('fs');
let content = fs.readFileSync('src/app/capabilities_data.tsx', 'utf8');
content = content.replace(/slug:\s*\"\/3d-drone-detector\"/g, 'slug: "/electronic-warfare/detection-systems/3d-drone-rf-detector"');
fs.writeFileSync('src/app/capabilities_data.tsx', content);
