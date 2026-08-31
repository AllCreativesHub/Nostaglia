import React from 'react';
import { Music, Sunset, Wine, Flame, Sparkles } from 'lucide-react';

export const Experience: React.FC = () => {
  const highlights = [
    {
      icon: <Music className="w-5 h-5 text-[#D4AF37]" />,
      title: 'Curated Soul Soundtracks',
      desc: 'Vinyl turntables playing Afro-Jazz, Neo-Soul & smooth deep house to set the evening tone.',
    },
    {
      icon: <Sunset className="w-5 h-5 text-[#D4AF37]" />,
      title: 'Panoramic Rooftop Views',
      desc: 'Watch the Lagos golden hour sunset melt over the Lekki lagoon skyline.',
    },
    {
      icon: <Wine className="w-5 h-5 text-[#D4AF37]" />,
      title: 'Afro-Med Culinary Fusion',
      desc: 'West African bold spices harmonized with classic Mediterranean culinary finesse.',
    },
    {
      icon: <Flame className="w-5 h-5 text-[#D4AF37]" />,
      title: 'Artisanal Shisha & Spirits',
      desc: 'Premium fruit-infused shisha blends and bespoke craft cocktail pairings.',
    },
  ];

  return (
    <section id="experience" className="py-24 bg-[#0A090B] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#3A1950]/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Photo Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/25 shadow-2xl group">
              <img
                src="/assets/lounge_vibes.png"
                alt="Nostalgia Lagos Retro Interior Lounge"
                className="w-full h-[460px] sm:h-[540px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A090B] via-transparent to-transparent opacity-80" />

              {/* Floating Highlight Card */}
              <div className="absolute bottom-6 left-6 right-6 glass-card p-5 rounded-2xl border border-[#D4AF37]/30 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-syne font-semibold text-sm text-[#F5EFE6]">
                      The Retro-Chic Atmosphere
                    </h4>
                    <p className="text-xs text-[#A39A90]">
                      Deep plum velvet, warm amber sconces & timeless acoustic warmth.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent Frame Box */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-32 h-32 border-t-2 border-l-2 border-[#D4AF37]/40 rounded-tl-3xl pointer-events-none" />
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-[#D4AF37]/40 rounded-br-3xl pointer-events-none" />
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="font-eyebrow text-xs text-[#D4AF37] tracking-[0.25em] font-semibold block mb-3 uppercase">
                The Nostalgia Experience
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif-title font-semibold text-[#F5EFE6] leading-[1.15]">
                More Than Dining. <br />
                <span className="gold-gradient-text italic font-normal">A Whole Mood.</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#E8DFD1]/80 leading-relaxed font-light">
              Nostalgia Lagos was born from a desire to blend the soulful warmth of vintage West Africa with the relaxed luxury of Mediterranean rooftop dining. Elevated high above the bustle of Lekki Phase I, every corner is designed to ignite memory and conversation.
            </p>

            <p className="text-sm sm:text-base text-[#E8DFD1]/80 leading-relaxed font-light">
              Whether you are sipping a smoky Palm Wine Sour during sunset golden hour, indulging in our signature Jollof Arancini, or relaxing in our VIP Velvet Lounge under curated vinyl soundtracks, Nostalgia is where time slows down.
            </p>

            {/* 2x2 Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl bg-[#131118] border border-[#D4AF37]/15 hover:border-[#D4AF37]/40 transition-colors"
                >
                  <div className="mb-2">{item.icon}</div>
                  <h3 className="font-syne font-semibold text-sm text-[#F5EFE6] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#A39A90] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
