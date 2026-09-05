import React from 'react';
import Header from '../components/componentHalamans/header';
import HeroSection from '../components/componentHalamans/inhouseTraining/heroSection';
import MainSection from '../components/componentHalamans/inhouseTraining/mainSection';
import KeunggulanSection from '../components/componentHalamans/inhouseTraining/keunggulanSection';
import PengajuanSection from '../components/componentHalamans/inhouseTraining/pengajuanSection';
import CtaPelatihan from '../components/componentHalamans/inhouseTraining/ctaPelatihan';
import Testimoni from '../components/componentHalamans/testimoni';
import CtaSection from '../components/componentHalamans/ctaSection';
import Footer from '../components/componentHalamans/footer';

export default function InhouseTraining() {
  return (
    <div>
      <main className="w-full min-h-screen">
        <Header />
        <HeroSection />
        <MainSection />
        <KeunggulanSection />
        <PengajuanSection />
        <Testimoni />
        <CtaSection />
        <Footer />
      </main>
    </div>
  );
}


