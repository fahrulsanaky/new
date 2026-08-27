import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Building2 } from 'lucide-react';

export default function Layanan() {
  const navigate = useNavigate();
  const heroBg = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80";

  return (
    <div className="w-full bg-[#022859] h-auto py-0 flex flex-col justify-center">
      {/* Top Header Section */}
      <section
        id="beranda-layanan-section"
        className="relative w-full bg-[#022859] border-none overflow-hidden px-[48px] py-0 m-0 flex flex-col justify-center"
      >
        {/* Background Image Container strictly on the Right Side (50%-60% width) */}
        <div className="absolute top-0 right-0 bottom-0 w-full sm:w-[65%] lg:w-[50%] h-full pointer-events-none overflow-hidden">
          <img
            src={heroBg}
            alt="Learning Background"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {/* Horizontal Gradient Fade: Transitions smoothly from solid navy (#022859) on the left into the image */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#022859] via-[#022859]/60 to-transparent pointer-events-none" />
          {/* Vertical Gradient Fade: Soft top fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#022859]/40 via-transparent to-transparent pointer-events-none" />
          {/* Strong Bottom Gradient Fade: 100% solid navy (#022859) at the bottom edge to completely hide image boundaries */}
          <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#022859] via-[#022859]/85 to-transparent pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-0 flex flex-col lg:flex-row items-start justify-between gap-8 px-[32px] py-[48px]">
          {/* Kolom Kiri: Judul dan Paragraf */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            {/* Badge Label */}
            <span
              id="layanan-badge"
              className="text-[#1CD690] font-bold text-xs leading-relaxed tracking-wider uppercase mb-[4px]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              LAYANAN KAMI
            </span>

            {/* Judul Utama */}
            <h2
              id="layanan-main-heading"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              className="text-[32px] font-bold text-white leading-[40px] tracking-tight mb-[8px]"
            >
              Pilih Program yang Sesuai dengan Kebutuhanmu
            </h2>

            {/* Paragraf */}
            <p
              id="layanan-description"
              style={{ fontFamily: 'Nunito, sans-serif' }}
              className="text-[16px] font-normal text-[#EBFBFA] leading-[24px] max-w-xl"
            >
              Setiap orang dan setiap organisasi memiliki kebutuhan belajar yang berbeda. Karena itu, P3I menyediakan dua layanan pelatihan yang dapat disesuaikan dengan tujuan pengembangan kompetensi
            </p>
          </div>
        </div>
      </section>

      {/* Section baru di bagian bawah, berisi 2 card putih */}
      <section
        id="beranda-layanan-sub-section"
        className="w-full bg-[#022859] px-[48px] py-0 flex flex-col items-center justify-center"
      >
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 px-[32px] py-[48px]">
          {/* Card Kiri: Pelatihan */}
          <div
            id="layanan-card-pelatihan"
            className="bg-white rounded-[12px] p-[25px] border border-slate-100 flex flex-col items-start justify-start gap-5 shadow-sm"
          >
            <div className="flex flex-col items-start mb-0 w-full">
              <div className="flex items-center justify-start gap-3 w-full mb-[8px]">
                <span id="layanan-pelatihan-icon-wrapper" className="text-[#1CD690] flex items-center">
                  <GraduationCap
                    id="layanan-pelatihan-icon"
                    size={32}
                    className="text-[#1CD690]"
                  />
                </span>
                <h3
                  className="text-lg leading-normal font-bold text-[#022859]"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Pelatihan Reguler
                </h3>
              </div>
              <p
                className="text-[16px] text-[#022859] leading-[24px]"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                Tingkatkan kompetensi profesional Anda melalui program kelas terbuka dengan kurikulum terstruktur, interaktif, dan dipandu oleh instruktur berpengalaman.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate('/program-pelatihan')}
              style={{ fontFamily: 'Nunito, sans-serif' }}
              className="inline-flex items-center justify-center px-[20px] py-[10px] rounded-[8px] bg-[#ffffff] border border-[#022859] text-[#022859] hover:bg-[#022859] hover:text-[#ffffff] hover:border-[#022859] hover:-translate-y-[2px] hover:shadow-[0px_4px_12px_rgba(2,40,89,0.15)] font-bold text-[15px] leading-[20px] no-underline transition-all duration-200 ease-in-out cursor-pointer shadow-sm"
            >
              Jelajahi Kelas
            </button>
          </div>

          {/* Card Kanan: In-House Training */}
          <div
            id="layanan-card-inhouse"
            className="bg-white rounded-[12px] p-[25px] border border-slate-100 flex flex-col items-start justify-start gap-5 shadow-sm"
          >
            <div className="flex flex-col items-start mb-0 w-full">
              <div className="flex items-center justify-start gap-3 w-full mb-[8px]">
                <span id="layanan-inhouse-icon-wrapper" className="text-[#1CD690] flex items-center">
                  <Building2
                    id="layanan-inhouse-icon"
                    size={32}
                    className="text-[#1CD690]"
                  />
                </span>
                <h3
                  className="text-lg leading-normal font-bold text-[#022859]"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  In-House Training
                </h3>
              </div>
              <p
                className="text-[16px] text-[#022859] leading-[24px]"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                Hadirkan program pelatihan kustom eksklusif yang dirancang khusus menyesuaikan budaya kerja, tujuan bisnis, dan tantangan unik instansi Anda.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate('/inhouse-training')}
              style={{ fontFamily: 'Nunito, sans-serif' }}
              className="inline-flex items-center justify-center px-[20px] py-[10px] rounded-[8px] bg-[#ffffff] border border-[#022859] text-[#022859] hover:bg-[#022859] hover:text-[#ffffff] hover:border-[#022859] hover:-translate-y-[2px] hover:shadow-[0px_4px_12px_rgba(2,40,89,0.15)] font-bold text-[15px] leading-[20px] no-underline transition-all duration-200 ease-in-out cursor-pointer shadow-sm"
            >
              Hubungi Kami
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

