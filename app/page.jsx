'use client';

import { Box } from '@mui/material';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DownloadSection from '@/components/DownloadSection';
import WhatsInside from '@/components/WhatsInside';
import PlatformsSection from '@/components/PlatformsSection';
import InstallationGuides from '@/components/InstallationGuides';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import { useTvMode } from '@/hooks/useTvMode';

export default function Home() {
  const isTv = useTvMode();

  return (
    <Box
      id="top"
      component="main"
      sx={{
        // Televisions often crop a few percent off the top and bottom
        // (overscan). Horizontal breathing room comes from the widened
        // TV containers instead, so section backgrounds stay full-bleed.
        pt: isTv ? 1.5 : 0,
        pb: isTv ? 1.5 : 0,
      }}
    >
      <Header />
      <HeroSection />
      {/* Download sits directly under the hero: most visitors arrive to
          install it, and it used to be five sections down the page. */}
      <DownloadSection />
      <WhatsInside />
      <PlatformsSection />
      <InstallationGuides />
      <FAQSection />
      <Footer />
    </Box>
  );
}
