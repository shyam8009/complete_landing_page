const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    page.on('console', msg => console.log('BROWSER CONSOLE:', msg.type(), msg.text()));
    page.on('pageerror', error => console.log('BROWSER ERROR:', error.message));
    page.on('requestfailed', request => console.log('BROWSER REQUEST FAILED:', request.url(), request.failure().errorText));

    console.log('Navigating to http://localhost:5173/quantum-technology-solutions/quantum-sensing...');
    await page.goto('http://localhost:5173/quantum-technology-solutions/quantum-sensing', { waitUntil: 'networkidle0', timeout: 10000 });
    
    console.log('Page loaded successfully without crashing the browser.');
    await browser.close();
  } catch (err) {
    console.error('SCRIPT ERROR:', err.message);
    process.exit(1);
  }
})();
