'use client';

import { Box } from '@mui/material';

export default function Header() {
  return (
    <Box
      sx={{
        background: '#16a34a',
        color: 'white',
        py: 0.25,
        px: 2,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
        <img src="/totologo.png" alt="Uni-Learn Logo" style={{ height: '96px', width: '96px', display: 'block', filter: 'brightness(0) invert(1)' }} />
      </Box>
    </Box>
  );
}
