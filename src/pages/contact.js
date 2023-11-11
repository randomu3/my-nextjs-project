// pages/contact.js
import React from 'react';
import Layout from '../components/Layout';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';
import MapLocation from '../components/Contact/MapLocation';

export default function Contact() {
  return (
    <Layout>
      <ContactInfo />
      <ContactForm />
      <MapLocation />
    </Layout>
  );
}
