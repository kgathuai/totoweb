'use client';

import { Box, Container, Typography, Link as MuiLink } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#1f2937',
        color: 'white',
        py: 3,
        px: 2,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" sx={{ mb: 1 }}>
          &copy; 2024 Uni-Learn. Free educational software for all children.
        </Typography>
        <Typography variant="body2">
          <MuiLink
            href="https://github.com/your-repo"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: '#16a34a', textDecoration: 'none', mr: 2 }}
          >
            GitHub
          </MuiLink>
          |
          <MuiLink
            href="https://github.com/your-repo/docs/uni-learn-concept-paper.md"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: '#16a34a', textDecoration: 'none', ml: 2 }}
          >
            About
          </MuiLink>
        </Typography>
      </Container>
    </Box>
  );
}
