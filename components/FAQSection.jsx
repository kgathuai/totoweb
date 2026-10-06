'use client';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from '@mui/material';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import SectionHeading from './SectionHeading';

const faqs = [
  {
    question: 'Do I need internet to use the app?',
    answer:
      'No. Once the app is installed it works completely offline — ideal for homes with no connection or an unreliable one.',
  },
  {
    question: 'Is there a monthly fee?',
    answer: 'No. Uni-Learn is completely free. Install it once and there is nothing else to pay, ever.',
  },
  {
    question: 'What ages is this for?',
    answer:
      'It is designed for children aged 3–7. It covers the alphabet, numbers up to 100, and early logic and recognition games.',
  },
  {
    question: 'Which TV should I get?',
    answer:
      'If you already own a TV we support most brands. If you are buying, an Android TV stick is the cheapest route — around $25 — and works with any screen that has an HDMI port.',
  },
  {
    question: 'How much space does it need?',
    answer:
      'Roughly 50–100 MB. It runs comfortably on older, low-powered TVs and devices.',
  },
  {
    question: 'Can I use it on more than one TV?',
    answer:
      'Yes. Install it on each device you want to use, or move a small HDMI stick between televisions.',
  },
];

export default function FAQSection() {
  return (
    <Box
      id="faq"
      component="section"
      sx={{ py: { xs: 7, md: 10 }, px: 2, bgcolor: 'background.paper', scrollMarginTop: '6rem' }}
    >
      <Container maxWidth="md">
        <SectionHeading
          eyebrow="Good to know"
          title="Frequently asked questions"
          subtitle="The things parents ask us most before installing."
        />

        {faqs.map((faq) => (
          <Accordion key={faq.question} sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
              <Typography variant="h5">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}
