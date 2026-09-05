import React from 'react';
import { Award } from 'lucide-react';

const keunggulanData = [
  {
    id: 1,
    title: "Materi yang Fleksibel",
    description: "Materi pelatihan disusun dan disesuaikan dengan kebutuhan, tantangan, serta tujuan organisasi.",
  },
  {
    id: 2,
    title: "Trainer Berpengalaman",
    description: "Pelatihan dipandu oleh trainer profesional yang memiliki pengalaman di bidangnya.",
  },
  {
    id: 3,
    title: "Jadwal yang Menyesuaikan",
    description: "Waktu pelaksanaan dapat disepakati bersama sehingga tidak mengganggu aktivitas operasional organisasi.",
  },
  {
    id: 4,
    title: "Metode Belajar Interaktif",
    description: "Peserta tidak hanya menerima materi, tetapi juga terlibat dalam diskusi, simulasi, studi kasus, dan praktik.",
  },
  {
    id: 5,
    title: "Pilihan Lokasi yang Fleksibel",
    description: "Pelatihan dapat dilaksanakan di kantor, hotel, tempat yang ditentukan oleh instansi, maupun secara online.",
  },
  {
    id: 6,
    title: "Dampak yang Lebih Terarah",
    description: "Setiap pelatihan dirancang untuk mendukung peningkatan kompetensi yang relevan dengan kebutuhan organisasi.",
  },
];

export default function KeunggulanSection() {
  return (
    <section id="keunggulanSection" className="w-full bg-[#1cd690] flex items-center justify-center py-[48px] px-[48px]">
      <div
        id="inhouse-keunggulan-card-main"
        className="w-full max-w-[1196px] bg-[#022859] rounded-[16px] px-[32px] py-[42px] flex flex-col items-start justify-start gap-8 lg:gap-10 text-left"
      >
        {/* Bagian Atas (Header & Deskripsi) */}
        <div className="w-full flex flex-col gap-3 text-left">
          <div className="flex items-center justify-between gap-4 w-full">
            <h2
              id="inhouse-keunggulan-title"
              className="text-[28px] sm:text-[32px] leading-[36px] sm:leading-[40px] font-bold text-white text-left"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Solusi Pelatihan Tepat Guna untuk Tantangan Perusahaan Anda
            </h2>
            <div id="inhouse-keunggulan-icon-container" className="text-[#1CD690] flex items-center shrink-0">
              <Award
                id="inhouse-keunggulan-icon"
                size={44}
                className="text-[#1CD690]"
              />
            </div>
          </div>
          <p
            id="inhouse-keunggulan-description"
            className="text-[16px] leading-[24px] text-slate-200 font-normal max-w-3xl"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            Kami memahami setiap perusahaan memiliki dinamika dan target yang berbeda. Program Inhouse Training kami hadir sebagai investasi strategis untuk meningkatkan performa, efisiensi, dan kompetensi tim Anda secara terukur.
          </p>
        </div>

        {/* Keunggulan Cards Container di Bawah */}
        <div
          id="inhouse-keunggulan-cards-container"
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          {keunggulanData.map((item) => {
            const isOdd = item.id % 2 !== 0;
            return (
              <div
                key={item.id}
                id={`inhouse-keunggulan-subcard-${item.id}`}
                className={`w-full rounded-[12px] p-[25px] flex flex-col text-left shadow-sm justify-between transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-lg ${
                  isOdd ? 'bg-[#1CD690]' : 'bg-white'
                }`}
              >
                <div>
                  <h3
                    className="text-[16px] leading-[22px] font-bold text-[#022859] mb-2.5"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-[14px] leading-[20px] font-normal ${
                      isOdd ? 'text-[#022859]/90' : 'text-slate-700'
                    }`}
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

