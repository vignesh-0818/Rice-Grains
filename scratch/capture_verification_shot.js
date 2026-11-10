const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--disable-gpu',
    '--no-sandbox',
    '--window-size=1280,1000'
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

  await send('Page.navigate', { url: 'file:///c:/Users/HP/Downloads/Rice%20&%20Grains/products.html' });
  await new Promise(r => setTimeout(r, 2000));

  await send('Runtime.evaluate', {
    expression: 'window.scrollTo(0, 520)'
  });
  await new Promise(r => setTimeout(r, 300));

  const shot = await send('Page.captureScreenshot', {
    format: 'png'
  });
  fs.writeFileSync('scratch/products_desktop_scrolled.png', Buffer.from(shot.data, 'base64'));
  console.log('Saved scratch/products_desktop_scrolled.png');

  ws.close();
  chrome.kill();
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
