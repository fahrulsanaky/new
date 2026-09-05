import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ChevronDown, RotateCcw, ArrowLeft, ArrowRight, Building2, Video, MapPin } from 'lucide-react';
import { dataPelatihan } from '../../../data/dataPelatihan';

interface ProgramPelatihanSectionProps {
  setActivePage?: (page: string) => void;
}

export default function ProgramPelatihanSection({ setActivePage }: ProgramPelatihanSectionProps) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // State Dropdown Open/Close untuk tiap kartu filter
  const [openKategori, setOpenKategori] = useState(true);
  const [openLokasi, setOpenLokasi] = useState(true);

  // Opsi Kategori Pelatihan
  const kategoriList = [
    { id: 'semua', label: 'Semua', categoryKey: null },
    { id: 'keuangan-perpajakan', label: 'Keuangan & Perpajakan', categoryKey: 'Keuangan & Perpajakan' },
    { id: 'bisnis-manajemen', label: 'Bisnis & Manajemen', categoryKey: 'Bisnis & Manajemen' },
    { id: 'teknologi-informasi', label: 'Teknologi Informasi (IT)', categoryKey: 'Teknologi Informasi (IT)' },
    { id: 'hukum-kepatuhan', label: 'Hukum & Kepatuhan', categoryKey: 'Hukum & Kepatuhan' },
    { id: 'lingkungan-sustainability', label: 'Lingkungan & Sustainability', categoryKey: 'Lingkungan & Sustainability' },
    { id: 'pendidikan-sdm', label: 'Pendidikan & Pengembangan SDM', categoryKey: 'Pendidikan & Pengembangan SDM' },
  ];

  // Opsi Lokasi Pelatihan
  const lokasiList = [
    { id: 'semua', label: 'Semua', locationKey: null },
    { id: 'jakarta', label: 'Jakarta', locationKey: 'Jakarta' },
    { id: 'bandung', label: 'Bandung', locationKey: 'Bandung' },
    { id: 'yogyakarta', label: 'Yogyakarta', locationKey: 'Yogyakarta' },
  ];

  const [selectedKategori, setSelectedKategori] = useState<string[]>(['semua']);
  const [selectedLokasi, setSelectedLokasi] = useState<string[]>(['semua']);

  const handleKategoriToggle = (id: string) => {
    setCurrentPage(1);
    if (id === 'semua') {
      setSelectedKategori(['semua']);
      return;
    }
    const filtered = selectedKategori.filter((item) => item !== 'semua');
    const exists = filtered.includes(id);
    const next = exists ? filtered.filter((item) => item !== id) : [...filtered, id];
    setSelectedKategori(next.length === 0 ? ['semua'] : next);
  };

  const handleLokasiToggle = (id: string) => {
    setCurrentPage(1);
    if (id === 'semua') {
      setSelectedLokasi(['semua']);
      return;
    }
    const filtered = selectedLokasi.filter((item) => item !== 'semua');
    const exists = filtered.includes(id);
    const next = exists ? filtered.filter((item) => item !== id) : [...filtered, id];
    setSelectedLokasi(next.length === 0 ? ['semua'] : next);
  };

  const handleResetFilter = () => {
    setSelectedKategori(['semua']);
    setSelectedLokasi(['semua']);
    setSearchQuery('');
    setCurrentPage(1);
  };

  // Logika Filter Aktif
  const filteredCards = useMemo(() => {
    return dataPelatihan.filter((card) => {
      // 1. Filter Kategori
      if (!selectedKategori.includes('semua')) {
        const matchKategori = selectedKategori.some((kId) => {
          const found = kategoriList.find((k) => k.id === kId);
          return found && found.categoryKey === card.kategori;
        });
        if (!matchKategori) {
          return false;
        }
      }

      // 2. Filter Lokasi
      if (!selectedLokasi.includes('semua')) {
        const matchLokasi = selectedLokasi.some((lId) => {
          const found = lokasiList.find((l) => l.id === lId);
          return found && found.locationKey?.toLowerCase() === card.lokasi.toLowerCase();
        });
        if (!matchLokasi) {
          return false;
        }
      }

      // 3. Filter Pencarian Teks (Search Query)
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const cardTitle = (card.title || '').toLowerCase();
        const matchTitle = cardTitle.includes(query);
        const matchCategory = (card.kategori || '').toLowerCase().includes(query);
        const matchLocation = (card.lokasi || '').toLowerCase().includes(query);
        const matchMethod = (card.metode || 'Offline dan Online').toLowerCase().includes(query);
        if (!matchTitle && !matchCategory && !matchLocation && !matchMethod) {
          return false;
        }
      }

      return true;
    });
  }, [selectedKategori, selectedLokasi, searchQuery]);

  // Hitung Total Halaman dan Data Halaman Aktif
  const totalPages = Math.max(1, Math.ceil(filteredCards.length / itemsPerPage));
  const paginatedCards = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredCards.slice(start, start + itemsPerPage);
  }, [filteredCards, currentPage, itemsPerPage]);

  // Generator Daftar Angka Halaman (seperti 1 2 3 ... 8 9 10)
  const getPageNumbers = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (currentPage <= 4) {
      return [1, 2, 3, 4, 5, '...', totalPages];
    }
    if (currentPage >= totalPages - 3) {
      return [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }
    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      // scroll halus ke daftar konten pelatihan
      const el = document.getElementById('pelatihan-list-column');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section
      id="pelatihan-section"
      className="w-full min-h-screen bg-[#F5F5F5] box-border border-0 relative flex flex-col justify-start py-[48px] pl-[24px] pr-[24px]"
      style={{
        backgroundColor: '#F5F5F5',
        minHeight: '100vh',
        paddingTop: '48px',
        paddingBottom: '48px',
        paddingLeft: '24px',
        border: 'none',
      }}
    >
      <div id="pelatihan-container" className="w-full max-w-7xl mx-auto flex flex-col">
        {/* Header Area: Judul */}
        <div 
          id="pelatihan-header-wrapper" 
          className="w-full flex flex-col md:flex-row md:items-center justify-between gap-6 py-2"
          style={{
            paddingTop: '8px',
            paddingBottom: '8px',
          }}
        >
          {/* 1 Judul: Program Pelatihan */}
          <h2
            id="pelatihan-main-title"
            className="text-[32px] leading-[40px] font-bold text-[#022859] tracking-tight"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '32px',
              lineHeight: '40px',
              fontWeight: 'bold',
              color: '#022859',
            }}
          >
            Program Pelatihan
          </h2>
        </div>

        {/* Konten Area Pelatihan: Dibagi 2 Bagian Kiri & Kanan */}
        <div 
          id="pelatihan-content-area" 
          className="w-full pt-0 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          style={{
            paddingTop: '0px',
          }}
        >
          {/* Kolom Kiri: Filter */}
          <div 
            id="pelatihan-filter-column" 
            className="w-full lg:col-span-4 xl:col-span-3 flex flex-col"
          >
            {/* 1 Kotak Filter Box */}
            <div
              id="pelatihan-filter-box"
              className="w-full rounded-[16px] bg-[#022859] p-4 flex flex-col gap-4 shadow-md"
              style={{
                borderRadius: '16px',
                backgroundColor: '#022859',
              }}
            >
              {/* Header: Judul Filter & Tombol Reset berada di dalam div bagian atas */}
              <div 
                className="flex items-center justify-between pb-0"
                style={{
                  paddingBottom: '0px',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                <h3
                  id="pelatihan-filter-subtitle"
                  className="text-[18px] leading-[26px] font-bold text-white border-0"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    color: '#ffffff',
                    borderBottom: 'none',
                  }}
                >
                  Filter
                </h3>

                {(!selectedKategori.includes('semua') || !selectedLokasi.includes('semua') || searchQuery !== '') && (
                  <button
                    type="button"
                    onClick={handleResetFilter}
                    className="flex items-center gap-1.5 text-[12px] font-semibold text-emerald-300 hover:text-white transition-colors cursor-pointer"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    <RotateCcw size={14} />
                    <span>Reset Filter</span>
                  </button>
                )}
              </div>
              {/* Kotak Putih 1: Kategori (Dropdown) */}
              <div
                id="pelatihan-filter-inner-box-1"
                className="w-full rounded-[12px] bg-white border-0 p-4 flex flex-col transition-all duration-200"
                style={{
                  borderRadius: '12px',
                  backgroundColor: '#ffffff',
                  border: 'none',
                }}
              >
                {/* Header Subjudul + Icon Toggle */}
                <button
                  type="button"
                  id="pelatihan-filter-kategori-toggle"
                  onClick={() => setOpenKategori(!openKategori)}
                  className="w-full flex items-center justify-between text-left cursor-pointer select-none focus:outline-none group"
                >
                  <h4
                    id="pelatihan-filter-kategori-title"
                    className="text-[16px] leading-[22px] font-bold text-[#022859] group-hover:text-blue-900 transition-colors"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      color: '#022859',
                    }}
                  >
                    Kategori
                  </h4>
                  <ChevronDown
                    size={18}
                    id="pelatihan-filter-kategori-icon"
                    className={`text-[#022859] transition-transform duration-200 ${
                      openKategori ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>
                
                {/* Opsi Checkbox Kategori */}
                {openKategori && (
                  <div id="pelatihan-filter-kategori-list" className="flex flex-col gap-2.5 pt-3 mt-2 border-t border-slate-100">
                    {kategoriList.map((opt) => {
                      const isChecked = selectedKategori.includes(opt.id);
                      return (
                        <label
                          key={opt.id}
                          id={`filter-kategori-label-${opt.id}`}
                          className="flex items-center gap-3 cursor-pointer select-none text-left"
                        >
                          <input
                            type="checkbox"
                            id={`filter-kategori-input-${opt.id}`}
                            checked={isChecked}
                            onChange={() => handleKategoriToggle(opt.id)}
                            className="w-4 h-4 rounded border border-slate-300 text-[#022859] focus:ring-[#022859] cursor-pointer accent-[#022859] shrink-0"
                          />
                          <span 
                            className="text-[13px] sm:text-[14px] leading-tight text-slate-700 font-medium hover:text-[#022859] transition-colors" 
                            style={{ fontFamily: 'Nunito, sans-serif' }}
                          >
                            {opt.label}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Kotak Putih 2: Lokasi (Dropdown) */}
              <div
                id="pelatihan-filter-inner-box-3"
                className="w-full rounded-[12px] bg-white border-0 p-4 flex flex-col transition-all duration-200"
                style={{
                  borderRadius: '12px',
                  backgroundColor: '#ffffff',
                  border: 'none',
                }}
              >
                {/* Header Subjudul + Icon Toggle */}
                <button
                  type="button"
                  id="pelatihan-filter-lokasi-toggle"
                  onClick={() => setOpenLokasi(!openLokasi)}
                  className="w-full flex items-center justify-between text-left cursor-pointer select-none focus:outline-none group"
                >
                  <h4
                    id="pelatihan-filter-lokasi-title"
                    className="text-[16px] leading-[22px] font-bold text-[#022859] group-hover:text-blue-900 transition-colors"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      color: '#022859',
                    }}
                  >
                    Lokasi
                  </h4>
                  <ChevronDown
                    size={18}
                    id="pelatihan-filter-lokasi-icon"
                    className={`text-[#022859] transition-transform duration-200 ${
                      openLokasi ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>
                
                {/* Opsi Checkbox Lokasi */}
                {openLokasi && (
                  <div id="pelatihan-filter-lokasi-list" className="flex flex-col gap-2.5 pt-3 mt-2 border-t border-slate-100">
                    {lokasiList.map((opt) => {
                      const isChecked = selectedLokasi.includes(opt.id);
                      return (
                        <label
                          key={opt.id}
                          id={`filter-lokasi-label-${opt.id}`}
                          className="flex items-center gap-3 cursor-pointer select-none text-left"
                        >
                          <input
                            type="checkbox"
                            id={`filter-lokasi-input-${opt.id}`}
                            checked={isChecked}
                            onChange={() => handleLokasiToggle(opt.id)}
                            className="w-4 h-4 rounded border border-slate-300 text-[#022859] focus:ring-[#022859] cursor-pointer accent-[#022859] shrink-0"
                          />
                          <span 
                            className="text-[13px] sm:text-[14px] leading-tight text-slate-700 font-medium hover:text-[#022859] transition-colors" 
                            style={{ fontFamily: 'Nunito, sans-serif' }}
                          >
                            {opt.label}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Header Search + Card Pelatihan */}
          <div 
            id="pelatihan-list-column" 
            className="w-full lg:col-span-8 xl:col-span-9 flex flex-col gap-6"
          >
            {/* Input Search Posisi di Kanan Atas */}
            <div className="w-full flex justify-end">
              <div 
                id="pelatihan-search-container" 
                className="w-full sm:w-[320px] md:w-[360px] relative"
              >
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Search size={18} />
                </div>
                <input
                  type="text"
                  id="pelatihan-search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari program pelatihan..."
                  className="w-full h-[42px] pl-10 pr-4 rounded-[12px] border border-slate-200 bg-white text-[13.5px] text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#022859] focus:ring-1 focus:ring-[#022859] shadow-sm transition-all"
                  style={{
                    fontFamily: 'Nunito, sans-serif',
                  }}
                />
              </div>
            </div>
            {filteredCards.length > 0 ? (
              <div className="flex flex-col gap-8">
                {/* Grid Kartu Pelatihan */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
                  {paginatedCards.map((card) => {
                    const cardTitle = card.judulPelatihan || card.title;
                    const cardImage = card.gambarPelatihan || card.image;
                    const offlinePrice = typeof card.harga === 'object' ? card.harga.offline : 'Rp 3.500.000';
                    const onlinePrice = typeof card.harga === 'object' ? card.harga.online : 'Rp 2.850.000';

                    return (
                      <div
                        key={card.id}
                        id={`pelatihan-card-${card.id}`}
                        className="w-full bg-white rounded-[16px] border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
                        style={{
                          borderRadius: '16px',
                          backgroundColor: '#ffffff',
                        }}
                      >
                        {/* 1. Gambar dengan padding & rounded (tidak full bleed) */}
                        <div className="p-3 pb-0">
                          <div className="w-full h-36 overflow-hidden bg-slate-100 rounded-[8px]">
                            <img
                              src={cardImage}
                              alt={cardTitle}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-[8px]"
                              referrerPolicy="no-referrer"
                              onError={(e) => {
                                e.currentTarget.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80';
                              }}
                            />
                          </div>
                        </div>

                        {/* Konten Text & Tombol */}
                        <div className="p-4 flex flex-col flex-1 justify-between gap-4">
                          <div className="flex flex-col gap-1.5">
                            {/* Kategori Pelatihan */}
                            <span
                              className="text-[12px] font-semibold text-[#1CD690] tracking-wide"
                              style={{ fontFamily: 'Nunito, sans-serif' }}
                            >
                              {card.kategori}
                            </span>

                            {/* Judul Card */}
                            <h3
                              className="text-[15px] font-bold text-[#022859] leading-[20px] line-clamp-2"
                              style={{ fontFamily: 'Poppins, sans-serif' }}
                            >
                              {cardTitle}
                            </h3>
                            
                            {/* Informasi Lokasi, Pilihan Kelas & Harga */}
                            <div className="flex flex-col gap-2 pt-2 border-t border-slate-100 text-[12px] text-slate-700 font-medium" style={{ fontFamily: 'Nunito, sans-serif' }}>
                              <div className="flex items-center">
                                <span className="w-[85px] text-slate-500 font-normal shrink-0">Lokasi</span>
                                <span className="mr-1.5 text-slate-400">:</span>
                                <span className="font-semibold text-slate-800 truncate">{card.lokasi}</span>
                              </div>

                              {/* Pilihan Kelas */}
                              <div className="flex flex-col gap-1">
                                <span className="text-slate-500 font-normal">Pilihan Kelas :</span>
                                <div className="flex flex-col gap-1 pl-1">
                                  <div className="flex items-center gap-1.5 text-slate-800 font-semibold">
                                    <Building2 size={14} className="text-[#1CD690] shrink-0" />
                                    <span>Offline</span>
                                  </div>
                                  <div className="flex items-center gap-1.5 text-slate-800 font-semibold">
                                    <Video size={14} className="text-[#1CD690] shrink-0" />
                                    <span>Online</span>
                                  </div>
                                </div>
                              </div>

                              {/* Harga */}
                              <div className="flex flex-col gap-1">
                                <span className="text-slate-500 font-normal">Harga :</span>
                                <div className="flex flex-col gap-1 pl-1">
                                  <div className="flex items-center gap-1.5 text-[#022859] font-bold">
                                    <Building2 size={14} className="text-[#1CD690] shrink-0" />
                                    <span>{offlinePrice}</span>
                                  </div>
                                  <div className="flex items-center gap-1.5 text-[#022859] font-bold">
                                    <Video size={14} className="text-[#1CD690] shrink-0" />
                                    <span>{onlinePrice}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Button Detail */}
                          <button
                            type="button"
                            onClick={() => {
                              if (setActivePage) setActivePage('detail-program');
                              navigate(`/detail-program?id=${card.id}`);
                            }}
                            className="w-full py-[8px] px-3 bg-[#022859] text-white hover:bg-[#1CD690] hover:text-[#022859] hover:-translate-y-[1px] hover:shadow-[0px_2px_8px_rgba(2,40,89,0.25)] font-bold text-[13px] rounded-[12px] transition-all duration-200 ease-in-out cursor-pointer active:scale-95 text-center flex items-center justify-center"
                            style={{ fontFamily: 'Nunito, sans-serif' }}
                          >
                            Lihat Detail Kelas
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Komponen Pagination Desain Presisi sesuai Permintaan dan Gambar */}
                <div
                  id="pelatihan-pagination-wrapper"
                  className="w-full bg-[#f5f5f5] flex items-center justify-between p-3 select-none"
                  style={{
                    borderWidth: '0px',
                    borderRadius: '12px',
                    backgroundColor: '#f5f5f5',
                  }}
                >
                  {/* Tombol Previous */}
                  <button
                    type="button"
                    id="pelatihan-pagination-prev"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`group w-10 h-10 flex items-center justify-center rounded-[12px] transition-all duration-200 ${
                      currentPage === 1
                        ? 'cursor-not-allowed border border-[#e2e8f0] bg-[#f5f5f5] text-[#cbd5e1]'
                        : 'cursor-pointer border border-[#022859] bg-[#f5f5f5] text-[#022859] hover:!bg-[#022859] hover:!border-[#022859]'
                    }`}
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      borderRadius: '12px',
                      backgroundColor: '#f5f5f5',
                    }}
                  >
                    <ArrowLeft
                      size={18}
                      className={`transition-colors duration-200 ${
                        currentPage === 1 ? 'text-[#cbd5e1]' : 'text-[#022859] group-hover:!text-white'
                      }`}
                    />
                  </button>

                  {/* Daftar Nomor Halaman */}
                  <div
                    id="pelatihan-pagination-numbers"
                    className="flex items-center gap-2 sm:gap-3"
                  >
                    {getPageNumbers().map((item, idx) => {
                      if (item === '...') {
                        return (
                          <span
                            key={`ellipsis-${idx}`}
                            className="w-8 h-8 flex items-center justify-center text-[14px] select-none text-[#94a3b8]"
                            style={{ fontFamily: 'Nunito, sans-serif' }}
                          >
                            ...
                          </span>
                        );
                      }

                      const isPageActive = item === currentPage;

                      return (
                        <button
                          key={`page-${item}`}
                          type="button"
                          id={`pelatihan-page-btn-${item}`}
                          onClick={() => handlePageChange(item as number)}
                          className={`w-9 h-9 flex items-center justify-center text-[14px] font-bold rounded-[12px] transition-all cursor-pointer ${
                            isPageActive
                              ? 'bg-[#022859] text-white shadow-xs'
                              : 'text-[#022859] hover:bg-slate-100'
                          }`}
                          style={{
                            fontFamily: 'Nunito, sans-serif',
                            borderRadius: '12px',
                          }}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>

                  {/* Tombol Next */}
                  <button
                    type="button"
                    id="pelatihan-pagination-next"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`group w-10 h-10 flex items-center justify-center rounded-[12px] transition-all duration-200 ${
                      currentPage === totalPages
                        ? 'cursor-not-allowed border border-[#e2e8f0] bg-[#f5f5f5] text-[#cbd5e1]'
                        : 'cursor-pointer border border-[#022859] bg-[#f5f5f5] text-[#022859] hover:!bg-[#022859] hover:!border-[#022859]'
                    }`}
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      borderRadius: '12px',
                      backgroundColor: '#f5f5f5',
                    }}
                  >
                    <ArrowRight
                      size={18}
                      className={`transition-colors duration-200 ${
                        currentPage === totalPages ? 'text-[#cbd5e1]' : 'text-[#022859] group-hover:!text-white'
                      }`}
                    />
                  </button>
                </div>
              </div>
            ) : (
              <div className="w-full py-16 px-6 bg-slate-50 border border-slate-200 rounded-[12px] flex flex-col items-center justify-center text-center">
                <p className="text-[16px] font-bold text-[#022859] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Tidak ada program pelatihan yang sesuai
                </p>
                <p className="text-[13px] text-slate-500 mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  Coba ubah atau reset filter kategori, metode, atau lokasi untuk melihat program lainnya.
                </p>
                <button
                  type="button"
                  onClick={handleResetFilter}
                  className="px-4 py-2 bg-[#022859] text-white hover:bg-[#1CD690] hover:text-[#022859] text-[13px] font-bold rounded-[8px] transition-all"
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                >
                  Reset Semua Filter
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
