import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Instagram, Twitter, Youtube, Send, MapPin, PhoneCall, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footerSection" className="w-full bg-[#022859] h-auto text-white border-none px-[32px] py-[48px]">
      {/* Container Utama */}
      <div className="w-full max-w-7xl mx-0 px-0 py-0">
        {/* Baris Atas: Kolom Brand & Kolom Navigasi */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pb-[24px]">
          {/* Kolom Kiri: Brand Logo, Deskripsi, dan Ikon Sosial Media (5 kolom) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            {/* Logo Brand */}
            <Link to="/" className="flex items-center gap-3 mb-[8px] group">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-600/30 group-hover:bg-indigo-500 transition-colors">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span
                className="text-[20px] font-bold tracking-tight text-white"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Lembaga Pelatihan
              </span>
            </Link>

            {/* Deskripsi */}
            <p
              style={{ fontFamily: 'Nunito, sans-serif' }}
              className="text-[#D3E2F4] text-[15px] leading-[24px] max-w-sm mb-6 font-normal"
            >
              Pusat Pengembangan Profesi Indonesia (P3I) berkomitmen meningkatkan kompetensi dan profesionalisme SDM melalui program pelatihan unggulan dan in-house training terpercaya.
            </p>
          </div>

          {/* Kolom Kanan: 3 Kolom Menu Navigasi (7 kolom) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-left">
            {/* Menu 1: Halaman */}
            <div className="flex flex-col space-y-3">
              <h4
                style={{ fontFamily: 'Poppins, sans-serif' }}
                className="text-[16px] font-semibold text-white tracking-wide"
              >
                Halaman
              </h4>
              <ul className="flex flex-col space-y-2.5" style={{ fontFamily: 'Nunito, sans-serif' }}>
                <li>
                  <Link to="/" className="inline-block text-[#D3E2F4] hover:text-[#1cd690] text-[14px] transition-all duration-200 ease-out hover:-translate-y-0.5">
                    Beranda
                  </Link>
                </li>
                <li>
                  <Link to="/tentang-kami" className="inline-block text-[#D3E2F4] hover:text-[#1cd690] text-[14px] transition-all duration-200 ease-out hover:-translate-y-0.5">
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link to="/program-pelatihan" className="inline-block text-[#D3E2F4] hover:text-[#1cd690] text-[14px] transition-all duration-200 ease-out hover:-translate-y-0.5">
                    Pelatihan
                  </Link>
                </li>
                <li>
                  <Link to="/jadwal" className="inline-block text-[#D3E2F4] hover:text-[#1cd690] text-[14px] transition-all duration-200 ease-out hover:-translate-y-0.5">
                    Jadwal
                  </Link>
                </li>
                <li>
                  <Link to="/inhouse-training" className="inline-block text-[#D3E2F4] hover:text-[#1cd690] text-[14px] transition-all duration-200 ease-out hover:-translate-y-0.5">
                    Inhouse Training
                  </Link>
                </li>
                <li>
                  <Link to="/kontak-kami" className="inline-block text-[#D3E2F4] hover:text-[#1cd690] text-[14px] transition-all duration-200 ease-out hover:-translate-y-0.5">
                    Kontak Kami
                  </Link>
                </li>
              </ul>
            </div>

            {/* Menu 2: Resource */}
            <div className="flex flex-col space-y-3">
              <h4
                style={{ fontFamily: 'Poppins, sans-serif' }}
                className="text-[16px] font-semibold text-white tracking-wide"
              >
                Resource
              </h4>
              <ul className="flex flex-col space-y-2.5" style={{ fontFamily: 'Nunito, sans-serif' }}>
                <li>
                  <Link to="/tentang-kami" className="inline-block text-[#D3E2F4] hover:text-[#1cd690] text-[14px] transition-all duration-200 ease-out hover:-translate-y-0.5">
                    Legalitas Lembaga
                  </Link>
                </li>
                <li>
                  <Link to="/tentang-kami" className="inline-block text-[#D3E2F4] hover:text-[#1cd690] text-[14px] transition-all duration-200 ease-out hover:-translate-y-0.5">
                    Filosofi Logo
                  </Link>
                </li>
                <li>
                  <Link to="/inhouse-training" className="inline-block text-[#D3E2F4] hover:text-[#1cd690] text-[14px] transition-all duration-200 ease-out hover:-translate-y-0.5">
                    Proposal Inhouse
                  </Link>
                </li>
              </ul>
            </div>

            {/* Menu 3: Kontak Kami */}
            <div className="flex flex-col space-y-3 col-span-2 sm:col-span-1">
              <h4
                style={{ fontFamily: 'Poppins, sans-serif' }}
                className="text-[16px] font-semibold text-white tracking-wide"
              >
                Kontak Kami
              </h4>
              <ul className="flex flex-col space-y-2.5" style={{ fontFamily: 'Nunito, sans-serif' }}>
                <li>
                  <Link to="/kontak-kami" className="inline-flex items-center gap-2 text-[#D3E2F4] hover:text-[#1cd690] text-[14px] transition-all duration-200 ease-out hover:-translate-y-0.5">
                    <MapPin className="w-4 h-4 text-[#1cd690] shrink-0" />
                    <span>Jakarta Jl. Mundu Luar</span>
                  </Link>
                </li>
                <li>
                  <Link to="/kontak-kami" className="inline-flex items-center gap-2 text-[#D3E2F4] hover:text-[#1cd690] text-[14px] transition-all duration-200 ease-out hover:-translate-y-0.5">
                    <MapPin className="w-4 h-4 text-[#1cd690] shrink-0" />
                    <span>Jakarta Jl. Lontar</span>
                  </Link>
                </li>
                <li>
                  <a
                    href="https://wa.me/62881080631990"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[#D3E2F4] hover:text-[#1cd690] text-[14px] transition-all duration-200 ease-out hover:-translate-y-0.5"
                  >
                    <PhoneCall className="w-4 h-4 text-[#1cd690] shrink-0" />
                    <span>(+62) 881-0806-31990</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:p3i.edukasi@gmail.com"
                    className="inline-flex items-center gap-2 text-[#D3E2F4] hover:text-[#1cd690] text-[14px] transition-all duration-200 ease-out hover:-translate-y-0.5"
                  >
                    <Mail className="w-4 h-4 text-[#1cd690] shrink-0" />
                    <span>p3i.edukasi@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Baris Bawah: Copyright & Legal Links */}
        <div className="pt-[24px] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#A6C0DE]">
          <p style={{ fontFamily: 'Nunito, sans-serif' }}>
            Copyright@2026 - Pusat Pengembangan Profesi Indonesia (P3I).
          </p>
            {/* Ikon Sosial Media */}
            <div className="flex items-center gap-3 text-slate-300">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-[12px] bg-white/5 hover:bg-[#1cd690]/20 flex items-center justify-center text-[#EBFBFA] hover:text-[#1cd690] border border-white/10 hover:border-[#1cd690]/40 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-md"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-[12px] bg-white/5 hover:bg-[#1cd690]/20 flex items-center justify-center text-[#EBFBFA] hover:text-[#1cd690] border border-white/10 hover:border-[#1cd690]/40 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-md"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-[12px] bg-white/5 hover:bg-[#1cd690]/20 flex items-center justify-center text-[#EBFBFA] hover:text-[#1cd690] border border-white/10 hover:border-[#1cd690]/40 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-md"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                className="w-9 h-9 rounded-[12px] bg-white/5 hover:bg-[#1cd690]/20 flex items-center justify-center text-[#EBFBFA] hover:text-[#1cd690] border border-white/10 hover:border-[#1cd690]/40 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-md"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
        </div>
      </div>
    </footer>
  );
}
