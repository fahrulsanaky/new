import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-[100px]">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=2000&q=80"
        alt="Jadwal Pelatihan & Sertifikasi"
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
          Jadwal Pelatihan & Pengembangan Kompetensi
        </h1>
        <p 
          style={{ fontFamily: 'Nunito, sans-serif' }}
          className="mt-0 pt-0 text-sm md:text-base text-slate-200 leading-[24px] max-w-2xl px-0"
        >
          Rencanakan agenda peningkatan keterampilan Anda dan tim. Temukan berbagai pilihan jadwal kelas publik (Public Training) interaktif, bersertifikasi resmi, dan dibimbing langsung oleh fasilitator ahli.
        </p>
      </div>
    </section>
  );
}
