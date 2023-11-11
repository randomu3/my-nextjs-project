// components/about/LeadershipTeam.js
import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

export default function LeadershipTeam() {
  const teamMembers = [
    {
      name: 'Иван Иванов',
      position: 'Генеральный директор',
    },
    {
      name: 'Елена Петрова',
      position: 'Финансовый директор',
    },
    // Добавьте других членов команды
  ];

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', textAlign: 'center', mt: 3, mb: 3 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Руководящая команда
      </Typography>
      {teamMembers.map((member, index) => (
        <Box key={index} sx={{ mt: 2, mb: 2 }}>
          <Typography variant="h6" component="h3" gutterBottom>
            {member.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {member.position}
          </Typography>
          {index < teamMembers.length - 1 && <Divider sx={{ mt: 2, mb: 2 }} />}
        </Box>
      ))}
    </Box>
  );
}
