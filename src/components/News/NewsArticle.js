// components/news/NewsArticle.js
import React from 'react';
import { Card, CardContent, Typography, Box, CardMedia } from '@mui/material';

const NewsArticle = ({ title, date, summary, imageUrl }) => {
  return (
    <Card sx={{ maxWidth: 600, margin: 'auto', mt: 2, mb: 2 }}>
      {imageUrl && (
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt={title}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" component="p">
          {date}
        </Typography>
        <Typography variant="body1">
          {summary}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsArticle;
