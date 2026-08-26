import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProgramTerbaru() {
  const navigate = useNavigate();

  return (
    <section className="w-full h-auto bg-white flex items-center justify-center py-0 px-[48px]">
      <div className="w-full max-w-7xl mx-0 flex flex-col px-[32px] py-[32px]">
        {/* Header: Title on Top, Description below Title */}
        <div className="flex flex-col items-center text-center mb-8">
          <h2
            id="program-terbaru-heading"
            className="text-[32px] leading-[40px] font-bold text-[#022859] tracking-tight w-full max-w-3xl mb-2 text-center"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Temukan Pelatihan yang Siap Membantu Kamu Naik Level
          </h2>
          <p
            id="program-terbaru-description"
            className="text-[16px] leading-[24px] font-normal text-[#475569] w-full max-w-3xl text-center"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            Jelajahi berbagai program pelatihan terbaru yang telah disiapkan oleh P3I. Pilih topik yang sesuai dengan minat, kebutuhan, atau tujuan kariermu, lalu mulai perjalanan belajarmu bersama kami.
          </p>
        </div>

        {/* 3 Cards Horizontal Grid */}
        <div 
          id="program-terbaru-cards-container"
          className="grid grid-cols-1 md:grid-cols-3 gap-[24px] w-full items-stretch mb-0 px-[32px] py-0"
        >
          {/* Card 1 */}
          <div 
            id="program-terbaru-card-1"
            className="w-full bg-white rounded-[12px] border border-slate-200 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
          >
            {/* 1. Gambar */}
            <div className="w-full h-48 overflow-hidden bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
                alt="Fullstack Web & Cloud Engineering"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-5 flex flex-col flex-1 justify-between gap-4">
              <div className="flex flex-col gap-2.5">
                {/* Judul */}
                <h3
                  className="text-[18px] font-bold text-[#022859] leading-[24px]"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Fullstack Web & Cloud Engineering
                </h3>

                {/* 1 Paragraf */}
                <p
                  className="text-[14px] text-slate-600 leading-[20px] font-normal"
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                >
                  Kuasai pengembangan aplikasi web modern berbasis cloud dari skenario nyata hingga siap pakai di industri.
                </p>
              </div>

              {/* Button */}
              <button
                type="button"
                onClick={() => navigate('/program-pelatihan')}
                className="w-full py-[8px] px-4 bg-[#022859] text-white hover:bg-[#1CD690] hover:text-[#022859] hover:-translate-y-[1px] hover:shadow-[0px_2px_8px_rgba(2,40,89,0.25)] font-bold text-sm rounded-[8px] transition-all duration-200 ease-in-out cursor-pointer active:scale-95"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                Lihat Detail Kelas
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div 
            id="program-terbaru-card-2"
            className="w-full bg-white rounded-[12px] border border-slate-200 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
          >
            {/* 1. Gambar */}
            <div className="w-full h-48 overflow-hidden bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Strategic Leadership & Executive Management"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-5 flex flex-col flex-1 justify-between gap-4">
              <div className="flex flex-col gap-2.5">
                {/* Judul */}
                <h3
                  className="text-[18px] font-bold text-[#022859] leading-[24px]"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Strategic Leadership & Executive Management
                </h3>

                {/* 1 Paragraf */}
                <p
                  className="text-[14px] text-slate-600 leading-[20px] font-normal"
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                >
                  Program pengembangan kapasitas manajerial dan pengambilan keputusan strategis dalam tata kelola organisasi.
                </p>
              </div>

              {/* Button */}
              <button
                type="button"
                onClick={() => navigate('/program-pelatihan')}
                className="w-full py-[8px] px-4 bg-[#022859] text-white hover:bg-[#1CD690] hover:text-[#022859] hover:-translate-y-[1px] hover:shadow-[0px_2px_8px_rgba(2,40,89,0.25)] font-bold text-sm rounded-[8px] transition-all duration-200 ease-in-out cursor-pointer active:scale-95"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                Lihat Detail Kelas
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div 
            id="program-terbaru-card-3"
            className="w-full bg-white rounded-[12px] border border-slate-200 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
          >
            {/* 1. Gambar */}
            <div className="w-full h-48 overflow-hidden bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
                alt="Business Intelligence & Data Analytics"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-5 flex flex-col flex-1 justify-between gap-4">
              <div className="flex flex-col gap-2.5">
                {/* Judul */}
                <h3
                  className="text-[18px] font-bold text-[#022859] leading-[24px]"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Business Intelligence & Data Analytics
                </h3>

                {/* 4. 1 Paragraf */}
                <p
                  className="text-[14px] text-slate-600 leading-[20px] font-normal"
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                >
                  Pelajari teknik pengolahan data, visualisasi interaktif, dan analisis analitik untuk keputusan bisnis terukur.
                </p>
              </div>

              {/* Button */}
              <button
                type="button"
                onClick={() => navigate('/program-pelatihan')}
                className="w-full py-[8px] px-4 bg-[#022859] text-white hover:bg-[#1CD690] hover:text-[#022859] hover:-translate-y-[1px] hover:shadow-[0px_2px_8px_rgba(2,40,89,0.25)] font-bold text-sm rounded-[8px] transition-all duration-200 ease-in-out cursor-pointer active:scale-95"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                Lihat Detail Kelas
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

