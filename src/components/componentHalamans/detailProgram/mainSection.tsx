import React, { useState, useMemo } from 'react';
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
  Video,
  X,
  Phone,
  User,
  Mail,
  Building,
  Briefcase,
  Map,
  Users2,
  ChevronLeft,
  ChevronRight
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

  // Modal Pendaftaran State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMetode, setSelectedMetode] = useState<'Offline' | 'Online'>('Offline');
  const [selectedJadwalIndex, setSelectedJadwalIndex] = useState<number>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    noWhatsapp: '',
    umur: '',
    jenisKelamin: 'Laki-laki',
    pekerjaan: '',
    alamat: '',
  });

  // Helper untuk normalisasi data jadwal pelatihan menjadi array
  const jadwalList = useMemo(() => {
    if (!program.jadwalPelatihan) return [];
    if (Array.isArray(program.jadwalPelatihan)) return program.jadwalPelatihan;
    if (typeof program.jadwalPelatihan === 'object') return [program.jadwalPelatihan];
    return [{ tanggal: program.jadwalPelatihan, bulan: 'Jadwal Utama', durasi: '' }];
  }, [program.jadwalPelatihan]);

  // Kelompokkan jadwal berdasarkan bulan (misal "Oktober 2026", "November 2026", dsb.)
  const bulanList = useMemo(() => {
    const list: string[] = [];
    jadwalList.forEach((j) => {
      const b = j.bulan?.trim() || 'Jadwal Umum';
      if (!list.includes(b)) {
        list.push(b);
      }
    });
    return list;
  }, [jadwalList]);

  const [selectedBulanIndex, setSelectedBulanIndex] = useState<number>(0);

  // Dapatkan item jadwal yang berada pada bulan yang sedang dipilih pada pagination tab
  const activeBulan = bulanList[selectedBulanIndex] || bulanList[0] || '';
  const filteredJadwalByBulan = useMemo(() => {
    if (!activeBulan) return jadwalList;
    return jadwalList.filter((j) => (j.bulan?.trim() || 'Jadwal Umum') === activeBulan);
  }, [jadwalList, activeBulan]);

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
                onClick={() => {
                  setFormSubmitted(false);
                  setIsModalOpen(true);
                }}
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

      {/* ========================================================================= */}
      {/* MODAL INFORMASI & FORM PENDAFTARAN                                         */}
      {/* ========================================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div 
            className="bg-white w-full max-w-2xl rounded-[24px] shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Body Modal */}
            <div className="p-6 sm:p-8 overflow-y-auto flex flex-col gap-6" style={{ fontFamily: 'Nunito, sans-serif' }}>
              {formSubmitted ? (
                /* Tampilan Setelah Berhasil Mengirim */
                <div className="flex flex-col items-center justify-center text-center py-8 gap-4">
                  <div className="w-16 h-16 bg-[#1cd690]/10 text-[#1cd690] rounded-full flex items-center justify-center">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-[#022859]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Pendaftaran Berhasil Dikirim!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md leading-relaxed">
                    Terima kasih, <strong className="text-slate-900">{formData.nama}</strong>. Tim administrasi kami akan segera menghubungi Anda melalui WhatsApp/Email untuk mengonfirmasi kelengkapan berkas dan invoice pendaftaran.
                  </p>

                  {/* Ringkasan Singkat */}
                  <div className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 text-left flex flex-col gap-2 mt-2 text-xs text-slate-600">
                    <div><strong>Program:</strong> {programTitle}</div>
                    {jadwalList[selectedJadwalIndex] && (
                      <div>
                        <strong>Jadwal Sesi:</strong> {jadwalList[selectedJadwalIndex].tanggal} {jadwalList[selectedJadwalIndex].bulan} ({jadwalList[selectedJadwalIndex].metode || selectedMetode})
                      </div>
                    )}
                    <div><strong>Metode Sesi:</strong> Kelas {selectedMetode}</div>
                    <div><strong>Email:</strong> {formData.email}</div>
                    <div><strong>WhatsApp:</strong> {formData.noWhatsapp}</div>
                    <div><strong>Umur:</strong> {formData.umur} Tahun</div>
                    <div><strong>Jenis Kelamin:</strong> {formData.jenisKelamin}</div>
                    <div><strong>Pekerjaan:</strong> {formData.pekerjaan}</div>
                    <div><strong>Alamat:</strong> {formData.alamat}</div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="mt-4 py-3 px-8 bg-[#022859] hover:bg-[#1cd690] hover:text-[#022859] text-white font-bold text-sm rounded-xl transition-colors cursor-pointer"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Tutup
                  </button>
                </div>
              ) : (
                /* Form Isian Pendaftaran */
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormSubmitted(true);
                  }}
                  className="flex flex-col gap-5"
                >
                  {/* Pilihan Jadwal & Metode Pelatihan */}
                  <div className="flex flex-col gap-2.5">
                    <label className="text-xs font-bold uppercase text-slate-500 tracking-wider flex items-center gap-1.5">
                      <Calendar size={14} className="text-[#1cd690]" />
                      <span>Pilih Jadwal & Metode Pelatihan <span className="text-red-500">*</span></span>
                    </label>

                    {/* Pagination Navigasi Bulan */}
                    {bulanList.length > 0 && (
                      <div className="flex items-center justify-between bg-white border-0 px-1 py-1">
                        <button
                          type="button"
                          disabled={selectedBulanIndex === 0}
                          onClick={() => {
                            const newIndex = selectedBulanIndex - 1;
                            setSelectedBulanIndex(newIndex);
                            const prevBulan = bulanList[newIndex];
                            const firstMatch = jadwalList.findIndex(
                              (j) => (j.bulan?.trim() || 'Jadwal Umum') === prevBulan
                            );
                            if (firstMatch !== -1) {
                              setSelectedJadwalIndex(firstMatch);
                              const mText = jadwalList[firstMatch].metode || 'Offline';
                              setSelectedMetode(mText.toLowerCase().includes('online') ? 'Online' : 'Offline');
                            }
                          }}
                          className="p-1.5 rounded-[12px] border border-slate-200 bg-white hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed text-slate-700 transition-colors cursor-pointer"
                          title="Bulan Sebelumnya"
                        >
                          <ChevronLeft size={16} />
                        </button>

                        <span className="text-sm font-bold text-[#022859]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          {activeBulan}
                        </span>

                        <button
                          type="button"
                          disabled={selectedBulanIndex === bulanList.length - 1}
                          onClick={() => {
                            const newIndex = selectedBulanIndex + 1;
                            setSelectedBulanIndex(newIndex);
                            const nextBulan = bulanList[newIndex];
                            const firstMatch = jadwalList.findIndex(
                              (j) => (j.bulan?.trim() || 'Jadwal Umum') === nextBulan
                            );
                            if (firstMatch !== -1) {
                              setSelectedJadwalIndex(firstMatch);
                              const mText = jadwalList[firstMatch].metode || 'Offline';
                              setSelectedMetode(mText.toLowerCase().includes('online') ? 'Online' : 'Offline');
                            }
                          }}
                          className="p-1.5 rounded-[12px] border border-slate-200 bg-white hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed text-slate-700 transition-colors cursor-pointer"
                          title="Bulan Berikutnya"
                        >
                          <ChevronRight size={16} />
                        </button>
                      </div>
                    )}

                    {jadwalList.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
                        {filteredJadwalByBulan.map((item, localIdx) => {
                          // cari index asli di jadwalList
                          const originalIdx = jadwalList.findIndex((j) => j === item);
                          const isSelected = selectedJadwalIndex === (originalIdx !== -1 ? originalIdx : localIdx);
                          const metodeText = item.metode || (localIdx % 2 === 0 ? 'Offline' : 'Online');
                          const hargaText = metodeText.toLowerCase() === 'online'
                            ? (typeof program.harga === 'object' ? program.harga.online : 'Rp 2.850.000')
                            : (typeof program.harga === 'object' ? program.harga.offline : 'Rp 3.500.000');

                          return (
                            <button
                              key={localIdx}
                              type="button"
                              onClick={() => {
                                setSelectedJadwalIndex(originalIdx !== -1 ? originalIdx : localIdx);
                                setSelectedMetode(metodeText.toLowerCase().includes('online') ? 'Online' : 'Offline');
                              }}
                              className={`p-3.5 rounded-xl border-2 flex items-start gap-3 transition-all cursor-pointer text-left relative overflow-hidden ${
                                isSelected
                                  ? 'border-[#022859] bg-[#f0f6ff] shadow-xs'
                                  : 'border-slate-200 hover:border-slate-300 bg-white'
                              }`}
                            >
                              <div className={`p-2 rounded-[12px] shrink-0 mt-0.5 ${
                                isSelected ? 'bg-[#022859] text-white' : 'bg-slate-100 text-slate-500'
                              }`}>
                                {metodeText.toLowerCase().includes('online') ? <Video size={18} /> : <Building2 size={18} />}
                              </div>

                              <div className="flex flex-col gap-0.5">
                                <div className="flex items-center gap-1.5">
                                  <span className="text-xs font-bold text-[#022859]">
                                    Kelas {metodeText}
                                  </span>
                                </div>
                                <span className="text-sm font-bold text-slate-900 mt-0" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                  {item.tanggal} {item.bulan}
                                </span>
                                {item.durasi && (
                                  <span className="text-xs text-slate-500 font-medium">
                                    {item.durasi}
                                  </span>
                                )}
                                <span className="text-xs font-bold text-[#1cd690] mt-1">
                                  {hargaText}
                                </span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setSelectedMetode('Offline')}
                          className={`p-3.5 rounded-xl border-2 flex items-center gap-3 transition-all cursor-pointer ${
                            selectedMetode === 'Offline'
                              ? 'border-[#022859] bg-[#f0f6ff] text-[#022859] font-bold shadow-xs'
                              : 'border-slate-200 hover:border-slate-300 text-slate-600'
                          }`}
                        >
                          <Building2 size={20} className={selectedMetode === 'Offline' ? 'text-[#022859]' : 'text-slate-400'} />
                          <div className="flex flex-col text-left">
                            <span className="text-sm">Kelas Offline</span>
                            <span className="text-xs font-semibold text-[#1cd690]">
                              {typeof program.harga === 'object' ? program.harga.offline : 'Rp 3.500.000'}
                            </span>
                          </div>
                        </button>

                        <button
                          type="button"
                          onClick={() => setSelectedMetode('Online')}
                          className={`p-3.5 rounded-xl border-2 flex items-center gap-3 transition-all cursor-pointer ${
                            selectedMetode === 'Online'
                              ? 'border-[#022859] bg-[#f0f6ff] text-[#022859] font-bold shadow-xs'
                              : 'border-slate-200 hover:border-slate-300 text-slate-600'
                          }`}
                        >
                          <Video size={20} className={selectedMetode === 'Online' ? 'text-[#022859]' : 'text-slate-400'} />
                          <div className="flex flex-col text-left">
                            <span className="text-sm">Kelas Online</span>
                            <span className="text-xs font-semibold text-[#1cd690]">
                              {typeof program.harga === 'object' ? program.harga.online : 'Rp 2.850.000'}
                            </span>
                          </div>
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Field Form Input */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Nama Lengkap */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                        <User size={14} className="text-[#1cd690]" />
                        <span>Nama Lengkap <span className="text-red-500">*</span></span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Masukkan nama lengkap"
                        value={formData.nama}
                        onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#022859] focus:bg-white transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                        <Mail size={14} className="text-[#1cd690]" />
                        <span>Email <span className="text-red-500">*</span></span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="nama@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#022859] focus:bg-white transition-all"
                      />
                    </div>

                    {/* No WhatsApp */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                        <Phone size={14} className="text-[#1cd690]" />
                        <span>No. WhatsApp <span className="text-red-500">*</span></span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="081234567890"
                        value={formData.noWhatsapp}
                        onChange={(e) => setFormData({ ...formData, noWhatsapp: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#022859] focus:bg-white transition-all"
                      />
                    </div>

                    {/* Umur */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                        <Clock size={14} className="text-[#1cd690]" />
                        <span>Umur (Tahun) <span className="text-red-500">*</span></span>
                      </label>
                      <input
                        type="number"
                        required
                        min="15"
                        max="90"
                        placeholder="Contoh: 28"
                        value={formData.umur}
                        onChange={(e) => setFormData({ ...formData, umur: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#022859] focus:bg-white transition-all"
                      />
                    </div>

                    {/* Jenis Kelamin */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                        <Users2 size={14} className="text-[#1cd690]" />
                        <span>Jenis Kelamin <span className="text-red-500">*</span></span>
                      </label>
                      <select
                        value={formData.jenisKelamin}
                        onChange={(e) => setFormData({ ...formData, jenisKelamin: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#022859] focus:bg-white transition-all cursor-pointer"
                      >
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                      </select>
                    </div>

                    {/* Pekerjaan */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                        <Briefcase size={14} className="text-[#1cd690]" />
                        <span>Pekerjaan <span className="text-red-500">*</span></span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Staf Keuangan / PNS"
                        value={formData.pekerjaan}
                        onChange={(e) => setFormData({ ...formData, pekerjaan: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#022859] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Alamat */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                      <Map size={14} className="text-[#1cd690]" />
                      <span>Alamat Lengkap <span className="text-red-500">*</span></span>
                    </label>
                    <textarea
                      required
                      rows={2}
                      placeholder="Masukkan alamat domisili lengkap..."
                      value={formData.alamat}
                      onChange={(e) => setFormData({ ...formData, alamat: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#022859] focus:bg-white transition-all resize-none"
                    />
                  </div>

                  {/* Tombol Kirim */}
                  <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="py-3 px-5 text-slate-600 hover:text-slate-800 text-sm font-semibold transition-colors cursor-pointer"
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="py-3 px-7 bg-[#022859] hover:bg-[#1cd690] hover:text-[#022859] text-white font-bold text-sm rounded-xl transition-all shadow-md cursor-pointer flex items-center gap-2"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      <span>Kirim Pendaftaran</span>
                      <Send size={16} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
