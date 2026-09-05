import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqItems = [
  {
    id: 'faq-1',
    question: 'Bagaimana cara mendaftar kelas pelatihan publik (Public Training)?',
    answer:
      'Anda dapat memilih program yang diinginkan pada halaman Jadwal Pelatihan, lalu klik tombol "Daftar". Selain itu, Anda juga bisa langsung menghubungi tim kami via WhatsApp untuk dibantu proses pendaftarannya secara praktis.',
  },
  {
    id: 'faq-2',
    question: 'Apakah materi Inhouse Training bisa disesuaikan dengan kebutuhan perusahaan kami?',
    answer:
      'Tentu saja. Kami menyediakan analisis kebutuhan pelatihan (Training Needs Analysis) terlebih dahulu agar materi dan modul yang disusun benar-benar menjawab tantangan spesifik di perusahaan Anda.',
  },
  {
    id: 'faq-3',
    question: 'Sertifikat apa yang akan didapatkan peserta setelah selesai pelatihan?',
    answer:
      'Setiap peserta yang menyelesaikan pelatihan akan mendapatkan Sertifikat Kehadiran/Kelulusan dari [Nama Lembaga]. Untuk program berbasis standar kompetensi, peserta yang lulus uji kompetensi juga akan mendapatkan Sertifikat Resmi BNSP / Instansi Pembina.',
  },
  {
    id: 'faq-4',
    question: 'Di mana lokasi pelaksanaan pelatihan tatap muka (Offline)?',
    answer:
      'Untuk Public Training, pelatihan umumnya diadakan di hotel berbintang mitra kami di kota-kota besar. Sedangkan untuk Inhouse Training, lokasi pelaksanaan dapat disesuaikan sepenuhnya dengan permintaan perusahaan Anda.',
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faqSection" className="w-full h-auto bg-white py-0 px-[48px] flex items-center justify-center">
      <div className="w-full max-w-7xl mx-0 px-[32px] py-[48px] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Kolom Kiri: Informasi & Teks */}
        <div id="faq-left-content" className="lg:col-span-5 flex flex-col items-start space-y-5 text-left">
          {/* Heading */}
          <h2
            id="faq-main-heading"
            className="text-[32px] leading-[40px] font-bold text-[#022859] mb-[8px]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Pertanyaan yang Sering Diajukan
          </h2>

          {/* Deskripsi */}
          <p
            id="faq-subtext"
            className="text-[16px] leading-[24px] text-neutral-500 max-w-md pt-2"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            Temukan jawaban cepat untuk beberapa pertanyaan umum seputar program dan layanan kami di bawah ini.
          </p>
        </div>

        {/* Kolom Kanan: Accordion FAQ */}
        <div id="faq-right-accordion-list" className="lg:col-span-7 flex flex-col space-y-4 w-full">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                id={item.id}
                className="w-full transition-all duration-300 rounded-[16px] overflow-hidden border-0 shadow-none px-6 py-5 cursor-pointer"
                style={{
                  backgroundColor: isOpen ? '#022859' : '#1cd690',
                  borderRadius: '16px',
                }}
                onClick={() => !isOpen && toggleItem(item.id)}
              >
                <div
                  className="flex items-center justify-between gap-4 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleItem(item.id);
                  }}
                >
                  <h3
                    className="text-[16px] leading-[22px] font-semibold select-none"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      color: isOpen ? '#1cd690' : '#022859',
                    }}
                  >
                    {item.question}
                  </h3>

                  {/* Icon Toggle Button */}
                  <button
                    type="button"
                    aria-label={isOpen ? 'Tutup pertanyaan' : 'Buka pertanyaan'}
                    className="w-9 h-9 rounded-[12px] flex items-center justify-center shrink-0 transition-colors shadow-none border-0"
                    style={{
                      backgroundColor: isOpen ? '#1cd690' : '#022859',
                      borderRadius: '12px',
                    }}
                  >
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 stroke-[2.5]" style={{ color: '#022859' }} />
                    ) : (
                      <ChevronDown className="w-5 h-5 stroke-[2.5]" style={{ color: '#1cd690' }} />
                    )}
                  </button>
                </div>

                {/* Konten Jawaban ketika terbuka */}
                {isOpen && (
                  <div
                    id={`${item.id}-answer`}
                    className="mt-3 pt-1 text-[14px] leading-[20px] pr-10"
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      color: '#1cd690',
                    }}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

