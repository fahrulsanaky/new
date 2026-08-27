import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import { StepIconProps } from '@mui/material/StepIcon';
import { CheckCircle2, Check } from 'lucide-react';

function CustomStepIcon(props: StepIconProps) {
  const { active, completed, icon } = props;

  return (
    <div
      className={`w-7 h-7 flex items-center justify-center rounded-[8px] text-[12px] leading-[18px] font-bold transition-all duration-200 ${
        completed || active
          ? 'bg-[#1CD690] text-[#022859] shadow-sm'
          : 'bg-white/20 text-white/90 border border-white/20'
      }`}
      style={{
        fontFamily: 'Poppins, sans-serif',
        fontSize: '12px',
        lineHeight: '18px',
      }}
    >
      {completed ? <Check className="w-4 h-4 stroke-[3]" /> : icon}
    </div>
  );
}

const steps = [
  {
    label: 'Ajukan Permohonan',
    description: `Isi form permohonan online dengan informasi awal kebutuhan pelatihan.`,
  },
  {
    label: 'Diskusi Kebutuhan',
    description: `Sesi konsultasi bersama tim kami untuk memetakan kebutuhan tim Anda.`,
  },
  {
    label: 'Penyusunan Proposal',
    description: `Kami menyusun proposal lengkap: kurikulum, jadwal, instruktur, dan biaya.`,
  },
  {
    label: 'Persetujuan',
    description: `Review dan finalisasi proposal, dilanjutkan penandatanganan kesepakatan.`,
  },
  {
    label: 'Pelaksanaan',
    description: `Program pelatihan dijalankan sesuai jadwal yang telah disepakati.`,
  },
  {
    label: 'Evaluasi',
    description: `Laporan hasil, sertifikat peserta, dan rekomendasi tindak lanjut.`,
  },
];

