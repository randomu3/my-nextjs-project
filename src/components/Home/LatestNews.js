// components/Home/LatestNews.js
import React from 'react';
import { Box, Typography, Card, CardContent, CardActions, Button, Grid } from '@mui/material';

export default function LatestNews() {
  // Пример новостей, замените на актуальные данные
  const newsItems = [
    {
      title: 'Заголовок новости 1',
      summary: 'Краткое описание новости 1...',
      link: '/news/1' // Ссылка на полную новость
    },
    {
      title: 'Заголовок новости 2',
      summary: 'Краткое описание новости 2...',
      link: '/news/2'
    },
    // Добавьте другие новости
  ];

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Последние новости
      </Typography>
      <Grid container spacing={2}>
        {newsItems.map((news, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{news.title}</Typography>
                <Typography variant="body2">{news.summary}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={news.link}>Читать далее</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
