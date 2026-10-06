'use client';

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import SectionHeading from './SectionHeading';
import { brand } from './ThemeRegistry';

const guides = [
  {
    title: 'LG webOS',
    body: 'No .ipk is published yet. The webOS guide shows how to build and sign one with the LG SDK.',
    href: 'https://github.com/kgathuai/Evieit/blob/main/webos/README.md',
    cta: 'webOS build guide',
  },
  {
    title: 'Android TV',
    body: 'No .apk is published yet. The Android TV guide wraps the web build in a WebView app.',
    href: 'https://github.com/kgathuai/Evieit/blob/main/android-tv/README.md',
    cta: 'Android build guide',
  },
];

export default function DownloadSection() {
  return (
    <Box
      id="download"
      component="section"
      sx={{ py: { xs: 7, md: 10 }, px: 2, scrollMarginTop: '92px' }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Get started"
          title="Download Uni-Learn"
          subtitle="Everything here is free and open. The only finished package today is the Samsung Tizen widget."
        />

        <Card
          sx={{
            mb: 3,
            border: 'none',
            background: `linear-gradient(135deg, ${brand.coral.main} 0%, ${brand.yellow.main} 100%)`,
            color: brand.ink,
            '&:hover': {
              transform: 'none',
              boxShadow: '0 26px 55px -26px rgba(43,17,20,0.55)',
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
                <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: '0.14em' }}>
                  Ready to install
                </Typography>
                <Typography variant="h4" sx={{ mt: 0.5 }}>
                  Samsung Tizen package (.wgt)
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, maxWidth: 560, fontWeight: 600 }}>
                  This build is unsigned — retail Samsung TVs will not accept it until you sign it
                  with Tizen Studio. Step-by-step instructions are in the Tizen guide above.
                </Typography>
              </Box>

              <Button
                variant="contained"
                size="large"
                startIcon={<DownloadRoundedIcon />}
                href="/downloads/UniLearnUSB-unsigned.wgt"
                download="UniLearnUSB-unsigned.wgt"
                sx={{
                  flexShrink: 0,
                  bgcolor: brand.ink,
                  color: '#ffffff',
                  '&:hover': { bgcolor: '#000000', color: '#ffffff' },
                }}
              >
                Download .wgt
              </Button>
            </Stack>
          </CardContent>
        </Card>

        <Grid container spacing={3}>
          {guides.map((guide) => (
            <Grid item xs={12} md={4} key={guide.title}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Box
                    sx={{
                      width: 46,
                      height: 46,
                      borderRadius: 2,
                      display: 'grid',
                      placeItems: 'center',
                      bgcolor: 'warning.main',
                      color: brand.ink,
                      mb: 2,
                    }}
                  >
                    <BuildRoundedIcon sx={{ fontSize: 24 }} />
                  </Box>
                  <Typography variant="h5">{guide.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1, mb: 3 }}>
                    {guide.body}
                  </Typography>
                  <Box sx={{ mt: 'auto' }}>
                    <Button
                      fullWidth
                      variant="outlined"
                      href={guide.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      endIcon={<OpenInNewRoundedIcon />}
                    >
                      {guide.cta}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}

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
