import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { getPelatihanById } from '../../../data/dataPelatihan';

export default function HeroSection() {
  const [searchParams] = useSearchParams();
  const programId = searchParams.get('id');
  const program = programId ? getPelatihanById(programId) : null;

  return (
    <section id="heroSectionDetailProgram" className="relative min-h-[50vh] sm:min-h-[60vh] w-full flex items-center justify-center overflow-hidden pt-[100px]">
      {/* Background Image */}
      <img
        src={program?.image || program?.gambarPelatihan || "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=2000&q=80"}
        alt={program?.title || program?.judulPelatihan || "Detail Program Pelatihan"}
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark Gradient Overlay dari Kiri ke Kanan */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-slate-900/60" />

      {/* Konten Hero Section */}
      <div id="hero-detail-program-content" className="relative z-10 w-full max-w-7xl m-0 px-8 py-12 text-left flex flex-col items-start gap-4">
        {program && (
          <span 
            className="text-[#1CD690] text-[13px] sm:text-[14px] font-bold uppercase tracking-wider"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {program.kategori}
          </span>
        )}
        <h1 
          style={{ fontFamily: 'Poppins, sans-serif' }}
          className="text-[32px] sm:text-[42px] font-bold text-white tracking-tight leading-tight max-w-4xl px-0 py-0"
        >
          {program?.title || program?.judulPelatihan || "Detail Program Pelatihan & Kurikulum"}
        </h1>
        <p 
          style={{ fontFamily: 'Nunito, sans-serif' }}
          className="mt-0 pt-0 text-sm md:text-base text-slate-200 leading-[24px] max-w-2xl px-0"
        >
          {program ? `Pelajari silabus komprehensif, tujuan pembelajaran, dan fasilitas lengkap untuk program ${program.title || program.judulPelatihan}.` : "Pelajari silabus komprehensif, tujuan pembelajaran, metode pelatihan interaktif, dan kualifikasi instruktur bersertifikasi."}
        </p>
      </div>
    </section>
  );
}
