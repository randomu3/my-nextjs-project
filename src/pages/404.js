import React from 'react';
import Link from 'next/link';
import { Button, Typography, Container } from '@mui/material';

const Custom404 = () => {
    return (
        <Container style={{ textAlign: 'center', marginTop: '50px' }}>
            <Typography variant="h3" gutterBottom>
                404 - Страница не найдена
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Упс! Кажется, мы не можем найти страницу, которую вы ищете.
            </Typography>
            <Link href="/" passHref>
                <Button variant="contained" color="primary">
                    Вернуться на главную
                </Button>
            </Link>
        </Container>
    );
};

export default Custom404;
