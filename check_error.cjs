const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.toString()));
  page.on('requestfailed', request => {
    console.log('REQUEST FAILED:', request.url(), request.failure().errorText);
  });
  page.on('response', response => {
    if (!response.ok()) {
      console.log('RESPONSE NOT OK:', response.url(), response.status());
    }
  });
  
  try {
    await page.goto('http://localhost:5173/fpv-buddy', { waitUntil: 'networkidle0', timeout: 15000 });
  } catch (e) {
    console.log('Navigation Error:', e.message);
  }
  
  await browser.close();
})();
