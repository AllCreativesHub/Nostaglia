import React from 'react';
import { Calendar, Utensils, MapPin, Clock, Star, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image / Mood overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero_rooftop.png"
          alt="Nostalgia Lagos Rooftop Sunset"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-slow brightness-90"
        />
        {/* Obsidian Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A090B] via-[#0A090B]/60 to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#532270]/20 via-transparent to-transparent" />
      </div>

      {/* Atmospheric ambient lighting flare */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#131118]/80 border border-[#D4AF37]/30 backdrop-blur-md mb-6 animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="font-eyebrow text-[11px] text-[#D4AF37] tracking-[0.25em] font-semibold uppercase">
            Rooftop Resto-Lounge • Lekki Phase I
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif-title font-semibold tracking-tight text-[#F5EFE6] leading-[1.08] max-w-4xl mb-6">
          Where African Soul Meets <br className="hidden sm:inline" />
          <span className="gold-gradient-text italic font-normal">Mediterranean Elegance.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl font-light text-[#E8DFD1]/85 max-w-2xl leading-relaxed mb-10">
          Step above the city into an intimate world of nostalgic rhythms, curated fusion flavors, and unforgettable Lagos nights.
        </p>

        {/* Action Button Group */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12">
          {/* Primary CTA */}
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3D068] to-[#D4AF37] text-[#0A090B] font-syne font-bold text-xs uppercase tracking-[0.15em] hover:scale-[1.03] active:scale-98 shadow-xl shadow-[#D4AF37]/25 transition-all flex items-center justify-center gap-2 group"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Table</span>
          </button>

          {/* Secondary CTA */}
          <a
            href="#menu"
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#131118]/60 border border-[#D4AF37]/30 text-[#F5EFE6] hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/60 font-syne text-xs uppercase tracking-[0.15em] backdrop-blur-md transition-all flex items-center justify-center gap-2"
          >
            <Utensils className="w-4 h-4 text-[#D4AF37]" />
            <span>Explore Menu</span>
          </a>
        </div>

        {/* Trust Badge & Micro-Proof Bar */}
        <div className="w-full max-w-3xl glass-card rounded-2xl p-4 border border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#E8DFD1]/90">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>88 Hakeem Dickson Link Rd, Lekki Phase I, Lagos</span>
          </div>

          <div className="hidden sm:block w-[1px] h-4 bg-[#D4AF37]/30" />

          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>Tue–Sun: 12 PM – 3 AM</span>
          </div>

          <div className="hidden sm:block w-[1px] h-4 bg-[#D4AF37]/30" />

          <div className="flex items-center gap-1.5 text-[#D4AF37]">
            <div className="flex text-[#D4AF37]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="font-syne font-bold text-white">4.9</span>
            <span className="text-[#A39A90]">(500+ Reviews)</span>
          </div>
        </div>

      </div>
    </section>
  );
};
