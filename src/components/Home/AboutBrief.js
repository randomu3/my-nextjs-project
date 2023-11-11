// components/Home/AboutBrief.js
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

export default function AboutBrief() {
  return (
    <Container maxWidth="lg">
      <Box sx={{
        textAlign: 'center', 
        padding: { xs: 2, sm: 3 }, // Уменьшение отступов на мобильных устройствах
        mt: 3, 
        mb: 3
      }}>
        <Typography variant="h4" gutterBottom sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' } }}>
          О НПФ "Сургутнефтегаз"
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
          АО НПФ "Сургутнефтегаз" - один из ведущих игроков на рынке негосударственного пенсионного обеспечения, 
          предоставляющий широкий спектр услуг для частных и корпоративных клиентов.
        </Typography>
        {/* Дополнительные параграфы */}
      </Box>
    </Container>
  );
}
