import React from 'react';
import { Quote } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    quote: "Para instruktur dan konsultan menunjukkan fleksibilitas luar biasa serta organisasi pelatihan yang sangat rapi. Selain materi utama, P3I juga mendampingi inisiatif pengembangan tim kami secara berkelanjutan.",
    name: "Ahmad Rizky",
  },
  {
    id: 2,
    quote: "Materi pelatihan sangat terstruktur dan aplikatif untuk kebutuhan operasional kami. Pengalaman dan wawasan praktis dari para pemateri memberikan dampak nyata dalam efisiensi kerja tim.",
    name: "Siti Rahmah",
  },
  {
    id: 3,
    quote: "Pendampingan interaktif serta kurikulum yang relevan membuat proses pembelajaran terasa sangat efektif. Setiap sesi memberikan pemahaman mendalam yang langsung dapat diimplementasikan.",
    name: "Budi Santoso",
  },
  {
    id: 4,
    quote: "Program sertifikasi yang diselenggarakan P3I sangat membantu akselerasi karier para alumni. Pengakuan industri dan standar kompetensinya terbukti diakui secara nasional.",
    name: "Dewi Lestari",
  },
  {
    id: 5,
    quote: "Sesi studi kasus interaktif dan diskusi kelompok memberikan perspektif praktis yang sangat berguna. Pelatihan ini benar-benar membuka wawasan baru bagi kepemimpinan manajerial.",
    name: "Hendra Pratama",
  },
  {
    id: 6,
    quote: "Kombinasi antara teori terkini dan simulasi proyek nyata membuat proses pemahaman materi menjadi sangat efektif. Sangat direkomendasikan untuk pengembangan profesional.",
    name: "Rina Kusumawardani",
  },
];

export default function Testimoni() {
  return (
    <section className="w-full h-auto bg-[#1cd690] flex items-center justify-center py-[48px] px-[48px]">
      <div
        id="testimoni-card-1"
        className="w-full max-w-[1196px] bg-[#022859] rounded-[16px] px-[24px] py-[32px] flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12 text-left"
      >
        {/* Kolom Kiri (Lebar 30%) */}
        <div className="w-full lg:w-[30%] shrink-0 flex flex-col gap-2.5 text-left">
          <div id="testimoni-quote-icon-container" className="text-[#1CD690] flex items-center mb-1">
            <Quote
              id="testimoni-quote-icon"
              size={36}
              className="text-[#1CD690]"
            />
          </div>
          <span
            id="testimoni-badge"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            className="text-[#1CD690] font-bold text-xs leading-relaxed tracking-wider uppercase inline-block mb-0"
          >
            TESTIMONI
          </span>
          <h2
            id="testimoni-card-title"
            className="text-[32px] leading-[40px] font-bold text-white text-left mb-1"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Cerita Mereka yang Sudah Belajar Bersama P3I
          </h2>
          <p
            id="testimoni-card-description"
            className="text-[16px] leading-[24px] text-slate-200 font-normal"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            Pengalaman para peserta menjadi bukti bahwa proses belajar yang tepat dapat memberikan perubahan yang nyata. Lihat bagaimana pelatihan di P3I membantu mereka berkembang dan lebih siap menghadapi tantangan
          </p>
        </div>

        {/* Testimonial Cards Container di Kanan (Lebar 70%) */}
        <div 
          id="testimoni-empty-cards-container"
          className="w-full lg:w-[70%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch"
        >
          {testimonialsData.map((item) => {
            const isOdd = item.id % 2 !== 0;
            return (
              <div 
                key={item.id}
                id={`testimoni-subcard-${item.id}`} 
                className={`w-full rounded-[12px] p-[24px] flex flex-col text-left shadow-sm justify-between transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-lg ${
                  isOdd ? 'bg-[#1CD690]' : 'bg-white'
                }`}
              >
                <p 
                  className={`text-[12px] leading-[18px] italic font-normal mb-3 ${
                    isOdd ? 'text-[#022859]' : 'text-slate-700'
                  }`}
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                >
                  {item.quote}
                </p>

                <div className={`pt-3 border-t mt-3 flex flex-col ${
                  isOdd ? 'border-[#022859]/20' : 'border-slate-200'
                }`}>
                  <h4 
                    className="text-[14px] leading-[20px] font-bold text-[#022859]"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {item.name}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

