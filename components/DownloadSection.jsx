'use client';

import { Box, Button, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import AndroidRoundedIcon from '@mui/icons-material/AndroidRounded';
import TvRoundedIcon from '@mui/icons-material/TvRounded';
import SectionHeading from './SectionHeading';
import { brand } from './ThemeRegistry';

const others = [
  {
    icon: TvRoundedIcon,
    accent: brand.teal.main,
    title: 'Samsung TV (.wgt)',
    body: 'Unsigned — a retail Samsung TV will not accept it until you sign it with Tizen Studio. The Tizen guide walks through it.',
    href: '/downloads/UniLearnUSB-unsigned.wgt',
    download: 'UniLearnUSB-unsigned.wgt',
    cta: 'Download .wgt',
  },
  {
    icon: BuildRoundedIcon,
    accent: brand.orange.main,
    title: 'LG webOS',
    body: 'No .ipk is published yet. The webOS guide shows how to build and sign one with the LG SDK.',
    href: 'https://github.com/kgathuai/Evieit/blob/main/webos/README.md',
    external: true,
    cta: 'webOS build guide',
  },
];

export default function DownloadSection() {
  return (
    <Box
      id="download"
      component="section"
      sx={{ py: { xs: 7, md: 10 }, px: 2, scrollMarginTop: '6rem' }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Get started"
          title="Download Uni-Learn"
          subtitle="Everything here is free and open. The Android app is the quickest way onto a TV — it needs no internet, no account and no store."
        />

        <Card
          sx={{
            mb: 3,
            border: 'none',
            background: `linear-gradient(135deg, ${brand.green.main} 0%, ${brand.green.dark} 100%)`,
            color: '#ffffff',
            '&:hover': {
              transform: 'none',
              boxShadow: '0 26px 55px -26px rgba(18,36,26,0.6)',
            },
          }}
        >
          <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={3}
              alignItems={{ xs: 'flex-start', md: 'center' }}
              justifyContent="space-between"
            >
              <Box>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 0.5 }}>
                  <AndroidRoundedIcon sx={{ fontSize: 20 }} />
                  <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: '0.14em' }}>
                    Works on most smart TVs
                  </Typography>
                </Stack>
                <Typography variant="h4" sx={{ mt: 0.5 }}>
                  Android TV app (.apk)
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, maxWidth: '38rem', fontWeight: 600 }}>
                  13 MB with every lesson, picture and sound inside it. Works on Android-based TVs
                  such as Vitron, Syinix, TCL, Hisense and Google TV, and on Android TV sticks. Copy
                  it to a USB stick, plug that into the TV and open the file. No internet needed,
                  ever.
                </Typography>
              </Box>

              <Button
                variant="contained"
                size="large"
                startIcon={<DownloadRoundedIcon />}
                href="/downloads/UniLearnTV.apk"
                download="UniLearnTV.apk"
                sx={{
                  flexShrink: 0,
                  bgcolor: '#ffffff',
                  color: brand.green.dark,
                  '&:hover': { bgcolor: '#eef2ef', color: brand.green.dark },
                }}
              >
                Download .apk
              </Button>
            </Stack>
          </CardContent>
        </Card>

        <Grid container spacing={3}>
          {others.map((item) => {
            const Icon = item.icon;
            return (
              <Grid item xs={12} md={4} key={item.title}>
                <Card sx={{ height: '100%' }}>
                  <CardContent
                    sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}
                  >
                    <Box
                      sx={{
                        width: 46,
                        height: 46,
                        borderRadius: 2,
                        display: 'grid',
                        placeItems: 'center',
                        bgcolor: `${item.accent}22`,
                        color: item.accent,
                        mb: 2,
                      }}
                    >
                      <Icon sx={{ fontSize: 24 }} />
                    </Box>
                    <Typography variant="h5">{item.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1, mb: 3 }}>
                      {item.body}
                    </Typography>
                    <Box sx={{ mt: 'auto' }}>
                      <Button
                        fullWidth
                        variant="outlined"
                        href={item.href}
                        download={item.download}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        endIcon={item.external ? <OpenInNewRoundedIcon /> : <DownloadRoundedIcon />}
                      >
                        {item.cta}
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}

          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Box
                  sx={{
                    width: 46,
                    height: 46,
                    borderRadius: 2,
                    display: 'grid',
                    placeItems: 'center',
                    bgcolor: 'info.main',
                    color: brand.ink,
                    mb: 2,
                  }}
                >
                  <GitHubIcon sx={{ fontSize: 24 }} />
                </Box>
                <Typography variant="h5">Source code</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1, mb: 3 }}>
                  Browse the app, the packaging scripts and the platform guides on GitHub.
                </Typography>
                <Box sx={{ mt: 'auto' }}>
                  <Button
                    fullWidth
                    variant="outlined"
                    href="https://github.com/kgathuai/Evieit"
                    target="_blank"
                    rel="noopener noreferrer"
                    endIcon={<OpenInNewRoundedIcon />}
                  >
                    View on GitHub
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
