const { spawn } = require('child_process');
const http = require('http');

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--disable-gpu',
    '--no-sandbox',
    '--window-size=1280,800'
  ]);

  await new Promise(r => setTimeout(r, 1500));

  async function getPages() {
    return new Promise((resolve, reject) => {
      http.get('http://127.0.0.1:9222/json/list', res => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(JSON.parse(data)));
      }).on('error', reject);
    });
  }

  const pagesList = await getPages();
  const pageTarget = pagesList.find(p => p.type === 'page') || pagesList[0];
  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);

  await new Promise(r => ws.onopen = r);

  let id = 1;
  const pending = new Map();
  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(msg.error);
      else resolve(msg.result);
    }
  };

  function send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const msgId = id++;
      pending.set(msgId, { resolve, reject });
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  }

  await send('Page.enable');
  await send('Runtime.enable');

  const pages = [
    { name: 'index.html', url: 'file:///c:/Users/HP/Downloads/Rice%20&%20Grains/index.html' },
    { name: 'products.html', url: 'file:///c:/Users/HP/Downloads/Rice%20&%20Grains/products.html' }
  ];

  const viewports = [
    { name: 'Desktop (1280px)', width: 1280, height: 800 },
    { name: 'Tablet (768px)', width: 768, height: 1024 },
    { name: 'Mobile (480px)', width: 480, height: 850 },
    { name: 'Small Mobile (360px)', width: 360, height: 740 }
  ];

  for (const page of pages) {
    console.log(`\n=== Testing Page: ${page.name} ===`);
    await send('Page.navigate', { url: page.url });
    // Wait for full load and stylesheets
    await new Promise(r => setTimeout(r, 2500));

    for (const vp of viewports) {
      await send('Emulation.setDeviceMetricsOverride', {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: 1,
        mobile: vp.width < 768
      });
      await new Promise(r => setTimeout(r, 300));

      const evalRes = await send('Runtime.evaluate', {
        expression: `(() => {
          const el = document.querySelector('.product-card-title');
          if (!el) return { error: 'Element .product-card-title not found' };
          const cs = window.getComputedStyle(el);
          return {
            text: el.innerText.trim(),
            tagName: el.tagName,
            fontSize: cs.fontSize,
            lineHeight: cs.lineHeight,
            minHeight: cs.minHeight,
            maxHeight: cs.maxHeight,
            lineClamp: cs.webkitLineClamp
          };
        })()`,
        returnByValue: true
      });

      console.log(`[${vp.name}]:`, evalRes.result.value);
    }
  }

  ws.close();
  chrome.kill();
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
