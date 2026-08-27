import React from 'react';

export default function MainSection() {
  const teamImg = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&auto=format&fit=crop&q=80";
  const workshopImg = "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80";
  const seminarImg = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80";

  return (
    <section id="mainSection" className="w-full h-auto bg-white flex items-center justify-center py-0 px-[48px]">
      <div className="w-full max-w-7xl mx-0 px-[32px] py-[48px] flex flex-col gap-10 lg:gap-12">
        {/* Row Atas: 2 Kolom (Tentang Kami Kiri 45% & Bento Gallery Kanan 50%) */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Kolom Kiri: Deskripsi (45%) */}
          <div
            id="tentang-kami-left-container"
            className="w-full lg:w-[45%] flex flex-col justify-start shrink-0"
          >
            {/* Badge Label */}
            <span
              id="tentang-kami-visi-label-badge"
              className="text-[#1cd690] font-bold text-[12px] leading-[19.5px] tracking-wider uppercase inline-block mb-[4px]"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '12px',
                lineHeight: '19.5px',
                color: '#1cd690',
              }}
            >
              Tentang Kami
            </span>

            {/* Judul Utama */}
            <h2
              id="tentang-kami-heading"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              className="text-[28px] sm:text-[32px] font-bold text-[#022859] leading-[36px] sm:leading-[40px] tracking-tight mb-[8px]"
            >
              Mengenal Lebih Dekat P3I
            </h2>

            {/* Paragraf Utama */}
            <div style={{ fontFamily: 'Nunito, sans-serif' }} className="flex flex-col gap-4 mb-6">
              <p
                id="tentang-kami-left-statement"
                style={{ fontFamily: 'Nunito, sans-serif' }}
                className="text-[16px] not-italic font-normal text-slate-800 leading-[24px] no-underline tracking-tight border-[#022859]"
              >
                Pusat Pengembangan Profesi Indonesia (P3I) merupakan lembaga penyedia layanan pelatihan yang berfokus pada pengembangan kompetensi sumber daya manusia. Kami menghadirkan berbagai program pelatihan yang dirancang untuk membantu peserta meningkatkan pengetahuan, keterampilan, dan kepercayaan diri dalam menghadapi perkembangan dunia kerja yang terus berubah.
              </p>
              <p
                id="tentang-kami-left-statement-2"
                style={{ fontFamily: 'Nunito, sans-serif' }}
                className="text-[16px] not-italic font-normal text-slate-800 leading-[24px] no-underline tracking-tight border-[#022859]"
              >
                Melalui layanan Pelatihan Reguler untuk masyarakat umum dan In-House Training untuk perusahaan maupun instansi, P3I berkomitmen menghadirkan pengalaman belajar yang interaktif, aplikatif, dan memberikan manfaat nyata bagi setiap peserta.
              </p>
            </div>

            {/* Action Buttons: Legalitas Lembaga & Filosofi Logo */}
            <div className="flex flex-wrap items-center gap-3.5 self-start">
              <button
                id="tentang-kami-btn-legalitas"
                type="button"
                style={{ fontFamily: 'Nunito, sans-serif' }}
                className="inline-flex items-center justify-center px-[20px] py-[10px] rounded-[12px] bg-[#ffffff] border border-[#022859] text-[#022859] hover:bg-[#022859] hover:text-[#ffffff] hover:border-[#022859] hover:-translate-y-[2px] hover:shadow-[0px_4px_12px_rgba(2,40,89,0.15)] font-bold text-[15px] leading-[20px] no-underline transition-all duration-200 ease-in-out cursor-pointer shadow-sm"
              >
                Legalitas Lembaga
              </button>
              <button
                id="tentang-kami-btn-filosofi-logo"
                type="button"
                style={{ fontFamily: 'Nunito, sans-serif' }}
                className="inline-flex items-center justify-center px-[20px] py-[10px] rounded-[12px] bg-[#ffffff] border border-[#022859] text-[#022859] hover:bg-[#022859] hover:text-[#ffffff] hover:border-[#022859] hover:-translate-y-[2px] hover:shadow-[0px_4px_12px_rgba(2,40,89,0.15)] font-bold text-[15px] leading-[20px] no-underline transition-all duration-200 ease-in-out cursor-pointer shadow-sm"
              >
                Filosofi Logo
              </button>
            </div>
          </div>

          {/* Kolom Kanan: Bento Grid Layout (50%) sama seperti Beranda */}
          <div
            id="tentang-kami-right-image-wrapper"
            className="w-full lg:w-[50%] grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-5 items-stretch"
          >
            {/* Left tall image */}
            <div className="w-full h-[260px] sm:h-[340px] lg:h-[360px] rounded-[16px] overflow-hidden shadow-sm">
              <img
                src={teamImg}
                alt="Tim Kolaborasi dan Pelatihan Profesional P3I"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Right stacked images */}
            <div className="flex flex-col gap-2 sm:gap-5 justify-between h-auto sm:h-[340px] lg:h-[360px]">
              <div className="w-full h-[120px] sm:h-[158px] lg:h-[168px] rounded-[16px] overflow-hidden shadow-sm">
                <img
                  src={workshopImg}
                  alt="Sesi Diskusi Workshop Pelatihan"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-full h-[120px] sm:h-[158px] lg:h-[168px] rounded-[16px] overflow-hidden shadow-sm">
                <img
                  src={seminarImg}
                  alt="Presentasi Seminar dan Pelatihan"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Konten Baru di Bagian Bawah: Stats Bar Full Width sesuai Gambar */}
        <div
          id="tentang-kami-bottom-stats-bar"
          className="w-full rounded-[16px] border border-[#022859]/60 bg-[#ffffff] py-6 px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4 shadow-sm"
        >
          {/* Stat 1: 200+ Projects Completed */}
          <div className="flex items-center justify-center gap-3.5 flex-1">
            <span
              className="text-[32px] font-normal text-[#022859] leading-[40px] tracking-tight"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              200<span className="text-[26px] sm:text-[30px] font-light -ml-0.5">+</span>
            </span>
            <div
              className="flex flex-col text-left text-[13px] sm:text-[14px] text-[#022859] leading-[18px] font-normal"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              <span>Projects</span>
              <span>Completed</span>
            </div>
          </div>

          {/* Divider 1 */}
          <div className="hidden sm:block w-[1px] h-10 bg-[#022859]/40 shrink-0" />

          {/* Stat 2: 150+ Satisfied Clients */}
          <div className="flex items-center justify-center gap-3.5 flex-1">
            <span
              className="text-[32px] font-normal text-[#022859] leading-[40px] tracking-tight"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              150<span className="text-[26px] sm:text-[30px] font-light -ml-0.5">+</span>
            </span>
            <div
              className="flex flex-col text-left text-[13px] sm:text-[14px] text-[#022859] leading-[18px] font-normal"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              <span>Satisfied</span>
              <span>Clients</span>
            </div>
          </div>

          {/* Divider 2 */}
          <div className="hidden sm:block w-[1px] h-10 bg-[#022859]/40 shrink-0" />

          {/* Stat 3: 50+ Industry Awards */}
          <div className="flex items-center justify-center gap-3.5 flex-1">
            <span
              className="text-[32px] font-normal text-[#022859] leading-[40px] tracking-tight"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              50<span className="text-[26px] sm:text-[30px] font-light -ml-0.5">+</span>
            </span>
            <div
              className="flex flex-col text-left text-[13px] sm:text-[14px] text-[#022859] leading-[18px] font-normal"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              <span>Industry</span>
              <span>Awards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

