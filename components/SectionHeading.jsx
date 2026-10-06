'use client';

import { Box, Typography } from '@mui/material';

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <Box sx={{ textAlign: 'center', maxWidth: '45rem', mx: 'auto', mb: { xs: 4, md: 6 } }}>
      {eyebrow ? (
        <Typography
          variant="overline"
          sx={{ color: 'primary.dark', fontWeight: 900, letterSpacing: '0.14em' }}
        >
          {eyebrow}
        </Typography>
      ) : null}
      <Typography variant="h2" sx={{ mt: eyebrow ? 0.5 : 0 }}>
        {title}
      </Typography>
      {subtitle ? (
        <Typography variant="subtitle1" sx={{ color: 'text.secondary', mt: 1.5 }}>
          {subtitle}
        </Typography>
      ) : null}
    </Box>
  );
}
