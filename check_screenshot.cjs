const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  
  try {
    await page.goto('http://localhost:5173/fpv-buddy', { waitUntil: 'networkidle0', timeout: 15000 });
  } catch (e) {
    console.log('Navigation Error:', e.message);
  }
  
  // Wait a bit to ensure everything is rendered
  await new Promise(r => setTimeout(r, 2000));
  
  // Take a screenshot
  await page.screenshot({ path: 'screenshot.png' });
  console.log('Screenshot saved to screenshot.png');
  
  await browser.close();
})();
