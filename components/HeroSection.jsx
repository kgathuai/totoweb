'use client';

import { Box, Container, Typography, Grid, Paper, Stack } from '@mui/material';

const features = [
  { icon: '🔤', label: 'Alphabet Learning' },
  { icon: '🔢', label: 'Numeracy (1-100)' },
  { icon: '🎮', label: 'Interactive Games' },
  { icon: '🔊', label: 'Audio Narration' },
];

export default function HeroSection() {
  return (
    <Box
      sx={{
        py: 6,
        px: 2,
        backgroundColor: '#f9fafb',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 2,
          }}
        >
          Learning for Kids Ages 3-7
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            fontSize: '1.1rem',
            color: '#6b7280',
            mb: 4,
          }}
        >
          No internet required. No monthly fees. Just plug into your TV and start learning.
        </Typography>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          {features.map((feature, idx) => (
            <Grid item xs={6} sm={6} md={3} key={idx}>
              <Paper
                sx={{
                  p: 2,
                  textAlign: 'center',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Typography sx={{ fontSize: '2.5rem', mb: 1 }}>
                  {feature.icon}
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {feature.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
