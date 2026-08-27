import React from 'react';

export default function MainSection() {
  return (
    <section id="mainSection" className="w-full h-auto bg-white flex items-center justify-center py-0 px-[48px]">
      <div className="w-full max-w-7xl mx-0 px-[32px] py-[48px] flex flex-col md:flex-row gap-8 lg:gap-12 items-center justify-between">
        {/* Bagian Kiri: Teks & Informasi (35%) */}
        <div
          id="informasi-left-text-wrapper"
          className="w-full md:w-[35%] flex flex-col justify-center text-left"
        >
          {/* Badge Label */}
          <span
            id="kontak-kami-label-badge"
            className="text-[#1cd690] font-bold text-[12px] leading-[19.5px] tracking-wider uppercase inline-block mb-[4px]"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '12px',
              lineHeight: '19.5px',
              color: '#1cd690',
            }}
          >
            Kontak Kami
          </span>

          <h2
            className="text-[32px] leading-[40px] font-bold text-[#022859] mb-[8px]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Kunjungi & Hubungi Kami
          </h2>
          <p
            id="informasi-subheading-text"
            className="text-[16px] leading-[24px] text-[#022859] mb-[12px]"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            Hubungi Kontak Kami Untuk Informasi Lebih lanjut
          </p>
          <p
            className="text-[16px] leading-[24px] font-semibold text-[#022859] mb-[12px]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Informasi:
          </p>

          <div
            id="informasi-detail-1"
            className="flex items-center gap-2 text-[14px] leading-[20px] mt-1"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#022859] shrink-0 inline-block" />
            <div>
              <span
                style={{ color: '#1cd690', fontWeight: 600, fontFamily: 'Nunito, sans-serif' }}
              >
                Alamat:{" "}
              </span>
              <span
                style={{ color: '#022859', fontFamily: 'Nunito, sans-serif' }}
              >
                Jl. Mundu Luar Blok N No. 20 Jakarta 14270.
              </span>
            </div>
          </div>

          <div
            id="informasi-detail-2"
            className="flex items-center gap-2 text-[14px] leading-[20px] mt-1"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#022859] shrink-0 inline-block" />
            <div>
              <span
                style={{ color: '#1cd690', fontWeight: 600, fontFamily: 'Nunito, sans-serif' }}
              >
                Alamat:{" "}
              </span>
              <span
                style={{ color: '#022859', fontFamily: 'Nunito, sans-serif' }}
              >
                Jl. Lontar 09 Blok B No 44 Jakarta 14260
              </span>
            </div>
          </div>

          <div
            id="informasi-detail-3"
            className="flex items-center gap-2 text-[14px] leading-[20px] mt-1"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#022859] shrink-0 inline-block" />
            <div>
              <span
                style={{ color: '#1cd690', fontWeight: 600, fontFamily: 'Nunito, sans-serif' }}
              >
                No.HP:{" "}
              </span>
              <span
                style={{ color: '#022859', fontFamily: 'Nunito, sans-serif' }}
              >
                (+62) 881-0806-31990
              </span>
            </div>
          </div>

          <div
            id="informasi-detail-4"
            className="flex items-center gap-2 text-[14px] leading-[20px] mt-1"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#022859] shrink-0 inline-block" />
            <div>
              <span
                style={{ color: '#1cd690', fontWeight: 600, fontFamily: 'Nunito, sans-serif' }}
              >
                Email:{" "}
              </span>
              <span
                style={{ color: '#022859', fontFamily: 'Nunito, sans-serif' }}
              >
                p3i.edukasi@gmail.com
              </span>
            </div>
          </div>
        </div>

        {/* Bagian Kanan: Google Maps (65%) */}
        <div
          id="informasi-right-map-wrapper"
          className="w-full md:w-[65%] h-[260px] sm:h-[300px] md:h-[340px] rounded-[16px] overflow-hidden shadow-md bg-slate-100 shrink-0 border border-slate-200"
        >
          <iframe
            title="Lokasi Kantor Kami"
            src="https://maps.google.com/maps?q=Jl.+Mundu+Luar+Blok+N+No.+20+Jakarta+14270&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0 rounded-[16px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

