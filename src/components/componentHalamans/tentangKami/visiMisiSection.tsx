import React from 'react';
import { Telescope, Rocket } from 'lucide-react';

export default function VisiMisiSection() {
  return (
    <section id="visimisiSection" className="w-full h-auto bg-white py-[32px] px-[32px]">
      <div className="w-full max-w-7xl mx-auto">
        <div
          id="tentang-kami-visimisi-container"
          className="w-full flex flex-col gap-6 lg:gap-8 px-[32px]"
        >
          {/* Cards Visi & Misi (2 Kolom) */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* Card Kiri (Visi) */}
            <div
              id="tentang-kami-visimisi-card-kiri"
              className="w-full min-h-[280px] bg-[#1CD690] rounded-[12px] p-[30px] text-[#022859] flex flex-col justify-start shadow-sm"
            >
              {/* Header Card Kiri: Badge Visi */}
              <div className="mb-[8px] flex items-center justify-start gap-2.5">
                <span id="tentang-kami-visi-icon-wrapper" className="text-[#022859] flex items-center">
                  <Telescope size={28} className="text-[#022859]" />
                </span>
                <span
                  id="tentang-kami-visi-label-badge"
                  className="text-[#022859] font-bold text-[16px] leading-[22px] tracking-wider uppercase inline-block"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  VISI
                </span>
              </div>

              {/* Paragraf Utama Visi */}
              <p
                id="tentang-kami-visi-statement"
                style={{ fontFamily: 'Poppins, sans-serif' }}
                className="text-[16px] italic font-normal text-[#022859] leading-[24px] tracking-tight"
              >
                Mewujudkan pusat pemikiran dan pengembangan manusia Indonesia yang tangguh, bernalar kritis, dan berdaya cipta tinggi dalam menghadapi perubahan zaman.
              </p>
            </div>

            {/* Card Kanan (Misi) */}
            <div
              id="tentang-kami-visimisi-card-kanan"
              className="w-full min-h-[280px] bg-[#022859] rounded-[12px] p-[30px] text-white flex flex-col justify-start shadow-sm"
            >
              {/* Header Card Kanan: Badge */}
              <div className="flex items-center justify-end gap-2.5 mb-[8px] w-full">
                <span
                  id="tentang-kami-misi-badge"
                  className="text-[#1CD690] font-bold text-[16px] leading-[22px] tracking-wider uppercase"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  MISI
                </span>
                <span id="tentang-kami-misi-icon-wrapper" className="text-[#1CD690] flex items-center">
                  <Rocket
                    id="tentang-kami-misi-rocket-icon"
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
        </div>
      </div>
    </section>
  );
}

