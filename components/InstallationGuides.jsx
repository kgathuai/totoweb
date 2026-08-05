'use client';

import { Box, Container, Typography, Card, CardContent, Stepper, Step, StepLabel, StepContent, Button, Link as MuiLink } from '@mui/material';

const installationGuides = [
  {
    id: 'tizen',
    title: '🔷 Samsung Tizen - Installation Guide',
    steps: [
      {
        label: 'Enable Developer Mode',
        description: 'On your Samsung TV: Settings → Developer → Enable',
      },
      {
        label: 'Get the App Package',
        description: 'Download: UniLearnUSB-signed.wgt',
      },
      {
        label: 'Install via Tizen Studio',
        description: 'Use Tizen Studio to connect and install the app',
      },
      {
        label: 'Launch and Enjoy',
        description: 'Find "Uni-Learn" in your Apps and open it',
      },
    ],
    docsLink: 'https://github.com/your-repo/tizen/README.md',
  },
  {
    id: 'webos',
    title: '🔶 LG webOS - Installation Guide',
    steps: [
      {
        label: 'Enable Developer Mode',
        description: 'On your LG TV: Settings → All Settings → Developer',
      },
      {
        label: 'Install webOS SDK',
        description: 'Download from LG Developer Site',
      },
      {
        label: 'Connect and Install',
        description: 'Use webOS CLI to install the app to your TV',
      },
      {
        label: 'Start Learning',
        description: 'Launch "Uni-Learn" from your apps menu',
      },
    ],
    docsLink: 'https://github.com/your-repo/webos/README.md',
  },
  {
    id: 'android',
    title: '🟢 Android TV - Installation Guide',
    steps: [
      {
        label: 'Download the App',
        description: 'Get UniLearn.apk file',
      },
      {
        label: 'Enable Unknown Sources (if needed)',
        description: 'Settings → Security → Unknown Sources',
      },
      {
        label: 'Install via USB or ADB',
        description: 'Copy APK to USB drive or use ADB command',
      },
      {
        label: 'Open and Start Learning',
        description: 'Find "Uni-Learn" in your Apps list',
      },
    ],
    docsLink: 'https://github.com/your-repo/android-tv/README.md',
  },
  {
    id: 'hdmi',
    title: '📦 Universal HDMI Option - For Any TV',
    steps: [
      {
        label: 'Choose Your Device',
        description: 'Option A: Raspberry Pi (~$50) or Option B: Android TV Stick (~$25)',
      },
      {
        label: 'Get Setup Materials',
        description: 'Download setup guides for your chosen device',
      },
      {
        label: 'Connect to TV',
        description: "Plug device into TV's HDMI port",
      },
      {
        label: 'Power On and Learn',
        description: 'App starts automatically on boot',
      },
    ],
    docsLink: 'https://github.com/your-repo/pi-kiosk/README.md',
  },
];

export default function InstallationGuides() {
  return (
    <Box sx={{ py: 6, px: 2, backgroundColor: '#f9fafb' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 4,
          }}
        >
          Installation Guides
        </Typography>

        {installationGuides.map((guide) => (
          <Card
            key={guide.id}
            id={`${guide.id}-install`}
            sx={{
              mb: 3,
              borderLeft: '4px solid #16a34a',
              scroll: 'smooth',
            }}
          >
            <CardContent>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                {guide.title}
              </Typography>
              <Stepper orientation="vertical">
                {guide.steps.map((step, idx) => (
                  <Step key={idx} active>
                    <StepLabel>{step.label}</StepLabel>
                    <StepContent>
                      <Typography variant="body2" sx={{ color: '#6b7280', mb: 1 }}>
                        {step.description}
                      </Typography>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
              <Box sx={{ mt: 3 }}>
                <Button
                  variant="outlined"
                  href={guide.docsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📄 Full Guide
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Container>
    </Box>
  );
}
