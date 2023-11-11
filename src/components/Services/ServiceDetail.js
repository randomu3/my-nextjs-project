// components/services/ServiceDetail.js
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const ServiceDetail = ({ title, description }) => {
  return (
    <Card sx={{ maxWidth: 600, margin: 'auto', mt: 3, mb: 3 }}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1">
          {description}
        </Typography>
        {/* Дополнительный контент, такой как списки, изображения и т.д., можно добавить здесь */}
      </CardContent>
    </Card>
  );
};

export default ServiceDetail;
