// pages/about.js
import React from 'react';
import Layout from '../components/Layout';
import CompanyOverview from '../components/about/CompanyOverview';
import OurValues from '../components/about/OurValues';
import LeadershipTeam from '../components/about/LeadershipTeam';
import Achievements from '../components/about/Achievements';
import CorporateResponsibility from '../components/about/CorporateResponsibility';
import ClientTestimonials from '../components/about/ClientTestimonials';
import ContactInformation from '../components/about/ContactInformation';
import FAQSection from '../components/Shared/FAQSection';

export default function About() {
  return (
    <Layout>
      <CompanyOverview />
      <OurValues />
      <LeadershipTeam />
      <Achievements />
      <CorporateResponsibility />
      <ClientTestimonials />
      <ContactInformation />
      <FAQSection />
    </Layout>
  );
}
