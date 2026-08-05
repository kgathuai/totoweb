'use client';

import { Box, Container, Typography, Grid, Button } from '@mui/material';

export default function DownloadSection() {
  const downloads = [
    {
      label: '📥 Samsung Tizen (.wgt)',
      href: 'https://github.com/your-repo/releases/download/v1.0/UniLearnUSB-signed.wgt',
    },
    {
      label: '📥 LG webOS (.ipk)',
      href: 'https://github.com/your-repo/releases/download/v1.0/com.example.unilearn.ipk',
    },
    {
      label: '📥 Android TV (.apk)',
      href: 'https://github.com/your-repo/releases/download/v1.0/UniLearn.apk',
    },
    {
      label: '💾 View All Files on GitHub',
      href: 'https://github.com/your-repo',
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
      </Container>
    </Box>
  );
}
