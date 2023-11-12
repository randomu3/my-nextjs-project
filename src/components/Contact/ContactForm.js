// components/contact/ContactForm.js
import React from 'react';
import { Box, Typography, TextField, Button, Container } from '@mui/material';

export default function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Здесь будет логика обработки формы
  };

  return (
    <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 3 } }}>
      <Box sx={{ py: { xs: 2, sm: 3 } }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' } }}>
          Свяжитесь с нами
        </Typography>
        <form onSubmit={handleSubmit} noValidate>
          <TextField fullWidth label="Имя" margin="dense" required variant="outlined" />
          <TextField fullWidth label="Email" margin="dense" required type="email" variant="outlined" />
          <TextField fullWidth label="Сообщение" margin="dense" required multiline rows={4} variant="outlined" />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2, fontSize: { xs: '0.875rem', sm: '1rem' } }}>
            Отправить
          </Button>
        </form>
      </Box>
    </Container>
  );
}
