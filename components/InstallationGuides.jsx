'use client';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import TvRoundedIcon from '@mui/icons-material/TvRounded';
import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded';
import AndroidRoundedIcon from '@mui/icons-material/AndroidRounded';
import SettingsInputHdmiRoundedIcon from '@mui/icons-material/SettingsInputHdmiRounded';
import SectionHeading from './SectionHeading';
import { brand } from './ThemeRegistry';

const guides = [
  {
    id: 'tizen',
    title: 'Samsung TV',
    model: 'Tizen · 2016 and newer',
    icon: TvRoundedIcon,
    accent: brand.coral.main,
    steps: [
      { label: 'Enable Developer Mode', description: 'On the TV: Settings → General → Network → Developer Mode, then reboot.' },
      { label: 'Download the widget package', description: 'Grab UniLearnUSB-unsigned.wgt from the download section below. Retail Tizen TVs reject unsigned packages, so it has to be signed first.' },
      { label: 'Sign and install', description: 'Sign it with Tizen Studio (tizen package -t wgt -s <your-profile>), then install over the network with sdb install.' },
      { label: 'Launch', description: 'Find "Uni-Learn" in your Apps list and open it.' },
    ],
    docsLink: 'https://github.com/kgathuai/Evieit/blob/main/tizen/README.md',
  },
  {
    id: 'webos',
    title: 'LG TV',
    model: 'webOS · 2016 and newer',
    icon: LiveTvRoundedIcon,
    accent: brand.teal.main,
    steps: [
      { label: 'Enable Developer Mode', description: 'On the TV: Settings → All Settings → General → Developer Mode.' },
      { label: 'Install the webOS CLI', description: 'Install the webOS TV SDK from LG\u2019s developer site so you have ares-package and ares-install.' },
      { label: 'Build and install', description: 'Run the webOS packaging script to produce the .ipk, then install it with ares-install -d <device>.' },
      { label: 'Launch', description: 'Open "Uni-Learn" from your apps menu.' },
    ],
    docsLink: 'https://github.com/kgathuai/Evieit/blob/main/webos/README.md',
  },
  {
    id: 'android',
    title: 'Android TV & Google TV',
    model: 'Sony, TCL, Hisense, Xiaomi',
    icon: AndroidRoundedIcon,
    accent: brand.mint.main,
    steps: [
      { label: 'Build the APK', description: 'There is no prebuilt APK yet. Wrap the web export in a small WebView project — the Android TV guide walks through it.' },
      { label: 'Enable unknown sources', description: 'On the TV: Settings → Security → Unknown sources.' },
      { label: 'Install over USB or ADB', description: 'Copy the APK to a USB drive, or run adb install -r app-release.apk.' },
      { label: 'Launch', description: 'Find "Uni-Learn" in your apps list and open it.' },
    ],
    docsLink: 'https://github.com/kgathuai/Evieit/blob/main/android-tv/README.md',
  },
  {
    id: 'hdmi',
    title: 'Any TV with HDMI',
    model: 'Even older televisions',
    icon: SettingsInputHdmiRoundedIcon,
    accent: brand.orange.main,
    steps: [
      { label: 'Choose your device', description: 'A Raspberry Pi (about $50) or an Android TV stick (about $25).' },
      { label: 'Set up the device', description: 'Run the pi-kiosk setup script, or sideload the Android app onto the stick.' },
      { label: 'Connect to the TV', description: 'Plug it into the HDMI port and power it on.' },
      { label: 'It starts by itself', description: 'The kiosk boots straight into Uni-Learn — no menus for a child to get lost in.' },
    ],
    docsLink: 'https://github.com/kgathuai/Evieit/blob/main/pi-kiosk/README.md',
  },
];

export default function InstallationGuides() {
  return (
    <Box
      id="install"
      component="section"
      sx={{ py: { xs: 7, md: 10 }, px: 2, scrollMarginTop: '6rem' }}
    >
      <Container maxWidth="md">
        <SectionHeading
          eyebrow="Setup"
          title="Installation guides"
          subtitle="Four steps or fewer on every platform. Expand the one that matches your TV."
        />

        {guides.map((guide, index) => {
          const Icon = guide.icon;
          return (
            <Accordion
              key={guide.id}
              id={`${guide.id}-install`}
              defaultExpanded={index === 0}
              sx={{ mb: 2, scrollMarginTop: '6rem' }}
            >
              <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    flexShrink: 0,
                    mr: 1.5,
                    borderRadius: 2,
                    display: 'grid',
                    placeItems: 'center',
                    bgcolor: `${guide.accent}22`,
                    color: guide.accent,
                  }}
                >
                  <Icon sx={{ fontSize: 22 }} />
                </Box>
                <Box>
                  <Typography variant="h5">{guide.title}</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700 }}>
                    {guide.model}
                  </Typography>
                </Box>
              </AccordionSummary>

              <AccordionDetails>
                <Stepper orientation="vertical" sx={{ ml: 0.5 }}>
                  {guide.steps.map((step) => (
                    <Step key={step.label} active>
                      <StepLabel>
                        <Typography variant="body2" sx={{ fontWeight: 800 }}>
                          {step.label}
                        </Typography>
                      </StepLabel>
                      <StepContent>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {step.description}
                        </Typography>
                      </StepContent>
                    </Step>
                  ))}
                </Stepper>

                <Button
                  variant="outlined"
                  href={guide.docsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  endIcon={<OpenInNewRoundedIcon />}
                  sx={{ mt: 2 }}
                >
                  Full guide
                </Button>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Container>
    </Box>
  );
}
