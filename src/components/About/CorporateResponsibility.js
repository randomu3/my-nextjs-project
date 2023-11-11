// components/about/CorporateResponsibility.js
import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function CorporateResponsibility() {
  // Пример областей корпоративной ответственности
  const responsibilityAreas = [
    "Устойчивое развитие и охрана окружающей среды",
    "Поддержка социальных и культурных проектов",
    "Обеспечение высоких стандартов корпоративного управления",
    // Добавьте другие области
  ];

  return (
    <Box sx={{ margin: 3 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Корпоративная ответственность
      </Typography>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <List>
          {responsibilityAreas.map((area, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <CheckCircleOutlineIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={area} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}
