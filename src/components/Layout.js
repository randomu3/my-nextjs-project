// components/Layout.js
import React from 'react';
import Header from './Header/Header';
import { Container } from '@mui/material';
import Footer from './Footer/Footer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        <Container maxWidth="lg" style={{ marginTop: '20px', marginBottom: '20px' }}>
          {children}
        </Container>
      </main>
      <Footer />
    </>
  );
}
