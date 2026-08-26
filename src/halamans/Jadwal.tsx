import React from 'react';
import Header from '../components/componentHalamans/header';
import HeroSection from '../components/componentHalamans/jadwal/heroSection';
import MainSection from '../components/componentHalamans/jadwal/mainSection';
import CtaSection from '../components/componentHalamans/ctaSection';
import Footer from '../components/componentHalamans/footer';

export default function Jadwal() {
  return (
    <div>
      <main className="w-full min-h-screen">
        <Header />
        <HeroSection />
        <MainSection />
        <CtaSection />
        <Footer />
      </main>
    </div>
  );
}
