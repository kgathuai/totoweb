'use client';

import Image from 'next/image';
import { Box, Chip, Container, Grid, Typography } from '@mui/material';
import SectionHeading from './SectionHeading';

const shots = [
  {
    src: '/screens/animals.jpg',
    alt: 'The domestic animals lesson, showing real photographs of a cat, dog, cow and goat',
    caption: 'Real photographs, not cartoons — over 250 of them, all bundled in the app.',
  },
  {
    src: '/screens/fruits.jpg',
    alt: 'The fruits lesson, showing photographs of fruit with their names',
    caption: 'Names read aloud with each picture, so a child who cannot read yet can still learn.',
  },
  {
    src: '/screens/alphabet.jpg',
    alt: 'The alphabet lesson with large letter tiles and the focused letter highlighted',
    caption: 'Big targets and clear focus, so a TV remote is all anyone needs.',
  },
];

const modules = [
  'Alphabet A–Z', 'Numbers 1–100', 'A for Apple', 'Fruits', 'Domestic animals',
  'Wild animals', 'Animal sounds', 'Vowels', 'Shapes', 'Colours', 'Vehicles',
  'Foods', 'Clothes', 'Finger counting', 'Fractions', "What's next?", 'Find the letter',
];

export default function WhatsInside() {
  return (
    <Box
      id="inside"
      component="section"
      sx={{ py: { xs: 7, md: 10 }, px: 2, scrollMarginTop: '6rem', bgcolor: 'background.paper' }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="See it first"
          title="What your child actually gets"
          subtitle="Seventeen lessons, every picture and every sound stored inside the app — nothing to load, nothing to pay for."
        />

        <Grid container spacing={3} sx={{ mb: { xs: 5, md: 6 } }}>
          {shots.map((shot) => (
            <Grid item xs={12} md={4} key={shot.src}>
              <Box
                sx={{
                  borderRadius: 3,
                  overflow: 'hidden',
                  border: 1,
                  borderColor: 'divider',
                  bgcolor: 'background.default',
                }}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={1500}
                  height={844}
                  sizes="(max-width: 900px) 100vw, 380px"
                  style={{ display: 'block', width: '100%', height: 'auto' }}
                />
              </Box>
              <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1.5 }}>
                {shot.caption}
              </Typography>
            </Grid>
          ))}
        </Grid>

        <Typography
          variant="overline"
          sx={{ fontWeight: 900, letterSpacing: '0.14em', color: 'text.secondary' }}
        >
          Every lesson included
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1.5 }}>
          {modules.map((m) => (
            <Chip
              key={m}
              label={m}
              sx={{
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                fontWeight: 800,
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
