// components/Home/HeroSection.js
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

export default function HeroSection() {
  return (
    <Container maxWidth="lg">
      <Box sx={{
        textAlign: 'center', 
        padding: { xs: 4, sm: 6 }, // Уменьшение отступов на мобильных устройствах
        backgroundColor: '#004d40',
        color: '#fff',
        borderRadius: 2,
        marginTop: 3,
        marginBottom: 3,
        backgroundImage: 'url(https://avatars.mds.yandex.net/get-altay/223006/2a0000015b1792a9a01d416386abd59d0392/orig)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <Typography variant="h3" gutterBottom component="div" sx={{ fontWeight: 'bold', fontSize: { xs: '1.5rem', sm: '3rem' } }}>
          Добро пожаловать в АО НПФ "Сургутнефтегаз"
        </Typography>
        <Typography variant="h6" sx={{ mb: 3, fontSize: { xs: '0.875rem', sm: '1.125rem' } }}>
          Ваш надежный партнер в управлении пенсионными накоплениями и инвестициями
        </Typography>
        <Button variant="contained" size="large" href="/about">
          Узнать больше
        </Button>
      </Box>
    </Container>
  );
}
