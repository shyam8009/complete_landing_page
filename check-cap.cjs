const fs = require('fs');
const content = fs.readFileSync('src/app/capabilities_data.tsx', 'utf8');

const regex = /id:\s*"([^"]+)"\s*,\s*title:\s*"([^"]+)"/g;
let match;
while ((match = regex.exec(content)) !== null) {
  console.log(match[1], '->', match[2]);
}
