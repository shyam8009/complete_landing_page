const fs = require('fs');

let content = fs.readFileSync('src/app/App.tsx', 'utf8');

// The arrays we want to target:
// const FOOTER_COMPANY = [ ... ];
// const FOOTER_WORK = [ ... ];

content = content.replace(
  /const FOOTER_COMPANY = \[[\s\S]*?\];/,
  `const FOOTER_COMPANY = [
  { label: "Mission", url: "/about-us" },
  { label: "Newsroom", url: "/newsroom" },
  { label: "Leadership", url: "/about-us" }
];`
);

content = content.replace(
  /const FOOTER_WORK = \[[\s\S]*?\];/,
  `const FOOTER_WORK = [
  { label: "Careers", url: "#" }
];`
);

fs.writeFileSync('src/app/App.tsx', content, 'utf8');
console.log('Footer sections updated successfully.');
