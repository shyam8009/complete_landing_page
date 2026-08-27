const fs = require('fs');

let content = fs.readFileSync('src/app/App.tsx', 'utf8');

const regex = /const FOOTER_COMPANY[\s\S]*?<\/ul>\s*<\/div>\s*\);\s*}/m;
const replacement = `const FOOTER_COMPANY = [
  { label: "Mission", url: "/about-us" },
  { label: "Newsroom", url: "/newsroom" },
  { label: "Leadership", url: "/about-us" }
];
const FOOTER_WORK = [
  { label: "Careers", url: "#" }
];
const FOOTER_SOCIAL = [
  { label: "X", url: "#" },
  { label: "YouTube", url: "#" },
  { label: "Instagram", url: "#" },
  { label: "Facebook", url: "#" },
  { label: "LinkedIn", url: "#" }
];

function FooterCol({ label, links }: { label: string; links: { label: string; url: string }[] }) {
  return (
    <div className="flex flex-col gap-5">
      <p
        className="text-white/60 text-xs uppercase tracking-[0.54px]"
        style={{ fontFamily: INTER, fontWeight: 500 }}
      >
        {label}
      </p>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.url}
              className="text-white text-sm md:text-base hover:text-white/80 transition-colors"
              style={{ fontFamily: INTER, fontWeight: 400 }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}`;

content = content.replace(regex, replacement);
fs.writeFileSync('src/app/App.tsx', content, 'utf8');
console.log('Footer updated successfully');
