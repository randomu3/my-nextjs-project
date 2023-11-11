// components/Home/ServicesOverview.js
import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';

export default function ServicesOverview() {
  // Пример услуг, замените на актуальные данные
  const services = [
    {
      title: 'Управление пенсионными накоплениями',
      description: 'Профессиональное управление вашими пенсионными активами с высоким уровнем надежности.'
    },
    {
      title: 'Индивидуальное пенсионное страхование',
      description: 'Гибкие программы страхования, адаптированные к вашим финансовым целям и потребностям.'
    },
    // Добавьте другие услуги
  ];

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Наши Услуги
      </Typography>
      <Grid container spacing={2}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" component="h3">
                  {service.title}
                </Typography>
                <Typography variant="body1">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
