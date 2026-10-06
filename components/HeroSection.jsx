'use client';

import Image from 'next/image';
import { Box, Button, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import WifiOffRoundedIcon from '@mui/icons-material/WifiOffRounded';
import PaymentsRoundedIcon from '@mui/icons-material/PaymentsRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import { brand } from './ThemeRegistry';

const promises = [
  { icon: WifiOffRoundedIcon, label: 'Works offline' },
  { icon: PaymentsRoundedIcon, label: 'No account' },
  { icon: VolumeUpRoundedIcon, label: 'Reads aloud' },
];

/** The real app in a TV frame — no mockup, so people see what they are getting. */
function TvFrame() {
  return (
    <Box sx={{ position: 'relative', width: '100%', maxWidth: '36rem', mx: 'auto' }}>
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: '-12% -8%',
          zIndex: 0,
          borderRadius: '50%',
          filter: 'blur(14px)',
          background: `radial-gradient(circle at 30% 30%, ${brand.green.tint} 0%, transparent 60%),
                       radial-gradient(circle at 76% 72%, ${brand.coral.tint} 0%, transparent 55%)`,
        }}
      />
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          p: { xs: 1.25, sm: 1.75 },
          borderRadius: 5,
          background: 'linear-gradient(160deg, #14331f 0%, #0b1c12 100%)',
          boxShadow: '0 30px 70px -32px rgba(18,36,26,0.85)',
        }}
      >
        <Image
          src="/screens/alphabet.jpg"
          alt="Uni-Learn's alphabet lesson on a TV, showing large letter tiles A to H with the focused letter highlighted"
          width={1500}
          height={844}
          priority
          sizes="(max-width: 900px) 100vw, 560px"
          style={{ display: 'block', width: '100%', height: 'auto', borderRadius: 12 }}
        />
        <Box
          sx={{
            width: 96,
            height: 8,
            mx: 'auto',
            mt: 1.5,
            borderRadius: 999,
            bgcolor: 'rgba(255,255,255,0.22)',
          }}
        />
      </Box>
    </Box>
  );
}

export default function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        pt: { xs: 5, md: 8 },
        pb: { xs: 6, md: 8 },
        px: 2,
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 6 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <Chip
              icon={<AutoAwesomeRoundedIcon />}
              label="Free forever · Ages 3–7"
              sx={{
                mb: 2.5,
                bgcolor: brand.coral.main,
                color: brand.ink,
                '& .MuiChip-icon': { color: 'inherit' },
              }}
            />

            <Typography variant="h1" sx={{ mb: 2.5 }}>
              Turn your TV into a{' '}
              <Box component="span" sx={{ color: 'primary.dark' }}>
                learning playground
              </Box>
            </Typography>

            <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 3.5, maxWidth: '34rem' }}>
              The alphabet, numbers to 100 and early logic games for children aged 3–7 —
              entirely offline, on the television you already own, with the remote they
              already know.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
              <Button size="large" variant="contained" href="#download">
                Download for Android TV
              </Button>
              <Button size="large" variant="outlined" href="#install">
                How to install
              </Button>
            </Stack>

            <Stack direction="row" spacing={{ xs: 2, sm: 3.5 }} flexWrap="wrap" useFlexGap>
              {promises.map(({ icon: Icon, label }) => (
                <Stack key={label} direction="row" spacing={1} alignItems="center">
                  <Icon sx={{ fontSize: 20, color: 'primary.dark' }} />
                  <Typography variant="body2" sx={{ fontWeight: 700 }}>
                    {label}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <TvFrame />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
