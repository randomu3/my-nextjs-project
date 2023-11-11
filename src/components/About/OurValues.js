// components/about/OurValues.js
import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

export default function OurValues() {
  // Пример значений, которые можно заменить актуальной информацией
  const values = [
    { title: 'Клиентоориентированность', description: 'Мы стремимся удовлетворять потребности каждого клиента.' },
    { title: 'Инновации', description: 'Непрерывное внедрение инновационных решений в нашу работу.' },
    { title: 'Прозрачность', description: 'Открытость и честность во всех аспектах нашей деятельности.' },
    // Добавьте дополнительные ценности по необходимости
  ];

  return (
    <Grid container spacing={2} sx={{ marginTop: 2 }}>
      {values.map((value, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card elevation={3} sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" component="h3">
                {value.title}
              </Typography>
              <Typography variant="body1">
                {value.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
