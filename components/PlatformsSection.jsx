'use client';

import { Box, Container, Typography, Grid, Card, CardContent, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const platforms = [
  {
    title: '🔷 Samsung TV',
    model: '2016+ models',
    color: '#16a34a',
    description: 'Install directly on your Samsung Smart TV',
    features: [
      'No external device needed',
      'Download and install once',
      'Works completely offline',
    ],
    id: 'tizen',
  },
  {
    title: '🔶 LG TV',
    model: '2016+ models',
    color: '#16a34a',
    description: 'Install directly on your LG Smart TV',
    features: [
      'No external device needed',
      'Download and install once',
      'Works completely offline',
    ],
    id: 'webos',
  },
  {
    title: '🟢 Android TV / Google TV',
    model: 'Sony, TCL, Hisense, etc.',
    color: '#16a34a',
    description: 'For Android-based TVs and sticks',
    features: [
      'Works with Android TV sticks',
      'Download app and install',
      'Runs completely offline',
    ],
    id: 'android',
  },
  {
    title: '📦 Any TV (HDMI)',
    model: 'Works with all TVs',
    color: '#16a34a',
    description: 'Use a small external device',
    features: [
      'Works with ANY TV (even old ones)',
      'Most affordable option',
      'Just plug in and play',
    ],
    id: 'hdmi',
  },
];

export default function PlatformsSection() {
  return (
    <Box sx={{ py: 6, px: 2, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 1,
          }}
        >
          Choose Your TV Platform
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            color: '#6b7280',
            mb: 4,
          }}
        >
          Select the option that matches your TV brand
        </Typography>

        <Grid container spacing={3}>
          {platforms.map((platform) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={platform.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    background: `linear-gradient(135deg, ${platform.color}, ${platform.color}dd)`,
                    color: 'white',
                    p: 2,
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    {platform.title}
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.9 }}>
                    {platform.model}
                  </Typography>
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="body2" sx={{ mb: 2, color: '#6b7280' }}>
                    {platform.description}
                  </Typography>
                  <List sx={{ p: 0 }}>
                    {platform.features.map((feature, idx) => (
                      <ListItem key={idx} sx={{ p: 0, mb: 1 }}>
                        <ListItemIcon sx={{ minWidth: 24 }}>
                          <CheckCircleIcon sx={{ fontSize: '1.2rem', color: '#16a34a' }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={feature}
                          primaryTypographyProps={{ variant: 'body2' }}
                        />
                      </ListItem>
                    ))}
                  </List>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2 }}
                    href={`#${platform.id}-install`}
                  >
                    View Installation
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
