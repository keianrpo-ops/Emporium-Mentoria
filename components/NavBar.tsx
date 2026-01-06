import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Metodología', href: '#metodologia' },
    { name: 'Programa', href: '#programa' },
    { name: 'Inversión', href: '#inversion' },
  ];

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);

    if (elem) {
      setIsOpen(false);
      const headerOffset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-28">
          {/* Logo + título FENIXPRO */}
          <div
            className="flex items-center cursor-pointer group"
            onClick={(e) => handleScroll(e, '#inicio')}
          >
            <img
              src="/logo-mentoria.png"
              alt="Emporium Mentoria Logo"
              className="h-28 w-auto object-contain mr-4 drop-shadow-[0_0_20px_rgba(56,189,248,0.8)]"
            />
            <span className="text-xl font-black text-white tracking-wider hidden sm:block">
              FENNIX<span className="text-purple-500">PRO</span>
            </span>
          </div>

          {/* Links desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-slate-300 hover:text-white hover:shadow-[0_1px_0_0_rgba(255,255,255,0.5)] font-medium transition-all text-sm uppercase tracking-wide cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#inversion"
              onClick={(e) => handleScroll(e, '#inversion')}
              className="bg-white text-slate-950 px-6 py-2.5 rounded-full font-bold hover:bg-purple-50 transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)] cursor-pointer text-sm"
            >
              Agendar Cupo
            </a>
          </div>

          {/* Botón menú mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú mobile */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="block px-4 py-3 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
