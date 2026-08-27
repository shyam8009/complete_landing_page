const fs = require('fs');

let content = fs.readFileSync('src/app/App.tsx', 'utf8');

content = content.replace(
  `{[{label: "Privacy Policy", url: "/privacy-policy"}, {label: "Terms of Use", url: "#"}, {label: "Modern Anti-Slavery Policy", url: "#"}, {label: "Investor Relations", url: "#"}].map(`,
  `{[{label: "Privacy Policy", url: "/privacy-policy"}].map(`
);

fs.writeFileSync('src/app/App.tsx', content, 'utf8');
console.log('Footer links removed successfully');
