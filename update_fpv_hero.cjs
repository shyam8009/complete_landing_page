const fs = require('fs');

let fileContent = fs.readFileSync('src/pages/SahanaFpv/components/HeroSection.tsx', 'utf8');
fileContent = fileContent.replace(
  "import fpvHeroBg from '../../../imports/Hero banner Video.mp4';",
  "import fpvHeroBg from '../../../imports/fpv_bullseye/hero_video.mp4';"
);
fs.writeFileSync('src/pages/SahanaFpv/components/HeroSection.tsx', fileContent, 'utf8');
