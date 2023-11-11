// components/Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container } from '@mui/material';

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
