// pages/index.js
import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/Home/HeroSection';
import AboutBrief from '../components/Home/AboutBrief';
import ServicesOverview from '../components/Home/ServicesOverview';
import LatestNews from '../components/Home/LatestNews';
import ContactCTA from '../components/shared/ContactCTA';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AboutBrief />
      <ServicesOverview />
      <LatestNews />
      <ContactCTA />
    </Layout>
  );
}
