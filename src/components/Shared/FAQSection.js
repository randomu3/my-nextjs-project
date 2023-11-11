// components/about/FAQSection.js
import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQSection() {
  // Пример вопросов и ответов, замените на реальные данные
  const faqData = [
    {
      question: "Как я могу управлять своими пенсионными накоплениями?",
      answer: "Вы можете управлять своими пенсионными накоплениями через наш онлайн портал или связавшись с нашими специалистами."
    },
    {
      question: "Какие услуги предлагает НПФ 'Сургутнефтегаз'?",
      answer: "Мы предлагаем широкий спектр пенсионных услуг, включая накопительные пенсионные программы, индивидуальное пенсионное страхование и многое другое."
    },
    // Добавьте другие вопросы и ответы
  ];

  return (
    <Box sx={{ margin: 3 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Часто Задаваемые Вопросы
      </Typography>
      {faqData.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}a-content`}
            id={`panel${index}a-header`}
          >
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
