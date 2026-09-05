export interface NarasumberItem {
  nama: string;
  jabatan: string;
  foto?: string;
}

export interface MateriSesiItem {
  sesi: string;
  topik: string[];
}

export interface MateriPelatihanItem {
  hari1: MateriSesiItem[];
  hari2: MateriSesiItem[];
}

export interface HargaItem {
  offline: string;
  online: string;
  display?: string;
}

export interface DataPelatihanItem {
  id: string | number;
  title: string;
  image: string;
  kategori: string;
  lokasi: string;
  metode: string;
  harga: HargaItem;
  narasumber: NarasumberItem | NarasumberItem[];
  deskripsi: string;
  tujuanManfaat: string[];
  materiPelatihan: MateriPelatihanItem;

  // Aliases for compatibility
  judulPelatihan?: string;
  gambarPelatihan?: string;
  tujuan?: {
    tujuanUtama?: string[];
    manfaat?: string[];
  };
  materi?: MateriPelatihanItem;
  kategoriId?: string;
  lokasiId?: string;
  kelas?: {
    offline: boolean;
    online: boolean;
    label: string;
  };
}

export const dataPelatihan: DataPelatihanItem[] = [
  {
    id: '1',
    title: 'Pelatihan Perpajakan Terapan Brevet A & B Integrated',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    kategori: 'Keuangan & Perpajakan',
    lokasi: 'Jakarta',
    metode: 'Offline dan Online',
    harga: {
      offline: 'Rp 3.500.000',
      online: 'Rp 2.500.000',
    },
    narasumber: {
      nama: 'Dr. Hendra Wijaya, S.E., Ak., M.Ak., CA, BKP',
      jabatan: 'Praktisi Konsultan Pajak Senior & Asesor Perpajakan Nasional',
    },
    deskripsi: 'Program pelatihan komprehensif yang dirancang untuk membekali profesional dengan pemahaman regulasi perpajakan Indonesia terbaru (Harmonisasi Peraturan Perpajakan/UU HPP), teknik perhitungan PPh Badan & Orang Pribadi, PPN & PPnBM, serta implementasi e-Faktur dan e-Bupot secara praktis.',
    tujuanManfaat: [
      'Memahami ketentuan umum tata cara perpajakan (KUP) dan peraturan perundangan perpajakan terkini.',
      'Mampu melakukan perhitungan, pemotongan, penyetoran, dan pelaporan SPT Masa serta SPT Tahunan PPh Orang Pribadi dan Badan.',
      'Menguasai mekanisme PPN, Faktur Pajak Elektronik, dan prosedur rekonsiliasi fiskal laporan keuangan.',
      'Meningkatkan akurasi penyusunan laporan keuangan komersial ke laporan keuangan fiskal.',
      'Menguasai strategi penanganan pemeriksaan pajak dan mitigasi risiko sengketa perpajakan.',
      'Meningkatkan kepatuhan perpajakan instansi/perusahaan untuk meminimalkan risiko sanksi dan denda pajak.',
      'Mendapatkan sertifikat resmi pelatihan Brevet Terapan yang diakui secara nasional.',
      'Mendapatkan modul studi kasus nyata, kertas kerja perhitungan Excel terintegrasi, dan konsultasi interaktif.',
    ],
    materiPelatihan: {
      hari1: [
        {
          sesi: '1. Konsep & Dasar Hukum SP2DK',
          topik: [
            'Definisi, fungsi, dan ruang lingkup SP2DK',
            'Dasar hukum: PER-02/PJ/2019 dan ketentuan pelaksanaannya',
            'Posisi SP2DK dalam siklus pengawasan dan kepatuhan DJP',
          ],
        },
        {
          sesi: '2. Sumber Data Pemicu SP2DK',
          topik: [
            'Data internal DJP: SPT, e-Faktur, e-Bupot, e-Meterai',
            'Data eksternal: perbankan, bea cukai, LKPM, OSS, dan laporan transaksi pihak ketiga',
            'Pola perbedaan data yang sering memuncangkan SP2DK',
          ],
        },
        {
          sesi: '3. Prosedur Administrasi dan Batas Waktu Penanganan SP2DK',
          topik: [
            'Proses pengiriman dan tindak lanjut SP2DK',
            'Hak dan kewajiban wajib pajak',
            'Tindakan lanjutan jika tidak ditanggapi',
          ],
        },
        {
          sesi: '4. Analisis Studi Kasus Nyata',
          topik: [
            'Kasus perbedaan omzet, setoran PPh, dan data pihak ketiga',
            'Simulasi audit internal untuk klarifikasi data',
          ],
        },
        {
          sesi: '5. Pengawasan Pajak di Era Coretax 3.0',
          topik: [
            'Transformasi digital DJP dan sistem integrasi data',
            'Profiling otomatis wajib pajak',
            'Implikasi Coretax terhadap potensi SP2DK dan pemeriksaan',
          ],
        },
      ],
      hari2: [
        {
          sesi: '1. Strategi Penyusunan Tanggapan SP2DK yang Efektif',
          topik: [
            'Format standar surat penjelasan dan dokumen pendukung rekonsiliasi',
            'Penyusunan kertas kerja sanggahan berbasis data valid',
            'Teknik komunikasi dan negosiasi administratif dengan Account Representative (AR)',
          ],
        },
        {
          sesi: '2. Mitigasi Risiko Eskalasi ke Pemeriksaan Bukti Permulaan',
          topik: [
            'Kriteria penerbitan Laporan Hasil Permintaan Penjelasan (LHP2DK)',
            'Prosedur pembetulan SPT dan pembayaran kekurangan pajak tanpa sanksi berlebih',
            'Simulasi penyelesaian studi kasus komprehensif penutupan SP2DK',
          ],
        },
      ],
    },
  },
  {
    id: '2',
    title: 'Strategi Manajerial Bisnis & Analisis Laporan Keuangan',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    kategori: 'Bisnis & Manajemen',
    lokasi: 'Bandung',
    metode: 'Offline dan Online',
    harga: {
      offline: 'Rp 2.800.000',
      online: 'Rp 1.950.000',
    },
    narasumber: {
      nama: 'Bambang Santoso, M.B.A., CMA, CFM',
      jabatan: 'Chief Financial Consultant & Executive Business Coach',
    },
    deskripsi: 'Program ini melatih para manajer dan eksekutif non-keuangan maupun keuangan untuk membaca, menginterpretasikan, dan menganalisis laporan keuangan perusahaan guna merumuskan strategi bisnis yang akurat dan berbasis data.',
    tujuanManfaat: [
      'Membaca dan membedah struktur Laporan Laba Rugi, Neraca, dan Arus Kas secara sistematis.',
      'Menganalisis rasio likuiditas, profitabilitas, solvabilitas, dan efisiensi operasional bisnis.',
      'Mampu menyusun keputusan strategis investasi, alokasi belanja modal (CAPEX), dan kontrol biaya.',
      'Meningkatkan kapabilitas forecasting performa keuangan jangka menengah dan panjang.',
      'Mengintegrasikan analisis keuangan ke dalam perencanaan strategis perusahaan.',
      'Mampu mendeteksi dini indikasi fraud, kebocoran biaya, atau potensi masalah arus kas.',
      'Meningkatkan ketajaman analisis dalam mengukur return on investment (ROI) proyek.',
      'Dilengkapi template financial dashboard analitik dan financial health check template.',
    ],
    materiPelatihan: {
      hari1: [
        {
          sesi: '1: Dasar Pembacaan dan Struktur Laporan Keuangan Modern',
          topik: [
            'Struktur Neraca Keuangan & Pengelolaan Modal Kerja Bersih',
            'Laporan Laba Rugi Komprehensif: Gross Margin, EBITDA, Net Margin',
            'Laporan Arus Kas (Cash Flow): Aktivitas Operasi, Investasi, Pendanaan',
          ],
        },
        {
          sesi: '2: Analisis Rasio Keuangan & Metrik Kinerja Bisnis',
          topik: [
            'DuPont Analysis untuk Dekomposisi Return on Equity (ROE)',
            'Working Capital Management & Cash Conversion Cycle (CCC)',
            'Break-Even Point (BEP) dan Cost-Volume-Profit (CVP) Analysis',
          ],
        },
      ],
      hari2: [
        {
          sesi: '3: Pengambilan Keputusan Investasi & Penganggaran Modal',
          topik: [
            'Evaluasi Kelayakan Proyek: NPV, IRR, Payback Period, Profitability Index',
            'Penyusunan Anggaran Operasional (OPEX) dan Anggaran Modal (CAPEX)',
            'Stress Testing & Analisis Sensitivitas Skenario Bisnis',
          ],
        },
        {
          sesi: '4: Studi Kasus Real-World & Penyusunan Dashboard Eksekutif',
          topik: [
            'Benchmarking Laporan Keuangan dengan Kompetitor Industri',
            'Identifikasi Financial Red Flags dan Indikator Peringatan Dini Kebangkrutan',
            'Presentasi Hasil Analisis Keuangan di Tingkat Dewan Direksi',
          ],
        },
      ],
    },
  },
  {
    id: '3',
    title: 'Cybersecurity Awareness & Data Protection Compliance',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    kategori: 'Teknologi Informasi (IT)',
    lokasi: 'Jakarta',
    metode: 'Offline dan Online',
    harga: {
      offline: 'Rp 2.200.000',
      online: 'Rp 1.500.000',
    },
    narasumber: {
      nama: 'Raditya Pratama, S.Kom., M.Cs., CISSP, CISA',
      jabatan: 'Cybersecurity Architect & Data Privacy Consultant',
    },
    deskripsi: 'Pelatihan ini memfokuskan pada pemahaman ancaman keamanan siber modern, mitigasi rekayasa sosial, manajemen risiko keamanan informasi sesuai ISO 27001, serta kepatuhan UU Perlindungan Data Pribadi (UU PDP).',
    tujuanManfaat: [
      'Mengenali vektor serangan siber modern seperti Phishing, Ransomware, Man-in-the-Middle, dan Social Engineering.',
      'Memahami kewajiban kepatuhan pengendali dan pemroses data berdasarkan UU PDP No. 27 Tahun 2022.',
      'Menerapkan protokol pengamanan data, password policy, autentikasi multi-faktor, dan insiden response plan.',
      'Membangun kerangka mitigasi kerentanan keamanan infrastruktur digital instansi.',
      'Menyusun Standard Operating Procedure (SOP) penanganan insiden kebocoran data.',
      'Melindungi aset digital dan reputasi organisasi dari risiko kebocoran data (data breach).',
      'Membangun budaya kesadaran keamanan informasi di setiap lini organisasi.',
      'Mendapatkan panduan checklist audit keamanan siber dan SOP mitigasi insiden.',
    ],
    materiPelatihan: {
      hari1: [
        {
          sesi: '1: Lanskap Ancaman Siber & Serangan Rekayasa Sosial',
          topik: [
            'Anatomi Serangan Siber: Malware, Ransomware, DDoS, dan Zero-Day Exploit',
            'Taktik Social Engineering: Spear Phishing, Vishing, Smishing, dan Impersonation',
            'Keamanan Perangkat Kerja (Endpoint Security) dan Regulasi BYOD',
          ],
        },
        {
          sesi: '2: Standar Keamanan Informasi ISO/IEC 27001:2022',
          topik: [
            'Prinsip Dasar Confidentiality, Integrity, dan Availability (CIA Triad)',
            'Kontrol Akses, Identity & Access Management (IAM), serta Enkripsi Data',
            'Manajemen Kerentanan dan Penilaian Risiko Keamanan Aset Informasi',
          ],
        },
      ],
      hari2: [
        {
          sesi: '3: Kepatuhan Regulasi UU Perlindungan Data Pribadi (UU PDP)',
          topik: [
            'Hak Subjek Data dan Kewajiban Pengendali/Pemroses Data Pribadi',
            'Data Protection Impact Assessment (DPIA) & Kebijakan Privasi',
            'Sanksi Hukum Pidana dan Denda Administratif Pelanggaran UU PDP',
          ],
        },
        {
          sesi: '4: Incident Response, Disaster Recovery & Simulasi Penanganan Insiden',
          topik: [
            'Penyusunan Prosedur Tanggap Darurat Insiden Siber (SOP Incident Response)',
            'Strategi Backup Data 3-2-1 dan Business Continuity Plan (BCP)',
            'Simulasi Tabletop: Langkah Penanganan Saat Terjadi Serangan Ransomware',
          ],
        },
      ],
    },
  },
  {
    id: '4',
    title: 'Hukum Kontrak Bisnis & Legal Drafting Professional',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    kategori: 'Hukum & Kepatuhan',
    lokasi: 'Yogyakarta',
    metode: 'Offline dan Online',
    harga: {
      offline: 'Rp 3.100.000',
      online: 'Rp 2.100.000',
    },
    narasumber: {
      nama: 'Prof. Dr. Faisal Hakim, S.H., M.H.',
      jabatan: 'Guru Besar Hukum Bisnis & Senior Partner Law Firm',
    },
    deskripsi: 'Program terstruktur untuk meningkatkan kemampuan praktis dalam menyusun, menelaah (review), dan menegosiasikan kontrak bisnis komersial sesuai hukum perikatan perdata Indonesia serta praktik bisnis internasional.',
    tujuanManfaat: [
      'Menguasai syarat sahnya perjanjian berdasarkan Pasal 1320 KUHPerdata.',
      'Mampu menyusun klausula-klausula krusial (Default, Force Majeure, Indemnity, Dispute Resolution).',
      'Mengidentifikasi celah hukum (legal loop holes) dan potensi risiko sengketa wanprestasi.',
      'Menyusun strategi perundingan kontrak untuk memperkuat posisi hukum perusahaan.',
      'Menguasai prosedur penyelesaian sengketa melalui arbitrase dan mediasi alternatif.',
      'Memastikan setiap perjanjian bisnis memiliki kekuatan eksekutorial yang kuat.',
      'Meningkatkan posisi tawar (bargaining power) dalam negosiasi kontrak kerja sama.',
      'Mendapatkan template draft kontrak bisnis siap pakai dan handbook legal drafting.',
    ],
    materiPelatihan: {
      hari1: [
        {
          sesi: '1: Anatomi dan Prinsip Pokok Perjanjian Bisnis',
          topik: [
            'Asas-Asas Hukum Kontrak: Kebebasan Berkontrak, Konsensualisme, Pacta Sunt Servanda',
            'Struktur Standar Kontrak: Komparisi, Premis, Batang Tubuh, dan Penutup',
            'Teknik Perumusan Definisi dan Ruang Lingkup Hak & Kewajiban Para Pihak',
          ],
        },
        {
          sesi: '2: Klausula Protektif dan Manajemen Risiko Kontrak',
          topik: [
            'Perumusan Klausula Wanprestasi (Default), Ganti Rugi, dan Pembatasan Tanggung Jawab',
            'Klausula Force Majeure & Hardship: Pembuktian dan Mitigasi Dampak',
            'Klausula Kerahasiaan (NDA), Hak Kekayaan Intelektual, dan Non-Compete',
          ],
        },
      ],
      hari2: [
        {
          sesi: '3: Teknik Contract Review dan Legal Audit Perjanjian',
          topik: [
            'Metodologi Redline Review dan Identifikasi Klausula Jebakan',
            'Harmonisasi Kontrak dengan Regulasi Sektoral Terkait',
            'Penyusunan Addendum, Amandemen, dan Side Letter Perjanjian',
          ],
        },
        {
          sesi: '4: Penyelesaian Sengketa Kontrak & Praktik Simulasi Drafting',
          topik: [
            'Pilihan Hukum (Choice of Law) & Pilihan Forum: Pengadilan vs Arbitrase (BANI/SIAC)',
            'Praktik Mandiri: Drafting Kontrak Kerja Sama Bisnis / Joint Venture',
            'Bedah Kasus Sengketa Wanprestasi dan Review Hasil Rancangan Peserta',
          ],
        },
      ],
    },
  },
  {
    id: '5',
    title: 'Sertifikasi Manajemen Lingkungan AMDAL & K3 Industri',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    kategori: 'Lingkungan & Sustainability',
    lokasi: 'Bandung',
    metode: 'Offline dan Online',
    harga: {
      offline: 'Rp 3.750.000',
      online: 'Rp 2.650.000',
    },
    narasumber: {
      nama: 'Ir. Dwi Kurniawan, M.T., CSP, QEP',
      jabatan: 'Lead Auditor ISO 14001 & Konsultan AMDAL Senior',
    },
    deskripsi: 'Pelatihan terpadu yang memadukan pengelolaan AMDAL/UKL-UPL, izin lingkungan terintegrasi OSS RBA, pengelolaan limbah B3, serta penerapan Sistem Manajemen Keselamatan dan Kesehatan Kerja (SMK3 & ISO 45001).',
    tujuanManfaat: [
      'Memahami tata laksana persetujuan lingkungan sesuai PP No. 22 Tahun 2021.',
      'Mampu menyusun dokumen RKL-RPL dan laporan kepatuhan lingkungan berkala.',
      'Menguasai identifikasi bahaya, penilaian risiko K3 (HIRADC), dan audit SMK3.',
      'Menguasai regulasi tata kelola limbah bahan berbahaya dan beracun (B3).',
      'Menerapkan sistem mitigasi tanggap darurat dan investigasi insiden kecelakaan kerja.',
      'Menghindarkan perusahaan dari sanksi administrasi dan penghentian izin operasional.',
      'Meningkatkan reputasi industri dalam penilaian PROPER Kementerian LHK.',
      'Mendapatkan format pelaporan SIMPEL KLHK dan form inspeksi K3 standar.',
    ],
    materiPelatihan: {
      hari1: [
        {
          sesi: '1: Kebijakan dan Regulasi Lingkungan Hidup Terbaru (PP 22/2021)',
          topik: [
            'Proses Penapisan Dokumen Lingkungan: AMDAL, UKL-UPL, dan SPPL via Amdalnet',
            'Penyusunan Rencana Pengelolaan Lingkungan (RKL) dan Rencana Pemantauan Lingkungan (RPL)',
            'Tata Kelola Persetujuan Teknis (Pertek) Baku Mutu Emisi dan Air Limbah',
          ],
        },
        {
          sesi: '2: Pengelolaan Limbah B3 dan Pengendalian Pencemaran Industri',
          topik: [
            'Identifikasi, Karakterisasi, dan Simbol/Label Limbah Bahan Berbahaya dan Beracun (B3)',
            'Penyimpanan, Pengangkutan (Manifest Elektronik Festronik), dan Pengolahan Limbah B3',
            'Pelaporan Kepatuhan Lingkungan secara Digital melalui Aplikasi SIMPEL KLHK',
          ],
        },
      ],
      hari2: [
        {
          sesi: '3: Sistem Manajemen K3 (SMK3 PP 50/2012 & ISO 45001:2018)',
          topik: [
            'Klausul Utama ISO 45001:2018 dan Integrasinya dengan ISO 14001:2015',
            'Penyusunan HIRADC (Hazard Identification, Risk Assessment, and Determining Controls)',
            'Sistem Tanggap Darurat, Investigasi Kecelakaan Kerja, dan Perhitungan Incident Rate',
          ],
        },
        {
          sesi: '4: Praktik Audit Lingkungan & K3 Lapangan',
          topik: [
            'Penyusunan Checklist Audit Lingkungan & K3',
            'Simulasi Audit Internal dan Perumusan Laporan Ketidaksesuaian (NCR)',
            'Penyusunan Rencana Tindak Lanjut Perbaikan Berkelanjutan (CAPA)',
          ],
        },
      ],
    },
  },
  {
    id: '6',
    title: 'Pengembangan Kepemimpinan & Manajemen SDM Unggul',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    kategori: 'Pendidikan & Pengembangan SDM',
    lokasi: 'Jakarta',
    metode: 'Offline dan Online',
    harga: {
      offline: 'Rp 2.500.000',
      online: 'Rp 1.750.000',
    },
    narasumber: {
      nama: 'Dra. Maya Anggraini, M.Psi., Psikolog, CHRP',
      jabatan: 'Senior HR Director & People Development Specialist',
    },
    deskripsi: 'Program komprehensif bagi manajer dan praktisi HR untuk membangun kepemimpinan transformasional, menyusun sistem KPI berbasis OKR, merancang competency framework, serta mengelola retensi talenta terbaik.',
    tujuanManfaat: [
      'Mengembangkan keterampilan kepemimpinan situasional, coaching, dan feedback konstruktif.',
      'Mampu merancang Key Performance Indicators (KPI) dan Objectives & Key Results (OKR).',
      'Menguasai metodologi Talent Mapping, 9-Box Matrix, dan Succession Planning.',
      'Membangun budaya komunikasi kolaboratif lintas generasi di tempat kerja.',
      'Merancang program retensi karyawan berbasis employee value proposition (EVP).',
      'Meningkatkan produktivitas tim dan engagement karyawan di lingkungan kerja.',
      'Mengurangi tingkat turnover karyawan kunci melalui retensi program strategis.',
      'Mendapatkan template kamus kompetensi, form evaluasi kinerja, dan roadmap suksesi.',
    ],
    materiPelatihan: {
      hari1: [
        {
          sesi: '1: Transformational Leadership & People Management',
          topik: [
            'Pergeseran Paradigma Kepemimpinan di Era Digital & Agile',
            'Model Kepemimpinan Situasional: Directing, Coaching, Supporting, Delegating',
            'Teknik Komunikasi Empatis, Resolusi Konflik, dan Negosiasi Internal',
          ],
        },
        {
          sesi: '2: Perancangan Model Kompetensi & Performance Management',
          topik: [
            'Penyusunan Kamus Kompetensi: Core, Leadership, dan Functional Competency',
            'Integrasi KPI Berimbang (Balanced Scorecard) dengan OKR Tim',
            'Teknik Pelaksanaan Performance Appraisal Review Tanpa Bias',
          ],
        },
      ],
      hari2: [
        {
          sesi: '3: Talent Acquisition, Mapping & Succession Planning',
          topik: [
            'Metode Behavioral Event Interview (BEI) dalam Rekrutmen',
            'Pemetaan Karyawan dengan Matriks 9-Box (Performance vs Potential)',
            'Penyusunan Individual Development Plan (IDP) dan Pipeline Suksesi',
          ],
        },
        {
          sesi: '4: Employee Engagement, Budaya Organisasi & Coaching Culture',
          topik: [
            'Penerapan Coaching GROW Model bagi Para Manajer',
            'Strategi Reward & Recognition untuk Retensi Top Talent',
            'Membangun Budaya Continuous Learning dan High Performance Work System',
          ],
        },
      ],
    },
  },
  {
    id: '7',
    title: 'Manajemen Keuangan Daerah & Penyusunan APBD Praktis',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80',
    kategori: 'Keuangan & Perpajakan',
    lokasi: 'Yogyakarta',
    metode: 'Offline dan Online',
    harga: {
      offline: 'Rp 3.200.000',
      online: 'Rp 2.250.000',
    },
    narasumber: {
      nama: 'Dr. Agus Wibowo, M.Si., Ak., CA',
      jabatan: 'Pakar Tata Kelola Keuangan Daerah & Asesor SIPD',
    },
    deskripsi: 'Program bimbingan teknis intensif mengenai regulasi pengelolaan keuangan daerah (PP No. 12/2019 & Permendagri No. 77/2020), penyusunan dokumen anggaran, serta akuntabilitas pertanggungjawaban APBD berbasis SIPD.',
    tujuanManfaat: [
      'Memahami siklus pengelolaan keuangan daerah dari perencanaan hingga pertanggungjawaban.',
      'Mampu menyusun RKA dan DPA SKPD yang selaras dengan indikator kinerja program RPJMD.',
      'Menguasai mekanisme penatausahaan kas, SPP, SPM, SP2D, dan akuntansi berbasis akrual.',
      'Memitigasi temuan berulang pada pemeriksaan laporan keuangan oleh BPK RI.',
      'Mengoptimalkan pemanfaatan Sistem Informasi Pemerintahan Daerah (SIPD).',
      'Mempercepat proses penyusunan dan pengesahan dokumen anggaran daerah.',
      'Meningkatkan opini WTP (Wajar Tanpa Pengecualian) dalam audit keuangan pemerintah.',
      'Mendapatkan template format RKA/DPA dan petunjuk teknis pengoperasian SIPD.',
    ],
    materiPelatihan: {
      hari1: [
        {
          sesi: '1: Kebijakan dan Regulasi Pengelolaan Keuangan Daerah',
          topik: [
            'Ketentuan PP No. 12 Tahun 2019 dan Permendagri No. 77 Tahun 2020',
            'Penyelarasan RKPD, KUA-PPAS dengan Program Prioritas Daerah',
            'Struktur APBD: Pendapatan Daerah, Belanja Daerah, dan Pembiayaan Daerah',
          ],
        },
        {
          sesi: '2: Praktik Penyusunan RKA dan DPA SKPD',
          topik: [
            'Penyusunan Kerangka Acuan Kerja (KAK) dan Rencana Anggaran Biaya (RAB)',
            'Standar Harga Satuan Regional (SHSR) dan Standar Biaya Masukan (SBM)',
            'Input Data Program Kegiatan ke dalam Aplikasi SIPD Republik Indonesia',
          ],
        },
      ],
      hari2: [
        {
          sesi: '3: Penatausahaan dan Pengelolaan Kas Daerah',
          topik: [
            'Prosedur Pengajuan SPP-LS, SPP-UP, SPP-GU, dan SPP-TU',
            'Penerbitan SPM dan Verifikasi Kelengkapan Dokumen oleh PPK-SKPD',
            'Pencairan Anggaran melalui SP2D Elektronik dan Pembukuan Kas',
          ],
        },
        {
          sesi: '4: Penyusunan Laporan Pertanggungjawaban (LPJ) & Antisipasi Audit BPK',
          topik: [
            'Penyusunan Laporan Realisasi Anggaran (LRA) dan Neraca Daerah',
            'Pencatatan Aset Tetap, Persediaan, dan Rekonsiliasi Kas Triwulanan',
            'Strategi Menghadapi Audit BPK dan Penyelesaian Tindak Lanjut Temuan',
          ],
        },
      ],
    },
  },
  {
    id: '8',
    title: 'Agile Project Management & Enterprise Scrum Leadership',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
    kategori: 'Bisnis & Manajemen',
    lokasi: 'Jakarta',
    metode: 'Offline dan Online',
    harga: {
      offline: 'Rp 2.900.000',
      online: 'Rp 1.900.000',
    },
    narasumber: {
      nama: 'Ir. Ferry Kurniawan, S.T., PMP, PMI-ACP, CSM',
      jabatan: 'Enterprise Agile Coach & Senior Project Director',
    },
    deskripsi: 'Pelatihan praktis penerapan kerangka kerja Scrum, Kanban, dan Lean Agile untuk mengelola siklus proyek yang dinamis, mempercepat time-to-market produk, dan meningkatkan kolaborasi lintas fungsi tim.',
    tujuanManfaat: [
      'Memahami nilai dan 12 prinsip Agile Manifesto secara mendalam.',
      'Mampu memfasilitasi Scrum Events (Sprint Planning, Daily Standup, Review, Retrospective).',
      'Menguasai teknik penyusunan User Stories, Product Backlog Refinement, dan Story Point Estimation.',
      'Menerapkan metrik Agile (Burndown Chart, Velocity, Cycle Time, Lead Time).',
      'Mengelola ekspektasi stakeholders dan dependensi proyek multiteam.',
      'Meningkatkan kecepatan adaptasi terhadap perubahan kebutuhan bisnis (agility).',
      'Menghilangkan bottleneck operasional melalui visualisasi Kanban workflow.',
      'Mendapatkan template Scrum Board (Jira/Trello) dan Agile Toolkit lengkap.',
    ],
    materiPelatihan: {
      hari1: [
        {
          sesi: '1: Fondasi Agile Mindset & Kerangka Kerja Scrum',
          topik: [
            'Perbedaan Model Tradisional Waterfall vs Kerangka Kerja Agile',
            'Scrum Roles & Accountabilities: Product Owner, Scrum Master, Developers',
            'Scrum Artifacts: Product Backlog, Sprint Backlog, Increment, dan Definition of Done',
          ],
        },
        {
          sesi: '2: User Story Mapping & Backlog Prioritization Techniques',
          topik: [
            'Teknik Penulisan User Stories dengan Kriteria INVEST dan Acceptance Criteria',
            'Metode Prioritas Backlog: MoSCoW, RICE Framework, dan Kano Model',
            'Simulasi Planning Poker dan Estimasi Kapasitas Tim (Story Points)',
          ],
        },
      ],
      hari2: [
        {
          sesi: '3: Eksekusi Sprint, Manajemen Risiko & Pelacakan Kinerja',
          topik: [
            'Daily Scrum yang Efektif dan Cara Mengatasi Impediments (Blockers)',
            'Pemanfaatan Burndown Chart dan Velocity Tracking untuk Prediktabilitas Rilis',
            'Penerapan Kanban Board, Work in Progress (WIP) Limits, dan Cumulative Flow',
          ],
        },
        {
          sesi: '4: Sprint Review, Retrospective & Scaling Agile di Organisasi',
          topik: [
            'Sprint Demo ke Stakeholder dan Pengumpulan Feedback Kritis',
            'Fasilitasi Sprint Retrospective yang Aksi-Oriented (Start/Stop/Continue)',
            'Pengenalan Scaling Agile Frameworks (Nexus, LeSS, SAFe) untuk Korporasi',
          ],
        },
      ],
    },
  },
  {
    id: '9',
    title: 'Mastering AI Tools for Digital Transformation & Analytics',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    kategori: 'Teknologi Informasi (IT)',
    lokasi: 'Bandung',
    metode: 'Offline dan Online',
    harga: {
      offline: 'Rp 2.700.000',
      online: 'Rp 1.800.000',
    },
    narasumber: {
      nama: 'Ari Prasetyo, S.T., M.Eng., AI Scientist',
      jabatan: 'Head of AI Solutions & Data Analytics Consultant',
    },
    deskripsi: 'Pelatihan hands-on untuk memaksimalkan implementasi Generative AI, Large Language Models (LLM), prompt engineering tingkat lanjut, dan automasi proses analitik bisnis untuk mendongkrak produktivitas kerja hingga 10x lipat.',
    tujuanManfaat: [
      'Menguasai teknik Advanced Prompt Engineering untuk berbagai skenario kerja profesional.',
      'Memanfaatkan AI untuk analisis data tabular, pembuatan laporan otomatis, dan visualisasi interaktif.',
      'Membangun alur automasi alur kerja (workflow automation) tanpa kode (No-Code AI Automation).',
      'Memahami etika, batasan keamanan data, dan mitigasi halusinasi AI dalam korporat.',
      'Menyusun roadmap transformasi digital berbasis AI di instansi masing-masing.',
      'Mengefisienkan waktu penyusunan riset, dokumen, presentasi, dan analisis data berulang.',
      'Meningkatkan kualitas keputusan bisnis melalui wawasan analitik berbasis AI.',
      'Mendapatkan kumpulan mega prompt template dan akses toolkit AI terkurasi.',
    ],
    materiPelatihan: {
      hari1: [
        {
          sesi: '1: Lanskap Generative AI & Advanced Prompt Engineering',
          topik: [
            'Arsitektur Fondasi LLM: Konteks Jendela, Tokenisasi, dan Parameter Kontrol',
            'Teknik Prompting Tingkat Lanjut: Few-Shot, Chain-of-Thought (CoT), dan Role-Task Framing',
            'Membuat Custom GPTs & Instruksi Sistem Khusus Bisnis',
          ],
        },
        {
          sesi: '2: AI untuk Analisis Data & Business Intelligence',
          topik: [
            'Eksplorasi Data Cepat dan Pembersihan Data Menggunakan AI Code Interpreter',
            'Otomatisasi Analisis Tren Penjualan, Keuangan, dan Kinerja Operasional',
            'Pembuatan Visualisasi Grafik dan Ringkasan Eksekutif Interaktif Berbasis AI',
          ],
        },
      ],
      hari2: [
        {
          sesi: '3: Automasi Alur Kerja AI & Integrasi No-Code Tools',
          topik: [
            'Koneksi AI dengan Google Workspace, Microsoft Office, dan CRM melalui Automasi',
            'Otomatisasi Ekstraksi Informasi dari Dokumen PDF, Invoice, dan Email Masuk',
            'Pembangunan AI Knowledge Base Organisasi dengan Retrieval Augmented Generation (RAG)',
          ],
        },
        {
          sesi: '4: Tata Kelola AI, Keamanan Data & Studi Kasus Implementasi',
          topik: [
            'Proteksi Kerahasiaan Informasi dan Kepatuhan Privasi Data Perusahaan',
            'Strategi Pengujian dan Validasi Hasil Output AI dari Halusinasi',
            'Presentasi Proyek Automasi Mandiri Peserta dan Review Solusi',
          ],
        },
      ],
    },
  },
  {
    id: '10',
    title: 'Tata Kelola Perusahaan & Corporate Governance Compliance',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    kategori: 'Hukum & Kepatuhan',
    lokasi: 'Jakarta',
    metode: 'Offline dan Online',
    harga: {
      offline: 'Rp 3.400.000',
      online: 'Rp 2.400.000',
    },
    narasumber: {
      nama: 'Dr. Surya Darmawan, S.H., LL.M., FCGRP',
      jabatan: 'Senior Governance Advisor & Komite Audit Korporat',
    },
    deskripsi: 'Program strategis dalam mengimplementasikan prinsip Good Corporate Governance (Tarif: Transparency, Accountability, Responsibility, Independency, Fairness) untuk memastikan kepatuhan regulasi dan meningkatkan nilai pemegang saham.',
    tujuanManfaat: [
      'Memahami kerangka regulasi GCG sesuai UU Perseroan Terbatas dan pedoman KNKG.',
      'Mampu memetakan peran serta fungsi RUPS, Dewan Komisaris, Direksi, dan Komite Audit.',
      'Menyusun Whistleblowing System (WBS), Pedoman Perilaku (Code of Conduct), dan Board Charter.',
      'Mengelola risiko hukum benturan kepentingan dan transaksi terafiliasi.',
      'Mempersiapkan penilaian dan asesmen maturitas GCG secara berkala.',
      'Memperkuat ketahanan organisasi terhadap risiko litigasi dan sanksi otoritas pasar modal.',
      'Meningkatkan kepercayaan investor, kreditur, dan mitra strategis.',
      'Mendapatkan panduan dokumen GCG lengkap (Board Manual, Piagam Audit, SOP WBS).',
    ],
    materiPelatihan: {
      hari1: [
        {
          sesi: '1: Landasan Prinsip Good Corporate Governance (GCG) Indonesia',
          topik: [
            'Evolusi dan Standar Regulasi GCG Nasional & Internasional (OECD Principles)',
            'Penerapan Prinsip TARIF dalam Setiap Kebijakan Operasional Perusahaan',
            'Hak Pemegang Saham, Tata Kelola RUPS Tahunan dan Luar Biasa',
          ],
        },
        {
          sesi: '2: Struktur, Fungsi & Hubungan Kerja Organ Utama Perusahaan',
          topik: [
            'Fiduciary Duties Direksi dan Supervisory Roles Dewan Komisaris',
            'Peran Strategis Sekretaris Perusahaan (Corporate Secretary) & Legal Counsel',
            'Optimalisasi Komite Audit, Komite Nominasi dan Remunerasi, serta Komite Risiko',
          ],
        },
      ],
      hari2: [
        {
          sesi: '3: Sistem Pengendalian Internal, Etika & Whistleblowing System',
          topik: [
            'Penyusunan Pedoman Tata Tertib Kerja dan Kode Etik Karyawan (Code of Conduct)',
            'Mekanisme Whistleblowing System (WBS): Proteksi Pelapor dan Investigasi Pelanggaran',
            'Penanganan Konflik Kepentingan, Gratifikasi, dan Kepatuhan Anti-Suap (ISO 37001)',
          ],
        },
        {
          sesi: '4: Metodologi Asesmen GCG & Penyusunan Laporan Tahunan Terintegrasi',
          topik: [
            'Metodologi Penilaian Mandiri (Self-Assessment) dan Asesmen Eksternal GCG',
            'Penyusunan Bab Tata Kelola pada Laporan Tahunan (Annual Report) Sesuai Standar OJK',
            'Studi Kasus Kegagalan Tata Kelola Korporat dan Langkah Pemulihannya',
          ],
        },
      ],
    },
  },
  {
    id: '11',
    title: 'Strategi Net-Zero Carbon & ESG Reporting for Enterprise',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80',
    kategori: 'Lingkungan & Sustainability',
    lokasi: 'Yogyakarta',
    metode: 'Offline dan Online',
    harga: {
      offline: 'Rp 2.600.000',
      online: 'Rp 1.750.000',
    },
    narasumber: {
      nama: 'Dr. Rina Maharani, S.Si., M.Sc., GRI Certified',
      jabatan: 'Sustainability Strategist & Lead ESG Auditor',
    },
    deskripsi: 'Pelatihan praktis penyusunan strategi dekarbonisasi, penghitungan jejak karbon (Scope 1, 2, 3), dan penyusunan Sustainability Report sesuai standar global GRI Standards serta Peraturan OJK No. 51/POJK.03/2017.',
    tujuanManfaat: [
      'Memahami kerangka kerja Environmental, Social, and Governance (ESG) terkini.',
      'Mampu menghitung emisi Gas Rumah Kaca (GRK) berdasarkan protokol GHG Protocol.',
      'Menyusun Laporan Keberlanjutan terstruktur sesuai GRI Standards dan POJK 51.',
      'Merumuskan peta jalan (roadmap) transisi energi dan dekarbonisasi Net-Zero.',
      'Mengintegrasikan risiko iklim (TCFD Framework) ke dalam mitigasi bisnis organisasi.',
      'Memenuhi kepatuhan pelaporan berkelanjutan wajib bagi lembaga jasa keuangan dan emiten.',
      'Membuka akses ke instrumen pendanaan hijau (Green Bonds/Sustainability Loans).',
      'Mendapatkan template kalkulator jejak karbon Excel dan formulir matriks materialitas GRI.',
    ],
    materiPelatihan: {
      hari1: [
        {
          sesi: '1: Ekosistem ESG & Standar Regulasi Keberlanjutan',
          topik: [
            'Urgensi Agenda Global: SDGs, Paris Agreement, dan Regulasi Taksonomi Hijau Indonesia',
            'Kewajiban POJK 51/2017 mengenai Penerapan Keuangan Berkelanjutan',
            'Analisis Materialitas: Mengidentifikasi Isu Keberlanjutan Krusial Organisasi',
          ],
        },
        {
          sesi: '2: Metodologi Penghitungan Jejak Karbon (GHG Accounting)',
          topik: [
            'Pengukuran Emisi Scope 1 (Emisi Langsung dari Bahan Bakar/Proses Pabrik)',
            'Pengukuran Emisi Scope 2 (Emisi Tidak Langsung dari Konsumsi Listrik Jaringan)',
            'Pengenalan Emisi Scope 3 (Rantai Pasok, Perjalanan Dinas, dan Logistik)',
          ],
        },
      ],
      hari2: [
        {
          sesi: '3: Praktik Penyusunan Sustainability Report Berdasarkan GRI Standards',
          topik: [
            'Struktur Standar GRI: Universal Standards, Sector Standards, Topic Standards',
            'Pengumpulan dan Verifikasi Data Metrik Kinerja Lingkungan, Sosial, dan Tata Kelola',
            'Penyusunan Narasi Dampak, Target Kinerja, dan Validasi Stakeholder Engagement',
          ],
        },
        {
          sesi: '4: Roadmap Dekarbonisasi & Persiapan Audit ESG Assurance',
          topik: [
            'Strategi Efisiensi Energi, Energi Terbarukan, dan Pembelian Sertifikat Karbon (REC/Carbon Credit)',
            'Kesiapan Menghadapi Audit Independen External Assurance (ISAE 3000/AA1000)',
            'Simulasi Penyusunan Draft Laporan Keberlanjutan Tim Peserta',
          ],
        },
      ],
    },
  },
  {
    id: '12',
    title: 'Train the Trainer & Instructional Design Competency',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    kategori: 'Pendidikan & Pengembangan SDM',
    lokasi: 'Bandung',
    metode: 'Offline dan Online',
    harga: {
      offline: 'Rp 3.000.000',
      online: 'Rp 2.000.000',
    },
    narasumber: [
      {
        nama: 'Dr. Teguh Haryono, M.Pd., Master Trainer BNSP',
        jabatan: 'Lead Asesor Instruktur Nasional & Kurikulum Spesialis',
      },
      {
        nama: 'Rini Sugiarti, M.Ed., CPC',
        jabatan: 'Master Instructional Designer & Executive Facilitator',
      },
    ],
    deskripsi: 'Program sertifikasi untuk mencetak instruktur profesional yang menguasai desain pembelajaran ADDIE, teknik fasilitasi andragogi interaktif, microteaching berstandar SKKNI, dan evaluasi efektivitas pelatihan Kirkpatrick Model.',
    tujuanManfaat: [
      'Menguasai prinsip pembelajaran orang dewasa (Andragogi) dan gaya belajar peserta.',
      'Mampu merancang modul pembelajaran dengan model ADDIE (Analyze, Design, Develop, Implement, Evaluate).',
      'Mengembangkan keterampilan public speaking, voice modulation, dan body language instruktur.',
      'Mampu mengelola dinamika kelas yang menantang dan interaksi peserta.',
      'Menyusun alat ukur evaluasi hasil belajar Level 1 hingga Level 4 Kirkpatrick.',
      'Mempersiapkan peserta untuk mengikuti sertifikasi resmi instruktur BNSP (Level 3/4).',
      'Meningkatkan daya serap dan antusiasme peserta dalam sesi inhouse training perusahaan.',
      'Mendapatkan template Lesson Plan, Rencana Sesi Pembelajaran, dan rubric microteaching.',
    ],
    materiPelatihan: {
      hari1: [
        {
          sesi: '1: Psikologi Pembelajaran Orang Dewasa & Analisis Kebutuhan Pelatihan',
          topik: [
            'Prinsip Andragogi vs Pedagogi dan Gaya Belajar VAK (Visual, Auditory, Kinesthetic)',
            'Metodologi Training Needs Analysis (TNA): Analisis Organisasi, Tugas, dan Individu',
            'Perumusan Tujuan Pembelajaran Berbasis Taksonomi Bloom (Kognitif, Afektif, Psikomotorik)',
          ],
        },
        {
          sesi: '2: Desain Instruksional & Pembuatan Materi Ajar Menarik',
          topik: [
            'Penyusunan Rencana Sesi Pelatihan (Lesson Plan) yang Sistematis',
            'Prinsip Visual Storytelling dan Desain Slide Presentasi Efektif',
            'Pengembangan Lembar Kerja Peserta, Studi Kasus, dan Aktivitas Ice Breaking',
          ],
        },
      ],
      hari2: [
        {
          sesi: '3: Seni Fasilitasi, Public Speaking & Manajemen Dinamika Kelas',
          topik: [
            'Teknik Pembukaan yang Memukau (The Hook) dan Penutupan Berkesan (The Call-to-Action)',
            'Penguasaan Bahasa Tubuh, Kontak Mata, Artikulasi, dan Intonasi Suara',
            'Teknik Bertanya Efektif dan Cara Menghadapi Tipe Peserta Pasif atau Dominan',
          ],
        },
        {
          sesi: '4: Praktik Microteaching, Feedback Komprehensif & Evaluasi Pelatihan',
          topik: [
            'Simulasi Microteaching Individual Peserta dengan Perekaman Video',
            'Sesi Peer Review dan Umpan Balik Kritis dari Master Trainer',
            'Perancangan Evaluasi 4 Level Kirkpatrick (Reaksi, Pembelajaran, Perilaku, Hasil Bisnis)',
          ],
        },
      ],
    },
  },
];

// Helper functions
export const getPelatihanById = (id: string | number): DataPelatihanItem => {
  const found = dataPelatihan.find((item) => String(item.id) === String(id));
  return found || dataPelatihan[0];
};

export const getPelatihanByKategori = (kategori: string): DataPelatihanItem[] => {
  if (!kategori || kategori.toLowerCase() === 'semua') return dataPelatihan;
  return dataPelatihan.filter((item) => item.kategori.toLowerCase() === kategori.toLowerCase());
};

export const getPelatihanByLokasi = (lokasi: string): DataPelatihanItem[] => {
  if (!lokasi || lokasi.toLowerCase() === 'semua') return dataPelatihan;
  return dataPelatihan.filter((item) => item.lokasi.toLowerCase() === lokasi.toLowerCase());
};
