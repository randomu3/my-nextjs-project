// components/Home/ContactCTA.js
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

export default function ContactCTA() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', padding: 4, backgroundColor: '#e3f2fd', borderRadius: '15px', marginTop: 4, marginBottom: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Свяжитесь с нами
        </Typography>
        <Typography variant="body1" paragraph>
          У вас есть вопросы или вы хотите узнать больше о наших услугах? Наша команда всегда готова помочь вам.
        </Typography>
        <Button variant="contained" color="primary" size="large" href="/contact">
          Связаться сейчас
        </Button>
      </Box>
    </Container>
  );
}
