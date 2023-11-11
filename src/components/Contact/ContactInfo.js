// components/contact/ContactInfo.js
import React from 'react';
import { Box, Typography, Container, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

export default function ContactInfo() {
  return (
    <Container maxWidth="lg" sx={{ padding: 0 }}>
      <Box sx={{ padding: { xs: 2, sm: 3 }, mt: 2, mb: 2 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' } }}>
          Контактная информация
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText primary="Адрес: [Ваш Адрес]" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PhoneIcon />
                </ListItemIcon>
                <ListItemText primary="Телефон: [Номер Телефона]" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary="Email: [Адрес Электронной Почты]" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
