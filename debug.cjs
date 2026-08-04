const puppeteer = require('puppeteer-core');

(async () => {
  try {
    const browser = await puppeteer.launch({
      executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      headless: true,
    });
    const page = await browser.newPage();

    const errors = [];
    const consoleLogs = [];

    page.on('console', msg => {
      const text = msg.text();
      consoleLogs.push({ type: msg.type(), text });
      if (msg.type() === 'error') {
        console.log('CONSOLE ERROR:', text);
      }
    });
    page.on('pageerror', error => {
      errors.push(error.message);
      console.log('PAGE ERROR:', error.message);
    });
    page.on('response', response => {
      if (!response.ok() && !response.url().includes('favicon')) {
        console.log('FAILED RESPONSE:', response.status(), response.url());
      }
    });

    console.log('Navigating to quantum-sensing page...');
    await page.goto('http://localhost:5173/quantum-technology-solutions/quantum-sensing', { 
      waitUntil: 'networkidle0', 
      timeout: 15000 
    });

    // Wait a bit for React to render
    await new Promise(r => setTimeout(r, 2000));

    // Check if the root div has content
    const rootHTML = await page.evaluate(() => {
      const root = document.getElementById('root');
      return {
        innerHTML: root ? root.innerHTML.substring(0, 2000) : 'NO ROOT ELEMENT',
        childCount: root ? root.children.length : 0,
        bodyText: document.body.innerText.substring(0, 500),
      };
    });

    console.log('\n=== PAGE STATE ===');
    console.log('Root child count:', rootHTML.childCount);
    console.log('Body text:', JSON.stringify(rootHTML.bodyText));
    console.log('Root HTML (first 2000 chars):', rootHTML.innerHTML);
    console.log('\n=== ERRORS ===');
    console.log('Page errors:', errors.length ? errors.join('\n') : 'NONE');
    console.log('\n=== ALL CONSOLE LOGS ===');
    consoleLogs.forEach(l => console.log(`[${l.type}] ${l.text}`));

    await browser.close();
  } catch (err) {
    // If Chrome not found, try Edge
    if (err.message.includes('Failed to launch') || err.message.includes('No such file')) {
      console.log('Chrome not found, trying Edge...');
      const browser = await puppeteer.launch({
        executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
        headless: true,
      });
      const page = await browser.newPage();
      const errors = [];
      page.on('pageerror', error => {
        errors.push(error.message);
        console.log('PAGE ERROR:', error.message);
      });
      page.on('console', msg => {
        if (msg.type() === 'error') console.log('CONSOLE ERROR:', msg.text());
      });
      
      await page.goto('http://localhost:5173/quantum-technology-solutions/quantum-sensing', { 
        waitUntil: 'networkidle0', timeout: 15000 
      });
      await new Promise(r => setTimeout(r, 2000));
      
      const rootHTML = await page.evaluate(() => {
        const root = document.getElementById('root');
        return {
          innerHTML: root ? root.innerHTML.substring(0, 2000) : 'NO ROOT',
          childCount: root ? root.children.length : 0,
          bodyText: document.body.innerText.substring(0, 500),
        };
      });
      console.log('\n=== PAGE STATE ===');
      console.log('Root child count:', rootHTML.childCount);
      console.log('Body text:', JSON.stringify(rootHTML.bodyText));
      console.log('Root HTML (first 2000 chars):', rootHTML.innerHTML);
      console.log('Page errors:', errors.length ? errors.join('\n') : 'NONE');
      await browser.close();
    } else {
      console.error('SCRIPT ERROR:', err.message);
      process.exit(1);
    }
  }
})();
