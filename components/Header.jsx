'use client';

import Image from 'next/image';
import { AppBar, Box, Button, Container, Stack, Toolbar, Typography } from '@mui/material';
import ColorModeToggle from './ColorModeToggle';

const navItems = [
  { label: 'Platforms', href: '#platforms' },
  { label: 'Install', href: '#install' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Download', href: '#download' },
];

export default function Header() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="transparent"
      sx={{
        backdropFilter: 'blur(12px)',
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? 'rgba(23,16,18,0.78)' : 'rgba(255,250,247,0.82)',
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ gap: 1.5, minHeight: { xs: 64, md: 76 } }}>
          <Stack
            component="a"
            href="#top"
            direction="row"
            alignItems="center"
            spacing={1.25}
            sx={{ textDecoration: 'none', color: 'text.primary' }}
          >
            <Box
              sx={{
                width: 42,
                height: 42,
                flexShrink: 0,
                borderRadius: '50%',
                bgcolor: '#ffffff',
                border: 1,
                borderColor: 'divider',
                display: 'grid',
                placeItems: 'center',
              }}
            >
              {/* The mark is transparent PNG with dark lettering, so it sits on a
                  light disc to stay legible in dark mode too. */}
              <Image src="/totologo.png" alt="" width={30} height={30} priority style={{ display: 'block' }} />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 900, letterSpacing: '-0.01em' }}>
              Uni-Learn
            </Typography>
          </Stack>

          <Box sx={{ flexGrow: 1 }} />

          <Stack direction="row" spacing={0.5} sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item) => (
              <Button
                key={item.href}
                href={item.href}
                color="inherit"
                sx={{ color: 'text.secondary', fontWeight: 700 }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>

          <ColorModeToggle />

          <Button
            variant="contained"
            href="#download"
            sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
          >
            Get Uni-Learn
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
