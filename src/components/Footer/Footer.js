// components/Footer.js
import React from 'react';
import { Box, Typography, Container, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        p: { xs: 2, sm: 3 },
        mt: 'auto', // Позиционирование внизу страницы
      }}
      component="footer"
    >
      <Container maxWidth="lg">
        <Box textAlign="center" my={2}>
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} НПФ "Сургутнефтегаз". Все права защищены.
          </Typography>
          {/* Социальные иконки для связи */}
          <Box mt={1}>
            <IconButton aria-label="facebook" color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="twitter" color="inherit">
              <TwitterIcon />
            </IconButton>
            <IconButton aria-label="linkedin" color="inherit">
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
