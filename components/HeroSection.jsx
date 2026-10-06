'use client';

import { Box, Button, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import WifiOffRoundedIcon from '@mui/icons-material/WifiOffRounded';
import PaymentsRoundedIcon from '@mui/icons-material/PaymentsRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import { brand } from './ThemeRegistry';

const letterTiles = [
  { value: 'A', active: false },
  { value: 'B', active: true },
  { value: 'C', active: false },
];

const numberTiles = ['1', '2', '3'];

const promises = [
  { icon: WifiOffRoundedIcon, label: 'Works offline' },
  { icon: PaymentsRoundedIcon, label: 'No subscription' },
  { icon: VolumeUpRoundedIcon, label: 'Reads aloud' },
];

/** A CSS-drawn TV showing a lesson, so the hero needs no screenshot assets. */
function TvMockup() {
  return (
    <Box sx={{ position: 'relative', width: '100%', maxWidth: '33.75rem', mx: 'auto' }}>
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: '-14% -10%',
          zIndex: 0,
          borderRadius: '50%',
          filter: 'blur(12px)',
          background: `radial-gradient(circle at 28% 28%, ${brand.coral.tint} 0%, transparent 58%),
                       radial-gradient(circle at 76% 72%, ${brand.yellow.tint} 0%, transparent 55%)`,
        }}
      />

      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          p: { xs: 1.25, sm: 1.75 },
          borderRadius: 5,
          background: 'linear-gradient(160deg, #33161a 0%, #1d0d0f 100%)',
          boxShadow: '0 30px 70px -32px rgba(43,17,20,0.85)',
        }}
      >
        <Box
          sx={{
            aspectRatio: '16 / 10',
            borderRadius: 3,
            bgcolor: '#fff9f7',
            p: { xs: 2, sm: 3 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontWeight: 900,
              color: brand.ink,
              textAlign: 'center',
              fontSize: { xs: '0.9rem', sm: '1.05rem' },
            }}
          >
            Which letter comes next?
          </Typography>

          <Stack direction="row" spacing={{ xs: 1, sm: 1.5 }} sx={{ justifyContent: 'center' }}>
            {letterTiles.map((tile) => (
              <Box
                key={tile.value}
                sx={{
                  width: { xs: 44, sm: 58 },
                  height: { xs: 44, sm: 58 },
                  borderRadius: 2.5,
                  display: 'grid',
                  placeItems: 'center',
                  fontWeight: 900,
                  fontSize: { xs: '1.25rem', sm: '1.7rem' },
                  bgcolor: tile.active ? brand.coral.main : '#ffffff',
                  color: tile.active ? brand.ink : brand.coral.dark,
                  border: `2px solid ${tile.active ? brand.coral.main : brand.coral.light}`,
                  boxShadow: '0 8px 16px -10px rgba(43,17,20,0.55)',
                }}
              >
                {tile.value}
              </Box>
            ))}
          </Stack>

          <Stack direction="row" spacing={{ xs: 1, sm: 1.5 }} sx={{ justifyContent: 'center' }}>
            {numberTiles.map((value, index) => (
              <Box
                key={value}
                sx={{
                  width: { xs: 34, sm: 42 },
                  height: { xs: 34, sm: 42 },
                  borderRadius: 2,
                  display: 'grid',
                  placeItems: 'center',
                  fontWeight: 800,
                  fontSize: { xs: '0.95rem', sm: '1.15rem' },
                  bgcolor: index === 0 ? brand.yellow.main : '#ffffff',
                  color: brand.ink,
                  border: `2px solid ${index === 0 ? brand.yellow.main : brand.yellow.tint}`,
                }}
              >
                {value}
              </Box>
            ))}
          </Stack>

          <Stack
            direction="row"
            spacing={0.75}
            sx={{ justifyContent: 'center', alignItems: 'center', color: brand.coral.dark }}
          >
            <VolumeUpRoundedIcon sx={{ fontSize: 18 }} />
            <Typography variant="caption" sx={{ fontWeight: 800 }}>
              Narration on
            </Typography>
          </Stack>
        </Box>

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
        pb: { xs: 7, md: 10 },
        px: 2,
        // The mockup's glow is absolutely positioned outside its own box;
        // without clipping it the page gains horizontal scroll on mobile.
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
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                '& .MuiChip-icon': { color: 'inherit' },
              }}
            />

            <Typography variant="h1" sx={{ mb: 2.5 }}>
              Turn your TV into a{' '}
              <Box component="span" sx={{ color: 'primary.dark' }}>
                learning playground
              </Box>
            </Typography>

            <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 3.5, maxWidth: '35rem' }}>
              Uni-Learn teaches the alphabet, numbers to 100 and early logic games to children aged
              3–7 — entirely offline, on the television you already own, with the remote they
              already know.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
              <Button size="large" variant="contained" href="#download">
                Download free
              </Button>
              <Button size="large" variant="outlined" href="#platforms">
                See supported TVs
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
            <TvMockup />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
