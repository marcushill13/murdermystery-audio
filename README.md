# Netlify One-Time URL + Token-Scoped Burn (hiamurdermystery)

**Configured for:** `https://hiamurdermystery.netlify.app/`

- Function redirects to `/message/<token>` on **hiamurdermystery**.
- Page uses `localStorage` keyed by `location.pathname` so refresh/new tabs stay burned for that token.
- `_redirects` ensures any path (like `/message/abc`) serves `index.html`.

## Deploy

1) Put your audio at the project root named **`voice.mp3`**.
2) Push this folder to your connected GitHub repo.
3) Netlify will auto-deploy.

## Share a one-time URL

```
https://hiamurdermystery.netlify.app/.netlify/functions/once?t=abc123
```
- First open → redirects to `/message/abc123`, plays once, then burns.
- Refresh/new tab → still shows destroyed for that token.

> Page-only protection: users can still record audio during first play.
