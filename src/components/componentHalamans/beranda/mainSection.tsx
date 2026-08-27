import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MainSection() {
  const navigate = useNavigate();

  const gardenImg = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80";
  const sunsetPaddyImg = "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80";
  const youngCropsImg = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80";

  return (
    <section className="w-full h-auto bg-white flex items-center justify-center py-0 px-[48px]">
      <div className="w-full max-w-[1280px] m-0 px-[32px] py-[48px] flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Left Column: Text Content (35%) */}
        <div className="w-full lg:w-[35%] flex flex-col items-start justify-center shrink-0">
          {/* Badge Label */}
          <span 
            id="tentang-kami-solution-badge"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            className="text-[#1CD690] font-bold text-xs leading-relaxed tracking-wider uppercase inline-block mb-[4px]"
          >
            TENTANG KAMI
          </span>

          {/* Main Headline */}
          <h2 
            id="tentang-kami-main-heading"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            className="text-[32px] font-bold text-[#022859] leading-[40px] tracking-tight w-full mb-[8px]"
          >
            Belajar, Bertumbuh, dan Berkembang Bersama P3I
          </h2>

          {/* Description Paragraph */}
          <p 
            id="tentang-kami-description"
            style={{ fontFamily: 'Nunito, sans-serif' }}
            className="text-[16px] font-normal text-[#475569] leading-[24px] w-full border-[#022859] mb-[12px]"
          >
            P3I adalah lembaga pelatihan yang berfokus pada pengembangan kompetensi individu maupun organisasi. Setiap program dirancang dengan materi yang relevan, metode pembelajaran yang interaktif, dan pendampingan dari instruktur yang berpengalaman.
          </p>

          {/* Action Button */}
          <button
            id="tentang-kami-btn-other-solutions"
            type="button"
            onClick={() => navigate('/tentang-kami')}
            style={{ fontFamily: 'Nunito, sans-serif' }}
            className="inline-flex items-center justify-center px-[20px] py-[10px] rounded-[8px] bg-[#ffffff] border border-[#022859] text-[#022859] hover:bg-[#022859] hover:text-[#ffffff] hover:border-[#022859] hover:-translate-y-[2px] hover:shadow-[0px_4px_12px_rgba(2,40,89,0.15)] font-bold text-[15px] leading-[20px] no-underline transition-all duration-200 ease-in-out cursor-pointer shadow-sm"
          >
            Selengkapnya
          </button>
        </div>

        {/* Right Column: Multi-Image Gallery Layout (50%) */}
        <div className="w-full lg:w-[50%] grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-5 items-stretch">
          {/* Left tall image (Garden Gazebo Path) */}
          <div className="w-full h-[260px] sm:h-[340px] lg:h-[360px] rounded-[16px] overflow-hidden shadow-sm">
            <img
              src={gardenImg}
              alt="Lush botanical garden with gazebo"
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Right stacked images (Sunset Rice Paddy & Young Crops) */}
          <div className="flex flex-col gap-2 sm:gap-5 justify-between h-auto sm:h-[340px] lg:h-[360px]">
            <div className="w-full h-[120px] sm:h-[158px] lg:h-[168px] rounded-[16px] overflow-hidden shadow-sm">
              <img
                src={sunsetPaddyImg}
                alt="Farmers in rice fields at sunset"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="w-full h-[120px] sm:h-[158px] lg:h-[168px] rounded-[16px] overflow-hidden shadow-sm">
              <img
                src={youngCropsImg}
                alt="Young green crop sprouts in fertile soil"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
