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
website/
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
cd website
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
npm start
```

Or export as static site:

```bash
npm run export
```

This creates an `out/` folder that can be deployed to any static host.

### 2. Deploy to the Web

Choose one of these free hosting options:

#### Option A: Netlify (Easiest)

1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop the `website` folder
3. Done! Your site is live

#### Option B: GitHub Pages

1. Push `website` folder to GitHub
2. In repository settings, enable GitHub Pages
3. Point to `website` folder
4. Your site will be at `https://username.github.io/repo/website`

#### Option C: Vercel

1. Sign up at [vercel.com](https://vercel.com)
2. Import your GitHub repo
3. Set root directory to `website`
4. Deploy

### 4. Update Download Links

Edit the downloads in `components/DownloadSection.jsx`:

```jsx
const downloads = [
  {
    label: '📥 Samsung Tizen (.wgt)',
    href: 'https://github.com/your-repo/releases/download/v1.0/UniLearnUSB-signed.wgt',
  },
  // ... more downloads
];
```

### 5. Update Installation Guides

Edit the guides in `components/InstallationGuides.jsx` to point to your actual GitHub documentation:

```jsx
docsLink: 'https://github.com/your-repo/tizen/README.md',
```

## Customization

### Colors & Theme

Edit the MUI theme in `components/ThemeRegistry.jsx`:

```jsx
const theme = createTheme({
  palette: {
    primary: {
      main: '#6366f1', // Indigo
    },
    secondary: {
      main: '#ec4899', // Pink
    },
  },
  // ... more theme options
});
```

### Logo and Text

Edit `components/Header.jsx`:

```jsx
<Typography variant="h1">
  📺 Uni-Learn
</Typography>
<Typography variant="h5">
  Free, offline learning for your TV
</Typography>
```

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

1. Connect your GitHub repo
2. Set build command: `npm run build`
3. Set publish directory: `out`
4. Deploy

### Vercel

1. Import your GitHub repo
2. Set root directory: `website`
3. Auto-deploy on push

### Any Static Host

```bash
npm run export
# Upload the `out/` folder to any static host
```

## Scripts

```bash
npm run dev      # Start development server (port 3001)
npm run build    # Build for production
npm start        # Start production server
npm run export   # Export as static site
npm run lint     # Run ESLint
```

## Questions?

See [../DEPLOYMENT.md](../DEPLOYMENT.md) for platform-specific app deployment details.
