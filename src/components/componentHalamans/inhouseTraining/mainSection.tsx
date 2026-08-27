import React from 'react';

export default function MainSection() {
  const corporateTrainingImg = "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?w=1000&auto=format&fit=crop&q=80";
  const groupDiscussionImg = "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80";
  const presentationImg = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80";

  return (
    <section id="mainSection" className="w-full h-auto bg-white flex items-center justify-center py-0 px-[48px]">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-10 lg:gap-12">
        {/* Row Atas: 2 Kolom (Konten Kiri 45% & Bento Gallery Kanan 50%) */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 px-[32px] py-[48px]">
          {/* Kolom Kiri: Deskripsi In-House Training (45%) */}
          <div
            id="inhouse-training-left-container"
            className="w-full lg:w-[45%] flex flex-col justify-start shrink-0"
          >
            {/* Badge / Title */}
            <span
              id="inhouse-training-label-badge"
              className="text-[#1cd690] font-bold text-[12px] leading-[19.5px] tracking-wider uppercase inline-block mb-[4px]"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '12px',
                lineHeight: '19.5px',
                color: '#1cd690',
              }}
            >
              In-House Training
            </span>

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

          {/* Kolom Kanan: Bento Grid Layout (50%) */}
          <div
            id="inhouse-training-right-image-wrapper"
            className="w-full lg:w-[50%] grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-5 items-stretch"
          >
            {/* Left tall image */}
            <div className="w-full h-[260px] sm:h-[340px] lg:h-[360px] rounded-[16px] overflow-hidden shadow-sm">
              <img
                src={corporateTrainingImg}
                alt="Program In-House Training Profesional P3I"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Right stacked images */}
            <div className="flex flex-col gap-2 sm:gap-5 justify-between h-auto sm:h-[340px] lg:h-[360px]">
              <div className="w-full h-[120px] sm:h-[158px] lg:h-[168px] rounded-[16px] overflow-hidden shadow-sm">
                <img
                  src={groupDiscussionImg}
                  alt="Diskusi Kelompok In-House Training"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-full h-[120px] sm:h-[158px] lg:h-[168px] rounded-[16px] overflow-hidden shadow-sm">
                <img
                  src={presentationImg}
                  alt="Sesi Pemaparan Materi Pelatihan"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

