import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, Calendar, ChevronRight } from 'lucide-react';

interface HeaderProps {
  onOpenReservation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The Experience', href: '#experience' },
    { label: 'Menu Highlights', href: '#menu' },
    { label: 'Rooftop Lounge', href: '#rooftop' },
    { label: 'Social Vibes', href: '#gallery' },
    { label: 'Location & Hours', href: '#location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0A090B]/90 backdrop-blur-md py-4 border-b border-[#D4AF37]/15 shadow-xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center space-x-2 group">
          <div className="flex flex-col">
            <span className="font-serif-title text-2xl sm:text-3xl tracking-[0.18em] text-[#F5EFE6] group-hover:text-[#D4AF37] transition-colors uppercase font-bold">
              Nostalgia
            </span>
            <span className="font-eyebrow text-[9px] tracking-[0.3em] text-[#D4AF37] font-semibold uppercase -mt-1">
              Lagos • Rooftop
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-eyebrow text-[#E8DFD1]/80 hover:text-[#D4AF37] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center space-x-4">
          {/* WhatsApp Direct Concierge */}
          <a
            href="https://wa.me/2348000000000?text=Hello%20Nostalgia%20Lagos%20Concierge,%20I'd%20like%20to%20inquire%20about%20table%20reservations."
            target="_blank"
            rel="noreferrer"
            title="Direct WhatsApp Concierge"
            className="w-10 h-10 rounded-full border border-[#D4AF37]/30 bg-[#3A1950]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A090B] transition-all"
          >
            <MessageSquare className="w-4 h-4" />
          </a>

          {/* Reserve Table Primary Button */}
          <button
            onClick={onOpenReservation}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F3D068] text-[#0A090B] font-syne font-bold text-xs uppercase tracking-wider hover:shadow-lg hover:shadow-[#D4AF37]/25 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Reserve Table</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center space-x-3">
          <button
            onClick={onOpenReservation}
            className="px-3.5 py-1.5 rounded-full bg-[#D4AF37] text-[#0A090B] font-syne font-bold text-[11px] uppercase"
          >
            Reserve
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#F5EFE6] hover:text-[#D4AF37]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed inset-x-0 top-[72px] bg-[#0A090B]/98 border-b border-[#D4AF37]/20 p-6 shadow-2xl backdrop-blur-xl transition-all">
          <nav className="flex flex-col space-y-4 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-syne text-lg font-medium text-[#F5EFE6] hover:text-[#D4AF37] flex items-center justify-between py-2 border-b border-white/5"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F3D068] text-[#0A090B] font-syne font-bold text-xs uppercase tracking-wider text-center"
            >
              Reserve A Table
            </button>
            <a
              href="https://wa.me/2348000000000?text=Hello%20Nostalgia%20Lagos%20Concierge"
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] font-syne text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Concierge</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
