import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-[100px]">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=80"
        alt="Inhouse Training Perusahaan"
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark Gradient Overlay dari Kiri ke Kanan */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-900/40" />

      {/* Konten Hero Section */}
      <div className="relative z-10 w-full px-6 sm:px-8 py-[32px] text-left flex flex-col items-start gap-6">
        <h1 
          style={{ fontFamily: 'Poppins, sans-serif' }}
          className="text-[42px] font-bold text-white tracking-tight leading-tight max-w-3xl px-0 py-0"
        >
          Solusi Pelatihan Khusus untuk Akselerasi Performa Tim Anda
        </h1>
        <p 
          style={{ fontFamily: 'Nunito, sans-serif' }}
          className="mt-0 pt-0 text-sm md:text-base text-slate-200 leading-[24px] max-w-2xl px-0"
        >
          Hadirkan program pelatihan eksklusif yang dirancang spesifik sesuai kebutuhan, budaya, dan target strategis perusahaan Anda. Pelaksanaan fleksibel di lokasi pilihan Anda.
        </p>
      </div>
    </section>
  );
}
