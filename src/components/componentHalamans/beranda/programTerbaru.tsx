import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Video } from 'lucide-react';
import { dataPelatihan } from '../../../data/dataPelatihan';

export default function ProgramTerbaru() {
  const navigate = useNavigate();
  const latestPrograms = dataPelatihan.slice(0, 3);

  return (
    <section className="w-full h-auto bg-white flex items-center justify-center py-0 px-[48px]">
      <div className="w-full max-w-7xl mx-0 flex flex-col px-[32px] py-[48px]">
        {/* Header: Title on Top, Description below Title */}
        <div className="flex flex-col items-center text-center mb-8">
          <span 
            id="program-terbaru-badge"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            className="text-[#1CD690] font-bold text-xs leading-relaxed tracking-wider uppercase inline-block mb-[4px]"
          >
            PROGRAM TERBARU
          </span>
          <h2
            id="program-terbaru-heading"
            className="text-[32px] leading-[40px] font-bold text-[#022859] tracking-tight w-full max-w-5xl mb-2 text-center"
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
          {latestPrograms.map((item) => (
            <div 
              key={item.id}
              id={`program-terbaru-card-${item.id}`}
              className="w-full bg-white rounded-[12px] border border-[#E2E8F0] overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 ease-in-out"
            >
              {/* 1. Gambar */}
              <div className="p-3 pb-0">
                <div className="w-full h-44 overflow-hidden bg-slate-100 rounded-[8px]">
                  <img
                    src={item.image || item.gambarPelatihan}
                    alt={item.title || item.judulPelatihan}
                    className="w-full h-full object-cover rounded-[8px]"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                <div className="flex flex-col gap-2">
                  {/* Kategori Pelatihan */}
                  <span
                    className="text-[12px] font-semibold text-[#1CD690] tracking-wide"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    {item.kategori}
                  </span>

                  {/* Judul */}
                  <h3
                    className="text-[17px] font-bold text-[#022859] leading-[23px] line-clamp-2"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {item.title || item.judulPelatihan}
                  </h3>

                  {/* Pilihan Kelas */}
                  <div className="flex flex-col gap-1 pt-2 border-t border-slate-100 text-[12px]" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    <span className="text-slate-500 font-normal">Pilihan Kelas :</span>
                    <div className="flex items-center gap-4 pl-0.5 mt-0.5">
                      <div className="flex items-center gap-1.5 text-slate-800 font-semibold">
                        <Building2 size={14} className="text-[#1CD690] shrink-0" />
                        <span>Offline</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-800 font-semibold">
                        <Video size={14} className="text-[#1CD690] shrink-0" />
                        <span>Online</span>
                      </div>
                    </div>
                  </div>

                  {/* Deskripsi Pelatihan */}
                  <p
                    className="text-[13px] text-slate-600 leading-[20px] font-normal line-clamp-2 pt-1"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    {item.deskripsi}
                  </p>
                </div>

                {/* Button */}
                <button
                  type="button"
                  onClick={() => navigate(`/detail-program?id=${item.id}`)}
                  className="w-full py-[8px] px-4 bg-[#022859] text-white hover:bg-[#1CD690] hover:text-[#022859] hover:-translate-y-[1px] hover:shadow-[0px_2px_8px_rgba(2,40,89,0.25)] font-bold text-sm rounded-[12px] transition-all duration-200 ease-in-out cursor-pointer active:scale-95"
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                >
                  Lihat Detail Kelas
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

