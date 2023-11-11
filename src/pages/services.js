// pages/services.js
import React from 'react';
import Layout from '../components/Layout';
import ContactCTA from '../components/shared/ContactCTA';
import ServiceDetail from '../components/Services/ServiceDetail';
import ServicesHeader from '../components/Services/ServicesHeader';
import FAQSection from '../components/Shared/FAQSection';

export default function Services() {
  return (
    <Layout>
      <ServicesHeader />
      {/* Пример: Повторите ServiceDetail для каждой услуги */}
      <ServiceDetail title="Услуга 1" description="Описание услуги 1..." />
      <ServiceDetail title="Услуга 2" description="Описание услуги 2..." />
      {/* ...другие услуги */}
      <FAQSection />
      <ContactCTA />
    </Layout>
  );
}
