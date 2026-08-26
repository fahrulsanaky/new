import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang Kami', path: '/tentang-kami' },
    { name: 'Pelatihan', path: '/program-pelatihan' },
    { name: 'Jadwal', path: '/jadwal' },
    { name: 'Inhouse Training', path: '/inhouse-training' },
    { name: 'Kontak Kami', path: '/kontak-kami' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full px-[32px] py-0 transition-all duration-300 ${
        isScrolled
          ? 'h-[70px] bg-[#022859]/90 backdrop-blur-md shadow-md'
          : 'h-[100px] bg-transparent'
      }`}
    >
      <div className="w-full h-full flex items-center justify-between">
          
          {/* Bagian Kiri: Judul / Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-sm shadow-indigo-600/30 group-hover:bg-indigo-500 transition-colors">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-[18px] font-bold tracking-tight text-white">
                Lembaga Pelatihan
              </span>
            </div>
          </Link>

          {/* Bagian Kanan: Link Navigasi Desktop */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 text-sm font-medium transition-all duration-200 inline-block hover:-translate-y-0.5 ${
                    isActive
                      ? 'text-[#1cd690] font-semibold'
                      : 'text-slate-100 hover:text-[#ffffff]'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Tombol Hamburger Mobile Menu */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

      {/* Menu Navigasi Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden px-4 py-3 space-y-1 shadow-xl rounded-b-xl animate-in fade-in duration-150 ${
            isScrolled
              ? 'bg-[#022859]/95 backdrop-blur-md'
              : 'border-t border-slate-700/50 bg-slate-900/95 backdrop-blur-md'
          }`}
        >
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 ${
                  isActive
                    ? 'text-[#1cd690] font-semibold'
                    : 'text-slate-200 hover:text-[#ffffff]'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}

