# Netlify One-Time URL + Token-Scoped Burn (v2)

**What changed:** 
- Function now redirects to `/message/<token>` (unique path per token).
- Page uses `localStorage` keyed by `location.pathname`, so **refreshes and new tabs** stay burned for that token.
- `_redirects` ensures any path (like `/message/abc`) serves `index.html` (SPA-style).

## Use

1) Put your audio at the project root named **`voice.mp3`**.
2) Deploy to Netlify.
3) Share a one-time URL like:
   `https://murdermysteryhia.netlify.app/.netlify/functions/once?t=abc123`
   - First open → redirects to `/message/abc123`, plays once, then burns.
   - Refresh/new tab → still shows **destroyed** for that token (because of localStorage key).

Note: This is still **page-only** protection; users can always record the audio during first play.
