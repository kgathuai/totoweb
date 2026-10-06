# Uni-Learn Landing Website

A Next.js + Material-UI landing website where people can download and access Uni-Learn for their TV.

## Features

- ✅ Built with Next.js 15 (React 19)
- ✅ Material-UI components for professional design
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Fast-loading and optimized
- ✅ Clear download links for all platforms
- ✅ Step-by-step installation guides
- ✅ FAQ section
- ✅ Smooth animations and interactions
- ✅ Static export ready for any hosting

## Project Structure

```
totoweb/
├── app/
│   ├── layout.jsx          # Root layout with theme provider
│   └── page.jsx            # Landing page
├── components/
│   ├── ThemeRegistry.jsx   # MUI theme configuration
│   ├── Header.jsx          # Header with branding
│   ├── HeroSection.jsx     # Hero section with features
│   ├── PlatformsSection.jsx   # Platform cards
│   ├── InstallationGuides.jsx # Setup guides
│   ├── FAQSection.jsx      # FAQ items
│   ├── DownloadSection.jsx # Download buttons
│   └── Footer.jsx          # Footer
├── public/                 # Static assets
├── package.json
└── next.config.mjs
```

## How to Use

### 1. Install Dependencies

```bash
cd totoweb
npm install
```

### 2. View Locally (Development)

```bash
npm run dev
```

Then open http://localhost:3001 in your browser.

### 3. Build for Production

```bash
npm run build
```

Because the project uses `output: 'export'`, this produces a completely static site in `out/` that can be deployed to any static host.

To preview the exported site locally:

```bash
npm start
```

### 4. Deploy to the Web

Choose one of these free hosting options:

#### Option A: Netlify (Easiest)

The repo ships a `netlify.toml`, so no manual build settings are needed.

Git-connected (auto-deploys on every push):

1. Push this repository to GitHub
2. Sign up at [netlify.com](https://netlify.com) and choose **Add new site -> Import an existing project**
3. Pick the repository — Netlify reads `netlify.toml` (build `npm run build`, publish `out`)
4. Deploy

Or deploy the already-built folder straight from your machine:

```bash
npm run build
npx netlify-cli deploy --prod --dir=out
```

#### Option B: GitHub Pages

1. Push this repository to GitHub
2. Run `npm run build` to generate the `out/` folder
3. In repository settings, enable GitHub Pages and publish the `out/` folder
4. Your site will be at `https://username.github.io/totoweb`

#### Option C: Vercel

1. Sign up at [vercel.com](https://vercel.com)
2. Import your GitHub repo
3. Set root directory to `totoweb`
4. Deploy

### 5. Update Download Links

Edit the downloads in `components/DownloadSection.jsx`:

```jsx
const downloads = [
  {
    label: '📥 Samsung Tizen (.wgt)',
    href: '/downloads/UniLearnUSB-unsigned.wgt',
  },
  // ... more downloads
];
```

### 6. Update Installation Guides

Edit the guides in `components/InstallationGuides.jsx` to point to your actual GitHub documentation:

```jsx
docsLink: 'https://github.com/kgathuai/Evieit/tizen/README.md',
```

## Customization

### Colors & Theme

The palette lives in `components/ThemeRegistry.jsx` and mirrors the Uni-Learn app
theme (`totoLearn/app/theme.js`) so the site and the product stay in sync:

```js
export const brand = {
  coral:  { main: '#ff6b6b', dark: '#e63946' }, // primary — matches the red logo
  yellow: { main: '#ffd93d' },                  // secondary
  mint:   { main: '#6bcf7f' },                  // success
  orange: { main: '#ff9f1c' },                  // warning
  teal:   { main: '#4ecdc4' },                  // info
  ink:    '#2b1114',                            // dark text on bright surfaces
};
```

Light and dark themes are generated from those same tokens by `getDesignTokens(mode)`.
Visitors switch with the toggle in the header; the choice is stored in `localStorage`
and otherwise follows their OS preference.

Type is [Nunito](https://fonts.google.com/specimen/Nunito), self-hosted at build time
by `next/font` (see `app/fonts.js`), so the static export needs no font CDN.

### Logo and Text

The logo is `public/totologo.png` — a transparent PNG (red TV, dark lettering), so it
is placed on a light disc in the header and footer to stay legible in dark mode.
Headlines and the hero mockup live in `components/HeroSection.jsx`; each section's
title/subtitle comes from the shared `components/SectionHeading.jsx`.

### Platform Information

Edit the `platforms` array in `components/PlatformsSection.jsx`

### Features

Edit the `features` array in `components/HeroSection.jsx`

### FAQ Items

Edit the `faqs` array in `components/FAQSection.jsx`

## Mobile Optimization

The site is fully responsive and optimized for:
- ✅ Desktop browsers
- ✅ Tablets
- ✅ Mobile phones
- ✅ Low-bandwidth connections

All MUI components are responsive using `sx` prop with breakpoints.

## SEO & Meta Tags

Edit `app/layout.jsx` to update meta tags:

```jsx
<title>Uni-Learn | Free Educational App for TV</title>
<meta name="description" content="Uni-Learn - Free educational app for kids ages 3-7 on your TV" />
```

## Analytics (Optional)

Add Google Analytics in `app/layout.jsx` inside the `<head>` tag:

```jsx
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script dangerouslySetInnerHTML={{
  __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');`
}} />
```

## Browser Support

Works on all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

## Performance

- Page size: ~30KB (HTML + CSS + JS)
- Load time: < 1 second on 4G
- No external CDN dependencies
- No JavaScript frameworks required

## For International Audiences

Create separate pages for different languages:

1. Create `app/[locale]/page.jsx` with i18n routing
2. Use a library like `next-intl` for translations
3. Add language selector in Header component

Example:
```jsx
// app/sw/page.jsx (Swahili version)
```

## Deployment

### Netlify

Deployment is preconfigured in `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `out`
- Node version: `20`

This site is a Next.js **static export** (`output: 'export'`), so Netlify serves the
generated files directly — the Next.js Runtime / OpenNext adapter is not required.

Two ways to deploy:

1. **Git-connected:** connect the repository in the Netlify dashboard and every push
   to `main` redeploys automatically.
2. **From the CLI:** `npm run build && npx netlify-cli deploy --prod --dir=out`

### Vercel

1. Import your GitHub repo
2. Set root directory: `totoweb`
3. Auto-deploy on push

### Any Static Host

```bash
npm run build
# Upload the `out/` folder to any static host
```

## Scripts

```bash
npm run dev      # Start development server (port 3001)
npm run build    # Build the static site into out/
npm start        # Preview the built out/ folder (port 3001)
npm run lint     # Run ESLint
```

## Questions?

See [../totoLearn/DEPLOYMENT.md](../totoLearn/DEPLOYMENT.md) for platform-specific app deployment details.
