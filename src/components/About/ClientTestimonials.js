// components/about/ClientTestimonials.js
import React from 'react';
import { Box, Typography, Paper, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function ClientTestimonials() {
  // Пример отзывов, замените на реальные отзывы
  const testimonials = [
    {
      quote: "НПФ 'Сургутнефтегаз' предоставил мне отличные услуги по управлению моими пенсионными накоплениями.",
      author: "Алексей Иванов"
    },
    {
      quote: "Благодаря профессионализму команды, я чувствую уверенность в своем финансовом будущем.",
      author: "Мария Семенова"
    },
    // Добавьте другие отзывы
  ];

  // Простая логика карусели (можно расширить)
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = testimonials.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1 >= maxSteps ? 0 : prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1 < 0 ? maxSteps - 1 : prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', textAlign: 'center', mt: 4, mb: 4 }}>
      <Typography variant="h5" gutterBottom>
        Отзывы клиентов
      </Typography>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography>{testimonials[activeStep].quote}</Typography>
        <Typography variant="body2" color="text.secondary">
          - {testimonials[activeStep].author}
        </Typography>
      </Paper>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <IconButton onClick={handleBack} disabled={activeStep === 0}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton onClick={handleNext} disabled={activeStep === maxSteps - 1}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
