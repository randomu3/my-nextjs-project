// components/services/ServicesHeader.js
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

export default function ServicesHeader() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', padding: 5, backgroundColor: '#eceff1', borderRadius: 2, marginTop: 3, marginBottom: 3 }}>
        <Typography variant="h3" gutterBottom component="div">
          Наши Услуги
        </Typography>
        <Typography variant="h6">
          АО НПФ "Сургутнефтегаз" предлагает широкий спектр пенсионных услуг, направленных на удовлетворение потребностей наших клиентов.
        </Typography>
      </Box>
    </Container>
  );
}
