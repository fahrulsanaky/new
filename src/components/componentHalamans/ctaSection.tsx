import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CtaSection() {
  const navigate = useNavigate();
  const heroBg = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80";

  return (
    <section
      id="ctaSection"
      className="relative w-full bg-[#022859] h-auto overflow-hidden px-[48px] py-0 flex flex-col justify-center"
    >
      {/* Background Image Container strictly on the Right Side (50%-60% width) matching Layanan section */}
      <div className="absolute top-0 right-0 bottom-0 w-full sm:w-[65%] lg:w-[50%] h-full pointer-events-none overflow-hidden">
        <img
          id="cta-section-bg-image"
          src={heroBg}
          alt="Learning Background"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Horizontal Gradient Fade: Transitions smoothly from solid navy (#022859) on the left into the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#022859] via-[#022859]/60 to-transparent pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-0 px-[32px] py-[48px] flex flex-col lg:flex-row items-start justify-between gap-8">
        {/* Kolom Kiri: Judul, Paragraf, dan Tombol */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          {/* Judul Utama */}
          <h2
            id="cta-section-heading"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            className="text-[32px] font-bold text-white leading-[40px] tracking-tight mb-[8px] text-left"
          >
            Siap Meningkatkan Kompetensi Tim atau Diri Anda Hari Ini?
          </h2>

          {/* Paragraf */}
          <p
            id="cta-section-description"
            style={{ fontFamily: 'Nunito, sans-serif' }}
            className="text-[16px] font-normal text-[#EBFBFA] leading-[24px] max-w-xl mb-[12px] text-left"
          >
            Konsultasikan kebutuhan pelatihan Anda bersama tim ahli kami, atau pilih jadwal kelas yang paling sesuai dengan agenda Anda.
          </p>

          {/* Tombol Hubungi Kami */}
          <div className="flex justify-start w-full sm:w-auto">
            <button
              id="btn-cta-hubungi-kami"
              type="button"
              onClick={() => navigate('/kontak-kami')}
              className="px-[24px] py-3.5 bg-[#1cd690] hover:bg-[#18be7f] hover:-translate-y-[2px] text-[#022859] font-bold text-[16px] leading-[24px] rounded-[12px] shadow-lg transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:scale-95"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

