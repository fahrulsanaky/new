import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const documentationImages = [
  {
    id: 1,
    category: 'Diskusi & Kolaborasi',
    title: 'Sesi Diskusi & Kolaborasi Kelompok',
    date: '14 Agustus 2024',
    description: 'Peserta saling bertukar ide dan mendiskusikan pemecahan kasus secara kolaboratif.',
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    category: 'Praktikum Studio',
    title: 'Praktikum & Simulasi Studio Komputer',
    date: '22 Juli 2024',
    description: 'Latihan teknis terpandu dengan instruktur berpengalaman di laboratorium komputer.',
    src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    category: 'Workshop & Mentoring',
    title: 'Workshop & Mentoring Interaktif',
    date: '05 Juni 2024',
    description: 'Sesi mentoring intensif untuk mengeksplorasi konsep dan mengasah keterampilan peserta.',
    src: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=900&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    category: 'Presentasi Project',
    title: 'Presentasi & Evaluasi Project Akhir',
    date: '18 Mei 2024',
    description: 'Pemaparan karya akhir peserta di hadapan mentor untuk mendapatkan evaluasi menyeluruh.',
    src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=900&auto=format&fit=crop&q=80',
  },
  {
    id: 5,
    category: 'Kelulusan & Apresiasi',
    title: 'Apresiasi & Penyerahan Sertifikat',
    date: '30 April 2024',
    description: 'Pemberian penghargaan dan sertifikat kelulusan bagi peserta berprestasi.',
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=900&auto=format&fit=crop&q=80',
  },
];

export default function Dokumentasi() {
  const [centerIndex, setCenterIndex] = useState(0);
  const total = documentationImages.length;

  const handlePrev = () => {
    setCenterIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCenterIndex((prev) => (prev + 1) % total);
  };

  const leftIndex = (centerIndex - 1 + total) % total;
  const rightIndex = (centerIndex + 1) % total;
  const visibleIndices = [leftIndex, centerIndex, rightIndex];

  return (
    <section className="w-full h-auto bg-white flex items-center justify-center py-0 px-[48px]">
      <div className="w-full max-w-7xl mx-0 px-[32px] py-[48px] flex flex-col items-center">
        {/* Judul & Paragraf di posisi tengah */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          <h2
            id="dokumentasi-heading"
            className="text-[32px] leading-[40px] font-bold text-[#022859] text-center mb-[8px]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Momen Belajar, Berkolaborasi, dan Bertumbuh Bersama
          </h2>
          <p
            id="dokumentasi-description"
            className="text-[16px] leading-[24px] font-normal text-[#475569] text-center max-w-3xl"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            Setiap pelatihan menghadirkan pengalaman belajar yang penuh interaksi, diskusi, dan praktik. Berikut beberapa momen yang menggambarkan suasana pelatihan bersama peserta dari berbagai daerah dan instansi.
          </p>
        </div>

        {/* 3 Gambar Dokumentasi */}
        <div 
          id="dokumentasi-images-container" 
          className="flex flex-col md:flex-row items-center justify-center gap-6 w-full px-[32px]"
        >
          {visibleIndices.map((realIndex, position) => {
            const img = documentationImages[realIndex];
            const isMiddle = position === 1;
            return (
              <div 
                key={img.id}
                id={`dokumentasi-image-card-${img.id}`}
                onClick={() => setCenterIndex(realIndex)}
                className={`relative group rounded-[16px] overflow-hidden bg-slate-100 cursor-pointer transition-all duration-500 ease-in-out ${
                  isMiddle 
                    ? 'w-full md:w-[50%] h-[280px] sm:h-[340px] md:h-[380px] shrink-0 opacity-100 shadow-sm' 
                    : 'w-full md:w-[25%] h-[180px] sm:h-[220px] md:h-[250px] shrink-0 opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:brightness-75 transition-all duration-300"
                />
                
                {/* Hover overlay with Category, Title, Date, and Description positioned at the TOP */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-900/85 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 sm:p-5 flex flex-col justify-start text-left pointer-events-none rounded-[16px] overflow-hidden">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span 
                      className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-white"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {img.category}
                    </span>
                    <span 
                      className="text-[10px] sm:text-[11px] font-medium text-slate-300 shrink-0"
                      style={{ fontFamily: 'Nunito, sans-serif' }}
                    >
                      {img.date}
                    </span>
                  </div>
                  
                  <h3 
                    className="text-white font-bold text-sm sm:text-base leading-snug mb-1.5 line-clamp-2"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {img.title}
                  </h3>

                  <p 
                    className="text-slate-200 text-xs leading-relaxed line-clamp-3 font-normal"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    {img.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination Controls */}
        <div 
          id="dokumentasi-pagination" 
          className="flex items-center justify-center gap-4 mt-8 sm:mt-10"
        >
          <button
            id="btn-dokumentasi-prev"
            type="button"
            onClick={handlePrev}
            aria-label="Gambar Sebelumnya"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-[8px] bg-white border border-[#022859] text-[#022859] hover:bg-[#022859] hover:text-[#ffffff] hover:border-[#022859] hover:-translate-y-[2px] hover:shadow-[0px_4px_12px_rgba(2,40,89,0.15)] flex items-center justify-center transition-all duration-200 ease-in-out cursor-pointer shadow-sm active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            id="btn-dokumentasi-next"
            type="button"
            onClick={handleNext}
            aria-label="Gambar Selanjutnya"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-[8px] bg-white border border-[#022859] text-[#022859] hover:bg-[#022859] hover:text-[#ffffff] hover:border-[#022859] hover:-translate-y-[2px] hover:shadow-[0px_4px_12px_rgba(2,40,89,0.15)] flex items-center justify-center transition-all duration-200 ease-in-out cursor-pointer shadow-sm active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

