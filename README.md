# MixaMeds — mixameds.com

> Simple weight loss, delivered. GLP-1 telehealth platform.

## Project Structure

```
mixameds/
├── index.html          # Main website (single page)
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Nav, FAQ accordion, scroll animations
├── images/             # Logo and assets (add here)
└── README.md
```

## Setup

This is a static HTML/CSS/JS website — no build step required.

1. Open `index.html` in any browser to preview locally.
2. To go live, deploy to GitHub Pages or any static host (Netlify, Vercel, Cloudflare Pages).

## TelehealthStack Integration

Find the intake embed placeholder in `index.html`:

```html
<!-- ✅ REPLACE THIS DIV WITH YOUR TELEHEALTHSTACK EMBED CODE -->
<div class="intake-embed-placeholder">
```

Replace the entire `<div class="intake-embed-placeholder">...</div>` block with your TelehealthStack `<iframe>` or embed snippet.

## Deployment (GitHub Pages)

1. Push this repo to GitHub
2. Go to repo Settings → Pages
3. Set source to `main` branch, root folder
4. Your site will be live at `https://yourusername.github.io/mixameds`
5. Point mixameds.com DNS to GitHub Pages (see GitHub Pages custom domain docs)

## Brand Colors

| Name       | Hex       |
|------------|-----------|
| Dark Green | `#0f2e2a` |
| Green      | `#1d8870` |
| Teal       | `#7ecfc2` |
| Sage       | `#eaf5f2` |
| Cream      | `#f7f5f0` |

## Legal

All copy includes required medical disclaimers. Update `hello@mixameds.com` with your real contact before launch.
