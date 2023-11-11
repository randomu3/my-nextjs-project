// components/contact/ContactForm.js
import React from 'react';
import { Box, Typography, TextField, Button, Container } from '@mui/material';

export default function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Обработка данных формы
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ 
          padding: { xs: 0, sm: 0 }, // Адаптивные отступы
          mt: 3, mb: 3 
        }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' } }}>
          Свяжитесь с нами
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Имя" margin="normal" required />
          <TextField fullWidth label="Email" margin="normal" required type="email" />
          <TextField fullWidth label="Сообщение" margin="normal" required multiline rows={4} />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Отправить
          </Button>
        </form>
      </Box>
    </Container>
  );
}
