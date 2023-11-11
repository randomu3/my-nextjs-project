// components/news/PaginationControl.js
import React from 'react';
import { Pagination, Box, Container } from '@mui/material';

const PaginationControl = ({ count, page, onPageChange }) => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', justifyContent: 'center', padding: 3 }}>
        <Pagination
          count={count}        // Общее количество страниц
          page={page}          // Текущая страница
          onChange={onPageChange} // Функция, вызываемая при смене страницы
          color="primary"
        />
      </Box>
    </Container>
  );
};

export default PaginationControl;
