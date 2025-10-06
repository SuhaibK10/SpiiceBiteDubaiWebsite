# Spice Bite — Next.js 14 + Tailwind

A clean App Router project using Tailwind that mirrors your static site, with:
- Centered hero content
- Google Drive link on **Our Menu**
- WhatsApp icon in the **navbar** (+ mobile menu link)
- Order Now dropdown
- Gallery, Menu cards, Contact form (demo only)

## Quick Start
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Files to Notice
- `components/Navbar.tsx` — WhatsApp icon button & Order Now dropdown
- `components/Hero.tsx` — hero with overlay + menu link (Google Drive)
- `components/Contact.tsx` — WhatsApp + View Menu buttons
- `public/images/*` — your assets

> WhatsApp chat opens: `https://wa.me/971528480244`
> Menu opens: `https://drive.google.com/file/d/1ggEBA7RjU1QgZve5zZKFHHD64fnLctp8/view`

## .env setup
Copy `.env.example` to `.env.local` (already included with your values) or adjust:
```
NEXT_PUBLIC_MENU_URL="https://drive.google.com/file/d/1ggEBA7RjU1QgZve5zZKFHHD64fnLctp8/view"
NEXT_PUBLIC_WHATSAPP_NUMBER="971528480244"
NEXT_PUBLIC_WHATSAPP_URL="https://wa.me/971528480244"
```
Restart the dev server after changes.
