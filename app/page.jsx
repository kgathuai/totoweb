'use client';

import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Grid,
  Paper,
} from '@mui/material';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PlatformsSection from '@/components/PlatformsSection';
import InstallationGuides from '@/components/InstallationGuides';
import FAQSection from '@/components/FAQSection';
import DownloadSection from '@/components/DownloadSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <Box>
      <Header />
      <HeroSection />
      <PlatformsSection />
      <InstallationGuides />
      <FAQSection />
      <DownloadSection />
      <Footer />
    </Box>
  );
}