export default function PengajuanSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    namaLengkap: '',
    namaInstansi: '',
    email: '',
    noWhatsapp: '',
    jumlahPeserta: '',
    bidangPelatihan: '',
    catatanKebutuhan: '',
  });

  const handleStepClick = (stepIndex: number) => {
    setActiveStep(stepIndex);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="pengajuanSection" className="w-full h-auto bg-white">
      <div className="w-full h-auto flex flex-col lg:flex-row">
        {/* BAGIAN KIRI (Left Panel: 35% Lebar, Padding 32px) */}
        <div
          id="inhouse-prosedur-left-panel"
          className="w-full lg:w-[35%] h-auto bg-[#022859] px-[32px] py-[32px] flex flex-col justify-start text-left shrink-0"
        >
          <span
            id="inhouse-prosedur-badge"
            className="text-[#1CD690] font-bold text-[12px] leading-[19.5px] tracking-wider uppercase mb-[4px] inline-block"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '12px',
              lineHeight: '19.5px',
            }}
          >
            PROSEDUR DAN FORM
          </span>
          <h2
            id="inhouse-prosedur-title"
            className="text-[26px] sm:text-[32px] font-bold text-white leading-[34px] sm:leading-[40px] tracking-tight mb-[8px]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Alur Kerja Sama In-House Training
          </h2>
          <p
            id="inhouse-prosedur-subtitle"
            className="text-slate-300 text-[16px] leading-[24px] mt-0 mb-[12px]"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            Tahapan terstruktur untuk menyelenggarakan pelatihan yang efektif, terarah, dan memberikan hasil optimal bagi peningkatan kompetensi SDM di instansi Anda.
          </p>

          {/* Stepper Implementation */}
          <Box
            id="inhouse-prosedur-stepper-box"
            sx={{
              width: '100%',
              maxWidth: 480,
              '& .MuiStepLabel-root': {
                cursor: 'pointer',
                py: 0.5,
                userSelect: 'none',
                transition: 'opacity 0.2s',
                '&:hover': {
                  opacity: 0.9,
                },
              },
              '& .MuiStepLabel-label': {
                color: '#ffffff !important',
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '18px',
                fontFamily: 'Poppins, sans-serif',
                cursor: 'pointer',
              },
              '& .MuiStepLabel-label.Mui-active': {
                color: '#1CD690 !important',
                fontWeight: 700,
              },
              '& .MuiStepLabel-label.Mui-completed': {
                color: '#e2e8f0 !important',
              },
              '& .MuiStepIcon-root': {
                color: 'rgba(255, 255, 255, 0.25)',
                cursor: 'pointer',
                '&.Mui-active': {
                  color: '#1CD690',
                },
                '&.Mui-completed': {
                  color: '#1CD690',
                },
                '& .MuiStepIcon-text': {
                  fill: '#022859',
                  fontWeight: 700,
                },
              },
              '& .MuiStepConnector-line': {
                borderColor: 'rgba(255, 255, 255, 0.2)',
                minHeight: '20px',
              },
            }}
          >
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel
                    onClick={() => handleStepClick(index)}
                    slots={{ stepIcon: CustomStepIcon }}
                    optional={
                      index === steps.length - 1 ? (
                        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px' }}>
                          Last step
                        </Typography>
                      ) : null
                    }
                  >
                    {step.label}
                  </StepLabel>
                  <StepContent>
                    <Typography
                      sx={{
                        color: '#cbd5e1',
                        fontSize: '12px',
                        lineHeight: '18px',
                        fontFamily: 'Nunito, sans-serif',
                        mb: 1.5,
                      }}
                    >
                      {step.description}
                    </Typography>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </Box>
        </div>

        {/* BAGIAN KANAN (Right Panel: 65% Lebar, Padding 32px) */}
        <div
          id="inhouse-prosedur-right-panel"
          className="w-full lg:w-[65%] h-auto bg-[#ebfbfa] px-[32px] py-[32px] flex flex-col items-start justify-start text-left"
        >
          {/* Badge / Tag Form Permohonan */}
          <span
            id="inhouse-prosedur-form-badge"
            className="text-[#059669] font-bold text-[12px] leading-[19.5px] tracking-wider uppercase mb-[4px] inline-block"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '12px',
              lineHeight: '19.5px',
            }}
          >
            FORM PERMOHONAN
          </span>

          {/* Judul */}
          <h2
            id="inhouse-prosedur-form-title"
            className="text-[26px] sm:text-[32px] font-bold text-[#022859] leading-[34px] sm:leading-[40px] tracking-tight mb-[8px]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Pengajuan In-House Training
          </h2>

          {/* Paragraf */}
          <p
            id="inhouse-prosedur-form-description"
            className="text-slate-600 text-[15px] sm:text-[16px] leading-[24px] max-w-xl mb-[12px]"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            Lengkapi data di bawah ini untuk mengajukan program pelatihan khusus sesuai kebutuhan spesifik instansi atau perusahaan Anda. Tim kami akan segera meninjau dan menghubungi Anda kembali.
          </p>

          {/* Form Card Sesuai Desain Gambar */}
          <div
            id="inhouse-prosedur-form-card"
            className="w-full max-w-2xl bg-white rounded-[12px] px-[24px] py-[32px] shadow-xl shadow-[#022859]/10 border border-white/60 mx-auto"
          >
            {isSubmitted ? (
              <div
                id="inhouse-prosedur-form-success"
                className="py-10 px-4 text-center flex flex-col items-center justify-center animate-fadeIn"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  <CheckCircle2 size={36} />
                </div>
                <h3
                  className="text-[22px] font-bold text-[#022859] mb-2"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Permohonan Berhasil Dikirim!
                </h3>
                <p
                  className="text-slate-600 text-[14px] max-w-md mb-6 leading-relaxed"
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                >
                  Terima kasih, <strong>{formData.namaLengkap || 'Bapak/Ibu'}</strong>. Tim konsultan kami akan segera menghubungi Anda melalui WhatsApp di nomor <strong>{formData.noWhatsapp || '-'}</strong>.
                </p>
                <button
                  type="button"
                  id="inhouse-prosedur-btn-reset"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      namaLengkap: '',
                      namaInstansi: '',
                      email: '',
                      noWhatsapp: '',
                      jumlahPeserta: '',
                      bidangPelatihan: '',
                      catatanKebutuhan: '',
                    });
                  }}
                  className="px-6 py-2.5 bg-[#022859] text-white text-[14px] font-semibold rounded-[12px] hover:bg-[#022859]/90 transition-colors"
                >
                  Kirim Permohonan Lain
                </button>
              </div>
            ) : (
              <form
                id="inhouse-prosedur-actual-form"
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-5"
              >
                {/* Baris 1: Nama Lengkap & Nama Instansi */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1.5 text-left">
                    <label
                      htmlFor="form-nama-lengkap"
                      className="block text-[14px] font-bold text-[#022859]"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      Nama lengkap <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="form-nama-lengkap"
                      name="namaLengkap"
                      required
                      value={formData.namaLengkap}
                      onChange={handleInputChange}
                      placeholder="Nama Anda"
                      className="w-full h-[48px] px-4 rounded-[12px] border border-slate-200 bg-white text-[14px] text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-0 focus:shadow-none focus:border-[#022859] transition-all"
                      style={{ fontFamily: 'Nunito, sans-serif' }}
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label
                      htmlFor="form-nama-instansi"
                      className="block text-[14px] font-bold text-[#022859]"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      Nama instansi <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="form-nama-instansi"
                      name="namaInstansi"
                      required
                      value={formData.namaInstansi}
                      onChange={handleInputChange}
                      placeholder="Perusahaan / Lembaga"
                      className="w-full h-[48px] px-4 rounded-[12px] border border-slate-200 bg-white text-[14px] text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-0 focus:shadow-none focus:border-[#022859] transition-all"
                      style={{ fontFamily: 'Nunito, sans-serif' }}
                    />
                  </div>
                </div>

                {/* Baris 2: Email & No. WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1.5 text-left">
                    <label
                      htmlFor="form-email"
                      className="block text-[14px] font-bold text-[#022859]"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="form-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="email@instansi.id"
                      className="w-full h-[48px] px-4 rounded-[12px] border border-slate-200 bg-white text-[14px] text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-0 focus:shadow-none focus:border-[#022859] transition-all"
                      style={{ fontFamily: 'Nunito, sans-serif' }}
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label
                      htmlFor="form-whatsapp"
                      className="block text-[14px] font-bold text-[#022859]"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      No. WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="form-whatsapp"
                      name="noWhatsapp"
                      required
                      value={formData.noWhatsapp}
                      onChange={handleInputChange}
                      placeholder="08xxxxxxxxxx"
                      className="w-full h-[48px] px-4 rounded-[12px] border border-slate-200 bg-white text-[14px] text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-0 focus:shadow-none focus:border-[#022859] transition-all"
                      style={{ fontFamily: 'Nunito, sans-serif' }}
                    />
                  </div>
                </div>

                {/* Baris 3: Jumlah Peserta */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1.5 text-left">
                    <label
                      htmlFor="form-jumlah-peserta"
                      className="block text-[14px] font-bold text-[#022859]"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      Jumlah peserta
                    </label>
                    <input
                      type="text"
                      id="form-jumlah-peserta"
                      name="jumlahPeserta"
                      value={formData.jumlahPeserta}
                      onChange={handleInputChange}
                      placeholder="mis. 25"
                      className="w-full h-[48px] px-4 rounded-[12px] border border-slate-200 bg-white text-[14px] text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-0 focus:shadow-none focus:border-[#022859] transition-all"
                      style={{ fontFamily: 'Nunito, sans-serif' }}
                    />
                  </div>
                </div>

                {/* Baris 4: Catatan Kebutuhan */}
                <div className="space-y-1.5 text-left">
                  <label
                    htmlFor="form-catatan-kebutuhan"
                    className="block text-[14px] font-bold text-[#022859]"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Catatan kebutuhan
                  </label>
                  <textarea
                    id="form-catatan-kebutuhan"
                    name="catatanKebutuhan"
                    rows={4}
                    value={formData.catatanKebutuhan}
                    onChange={handleInputChange}
                    placeholder="Ceritakan detail kebutuhan pelatihan, target waktu, dan lokasi pelaksanaan..."
                    className="w-full p-4 rounded-[12px] border border-slate-200 bg-white text-[14px] text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-0 focus:shadow-none focus:border-[#022859] transition-all resize-none"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  />
                </div>

                {/* Tombol Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    id="inhouse-prosedur-btn-submit"
                    className="w-full h-[52px] bg-[#022859] text-white font-bold text-[15px] sm:text-[16px] rounded-[12px] border border-[#022859] flex items-center justify-center transition-all duration-200 cursor-pointer hover:bg-white hover:text-[#022859] hover:-translate-y-0.5 hover:shadow-[0px_4px_12px_rgba(2,40,89,0.15)] active:translate-y-0"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    <span>Kirim permohonan</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
