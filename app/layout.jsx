import { nunito } from './fonts';
import { ThemeRegistry } from '@/components/ThemeRegistry';

export const metadata = {
  title: 'Uni-Learn | Free Offline Educational App for TV',
  description:
    'Uni-Learn is a free, offline educational app for children aged 3-7: the alphabet, numbers to 100 and early logic games on Samsung Tizen, LG webOS, Android TV, or any TV over HDMI.',
  applicationName: 'Uni-Learn',
  keywords: [
    'Uni-Learn',
    'educational TV app',
    'kids learning app',
    'offline learning',
    'Samsung Tizen',
    'LG webOS',
    'Android TV',
  ],
  openGraph: {
    title: 'Uni-Learn | Free Offline Educational App for TV',
    description: 'Free, offline learning for kids aged 3-7 on your TV. No internet, no subscriptions.',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ff6b6b',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={nunito.variable}>
      <body>
        <ThemeRegistry>
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {children}
          </div>
        </ThemeRegistry>
      </body>
    </html>
  );
}
