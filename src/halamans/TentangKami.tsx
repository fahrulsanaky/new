import React from 'react';
import Header from '../components/componentHalamans/header';
import HeroSection from '../components/componentHalamans/tentangKami/heroSection';
import MainSection from '../components/componentHalamans/tentangKami/mainSection';
import SejarahSection from '../components/componentHalamans/tentangKami/sejarahSection';
import VisiMisiSection from '../components/componentHalamans/tentangKami/visiMisiSection';
import Layanan from '../components/componentHalamans/layanan';
import Dokumentasi from '../components/componentHalamans/dokumentasi';
import CtaSection from '../components/componentHalamans/ctaSection';
import Footer from '../components/componentHalamans/footer';

export default function TentangKami() {
  return (
    <div>
      <main className="w-full min-h-screen">
        <Header />
        <HeroSection />
        <MainSection />
        <VisiMisiSection />
        <SejarahSection />
        <Layanan />
        <Dokumentasi />
        <CtaSection />
        <Footer />
      </main>
    </div>
  );
}

