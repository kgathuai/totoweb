'use client';

import { Box, Container, Typography, Grid, Button } from '@mui/material';

export default function DownloadSection() {
  const downloads = [
    {
      label: '📥 Samsung Tizen (.wgt)',
      href: '/downloads/UniLearnUSB-unsigned.wgt',
    },
    {
      label: '🧰 LG webOS — build guide',
      href: 'https://github.com/kgathuai/Evieit/blob/main/webos/README.md',
    },
    {
      label: '🧰 Android TV — build guide',
      href: 'https://github.com/kgathuai/Evieit/blob/main/android-tv/README.md',
    },
    {
      label: '💾 View All Files on GitHub',
      href: 'https://github.com/kgathuai/Evieit',
    },
  ];

  return (
    <Box
      sx={{
        background: '#16a34a',
        color: 'white',
        py: 6,
        px: 2,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 1 }}>
          Download & Resources
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, opacity: 0.95 }}>
          Get all the files and guides you need
        </Typography>

        <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
          {downloads.map((item, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Button
                fullWidth
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                download={!item.href.startsWith('http')}
                variant="contained"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  border: '2px solid white',
                  '&:hover': {
                    backgroundColor: 'white',
                    color: '#16a34a',
                  },
                }}
              >
                {item.label}
              </Button>
            </Grid>
          ))}
        </Grid>

        <Typography variant="body2" sx={{ mt: 3, opacity: 0.9 }}>
          The Tizen package is unsigned — enable Developer Mode on your TV and sign it
          with Tizen Studio before installing. The webOS and Android TV packages are not
          built yet; the guides above walk you through building them from source.
        </Typography>
      </Container>
    </Box>
  );
}
