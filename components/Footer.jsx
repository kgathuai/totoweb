'use client';

import Image from 'next/image';
import { Box, Container, Stack, Typography } from '@mui/material';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

const links = [
  { label: 'Platforms', href: '#platforms' },
  { label: 'Install', href: '#install' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Download', href: '#download' },
  { label: 'GitHub', href: 'https://github.com/kgathuai/Evieit', external: true },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ mt: 'auto', py: 5, px: 2, bgcolor: 'background.paper', borderTop: 1, borderColor: 'divider' }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={3}
          alignItems={{ xs: 'flex-start', md: 'center' }}
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Box
              sx={{
                width: 40,
                height: 40,
                flexShrink: 0,
                borderRadius: '50%',
                bgcolor: '#ffffff',
                border: 1,
                borderColor: 'divider',
                display: 'grid',
                placeItems: 'center',
              }}
            >
              <Image src="/totologo.png" alt="" width={28} height={28} style={{ display: 'block' }} />
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 900 }}>
                Uni-Learn
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Free, offline learning for every child.
              </Typography>
            </Box>
          </Stack>

          <Stack direction="row" spacing={{ xs: 2, sm: 3 }} flexWrap="wrap" useFlexGap>
            {links.map((link) => (
              <Typography
                key={link.label}
                component="a"
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                variant="body2"
                sx={{
                  fontWeight: 700,
                  color: 'text.secondary',
                  textDecoration: 'none',
                  '&:hover': { color: 'primary.dark', textDecoration: 'underline' },
                }}
              >
                {link.label}
              </Typography>
            ))}
          </Stack>
        </Stack>

        <Stack
          direction="row"
          spacing={0.5}
          alignItems="center"
          justifyContent="center"
          sx={{ mt: 4, color: 'text.secondary' }}
        >
          <Typography variant="caption">
            © {new Date().getFullYear()} Uni-Learn · Built with
          </Typography>
          <FavoriteRoundedIcon sx={{ fontSize: 14, color: 'primary.main' }} />
          <Typography variant="caption">for families everywhere</Typography>
        </Stack>
      </Container>
    </Box>
  );
}
