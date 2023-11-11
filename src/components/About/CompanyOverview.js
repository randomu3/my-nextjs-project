// components/about/CompanyOverview.js
import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

export default function CompanyOverview() {
  return (
    <Box>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Обзор Компании
        </Typography>
        <Typography variant="body1" paragraph>
          НПФ "Сургутнефтегаз" является одним из лидеров в сфере негосударственного пенсионного обеспечения,
          предлагая широкий спектр услуг для корпоративных и частных клиентов.
        </Typography>
        <Typography variant="body1">
          С момента основания в [Год основания], НПФ "Сургутнефтегаз" стремится предоставлять 
          инновационные и надежные финансовые решения, способствующие долгосрочному сохранению 
          и приумножению средств наших клиентов.
        </Typography>
        <Typography variant="body1">
          [Дополнительная информация о компании...]
        </Typography>
      </Paper>
    </Box>
  );
}
