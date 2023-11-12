// components/contact/ContactInfo.js
import React from 'react';
import { Box, Typography, Container, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

export default function ContactInfo() {
  return (
    <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 3 } }}>
      <Box sx={{ my: 2 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' } }}>
          Контактная информация
        </Typography>
        <List disablePadding>
          <ListItem disableGutters>
            <ListItemIcon>
              <LocationOnIcon />
            </ListItemIcon>
            <ListItemText primary="Адрес: ул. Примерная, д.10, г. Москва, Россия" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText primary="Телефон: +7 (123) 456-78-90" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="Email: info@surgutneftegas.com" />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
}
