// components/news/NewsHeader.js
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

export default function NewsHeader() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ padding: 3 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Новости
        </Typography>
        <Typography variant="body1">
          Последние новости и обновления от АО НПФ "Сургутнефтегаз"
        </Typography>
      </Box>
    </Container>
  );
}
