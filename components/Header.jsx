'use client';

import { Box } from '@mui/material';
import Image from 'next/image';

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
        <Image
          src="/totologo.png"
          alt="Uni-Learn Logo"
          width={96}
          height={96}
          priority
          style={{ display: 'block', filter: 'brightness(0) invert(1)' }}
        />
      </Box>
    </Box>
  );
}
