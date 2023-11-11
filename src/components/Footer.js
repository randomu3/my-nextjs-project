// components/Footer.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Container maxWidth="lg">
        <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
          © 2023 НПФ "Сургутнефтегаз"
        </Typography>
      </Container>
    </Box>
  );
}
