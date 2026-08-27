import React from 'react';
import { Route } from 'lucide-react';

export default function SejarahSection() {
  return (
    <section id="sejarahSection" className="w-full h-auto bg-[#1cd690] flex items-center justify-center py-[48px] px-[48px]">
      <div className="w-full max-w-[1196px] mx-auto flex flex-col items-center justify-center gap-6 lg:gap-8">
        {/* Main Blue Banner Container */}
        <div
          id="tentang-kami-sejarah-card"
          className="w-full max-w-[1196px] min-h-[360px] lg:min-h-[380px] mx-auto bg-[#022859] rounded-[16px] px-[24px] py-[48px] text-white flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-12 shadow-md"
        >
          {/* Left Column: Sejarah Badge (Top) & Heading */}
          <div
            id="tentang-kami-sejarah-left"
            className="w-full lg:w-[35%] flex flex-col justify-start"
          >
            {/* Badge: Route icon + SEJARAH */}
            <div className="flex items-center gap-2.5 mb-[4px]">
              <Route className="w-5 h-5 text-[#1CD690] shrink-0" />
              <span
                id="tentang-kami-sejarah-badge-text"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '12px',
                  lineHeight: '19.5px',
                }}
                className="text-[#1CD690] font-bold text-[12px] leading-[19.5px] tracking-wider uppercase"
              >
                SEJARAH
              </span>
            </div>

            <h2
              id="tentang-kami-sejarah-title"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              className="text-[32px] font-normal leading-[40px] tracking-tight text-white"
            >
              Crafting Digital Experiences that Elevate Brands
            </h2>
          </div>

          {/* Vertical Divider (Desktop) */}
          <div className="hidden lg:block w-[1.5px] bg-[#1CD690] self-stretch -my-3 shrink-0 opacity-90" />

          {/* Right Column: Paragraph Content with Scrollable Area */}
          <div
            id="tentang-kami-sejarah-right"
            style={{ fontFamily: 'Nunito, sans-serif' }}
            className="w-full lg:w-[60%] max-h-[300px] sm:max-h-[320px] overflow-y-auto pr-3.5 flex flex-col gap-4 scrollbar-thin scrollbar-thumb-[#1CD690]/60 scrollbar-track-white/10 hover:scrollbar-thumb-[#1CD690] [scrollbar-width:thin] [scrollbar-color:#1CD690_rgba(255,255,255,0.1)]"
          >
            <p
              id="tentang-kami-sejarah-description-1"
              style={{ fontFamily: 'Nunito, sans-serif' }}
              className="text-white/90 text-[14px] leading-[20px] italic font-normal"
            >
              Pusat Pengembangan Profesi Indonesia (P3I), didirikan di Jakarta pada tanggal 04 Maret 2008 dan disahkan keberadaan serta eksistensinya melalui Akta Notaris No. 06 oleh : SRI INTANSIH, S.H. pada tanggal 04 Maret 2008. Pusat Pengembangan Profesi Indonesia (P3I) kemudian melakukan pembaruan legalitas melalui Akta Perubahan Akta Notaris No. 08 yang dibuat oleh JUNIARTY BARYADI, S.H., M.Kn. pada tanggal 18 September 2024. P3I telah memiliki NPWP : 02.696.647.3-045.000, Surat Keterangan Terdaftar (SKT) Kementerian Hukum dan HAM, serta Nomor Induk Berusaha (NIB) : 1707240087928.
            </p>
            <p
              id="tentang-kami-sejarah-description-2"
              style={{ fontFamily: 'Nunito, sans-serif' }}
              className="text-white/90 text-[14px] leading-[20px] italic font-normal"
            >
              Pusat Pengembangan Profesi Indonesia (P3I) merupakan lembaga independen yang berfokus pada penyelenggaraan kegiatan pengembangan kapasitas dan peningkatan kualitas sumber daya manusia (SDM), melalui pendekatan pendidikan non-formal dan jasa konsultasi yang bersifat aplikatif dan solutif. Sebagai penyelenggara kegiatan pelatihan dan pengembangan profesional (event organizer), P3I hadir untuk menjawab kebutuhan transformasi kelembagaan dan penguatan kompetensi aparatur maupun non-aparatur di berbagai sektor. Lingkup kegiatan yang dilaksanakan mencakup pelatihan berskala nasional dalam bentuk workshop, seminar, in-house training, serta Bimbingan Teknis (BIMTEK) yang disusun secara sistematis dan berbasis kebutuhan mitra kerja.
            </p>
            <p
              id="tentang-kami-sejarah-description-3"
              style={{ fontFamily: 'Nunito, sans-serif' }}
              className="text-white/90 text-[14px] leading-[20px] italic font-normal"
            >
              Selain itu, Pusat Pengembangan Profesi Indonesia (P3I) juga menyediakan layanan konsultasi dan pendampingan kelembagaan yang bertujuan untuk mendukung proses peningkatan kinerja organisasi melalui pendekatan yang terukur, partisipatif, dan berbasis hasil (result-based approach). Sasaran utama dari program-program yang dijalankan oleh P3I mencakup instansi pemerintah daerah (PEMDA), Badan Usaha Milik Negara (BUMN), Badan Usaha Milik Daerah (BUMD), Badan Layanan Umum (BLU), Badan Layanan Umum Daerah (BLUD), perusahaan swasta, rumah sakit, lembaga pendidikan seperti perguruan tinggi dan sekolah, serta organisasi kemasyarakatan termasuk yayasan dan koperasi. Dengan berbekal tim ahli yang berpengalaman, jaringan kerja lintas sektor, serta komitmen terhadap prinsip profesionalisme dan integritas, P3I menempatkan dirinya sebagai mitra strategis dalam upaya mendorong pembangunan SDM yang unggul, adaptif, dan berdaya saing di era transformasi digital dan tata kelola modern.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

