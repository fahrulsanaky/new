import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CtaInhouse() {
  const navigate = useNavigate();

  return (
    <section id="ctaInhouse" className="w-full h-auto bg-white py-[42px] px-4 sm:px-8 flex justify-center items-center">
      {/* Main Card Container */}
      <div 
        id="cta-inhouse-card"
        className="w-full max-w-5xl bg-[#1cd690] rounded-[24px] sm:rounded-[32px] border border-[#18be7f]/40 shadow-[0_10px_30px_rgba(28,214,144,0.15)] py-[42px] px-8 sm:px-12 flex flex-col items-center text-center"
      >
        {/* Main Heading with Highlight */}
        <h2
          id="cta-inhouse-heading"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-[#022859] leading-tight sm:leading-[1.25] tracking-tight max-w-2xl mb-4"
        >
          Ready To Get Started? <br className="hidden sm:inline" />
          <span className="relative inline-block z-0 mx-1">
            <span className="relative z-10">Let’s Talk</span>
            <span 
              className="absolute bottom-1 sm:bottom-1.5 left-0 right-0 h-3.5 sm:h-4 bg-white/40 -z-10 rounded-[2px]"
              aria-hidden="true"
            />
          </span>{' '}
          To Us Today
        </h2>

        {/* Description */}
        <p
          id="cta-inhouse-description"
          style={{ fontFamily: 'Nunito, sans-serif' }}
          className="text-sm sm:text-base text-[#022859]/90 font-medium leading-relaxed max-w-xl mb-8"
        >
          Konsultasikan kebutuhan pelatihan spesifik dan inhouse training untuk tim Anda. Kami siap merancang kurikulum terbaik yang tepat sasaran.
        </p>

        {/* Action Button */}
        <button
          id="btn-cta-inhouse-get-started"
          type="button"
          onClick={() => navigate('/inhouse-training')}
          style={{ fontFamily: 'Poppins, sans-serif' }}
          className="px-8 py-3.5 bg-[#022859] hover:bg-[#033675] text-white font-bold text-sm sm:text-base rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
        >
          Get Started
        </button>
      </div>
    </section>
  );
}

