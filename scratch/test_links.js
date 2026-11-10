const http = require('http');
const { spawn } = require('child_process');

async function run() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const chrome = spawn(chromePath, ['--headless=new', '--remote-debugging-port=9222', '--disable-gpu', '--no-sandbox', '--window-size=1280,800']);
  await new Promise(r => setTimeout(r, 1500));
  const pagesList = await new Promise(res => http.get('http://127.0.0.1:9222/json/list', r => {
    let d = ''; r.on('data', c => d += c); r.on('end', () => res(JSON.parse(d)));
  }));
  const ws = new WebSocket(pagesList[0].webSocketDebuggerUrl);
  await new Promise(r => ws.onopen = r);
  let id = 1;
  const pending = new Map();
  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(msg.error); else resolve(msg.result);
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
  await send('Page.navigate', { url: 'file:///c:/Users/HP/Downloads/Rice%20&%20Grains/index.html' });
  await new Promise(r => setTimeout(r, 2000));

  const evalRes = await send('Runtime.evaluate', {
    expression: 'Array.from(document.querySelectorAll("link[rel=stylesheet]")).map(l => ({ href: l.href, hasSheet: !!l.sheet }))',
    returnByValue: true
  });
  console.log('Links:', evalRes.result.value);

  const evalCS = await send('Runtime.evaluate', {
    expression: '(() => { const el = document.querySelector(".product-card-title"); return { text: el.innerText, cs: window.getComputedStyle(el).fontSize }; })()',
    returnByValue: true
  });
  console.log('Product card title:', evalCS.result.value);

  ws.close();
  chrome.kill();
}
run();

