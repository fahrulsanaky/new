import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-[100px]">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=2000&q=80"
        alt="Kontak Kami - Pelayanan Pelatihan"
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark Gradient Overlay dari Kiri ke Kanan */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-900/40" />

      {/* Konten Hero Section */}
      <div className="relative z-10 w-full px-6 sm:px-8 py-20 text-left flex flex-col items-start gap-8">
        <h1 
          style={{ fontFamily: 'Poppins, sans-serif' }}
          className="text-[42px] font-bold text-white tracking-tight leading-tight max-w-3xl px-6 py-0"
        >
          Konsultasikan Kebutuhan Pelatihan Anda Bersama Kami
        </h1>
        <p className="mt-0 text-sm md:text-base text-slate-200 leading-relaxed max-w-2xl px-6">
          Tim konsultan kami siap membantu merencanakan program pengembangan kapasitas terbaik yang sesuai dengan kebutuhan individu maupun institusi Anda.
        </p>
      </div>
    </section>
  );
}
