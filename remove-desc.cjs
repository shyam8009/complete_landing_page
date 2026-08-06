const fs = require('fs');
let content = fs.readFileSync('src/app/capabilities_data.tsx', 'utf8');

// The systems description is usually indented by 8 spaces: "        description: "..."
// The domain description is indented by 4 spaces: "    description: "..."
// Let's replace the systems descriptions with an empty string or remove the line.
// We can use a regex to match precisely 8 spaces + description
content = content.replace(/^ {8}description:.*$/gm, '');

fs.writeFileSync('src/app/capabilities_data.tsx', content, 'utf8');
console.log('Descriptions removed from systems.');
