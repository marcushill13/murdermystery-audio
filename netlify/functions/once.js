// netlify/functions/once.js
let usedTokens = new Set(); // Resets on redeploy; ok for short-lived links

export async function handler(event) {
  const params = event.queryStringParameters || {};
  const token = params.t;

  if (!token) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'text/html' },
      body: `<html><body style="font-family:system-ui;background:#0b0b0c;color:white;text-align:center;padding-top:40px">
        <h1>Missing token</h1>
        <p>Use: <code>/.netlify/functions/once?t=YOURTOKEN</code></p>
      </body></html>`
    };
  }

  if (usedTokens.has(token)) {
    return {
      statusCode: 410,
      headers: { 'Content-Type': 'text/html' },
      body: `<html><body style="font-family:system-ui;background:#0b0b0c;color:white;text-align:center;padding-top:40px">
        <h1>🚫 This link has expired.</h1>
        <p>Ask the sender for a new one-time link.</p>
      </body></html>`
    };
  }

  usedTokens.add(token);

  // Redirect to a token-specific path so the page can burn that specific token locally
  const target = `https://hiamurdermystery.netlify.app/message/${encodeURIComponent(token)}`;
  return {
    statusCode: 302,
    headers: {
      Location: target,
      'Cache-Control': 'no-store'
    }
  };
}
