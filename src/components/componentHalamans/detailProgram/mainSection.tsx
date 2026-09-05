import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { 
  Target, 
  Award, 
  CheckCircle2, 
  BookOpen, 
  Layers, 
  FileText, 
  Send, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  Users, 
  MessageSquareQuote,
  ChevronUp,
  ChevronDown,
  Check,
  GraduationCap,
  MapPin,
  Tag,
  BriefcaseBusiness,
  Receipt,
  Wallet,
  LibraryBig,
  Building2,
  Video
} from 'lucide-react';
import { getPelatihanById } from '../../../data/dataPelatihan';

export default function MainSection() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const programId = searchParams.get('id') || '1';
  const program = getPelatihanById(programId);

  const [isMateriOpen, setIsMateriOpen] = useState(false);
  const [materiTab, setMateriTab] = useState<'hari1' | 'hari2'>('hari1');
  const [isFasilitasOpen, setIsFasilitasOpen] = useState(false);
  const [fasilitasTab, setFasilitasTab] = useState<'offline' | 'online'>('offline');
  const [isBiayaOpen, setIsBiayaOpen] = useState(false);
  const [isMetodeOpen, setIsMetodeOpen] = useState(false);

  // Helper untuk mendapatkan list materi per hari
  const materiHari1 = program.materiPelatihan?.hari1 || [];
  const materiHari2 = program.materiPelatihan?.hari2 || [];

  // Helper untuk list narasumber (bisa 1 atau lebih)
  const narasumberList = Array.isArray(program.narasumber)
    ? program.narasumber
    : [program.narasumber];

  // Helper untuk list tujuan dan manfaat gabungan
  const listTujuan = program.tujuanManfaat || [
    ...(program.tujuan?.tujuanUtama || []),
    ...(program.tujuan?.manfaat || []),
  ];

  const programTitle = program.title || program.judulPelatihan;
  const displayPrice = typeof program.harga === 'object' ? (program.harga.display || program.harga.offline) : program.harga;
  const offlinePrice = typeof program.harga === 'object' ? program.harga.offline : program.harga;
  const onlinePrice = typeof program.harga === 'object' ? program.harga.online : 'Rp 1.950.000';

  return (
    <section 
      id="mainSectionDetailProgram" 
      className="w-full h-auto bg-white flex items-center justify-center py-[48px] px-6 sm:px-12 lg:px-[48px]"
    >
      <div 
        id="detail-program-2col-container"
        className="w-full max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
      >
        {/* ========================================================================= */}
        {/* BAGIAN KIRI: Deskripsi, Tujuan & Manfaat, Materi, Fasilitas, Biaya, Metode */}
        {/* ========================================================================= */}
        <div id="detail-program-left-column" className="w-full lg:col-span-8 flex flex-col items-start text-left gap-8">
          
          {/* 1. Deskripsi Pelatihan */}
          <div id="detail-program-deskripsi-wrapper" className="w-full flex flex-col items-start gap-4">
            {/* Badge Kategori / Label */}
            <span
              id="detail-program-badge"
              className="text-[#1cd690] font-bold text-[12px] leading-[19.5px] tracking-wider uppercase inline-block"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Informasi Pelatihan
            </span>

            {/* Judul: Nama Pelatihan */}
            <h2
              id="detail-program-title"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              className="text-[32px] leading-[40px] font-bold text-[#022859] tracking-tight"
            >
              {programTitle}
            </h2>

            {/* Narasi Deskripsi */}
            <p
              id="detail-program-narasi"
              style={{ fontFamily: 'Nunito, sans-serif' }}
              className="text-[16px] text-[#475569] leading-[24px]"
            >
              {program.deskripsi}
            </p>

            {/* Narasumber */}
            <div id="detail-program-narasumber-wrapper" className="w-full flex flex-col items-start gap-3 pt-2">
              <span
                id="detail-program-narasumber-badge"
                className="text-[#1cd690] font-bold text-[12px] leading-[19.5px] tracking-wider uppercase inline-block"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Narasumber
              </span>
              <div className="w-full flex flex-col gap-3">
                {narasumberList.map((ns, idx) => (
                  <div
                    key={idx}
                    id={`detail-program-narasumber-card-${idx}`}
                    className="w-full flex flex-col gap-0.5"
                  >
                    <h3
                      id={`detail-program-narasumber-title-${idx}`}
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                      className="text-[16px] leading-[24px] font-bold text-[#022859]"
                    >
                      {ns.nama}
                    </h3>
                    {ns.jabatan && (
                      <p 
                        style={{ fontFamily: 'Nunito, sans-serif' }}
                        className="text-[12px] leading-[19.5px] font-semibold text-[#1cd690]"
                      >
                        {ns.jabatan}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Tujuan & Manfaat Pelatihan */}
          <div id="detail-program-tujuan-manfaat-wrapper" className="w-full flex flex-col items-start gap-4 pt-2">
            {/* Judul */}
            <h2
              id="detail-program-tujuan-manfaat-title"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              className="text-[18px] leading-[27px] font-bold text-[#022859] tracking-tight"
            >
              Tujuan & Manfaat Pelatihan
            </h2>

            {/* List Item Kartu Sesuai Desain Gambar */}
            <div className="w-full flex flex-col gap-3.5 mt-1">
              {listTujuan.map((tujuanText, idx) => (
                <div 
                  key={idx}
                  id={`tujuan-item-${idx + 1}`}
                  className="w-full bg-white border border-slate-200/80 rounded-[16px] p-4 sm:p-5 flex items-start gap-3.5 shadow-sm hover:border-[#1cd690]/50 hover:-translate-y-1 hover:shadow-md transition-all duration-200"
                >
                  <CheckCircle2 size={20} className="text-[#1cd690] stroke-[2.2] shrink-0 mt-0.5" />
                  <p 
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                    className="text-[#475569] font-medium text-[14px] sm:text-[15.5px] leading-relaxed"
                  >
                    {tujuanText}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Materi Pelatihan (Sesuai Desain Fasilitas Pelatihan) */}
          <div 
            id="detail-program-materi-wrapper" 
            className="w-full flex flex-col items-start bg-white border border-slate-200/80 rounded-[16px] p-[24px] shadow-sm"
          >
            {/* Header Accordion Materi Pelatihan */}
            <button
              id="btn-toggle-materi-pelatihan"
              type="button"
              onClick={() => setIsMateriOpen(!isMateriOpen)}
              className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-none"
            >
              <div className="flex items-center gap-3">
                <span className="text-[#1cd690] flex items-center justify-center">
                  <LibraryBig size={24} className="text-[#1cd690]" />
                </span>
                <h2
                  id="materi-pelatihan-title"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                  className="text-[18px] leading-[27px] font-bold text-[#022859]"
                >
                  Materi Pelatihan
                </h2>
              </div>

              <span className="text-slate-600 group-hover:text-slate-900 transition-colors">
                {isMateriOpen ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
              </span>
            </button>

            {/* Content Accordion Materi Pelatihan */}
            {isMateriOpen && (
              <div id="materi-pelatihan-content" className="w-full flex flex-col mt-4">
                {/* Tabs Hari 1 & Hari 2 */}
                <div className="w-full flex items-center gap-8 border-b border-slate-200">
                  <button
                    id="tab-materi-hari-1"
                    type="button"
                    onClick={() => setMateriTab('hari1')}
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                    className={`pb-2.5 px-1 text-[15px] sm:text-[16px] font-semibold transition-all relative cursor-pointer ${
                      materiTab === 'hari1'
                        ? 'text-[#1cd690] border-b-2 border-[#1cd690]'
                        : 'text-slate-500 hover:text-[#022859]'
                    }`}
                  >
                    Hari 1
                  </button>

                  <button
                    id="tab-materi-hari-2"
                    type="button"
                    onClick={() => setMateriTab('hari2')}
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                    className={`pb-2.5 px-1 text-[15px] sm:text-[16px] font-semibold transition-all relative cursor-pointer ${
                      materiTab === 'hari2'
                        ? 'text-[#1cd690] border-b-2 border-[#1cd690]'
                        : 'text-slate-500 hover:text-[#022859]'
                    }`}
                  >
                    Hari 2
                  </button>
                </div>

                {/* List Items Hari 1 & Hari 2 */}
                {materiTab === 'hari1' ? (
                  <div 
                    id="materi-list-hari-1" 
                    className="w-full flex flex-col pt-5 pb-2 text-slate-800"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    {/* Banner Hari 1 Sesuai Gambar */}
                    <div 
                      id="materi-banner-hari-1"
                      className="w-full bg-[#f0f6ff] text-[#022859] px-4 sm:px-5 py-3 rounded-[12px] font-bold text-[13px] sm:text-[14px] tracking-wide uppercase mb-6"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      HARI 1 – {program.id === '1' ? 'SP2DK DAN MEKANISME PENGAWASAN PAJAK MODERN' : `${programTitle.toUpperCase()} (BAGIAN 1)`}
                    </div>

                    {/* Sesi List Hari 1 */}
                    <div className="w-full flex flex-col gap-6">
                      {materiHari1.map((sesiItem, sIdx) => {
                        const sesiTitle = sesiItem.sesi.match(/^\d+[:.]/)
                          ? sesiItem.sesi.replace(/^(\d+)[:.]\s*/, '$1. ')
                          : `${sIdx + 1}. ${sesiItem.sesi}`;

                        return (
                          <div key={sIdx} className="flex flex-col gap-2">
                            <h3 className="font-bold text-[#022859] text-[15px] sm:text-[16px] leading-snug">
                              {sesiTitle}
                            </h3>
                            <ul className="flex flex-col gap-1.5 pl-0.5">
                              {sesiItem.topik.map((topikText, tIdx) => (
                                <li key={tIdx} className="flex items-start gap-2.5 text-[#334155] text-[14px] sm:text-[15px] leading-relaxed">
                                  <span className="text-[#334155] select-none font-bold text-base leading-none mt-1 shrink-0">•</span>
                                  <span>{topikText}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div 
                    id="materi-list-hari-2" 
                    className="w-full flex flex-col pt-5 pb-2 text-slate-800"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    {/* Banner Hari 2 Sesuai Gambar */}
                    <div 
                      id="materi-banner-hari-2"
                      className="w-full bg-[#f0f6ff] text-[#022859] px-4 sm:px-5 py-3 rounded-[10px] font-bold text-[13px] sm:text-[14px] tracking-wide uppercase mb-6"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      HARI 2 – {program.id === '1' ? 'STRATEGI PENANGANAN & STUDI KASUS SP2DK' : `${programTitle.toUpperCase()} (BAGIAN 2)`}
                    </div>

                    {/* Sesi List Hari 2 */}
                    <div className="w-full flex flex-col gap-6">
                      {materiHari2.map((sesiItem, sIdx) => {
                        const sesiTitle = sesiItem.sesi.match(/^\d+[:.]/)
                          ? sesiItem.sesi.replace(/^(\d+)[:.]\s*/, '$1. ')
                          : `${sIdx + 1}. ${sesiItem.sesi}`;

                        return (
                          <div key={sIdx} className="flex flex-col gap-2">
                            <h3 className="font-bold text-[#022859] text-[15px] sm:text-[16px] leading-snug">
                              {sesiTitle}
                            </h3>
                            <ul className="flex flex-col gap-1.5 pl-0.5">
                              {sesiItem.topik.map((topikText, tIdx) => (
                                <li key={tIdx} className="flex items-start gap-2.5 text-[#334155] text-[14px] sm:text-[15px] leading-relaxed">
                                  <span className="text-[#334155] select-none font-bold text-base leading-none mt-1 shrink-0">•</span>
                                  <span>{topikText}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* 4. Fasilitas Pelatihan (Sesuai Desain Gambar) */}
          <div 
            id="detail-program-fasilitas-wrapper" 
            className="w-full flex flex-col items-start bg-white border border-slate-200/80 rounded-[16px] p-[24px] shadow-sm"
          >
            {/* Header Accordion Fasilitas Pelatihan */}
            <button
              id="btn-toggle-fasilitas-pelatihan"
              type="button"
              onClick={() => setIsFasilitasOpen(!isFasilitasOpen)}
              className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-none"
            >
              <div className="flex items-center gap-3">
                <span className="text-[#1cd690] flex items-center justify-center">
                  <BriefcaseBusiness size={24} className="text-[#1cd690]" />
                </span>
                <h2
                  id="fasilitas-pelatihan-title"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                  className="text-[18px] leading-[27px] font-bold text-[#022859]"
                >
                  Fasilitas Pelatihan
                </h2>
              </div>

              <span className="text-slate-600 group-hover:text-slate-900 transition-colors">
                {isFasilitasOpen ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
              </span>
            </button>

            {/* Content Accordion */}
            {isFasilitasOpen && (
              <div id="fasilitas-pelatihan-content" className="w-full flex flex-col mt-4">
                {/* Tabs Offline & Online */}
                <div className="w-full flex items-center gap-8 border-b border-slate-200">
                  <button
                    id="tab-fasilitas-offline"
                    type="button"
                    onClick={() => setFasilitasTab('offline')}
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                    className={`pb-2.5 px-1 text-[15px] sm:text-[16px] font-semibold transition-all relative cursor-pointer ${
                      fasilitasTab === 'offline'
                        ? 'text-[#1cd690] border-b-2 border-[#1cd690]'
                        : 'text-slate-500 hover:text-[#022859]'
                    }`}
                  >
                    Offline
                  </button>

                  <button
                    id="tab-fasilitas-online"
                    type="button"
                    onClick={() => setFasilitasTab('online')}
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                    className={`pb-2.5 px-1 text-[15px] sm:text-[16px] font-semibold transition-all relative cursor-pointer ${
                      fasilitasTab === 'online'
                        ? 'text-[#1cd690] border-b-2 border-[#1cd690]'
                        : 'text-slate-500 hover:text-[#022859]'
                    }`}
                  >
                    Online
                  </button>
                </div>

                {/* List Items 2 Kolom */}
                {fasilitasTab === 'offline' ? (
                  <div 
                    id="fasilitas-list-offline" 
                    className="w-full grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-10 pt-5 pb-2 text-slate-700"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    {/* Kolom 1 (Kiri) */}
                    <div className="flex flex-col gap-3.5">
                      <div className="flex items-center gap-3">
                        <Check size={18} className="text-[#10b981] stroke-[2.5] shrink-0" />
                        <span className="text-[14px] sm:text-[15px] font-medium text-[#334155]">Sertifikat Pelatihan Resmi</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check size={18} className="text-[#10b981] stroke-[2.5] shrink-0" />
                        <span className="text-[14px] sm:text-[15px] font-medium text-[#334155]">Modul Pelatihan (Hardcopy & Softcopy)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check size={18} className="text-[#10b981] stroke-[2.5] shrink-0" />
                        <span className="text-[14px] sm:text-[15px] font-medium text-[#334155]">Training Kit Lengkap</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check size={18} className="text-[#10b981] stroke-[2.5] shrink-0" />
                        <span className="text-[14px] sm:text-[15px] font-medium text-[#334155]">Lunch & Coffee Break 2x / Hari</span>
                      </div>
                    </div>

                    {/* Kolom 2 (Kanan) */}
                    <div className="flex flex-col gap-3.5">
                      <div className="flex items-center gap-3">
                        <Check size={18} className="text-[#10b981] stroke-[2.5] shrink-0" />
                        <span className="text-[14px] sm:text-[15px] font-medium text-[#334155]">Ruangan Kelas Hotel Berbintang</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check size={18} className="text-[#10b981] stroke-[2.5] shrink-0" />
                        <span className="text-[14px] sm:text-[15px] font-medium text-[#334155]">Dokumentasi & Souvenir Eksklusif</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check size={18} className="text-[#10b981] stroke-[2.5] shrink-0" />
                        <span className="text-[14px] sm:text-[15px] font-medium text-[#334155]">Konsultasi Pasca Pelatihan</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div 
                    id="fasilitas-list-online" 
                    className="w-full grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-10 pt-5 pb-2 text-slate-700"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    {/* Kolom 1 (Kiri) */}
                    <div className="flex flex-col gap-3.5">
                      <div className="flex items-center gap-3">
                        <Check size={18} className="text-[#10b981] stroke-[2.5] shrink-0" />
                        <span className="text-[14px] sm:text-[15px] font-medium text-[#334155]">E-Certificate Resmi</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check size={18} className="text-[#10b981] stroke-[2.5] shrink-0" />
                        <span className="text-[14px] sm:text-[15px] font-medium text-[#334155]">Akses Live Interactive Zoom</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check size={18} className="text-[#10b981] stroke-[2.5] shrink-0" />
                        <span className="text-[14px] sm:text-[15px] font-medium text-[#334155]">Rekaman Video Pembelajaran HD</span>
                      </div>
                    </div>

                    {/* Kolom 2 (Kanan) */}
                    <div className="flex flex-col gap-3.5">
                      <div className="flex items-center gap-3">
                        <Check size={18} className="text-[#10b981] stroke-[2.5] shrink-0" />
                        <span className="text-[14px] sm:text-[15px] font-medium text-[#334155]">E-Modul & Materi Lengkap</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check size={18} className="text-[#10b981] stroke-[2.5] shrink-0" />
                        <span className="text-[14px] sm:text-[15px] font-medium text-[#334155]">Akses Grup Diskusi & Konsultasi</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* 5. Biaya Pelatihan (Sesuai Desain Gambar) */}
          <div 
            id="detail-program-biaya-wrapper" 
            className="w-full flex flex-col items-start bg-white border border-slate-200/80 rounded-[16px] p-[24px] shadow-sm"
          >
            {/* Header Accordion Biaya Pelatihan */}
            <button
              id="btn-toggle-biaya-pelatihan"
              type="button"
              onClick={() => setIsBiayaOpen(!isBiayaOpen)}
              className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-none"
            >
              <div className="flex items-center gap-3">
                <span className="text-[#1cd690] flex items-center justify-center">
                  <Receipt size={24} className="text-[#1cd690]" />
                </span>
                <h2
                  id="biaya-pelatihan-title"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                  className="text-[18px] leading-[27px] font-bold text-[#022859]"
                >
                  Biaya Pelatihan
                </h2>
              </div>

              <span className="text-slate-600 group-hover:text-slate-900 transition-colors">
                {isBiayaOpen ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
              </span>
            </button>

            {/* Content Biaya Pelatihan */}
            {isBiayaOpen && (
              <div id="biaya-pelatihan-content" className="w-full flex flex-col mt-5">
                {/* Table Header */}
                <div 
                  className="w-full bg-[#f0f6ff] rounded-[12px] px-4 py-2.5 flex items-center justify-between text-[12px] sm:text-[13px] font-bold text-[#022859] tracking-wider"
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                >
                  <div className="w-[22%]">TIPE</div>
                  <div className="w-[48%] font-bold">LOKASI</div>
                  <div className="w-[30%] text-right">BIAYA</div>
                </div>

                {/* Row 1: Offline - Jakarta */}
                <div className="w-full px-4 py-3.5 flex items-center justify-between border-b border-slate-100 text-sm">
                  <div className="w-[22%] flex items-center">
                    <span 
                      className="bg-[#1cd690] text-[#022859] font-semibold text-xs px-2.5 py-1 rounded-[8px]"
                      style={{ fontFamily: 'Nunito, sans-serif' }}
                    >
                      Offline
                    </span>
                  </div>
                  <div className="w-[48%] text-slate-700 font-medium" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    Jakarta
                  </div>
                  <div className="w-[30%] text-right font-bold text-[#1cd690] text-[15px]" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    Rp 3.500.000
                  </div>
                </div>

                {/* Row 2: Offline - Bandung */}
                <div className="w-full px-4 py-3.5 flex items-center justify-between border-b border-slate-100 text-sm">
                  <div className="w-[22%] flex items-center">
                    <span 
                      className="bg-[#1cd690] text-[#022859] font-semibold text-xs px-2.5 py-1 rounded-[8px]"
                      style={{ fontFamily: 'Nunito, sans-serif' }}
                    >
                      Offline
                    </span>
                  </div>
                  <div className="w-[48%] text-slate-700 font-medium" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    Bandung
                  </div>
                  <div className="w-[30%] text-right font-bold text-[#1cd690] text-[15px]" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    Rp 4.000.000
                  </div>
                </div>

                {/* Row 3: Offline - Yogyakarta */}
                <div className="w-full px-4 py-3.5 flex items-center justify-between border-b border-slate-100 text-sm">
                  <div className="w-[22%] flex items-center">
                    <span 
                      className="bg-[#1cd690] text-[#022859] font-semibold text-xs px-2.5 py-1 rounded-[8px]"
                      style={{ fontFamily: 'Nunito, sans-serif' }}
                    >
                      Offline
                    </span>
                  </div>
                  <div className="w-[48%] text-slate-700 font-medium" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    Yogyakarta
                  </div>
                  <div className="w-[30%] text-right font-bold text-[#1cd690] text-[15px]" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    Rp 4.500.000
                  </div>
                </div>

                {/* Row 4: Online - Zoom Meeting */}
                <div className="w-full px-4 py-3.5 flex items-center justify-between border-b border-slate-100 text-sm">
                  <div className="w-[22%] flex items-center">
                    <span 
                      className="bg-[#022859] text-[#1cd690] font-semibold text-xs px-2.5 py-1 rounded-[8px]"
                      style={{ fontFamily: 'Nunito, sans-serif' }}
                    >
                      Online
                    </span>
                  </div>
                  <div className="w-[48%] text-slate-700 font-medium" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    Zoom Meeting (Online)
                  </div>
                  <div className="w-[30%] text-right font-bold text-[#1cd690] text-[15px]" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    Rp 2.850.000
                  </div>
                </div>

                {/* Note */}
                <span 
                  className="text-[12px] italic text-slate-500 mt-3 block"
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                >
                  *Harga belum termasuk penginapan (untuk kelas Offline).
                </span>
              </div>
            )}
          </div>

          {/* 6. Metode Pembayaran (Sesuai Desain Gambar) */}
          <div 
            id="detail-program-metode-pembayaran-wrapper" 
            className="w-full flex flex-col items-start bg-white border border-slate-200/80 rounded-[16px] p-[24px] shadow-sm"
          >
            {/* Header Accordion Metode Pembayaran */}
            <button
              id="btn-toggle-metode-pembayaran"
              type="button"
              onClick={() => setIsMetodeOpen(!isMetodeOpen)}
              className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-none"
            >
              <div className="flex items-center gap-3">
                <span className="text-[#1cd690] flex items-center justify-center">
                  <Wallet size={24} className="text-[#1cd690]" />
                </span>
                <h2
                  id="metode-pembayaran-title"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                  className="text-[18px] leading-[27px] font-bold text-[#022859]"
                >
                  Metode Pembayaran
                </h2>
              </div>

              <span className="text-slate-600 group-hover:text-slate-900 transition-colors">
                {isMetodeOpen ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
              </span>
            </button>

            {/* Content Metode Pembayaran */}
            {isMetodeOpen && (
              <div id="metode-pembayaran-content" className="w-full flex flex-col gap-3.5 mt-5">
                {/* Opsi 1: Bayar di Hotel */}
                <div className="w-full bg-[#f0f6ff] border-0 rounded-[12px] p-4 flex items-center gap-3.5">
                  <CheckCircle2 size={20} className="text-[#1cd690] shrink-0" />
                  <span 
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                    className="text-[14px] sm:text-[15px] font-semibold text-[#022859]"
                  >
                    Bayar Di Hotel (Saat Registrasi Ulang)
                  </span>
                </div>

                {/* Opsi 2: Transfer Bank Mandiri */}
                <div className="w-full bg-[#f0f6ff] border-0 rounded-[12px] p-4 flex items-start gap-3.5">
                  <CheckCircle2 size={20} className="text-[#1cd690] shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    <span className="text-[14px] sm:text-[15px] font-semibold text-[#022859] leading-snug">
                      Transfer / BANK MANDIRI No. Rek. 120-00-0608072-0 An. Pusat Pengembangan Profesi Indonesia
                    </span>
                    <span className="text-[12px] sm:text-[13px] text-slate-500 italic">
                      Konfirmasi pembayaran melalui WhatsApp Admin.
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* BAGIAN KANAN: Panel Pendaftaran & Tombol Daftar (Col Span 4)               */}
        {/* ========================================================================= */}
        <div 
          id="detail-program-right-column" 
          className="w-full lg:col-span-4 lg:sticky lg:top-[100px] flex flex-col gap-6"
        >
          {/* Card Pendaftaran */}
          <div
            id="detail-program-card-daftar"
            className="w-full bg-white border-2 border-slate-100 rounded-[20px] p-[26px] sm:p-[30px] shadow-[0px_4px_24px_rgba(2,40,89,0.08)] flex flex-col gap-5"
          >
            {/* Header Card Pendaftaran: Teks Pendaftaran, Judul, Kategori, Lokasi */}
            <div className="flex flex-col gap-1.5 border-b border-slate-100 pb-4">
              <span
                className="text-[#1cd690] font-bold text-[12px] tracking-wider uppercase"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Pendaftaran
              </span>
              <h3
                id="detail-program-card-daftar-heading"
                style={{ fontFamily: 'Poppins, sans-serif' }}
                className="text-[18px] sm:text-[20px] font-bold text-[#022859] leading-snug"
              >
                {programTitle}
              </h3>
              <span
                className="text-[12px] font-semibold text-[#1cd690] tracking-wide"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                {program.kategori}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium mt-0.5" style={{ fontFamily: 'Nunito, sans-serif' }}>
                <MapPin size={14} className="text-[#1cd690] shrink-0" />
                <span>{program.lokasi}</span>
              </div>
            </div>

            {/* Informasi Pilihan Kelas & Harga */}
            <div className="flex flex-col gap-3.5 text-[13px] text-slate-700 font-medium" style={{ fontFamily: 'Nunito, sans-serif' }}>
              {/* Pilihan Kelas */}
              <div className="flex flex-col gap-1.5">
                <span className="text-slate-500 font-normal">Pilihan Kelas :</span>
                <div className="flex flex-col gap-1.5 pl-1">
                  <div className="flex items-center gap-2 text-slate-800 font-semibold">
                    <Building2 size={16} className="text-[#1cd690] shrink-0" />
                    <span>Offline</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-800 font-semibold">
                    <Video size={16} className="text-[#1cd690] shrink-0" />
                    <span>Online</span>
                  </div>
                </div>
              </div>

              {/* Harga */}
              <div className="flex flex-col gap-1.5 pt-2 border-t border-slate-100">
                <span className="text-slate-500 font-normal">Harga :</span>
                <div className="flex flex-col gap-1.5 pl-1">
                  <div className="flex items-center gap-2 text-[#022859] font-bold">
                    <Building2 size={16} className="text-[#1cd690] shrink-0" />
                    <span>Rp 3.500.000 <span className="text-[11px] font-normal text-slate-500">(Harga Offline)</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-[#022859] font-bold">
                    <Video size={16} className="text-[#1cd690] shrink-0" />
                    <span>Rp 2.850.000 <span className="text-[11px] font-normal text-slate-500">(Harga Online)</span></span>
                  </div>
                </div>
              </div>
            </div>

            {/* BUTTON DAFTAR UTAMA */}
            <div className="flex flex-col gap-3 pt-2">
              <button
                id="btn-daftar-program-utama"
                type="button"
                onClick={() => navigate('/kontak-kami')}
                className="w-full py-3.5 px-5 bg-[#022859] hover:bg-[#1cd690] hover:text-[#022859] text-white hover:-translate-y-[2px] hover:shadow-[0px_6px_20px_rgba(28,214,144,0.35)] font-bold text-[15px] sm:text-[16px] rounded-[14px] transition-all duration-200 ease-in-out cursor-pointer active:scale-95 flex items-center justify-center gap-2.5 shadow-md"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <span>Daftar Sekarang</span>
                <Send size={18} />
              </button>
            </div>

            {/* Catatan Bantuan */}
            <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 flex items-start gap-2.5">
              <MessageSquareQuote size={18} className="text-[#1cd690] shrink-0 mt-0.5" />
              <p 
                style={{ fontFamily: 'Nunito, sans-serif' }}
                className="text-[12px] text-slate-500 leading-[18px]"
              >
                Butuh penawaran resmi atau konsultasi silabus khusus instansi? Hubungi konsultan kami melalui halaman kontak.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
