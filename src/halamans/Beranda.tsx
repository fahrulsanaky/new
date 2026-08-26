import React from 'react';
import Header from '../components/componentHalamans/header';
import HeroSection from '../components/componentHalamans/beranda/heroSection';
import MainSection from '../components/componentHalamans/beranda/mainSection';
import VisiMisi from '../components/componentHalamans/beranda/visiMisi';
import Layanan from '../components/componentHalamans/layanan';
import ProgramTerbaru from '../components/componentHalamans/beranda/programTerbaru';
import Testimoni from '../components/componentHalamans/testimoni';
import Dokumentasi from '../components/componentHalamans/dokumentasi';
import CtaSection from '../components/componentHalamans/ctaSection';
import Footer from '../components/componentHalamans/footer';

export default function Beranda() {
  return (
    <div>
      <main className="w-full min-h-screen">
        <Header />
        <HeroSection />
        <MainSection />
        <VisiMisi />
        <Layanan />
        <ProgramTerbaru />
        <Testimoni />
        <Dokumentasi />
        <CtaSection />
        <Footer />
      </main>
    </div>
  );
}

