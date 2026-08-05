'use client';

import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';

const faqs = [
  {
    question: 'Do I need internet to use the app?',
    answer: 'No. After you install the app once, it works completely offline. Perfect for areas with no or unreliable internet.',
  },
  {
    question: 'Is there a monthly fee?',
    answer: 'No. Uni-Learn is completely free. One-time installation, no subscriptions.',
  },
  {
    question: 'What age is this for?',
    answer: 'Designed for kids ages 3-7. Includes alphabet learning, numbers up to 100, and interactive games.',
  },
  {
    question: 'Which TV should I buy?',
    answer: 'If you already own a TV, we support most brands. If you\'re buying, Android TV sticks are very affordable (~$25) and work with any TV.',
  },
  {
    question: 'How much space does it need?',
    answer: 'About 50-100MB on your device. Works on older, low-end TVs and devices.',
  },
  {
    question: 'Can I use it on multiple TVs?',
    answer: 'Yes. Install once on a device and move it between TVs using HDMI.',
  },
];

export default function FAQSection() {
  return (
    <Box sx={{ py: 6, px: 2, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 4,
          }}
        >
          Frequently Asked Questions
        </Typography>

        <Grid container spacing={3}>
          {faqs.map((faq, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card
                sx={{
                  height: '100%',
                  borderLeft: '3px solid #16a34a',
                  backgroundColor: '#f9fafb',
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                    {faq.question}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#6b7280', lineHeight: 1.6 }}>
                    {faq.answer}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
