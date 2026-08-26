import React from 'react';
import { Telescope, Rocket } from 'lucide-react';

export default function VisiMisi() {
  return (
    <section className="w-full h-auto bg-white flex items-center justify-center py-0 px-[48px]">
      <div className="w-full max-w-7xl mx-0 px-[32px] py-[32px] flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-12">
        {/* Kolom Kiri: Quote Icon, Paragraf Utama, dan Gambar Abstract Wave */}
        <div
          id="pencapaian-left-container"
          className="w-full lg:w-1/2 flex flex-col justify-between"
        >
          <div>
            {/* Visi Badge / Title */}
            <div className="mb-[8px] flex items-center justify-start gap-2.5">
              <span id="visi-icon-wrapper" className="text-[#022859] flex items-center">
                <Telescope size={28} className="text-[#022859]" />
              </span>
              <span
                id="visi-label-badge"
                className="text-[#022859] font-bold text-lg leading-normal tracking-wider uppercase inline-block"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                VISI
              </span>
            </div>

            {/* Paragraf Utama */}
            <p
              id="pencapaian-left-statement"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              className="text-[20px] italic font-normal text-slate-800 leading-[28px] no-underline tracking-tight mb-6 border-[#022859]"
            >
              Mewujudkan pusat pemikiran dan pengembangan manusia Indonesia yang tangguh, bernalar kritis, dan berdaya cipta tinggi dalam menghadapi perubahan zaman.
            </p>
          </div>

          {/* Statistik Counter Box (Menggantikan Gambar sesuai Desain) */}
          <div
            id="pencapaian-left-image-wrapper"
            className="w-full rounded-[16px] border-2 border-[#022859] bg-[#ffffff] px-5 py-5 sm:px-8 sm:py-6 mt-auto flex items-center justify-between"
          >
            {/* Stat Item 1: 200+ Projects Completed */}
            <div className="flex flex-col items-center text-center flex-1">
              <span
                className="text-[24px] font-bold text-[#022859] tracking-tight leading-[32px] mb-1.5"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                200<span className="text-[20px] font-semibold -ml-0.5">+</span>
              </span>
              <div
                className="text-[11px] sm:text-xs text-slate-500 font-medium leading-[14px] sm:leading-[16px] border-[#022859]"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                Projects Completed
              </div>
            </div>

            {/* Divider 1 */}
            <div className="w-[1px] h-9 sm:h-11 bg-[#022859] mx-1 sm:mx-2 shrink-0" />

            {/* Stat Item 2: 150+ Satisfied Clients */}
            <div className="flex flex-col items-center text-center flex-1">
              <span
                className="text-[24px] font-bold text-[#022859] tracking-tight leading-[30px] mb-1.5"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                150<span className="text-[20px] font-semibold -ml-0.5">+</span>
              </span>
              <div
                className="text-[11px] sm:text-xs text-slate-500 font-medium leading-[14px] sm:leading-[16px] border-[#022859]"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                Satisfied Clients
              </div>
            </div>

            {/* Divider 2 */}
            <div className="w-[1px] h-9 sm:h-11 bg-[#022859] mx-1 sm:mx-2 shrink-0" />

            {/* Stat Item 3: 50+ Industry Awards */}
            <div className="flex flex-col items-center text-center flex-1">
              <span
                className="text-[24px] font-bold text-[#022859] tracking-tight leading-[30px] mb-1.5"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                50<span className="text-[20px] font-semibold -ml-0.5">+</span>
              </span>
              <div
                className="text-[11px] sm:text-xs text-slate-500 font-medium leading-[14px] sm:leading-[16px] border-[#022859]"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                Industry Awards
              </div>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Card Biru (About Us / Nilai Kami) */}
        <div
          id="pencapaian-right-blue-card"
          className="w-full lg:w-1/2 bg-[#022859] rounded-[12px] p-[30px] text-white flex flex-col justify-start"
        >
          {/* Header Card Kanan: Badge */}
          <div className="flex items-center justify-end gap-2.5 mb-[8px] w-full">
            <span
              id="pencapaian-about-badge"
              className="text-[#1CD690] font-bold text-lg leading-normal tracking-wider uppercase"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              MISI
            </span>
            <span id="misi-icon-wrapper" className="text-[#1CD690] flex items-center">
              <Rocket
                id="misi-rocket-icon"
                size={26}
                className="text-[#1CD690]"
              />
            </span>
          </div>

          {/* Isi Paragraf Card Kanan */}
          <div
            style={{ fontFamily: 'Nunito, sans-serif' }}
            className="flex flex-col gap-4 text-slate-200 text-[16px] leading-[24px] not-italic font-normal"
          >
            <div className="flex items-start gap-3 pl-0">
              <span className="text-[#1CD690] font-bold shrink-0">1.</span>
              <p>
                Program pelatihan dan pengembangan SDM yang berkualitas dan relevan.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#1CD690] font-bold shrink-0">2.</span>
              <p>
                Konsultasi dan pendampingan strategis untuk penguatan tata kelola.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#1CD690] font-bold shrink-0">3.</span>
              <p>
                Kajian berbasis data sebagai dasar kebijakan dan inovasi.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#1CD690] font-bold shrink-0">4.</span>
              <p>
                Kolaborasi lintas sektor yang profesional, berintegritas, dan berkelanjutan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
