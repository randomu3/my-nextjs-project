// components/about/ContactInformation.js
import React from 'react';
import { Box, Grid, Card, CardContent, Typography, TextField, Button } from '@mui/material';

export default function ContactInformation() {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Контактная информация
      </Typography>
      <Grid container spacing={3}>
        {/* Контактная информация офиса */}
        <Grid item xs={12} md={6}>
          <Card elevation={3} sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>Офис</Typography>
              <Typography variant="body1">Адрес: [Ваш Адрес]</Typography>
              <Typography variant="body1">Телефон: [Номер Телефона]</Typography>
              <Typography variant="body1">Email: [Адрес Электронной Почты]</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Форма обратной связи */}
        <Grid item xs={12} md={6}>
          <Card elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>Обратная связь</Typography>
            <TextField fullWidth label="Имя" margin="normal" />
            <TextField fullWidth label="Email" margin="normal" />
            <TextField fullWidth label="Сообщение" multiline rows={4} margin="normal" />
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>Отправить</Button>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
