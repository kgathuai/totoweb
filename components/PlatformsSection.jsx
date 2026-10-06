'use client';

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import TvRoundedIcon from '@mui/icons-material/TvRounded';
import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded';
import AndroidRoundedIcon from '@mui/icons-material/AndroidRounded';
import SettingsInputHdmiRoundedIcon from '@mui/icons-material/SettingsInputHdmiRounded';
import SectionHeading from './SectionHeading';
import { brand } from './ThemeRegistry';

const platforms = [
  {
    id: 'tizen',
    title: 'Samsung TV',
    model: 'Tizen · 2016 and newer',
    icon: TvRoundedIcon,
    accent: brand.coral.main,
    description: 'Install straight onto a Samsung Smart TV — no extra box, no cables.',
    features: ['No extra device needed', 'Install once, keep forever', 'Runs entirely offline'],
  },
  {
    id: 'webos',
    title: 'LG TV',
    model: 'webOS · 2016 and newer',
    icon: LiveTvRoundedIcon,
    accent: brand.teal.main,
    description: 'Install straight onto an LG Smart TV with the webOS developer tools.',
    features: ['No extra device needed', 'Install once, keep forever', 'Runs entirely offline'],
  },
  {
    id: 'android',
    title: 'Android TV & Google TV',
    model: 'Sony, TCL, Hisense, Xiaomi',
    icon: AndroidRoundedIcon,
    accent: brand.mint.main,
    description: 'For Android-based televisions and streaming sticks.',
    features: ['Works with Google TV sticks', 'Sideload over USB or ADB', 'Runs entirely offline'],
  },
  {
    id: 'hdmi',
    title: 'Any TV with HDMI',
    model: 'Even older televisions',
    icon: SettingsInputHdmiRoundedIcon,
    accent: brand.orange.main,
    description: 'Add a Raspberry Pi or Android stick to any screen with an HDMI port.',
    features: ['Works with ANY TV', 'Most affordable option', 'Plug in and it starts'],
  },
];

export default function PlatformsSection() {
  return (
    <Box
      id="platforms"
      component="section"
      sx={{ py: { xs: 7, md: 10 }, px: 2, bgcolor: 'background.paper', scrollMarginTop: '92px' }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Pick your setup"
          title="Choose your TV platform"
          subtitle="Uni-Learn runs on the televisions families already own — or on an affordable stick that turns any screen into one."
        />

        <Grid container spacing={3}>
          {platforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <Grid item xs={12} sm={6} lg={3} key={platform.id}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent
                    sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}
                  >
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: 2.5,
                        display: 'grid',
                        placeItems: 'center',
                        bgcolor: `${platform.accent}22`,
                        color: platform.accent,
                        mb: 2,
                      }}
                    >
                      <Icon sx={{ fontSize: 28 }} />
                    </Box>

                    <Typography variant="h5">{platform.title}</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700 }}>
                      {platform.model}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1.5, mb: 2 }}>
                      {platform.description}
                    </Typography>

                    <List sx={{ p: 0, mb: 3 }}>
                      {platform.features.map((feature) => (
                        <ListItem key={feature} sx={{ p: 0, mb: 0.75 }} disableGutters>
                          <ListItemIcon>
                            <CheckCircleRoundedIcon sx={{ fontSize: 19, color: platform.accent }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={feature}
                            primaryTypographyProps={{ variant: 'body2' }}
                          />
                        </ListItem>
                      ))}
                    </List>

                    <Box sx={{ mt: 'auto' }}>
                      <Button fullWidth variant="outlined" href={`#${platform.id}-install`}>
                        View install guide
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
