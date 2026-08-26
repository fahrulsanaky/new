import React from 'react';
import Header from '../components/componentHalamans/header';
import HeroSection from '../components/componentHalamans/programPelatihan/heroSection';
import ProgramPelatihanSection from '../components/componentHalamans/programPelatihan/programPelatihanSection';
import CtaInhouse from '../components/componentHalamans/programPelatihan/ctaInhouse';
import CtaSection from '../components/componentHalamans/ctaSection';
import Footer from '../components/componentHalamans/footer';

export default function ProgramPelatihan() {
  return (
    <div>
      <main className="w-full min-h-screen">
        <Header />
        <HeroSection />
        <ProgramPelatihanSection />
        <CtaInhouse />
        <CtaSection />
        <Footer />
      </main>
    </div>
  );
}


