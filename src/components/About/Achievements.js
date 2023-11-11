// components/about/Achievements.js
import React from 'react';
import { Box, Grid, Card, CardContent, Typography } from '@mui/material';

export default function Achievements() {
  // Пример достижений, замените на реальные данные
  const achievementsList = [
    {
      title: 'Награда за инновации',
      description: 'Получение престижной награды за внедрение инновационных финансовых продуктов.',
      year: '2021'
    },
    {
      title: 'Лучший работодатель года',
      description: 'Признание компании лучшим местом работы в отрасли.',
      year: '2020'
    },
    // Добавьте другие достижения
  ];

  return (
    <Box sx={{ margin: 2 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Наши Достижения
      </Typography>
      <Grid container spacing={2}>
        {achievementsList.map((achievement, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card elevation={3} sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" component="h3">
                  {achievement.title}
                </Typography>
                <Typography variant="body1">
                  {achievement.description}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  {achievement.year}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
