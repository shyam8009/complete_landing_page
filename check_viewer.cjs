const puppeteer = require('puppeteer');

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
  
  await new Promise(r => setTimeout(r, 2000));
  
  // Scroll down to the Interactive360Viewer
  await page.evaluate(() => {
    window.scrollBy(0, 800);
  });
  
  await new Promise(r => setTimeout(r, 1000));
  
  await page.screenshot({ path: 'screenshot_viewer.png' });
  console.log('Screenshot saved to screenshot_viewer.png');
  
  await browser.close();
})();
