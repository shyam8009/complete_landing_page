const fs = require('fs');
let content = fs.readFileSync('src/pages/Newsroom/NewsroomPage.tsx', 'utf8');

content = content.replace(
  /title: "Sahana is now officially empaneled as a design service provider with Bharat Electronics Limited \(BEL\)\.",\s*description: "([^"]+)",\s*image: belEmpanelmentImg,\s*link: '#'/g,
  `title: "Sahana is now officially empaneled as a design service provider with Bharat Electronics Limited (BEL).",
      description: "$1",
      image: belEmpanelmentImg,
      link: '/documents/newsroom/bel_empanelment.pdf'`
);

fs.writeFileSync('src/pages/Newsroom/NewsroomPage.tsx', content, 'utf8');
console.log('Updated Newsroom BEL link successfully');
