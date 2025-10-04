# Netlify One-Time URL + Self-Destructing Audio (Page-Only)

This package gives you:
- `index.html` — a simple audio page that "self-destructs" **locally** after one listen (per browser session)
- `netlify/functions/once.js` — a Netlify Function that turns any URL into a **one-time** link (page-only)

Your redirect is already set to:
`https://murdermysteryhia.netlify.app/`

## Quick Use

1) **Add your audio**
   - Put your audio file next to `index.html` and name it **`voice.mp3`**.
   - Folder structure:
     ```
     your-deploy/
     ├── index.html
     ├── voice.mp3        ⟵ your file here
     └── netlify/
         └── functions/
             └── once.js
     ```

2) **Deploy**
   - Zip the folder above and upload to Netlify (Drop or your connected repo).
   - Netlify will detect the function automatically.

3) **Share a one-time URL**
   - Format: `https://murdermysteryhia.netlify.app/.netlify/functions/once?t=MYTOKEN`
   - Replace `MYTOKEN` with any unique string (e.g., `abc123`, `user42`, etc.).
   - First open: redirects to your page.
   - Second open: shows **Link expired**.

## Notes
- The "one-time" tracking is **in-memory** on the function instance. If you redeploy or the function scales down/up, tokens may reset. For a handful of short-lived links, this is usually fine.
- For persistent tokens across deploys, connect a small datastore (Fauna, Supabase, Upstash Redis, etc.) and replace the `Set()` with reads/writes to that store.
- The page-level "self-destruct" uses `sessionStorage` so the **same tab** cannot replay after it ends. Different devices/tabs can still listen once via the one-time URL.
