import { Nunito } from 'next/font/google';

// The Uni-Learn app itself specifies Nunito (totoLearn/app/theme.js).
// The landing page never loaded it, so it silently fell back to Segoe UI.
// next/font self-hosts the files, so the static export needs no runtime CDN.
export const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-nunito',
});
