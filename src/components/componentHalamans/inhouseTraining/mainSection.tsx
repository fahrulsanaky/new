import React from 'react';
import { Building2 } from 'lucide-react';

export default function MainSection() {
  return (
    <section id="mainSection" className="w-full h-auto bg-white flex items-center justify-center py-0 px-[48px]">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-10 lg:gap-12">
        {/* Row Atas: 2 Kolom (Konten Kiri 35% & Gambar Kanan 50%) */}
        <div className="w-full flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-12 px-[32px] py-[32px]">
          {/* Kolom Kiri: Deskripsi In-House Training (35%) */}
          <div
            id="inhouse-training-left-container"
            className="w-full lg:w-[35%] flex flex-col justify-start shrink-0"
          >
            {/* Badge / Title */}
            <div className="mb-[4px] flex items-center justify-start gap-2.5">
              <span
                id="inhouse-training-icon-wrapper"
                className="text-[#1cd690] flex items-center"
                style={{ color: '#1cd690' }}
              >
                <Building2 size={24} className="text-[#1cd690]" color="#1cd690" />
              </span>
              <span
                id="inhouse-training-label-badge"
                className="text-[#1cd690] font-bold text-[12px] leading-[19.5px] tracking-wider uppercase inline-block"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '12px',
                  lineHeight: '19.5px',
                  color: '#1cd690',
                }}
              >
                In-House Training
              </span>
            </div>

            {/* Judul Utama */}
            <h2
              id="inhouse-training-heading"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              className="text-[28px] sm:text-[32px] font-bold text-[#022859] leading-[36px] sm:leading-[40px] tracking-tight mb-[8px]"
            >
              Apa itu In-House Training?
            </h2>

            {/* Paragraf Utama */}
            <div style={{ fontFamily: 'Nunito, sans-serif' }} className="flex flex-col gap-4">
              <p
                id="inhouse-training-left-statement-1"
                style={{ fontFamily: 'Nunito, sans-serif' }}
                className="text-[16px] not-italic font-normal text-slate-800 leading-[24px] no-underline tracking-tight border-[#022859]"
              >
                In-House Training P3I merupakan program pelatihan eksklusif yang dirancang secara khusus untuk menjawab kebutuhan spesifik, tantangan operasional, dan sasaran strategis instansi atau perusahaan Anda.
              </p>
              <p
                id="inhouse-training-left-statement-2"
                style={{ fontFamily: 'Nunito, sans-serif' }}
                className="text-[16px] not-italic font-normal text-slate-800 leading-[24px] no-underline tracking-tight border-[#022859]"
              >
                Dengan kurikulum yang fleksibel, studi kasus yang kontekstual, serta dipandu oleh praktisi dan akademisi berpengalaman, kami memastikan peningkatan kompetensi aparatur maupun profesional berjalan efektif, aplikatif, dan memberikan dampak nyata bagi kinerja organisasi.
              </p>
            </div>
          </div>

          {/* Kolom Kanan: Gambar dengan Lebar 50% dan Radius 16px */}
          <div
            id="inhouse-training-right-image-wrapper"
            className="w-full lg:w-[50%] rounded-[16px] overflow-hidden shadow-sm bg-slate-100 self-center h-[280px] sm:h-[340px] lg:h-[360px]"
          >
            <img
              src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?w=1000&auto=format&fit=crop&q=80"
              alt="Program In-House Training Profesional P3I"
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500 rounded-[16px]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

