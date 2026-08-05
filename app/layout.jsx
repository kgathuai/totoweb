'use client';

import { ThemeRegistry } from '@/components/ThemeRegistry';
import { Box, CssBaseline } from '@mui/material';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Uni-Learn - Free educational app for kids ages 3-7 on your TV" />
        <title>Uni-Learn | Free Educational App for TV</title>
      </head>
      <body>
        <ThemeRegistry>
          <CssBaseline />
          <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
