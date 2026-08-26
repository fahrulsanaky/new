import React from 'react';
import Header from '../components/componentHalamans/header';
import HeroSection from '../components/componentHalamans/kontakKami/heroSection';
import MainSection from '../components/componentHalamans/kontakKami/mainSection';
import FormKontakSection from '../components/componentHalamans/kontakKami/formKontakSection';
import FaqSection from '../components/componentHalamans/kontakKami/faqSection';
import Footer from '../components/componentHalamans/footer';

export default function KontakKami() {
  return (
    <div>
      <main className="w-full min-h-screen">
        <Header />
        <HeroSection />
        <MainSection />
        <FormKontakSection />
        <FaqSection />
        <Footer />
      </main>
    </div>
  );
}



