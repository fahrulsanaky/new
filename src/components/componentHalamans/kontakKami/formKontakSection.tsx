import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function FormKontakSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    namaDepan: '',
    namaBelakang: '',
    email: '',
    noWhatsapp: '',
    subjek: '',
    pesan: '',
  });

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
    <section id="formKontak" className="w-full bg-[#1cd690] flex items-center justify-center py-16 px-[32px]">
      <div 
        id="form-kontak-container" 
        className="w-full max-w-7xl mx-0 px-[24px] flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12"
      >
        {/* Kolom Kiri: Lebar 35% */}
        <div 
          id="form-kontak-left-column"
          className="w-full lg:w-[35%] flex flex-col text-left shrink-0"
        >
          {/* 1 Judul */}
          <h2
            id="form-kontak-title"
            className="text-[32px] leading-[40px] font-bold text-[#022859] mb-4"
            style={{
              fontSize: '32px',
              lineHeight: '40px',
              fontFamily: 'Poppins, sans-serif',
              color: '#022859',
            }}
          >
            Hubungi Tim Konsultan Kami
          </h2>

          {/* 1 Paragraf */}
          <p
            id="form-kontak-paragraph"
            className="text-[16px] leading-[24px] text-[#022859]/90 font-normal"
            style={{
              fontSize: '16px',
              lineHeight: '24px',
              fontFamily: 'Nunito, sans-serif',
              color: '#022859',
            }}
          >
            Sampaikan pertanyaan, konsultasi rancangan program, atau kebutuhan pelatihan organisasi Anda. Tim representatif kami siap merespons dan membantu dengan solusi terbaik.
          </p>
        </div>

        {/* Kolom Kanan: Lebar 65% - 75% dengan Form Permohonan */}
        <div 
          id="form-kontak-right-column"
          className="w-full lg:w-[65%] xl:w-[65%] flex flex-col items-center lg:items-end"
        >
          <div
            id="form-kontak-card"
            className="w-full max-w-2xl bg-white rounded-[12px] py-6 sm:py-8 lg:py-9 px-[30px] shadow-xl shadow-[#022859]/10 border border-white/60"
          >
            {isSubmitted ? (
              <div
                id="form-kontak-success"
                className="py-10 px-4 text-center flex flex-col items-center justify-center animate-fadeIn"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  <CheckCircle2 size={36} />
                </div>
                <h3
                  className="text-[22px] font-bold text-[#022859] mb-2"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Pesan Berhasil Dikirim!
                </h3>
                <p
                  className="text-slate-600 text-[14px] max-w-md mb-6 leading-relaxed"
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                >
                  Terima kasih, <strong>{formData.namaDepan} {formData.namaBelakang}</strong>. Pesan Anda telah kami terima dan tim konsultan kami akan segera menghubungi Anda melalui nomor WhatsApp <strong>{formData.noWhatsapp || '-'}</strong> atau email <strong>{formData.email || '-'}</strong>.
                </p>
                <button
                  type="button"
                  id="form-kontak-btn-reset"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      namaDepan: '',
                      namaBelakang: '',
                      email: '',
                      noWhatsapp: '',
                      subjek: '',
                      pesan: '',
                    });
                  }}
                  className="px-6 py-2.5 bg-[#022859] text-white text-[14px] font-semibold rounded-[12px] hover:bg-[#022859]/90 transition-colors cursor-pointer"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form
                id="form-kontak-actual-form"
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-5"
              >
                {/* Baris 1: Nama Depan & Nama Belakang */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1.5 text-left">
                    <label
                      htmlFor="kontak-form-nama-depan"
                      className="block text-[14px] font-bold text-[#022859]"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      Nama depan <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="kontak-form-nama-depan"
                      name="namaDepan"
                      required
                      value={formData.namaDepan}
                      onChange={handleInputChange}
                      placeholder="Nama depan Anda"
                      className="w-full h-[48px] px-4 rounded-[12px] border border-slate-200 bg-white text-[14px] text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-0 focus:shadow-none focus:border-[#022859] transition-all"
                      style={{ fontFamily: 'Nunito, sans-serif' }}
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label
                      htmlFor="kontak-form-nama-belakang"
                      className="block text-[14px] font-bold text-[#022859]"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      Nama belakang <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="kontak-form-nama-belakang"
                      name="namaBelakang"
                      required
                      value={formData.namaBelakang}
                      onChange={handleInputChange}
                      placeholder="Nama belakang Anda"
                      className="w-full h-[48px] px-4 rounded-[12px] border border-slate-200 bg-white text-[14px] text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-0 focus:shadow-none focus:border-[#022859] transition-all"
                      style={{ fontFamily: 'Nunito, sans-serif' }}
                    />
                  </div>
                </div>

                {/* Baris 2: Email & No. Whatsapp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1.5 text-left">
                    <label
                      htmlFor="kontak-form-email"
                      className="block text-[14px] font-bold text-[#022859]"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="kontak-form-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="email@anda.id"
                      className="w-full h-[48px] px-4 rounded-[12px] border border-slate-200 bg-white text-[14px] text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-0 focus:shadow-none focus:border-[#022859] transition-all"
                      style={{ fontFamily: 'Nunito, sans-serif' }}
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label
                      htmlFor="kontak-form-no-whatsapp"
                      className="block text-[14px] font-bold text-[#022859]"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      No. Whatsapp <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="kontak-form-no-whatsapp"
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

                {/* Baris 3: Subjek (Lebar sama persis dengan field Email) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1.5 text-left">
                    <label
                      htmlFor="kontak-form-subjek"
                      className="block text-[14px] font-bold text-[#022859]"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      Subjek <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="kontak-form-subjek"
                      name="subjek"
                      required
                      value={formData.subjek}
                      onChange={handleInputChange}
                      placeholder="Subjek pertanyaan atau topik"
                      className="w-full h-[48px] px-4 rounded-[12px] border border-slate-200 bg-white text-[14px] text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-0 focus:shadow-none focus:border-[#022859] transition-all"
                      style={{ fontFamily: 'Nunito, sans-serif' }}
                    />
                  </div>
                </div>

                {/* Baris 4: Pesan */}
                <div className="space-y-1.5 text-left">
                  <label
                    htmlFor="kontak-form-pesan"
                    className="block text-[14px] font-bold text-[#022859]"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Pesan <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="kontak-form-pesan"
                    name="pesan"
                    required
                    rows={4}
                    value={formData.pesan}
                    onChange={handleInputChange}
                    placeholder="Tuliskan pesan lengkap atau pertanyaan Anda di sini..."
                    className="w-full p-4 rounded-[12px] border border-slate-200 bg-white text-[14px] text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-0 focus:shadow-none focus:border-[#022859] transition-all resize-none"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  />
                </div>

                {/* Tombol Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    id="kontak-form-btn-submit"
                    className="w-full h-[52px] bg-[#022859] text-white font-bold text-[15px] sm:text-[16px] rounded-[12px] border border-[#022859] flex items-center justify-center transition-all duration-200 cursor-pointer hover:bg-white hover:text-[#022859] hover:-translate-y-0.5 hover:shadow-[0px_4px_12px_rgba(2,40,89,0.15)] active:translate-y-0"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    <span>Kirim</span>
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

