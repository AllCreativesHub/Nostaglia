import React from 'react';
import { Sunset, Disc, Wine, Sparkles, Calendar, Clock, ChevronRight } from 'lucide-react';

interface NightlifeSectionProps {
  onOpenReservation: () => void;
}

export const NightlifeSection: React.FC<NightlifeSectionProps> = ({ onOpenReservation }) => {
  const events = [
    {
      id: 'golden-hour',
      icon: <Sunset className="w-6 h-6 text-[#D4AF37]" />,
      time: '12:00 PM – 7:00 PM Daily',
      title: 'Golden Hour Sunsets & Cocktails',
      description: 'Experience Lagos rooftop twilight. Enjoy 2-for-1 signature cocktails, chilled acoustic lounge music, and scenic views of Lekki lagoon.',
      badge: 'Daily Sunset Session',
      image: '/assets/hero_rooftop.png'
    },
    {
      id: 'dj-sessions',
      icon: <Disc className="w-6 h-6 text-[#D4AF37]" />,
      time: '9:00 PM – 3:00 AM (Fri–Sun)',
      title: 'Late-Night Vibes & DJ Sessions',
      description: 'When the night deepens, Nostalgia transforms into a high-energy lounge featuring curated Afrobeats, Amapiano, Neo-Soul & Afro-House.',
      badge: 'Weekend High Vibe',
      image: '/assets/cocktail_sip.png'
    },
    {
      id: 'vip-service',
      icon: <Wine className="w-6 h-6 text-[#D4AF37]" />,
      time: 'Available Upon Booking',
      title: 'Private Celebrations & VIP Bottle Service',
      description: 'Host your birthdays, anniversaries, or corporate soirées in our private VIP Velvet Lounge with dedicated hosts and bespoke culinary menus.',
      badge: 'Bespoke Experience',
      image: '/assets/lounge_vibes.png'
    }
  ];

  return (
    <section id="rooftop" className="py-24 bg-[#0A090B] relative overflow-hidden">
      {/* Background flare */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#532270]/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-eyebrow text-xs text-[#D4AF37] tracking-[0.25em] font-semibold uppercase block mb-2">
            Rooftop & Nightlife Rhythms
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif-title font-semibold text-[#F5EFE6]">
            Curated Experiences <span className="gold-gradient-text italic font-normal">Day to Night</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#A39A90] mt-3 leading-relaxed">
            From relaxed golden hour sunsets to late-night lounge DJ sets, Nostalgia Lagos adapts to your evening's mood.
          </p>
        </div>

        {/* 3 Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {events.map((evt) => (
            <div
              key={evt.id}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between border border-[#D4AF37]/20 group"
            >
              <div>
                {/* Image header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131118] via-transparent to-black/30" />
                  
                  <span className="absolute top-4 left-4 bg-[#0A090B]/80 backdrop-blur-md border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-eyebrow px-3 py-1 rounded-full uppercase">
                    {evt.badge}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-eyebrow text-[#D4AF37] mb-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{evt.time}</span>
                  </div>

                  <h3 className="font-serif-title text-2xl font-bold text-[#F5EFE6] mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {evt.title}
                  </h3>

                  <p className="text-xs text-[#A39A90] leading-relaxed">
                    {evt.description}
                  </p>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={onOpenReservation}
                  className="w-full py-3 rounded-xl bg-white/5 border border-[#D4AF37]/20 text-[#F5EFE6] font-syne text-xs uppercase tracking-wider hover:bg-[#D4AF37] hover:text-[#0A090B] transition-all flex items-center justify-center gap-2 group-hover:border-[#D4AF37]"
                >
                  <span>Book This Experience</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
