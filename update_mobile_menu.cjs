const fs = require('fs');
let code = fs.readFileSync('src/app/App.tsx', 'utf8');

if (!code.includes('mobileInvestorOpen')) {
  code = code.replace(
    /const \[mobileSystemOpen, setMobileSystemOpen\] = useState<string \| null>\(null\);/, 
    'const [mobileSystemOpen, setMobileSystemOpen] = useState<string | null>(null);\n    const [mobileInvestorOpen, setMobileInvestorOpen] = useState<boolean>(false);'
  );
}

const investorAccordion = `
            {/* Investors Accordion */}
            <div className="py-4 border-b border-white/10">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setMobileInvestorOpen(!mobileInvestorOpen)}
              >
                <h3 className="text-[18px] font-bold text-white uppercase tracking-wider">Investors</h3>
                <span className="text-[#84CC16] text-xl">{mobileInvestorOpen ? "-" : "+"}</span>
              </div>
              {mobileInvestorOpen && (
                <div className="flex flex-col gap-2 pl-4 py-4 border-l border-white/10 mt-4">
                  {INVESTORS_DATA.map((section: any) => (
                    <a 
                      key={section.id}
                      href="#"
                      className="text-[14px] text-white/80 hover:text-white py-2"
                      onClick={(e) => { e.preventDefault(); if (navigate) navigate(section.url); setMobileOpen(false); }}
                    >
                      {section.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
`;

code = code.replace(
  /<a href="#" className="py-4 border-b border-white\/10 text-\[18px\] font-bold text-white uppercase tracking-wider">Investors<\/a>/, 
  investorAccordion
);

code = code.replace(
  /<a href="\/about-us" className="py-4 border-b border-white\/10 text-\[18px\] font-bold text-white uppercase tracking-wider">About Us<\/a>/, 
  '<a href="#" className="py-4 border-b border-white/10 text-[18px] font-bold text-white uppercase tracking-wider" onClick={(e) => { e.preventDefault(); if (navigate) navigate("/about-us"); setMobileOpen(false); }}>About Us</a>'
);

fs.writeFileSync('src/app/App.tsx', code);
console.log('Updated App.tsx mobile menu for Investors and About Us');
