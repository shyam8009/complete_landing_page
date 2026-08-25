const fs = require('fs');
let app = fs.readFileSync('src/app/App.tsx', 'utf8');

const search = 'href="#"\n                  onClick={(e) => e.preventDefault()}';
const replace = 'href={link === "About Us" ? "/about-us" : "#"}\n                  onClick={(e) => { if (link !== "About Us") e.preventDefault(); }}';

app = app.replace(search, replace);

const mobSearch = '<a href="#" className="py-4 border-b border-white/10 text-[18px] font-bold text-white uppercase tracking-wider">About Us</a>';
const mobReplace = '<a href="/about-us" className="py-4 border-b border-white/10 text-[18px] font-bold text-white uppercase tracking-wider">About Us</a>';
app = app.replace(mobSearch, mobReplace);

fs.writeFileSync('src/app/App.tsx', app);
